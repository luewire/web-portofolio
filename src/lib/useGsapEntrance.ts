"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type GsapEntranceOptions = {
  duration?: number;
  ease?: string;
  stagger?: number;
  start?: string;
};

export function useGsapEntrance<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: GsapEntranceOptions = {}
) {
  const {
    duration = 0.9,
    ease = "power3.out",
    stagger = 0.1,
    start = "top 80%",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const ctx = gsap.context(() => {
      const targets = Array.from(el.children);
      if (!targets.length) {
        return;
      }

      gsap.fromTo(
        targets,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration,
          ease,
          stagger,
          scrollTrigger: {
            trigger: el,
            start,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, [ref, duration, ease, stagger, start]);
}
