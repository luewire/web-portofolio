import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TheMind = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const skillCategories = [
        {
            id: "01",
            title: "Languages / Tools",
            items: ["Python", "SQL", "TypeScript", "JavaScript", "C++", "Neon", "Git", "Neon", "Firebase"]
        },
        {
            id: "02",
            title: "Stack / Libraries",
            items: ["React", "Next.js", "Express.js", "Tanstack", "TailwindCSS"]
        },
        {
            id: "03",
            title: "Concepts / Theory",
            items: ["Data Structures", "Algorithms", "System Design", "OOP", "DBMS", "Operating Systems"]
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Header Reveal
            gsap.fromTo(".mind-header-item",
                { y: 100, opacity: 0, rotateX: -10 },
                {
                    scrollTrigger: {
                        trigger: ".mind-header-container",
                        start: "top 80%"
                    },
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    stagger: 0.1,
                    duration: 1.2,
                    ease: "power3.out"
                }
            );

            // Bio Reveal
            gsap.fromTo(".mind-bio-line",
                { y: 20, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".mind-bio-container",
                        start: "top 85%"
                    },
                    y: 0,
                    opacity: 1,
                    stagger: 0.05,
                    duration: 1,
                    ease: "power2.out"
                }
            );

            // Grid Items Reveal
            gsap.utils.toArray<HTMLElement>(".mind-grid-item").forEach((el, i) => {
                gsap.fromTo(el,
                    { y: 50, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: el,
                            start: "top 90%"
                        },
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: i * 0.1,
                        ease: "power3.out"
                    }
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full bg-[#050505] text-[#EAEAEA] border-t border-white/5 py-24 md:py-32 lg:py-40">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col gap-24 lg:gap-32">

                {/* Header & Bio Row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">

                    {/* Header */}
                    <div className="lg:col-span-7 mind-header-container flex flex-col">
                        <span className="mind-header-item font-mono text-xs text-[#666] uppercase tracking-[0.2em] mb-8 block">
                            (02) Identity
                        </span>
                        <div className="overflow-hidden">
                            <h2 className="mind-header-item text-[clamp(3.5rem,8vw,8.5rem)] leading-[0.85] font-black uppercase tracking-tighter text-[#EAEAEA]" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                                The Mind
                            </h2>
                        </div>
                        <div className="overflow-hidden">
                            <h2 className="mind-header-item text-[clamp(3.5rem,8vw,8.5rem)] leading-[0.85] font-black uppercase tracking-tighter text-[#444]" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                                Behind Code
                            </h2>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="lg:col-span-5 mind-bio-container pb-2">
                        <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-[#AAA]">
                            Highly dedicated web developer with experience in <span className="text-[#EAEAEA] font-medium border-b border-white/20">Frontend Development</span> and <span className="text-[#EAEAEA] font-medium border-b border-white/20">Web Design</span>.
                            I combine <span className="text-[#EAEAEA] font-medium">technical expertise</span> with <span className="text-[#EAEAEA] font-medium">strong design aesthetics</span> to create efficient, scalable, and user-friendly digital solutions.
                        </p>
                    </div>
                </div>

                {/* Skills Grid - Spec Sheet Layout */}
                <div className="flex flex-col border-t border-white/10 pt-12 md:pt-24 gap-12 lg:gap-16">
                    {skillCategories.map((cat, idx) => (
                        <div key={idx} className="mind-grid-item grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pb-12 border-b border-white/5 last:border-0 group">

                            {/* Category Header */}
                            <div className="md:col-span-4 flex flex-col justify-between">
                                <div className="flex items-center gap-4 mb-4 md:mb-0">
                                    <span className="font-mono text-xs text-[#444] group-hover:text-white transition-colors duration-300">
                                        /{cat.id}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-medium text-[#888] group-hover:text-[#EAEAEA] transition-colors duration-300">
                                        {cat.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Skills List with Rolling Text Effect */}
                            <div className="md:col-span-8">
                                <div className="flex flex-wrap gap-x-8 gap-y-2">
                                    {cat.items.map((item, i) => (
                                        <div key={i} className="relative overflow-hidden h-[32px] md:h-[40px] group/skill cursor-pointer">
                                            <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/skill:-translate-y-1/2">
                                                <span className="text-xl md:text-2xl font-medium text-[#555] group-hover/skill:text-[#EAEAEA] transition-colors duration-500 block leading-[32px] md:leading-[40px]">
                                                    {item}
                                                </span>
                                                <span className="text-xl md:text-2xl font-medium text-[#EAEAEA] block leading-[32px] md:leading-[40px]">
                                                    {item}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TheMind;
