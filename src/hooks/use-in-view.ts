import { useEffect, useState } from "react";

export type UseInViewOptions = {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

export function useInView<T extends Element>(
  ref: React.RefObject<T>,
  { root = null, rootMargin = "0px 0px -10% 0px", threshold = 0.15, once = true }: UseInViewOptions = {}
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If already marked in view and once is true, skip observing
    if (inView && once) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setInView(false);
        }
      },
      { root: root as Element | null, rootMargin, threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [ref, root, rootMargin, threshold, once, inView]);

  return inView;
}
