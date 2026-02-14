import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            paused: true,
            onComplete: onComplete
        });

        const startPath = "M0 0 L100 0 L100 100 Q50 100 0 100 Z";
        const midPath = "M0 0 L100 0 L100 0 Q50 100 0 0 Z";
        const endPath = "M0 0 L100 0 L100 0 Q50 0 0 0 Z";

        gsap.set(pathRef.current, { attr: { d: startPath } });

        tl.to(pathRef.current, {
            duration: 0.8,
            ease: "power2.in",
            attr: { d: midPath },
            delay: 0.3
        });

        tl.to(pathRef.current, {
            duration: 0.6,
            ease: "power4.out",
            attr: { d: endPath }
        });

        // Wait for fonts to be ready before playing
        document.fonts.ready.then(() => {
            // Slight buffer to ensure layout is stable
            setTimeout(() => {
                tl.play();
            }, 100);
        });

        return () => {
            tl.kill();
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none flex flex-col justify-end">
            <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <path
                    ref={pathRef}
                    className="fill-[#EAEAEA]"
                    d="M0 0 L100 0 L100 100 Q50 100 0 100 Z"
                />
            </svg>
        </div>
    );
};

export default Preloader;
