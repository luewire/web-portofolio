import { useRef, useEffect } from "react";
import gsap from "gsap";

const skills = [
    "React", "Next.js", "TailwindCSS", "GSAP", "TypeScript", "Node.js",
    "UI/UX Design", "Figma", "Three.js", "WebGL", "PostgreSQL", "AWS"
];

const Footer = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const marqueeInnerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const marqueeInner = marqueeInnerRef.current;
        if (!marqueeInner) return;

        // Clone the content for infinite loop
        const content = marqueeInner.innerHTML;
        marqueeInner.innerHTML = content + content + content + content;

        gsap.to(marqueeInner, {
            x: "-50%",
            duration: 20,
            ease: "none",
            repeat: -1,
        });

    }, []);

    return (
        <footer className="relative w-full bg-[#EAEAEA] text-[#050505] pt-24 pb-12 overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem]">

            {/* Massive Typography */}
            <div className="flex flex-col items-center justify-center py-20 md:py-32 px-4 relative z-10">
                <h2 className="text-[clamp(5rem,15vw,16rem)] leading-[0.8] font-black uppercase tracking-tighter text-center">
                    Let's <br /> Talk
                </h2>

                <div className="mt-12 md:mt-20 flex flex-col items-center gap-8 md:gap-12">
                    <a
                        href="mailto:luewire@gmail.com"
                        className="relative text-2xl md:text-4xl font-mono uppercase tracking-widest text-[#050505] group"
                    >
                        luewire@gmail.com
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#050505] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>

                    <div className="flex flex-wrapjustify-center gap-8 md:gap-16">
                        {['LinkedIn', 'GitHub', 'Twitter'].map((link, i) => (
                            <a
                                key={i}
                                href={link === 'LinkedIn' ? 'https://www.linkedin.com/in/muhammad-ridho-zen-4665a22bb/' : link === 'GitHub' ? 'https://github.com/luewire' : 'https://twitter.com/luewire'}
                                className="text-sm md:text-base font-bold uppercase tracking-[0.2em] hover:text-[#555] transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Marquee - Clean & Technical */}
            <div className="w-full border-y border-[#050505]/10 bg-[#EAEAEA] overflow-hidden py-4 md:py-6 mt-12 md:mt-0">
                <div ref={marqueeRef} className="flex whitespace-nowrap overflow-hidden">
                    <div ref={marqueeInnerRef} className="flex gap-8 md:gap-16 text-lg md:text-xl font-mono uppercase tracking-widest text-[#050505]/40 select-none">
                        {skills.map((skill, i) => (
                            <span key={i} className="flex items-center gap-8 md:gap-16">
                                {skill}
                                <span className="w-2 h-2 rounded-full bg-[#050505]/20"></span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full text-center mt-12 md:mt-24 text-[10px] md:text-xs font-mono uppercase tracking-widest opacity-40">
                © {new Date().getFullYear()} Luewire — All Rights Reserved
            </div>

        </footer>
    );
};

export default Footer;
