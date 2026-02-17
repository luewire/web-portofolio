import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "@studio-freight/react-lenis";
import { Instagram, Mail, Menu, Send, X } from "lucide-react";
import SelectedWorks from "@/components/SelectedWorks";
import WhatIDo from "@/components/WhatIDo";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import TheMind from "@/components/TheMind";
import PixelatedPhotoBackground from "@/components/PixelatedPhotoBackground";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
    const lenis = useLenis();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const mobileSocials = [
        { label: "Instagram", href: "https://instagram.com/ridozen", icon: Instagram },
        { label: "Email", href: "mailto:luewire@gmail.com", icon: Mail },
        { label: "Telegram", href: "https://t.me/luewire", icon: Send },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        e.preventDefault();
        setIsMenuOpen(false);
        // resume scroll immediately before scrolling
        lenis?.start();
        // slight delay to verify state update or just direct scroll
        lenis?.scrollTo(target);
    };

    useEffect(() => {
        if (isLoading || isMenuOpen) {
            lenis?.stop();
        } else {
            lenis?.start();
        }
    }, [isLoading, isMenuOpen, lenis]);

    useEffect(() => {
        if (isLoading) return; // Wait for preloader

        // Hero Text Reveal
        const timeline = gsap.timeline();

        timeline.fromTo(".hero-subtitle",
            { y: "100%", opacity: 0 },
            { y: "0%", opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.2 }
        );

        timeline.fromTo(".hero-title",
            { y: "110%", opacity: 0, rotateZ: 2 },
            { y: "0%", opacity: 1, rotateZ: 0, duration: 1.5, ease: "power4.out" },
            "-=1.3"
        );

        timeline.fromTo(".hero-desc",
            { opacity: 0, y: 30, filter: "blur(5px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.out" },
            "-=1.5"
        );

        timeline.fromTo(".hero-footer",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
            "-=0.8"
        );

        // Optional: Parallax for background number
        gsap.to(".bg-number-parallax", {
            scrollTrigger: {
                trigger: "header",
                start: "top top",
                end: "bottom top",
                scrub: 0.2
            },
            y: 200,
            opacity: 0
        });

    }, [isLoading]);

    return (
        <div className="min-h-screen bg-[#050505] text-[#EAEAEA] selection:bg-white selection:text-black overflow-x-hidden">

            {/* Preloader */}
            {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

            {/* Navbar (Minimal) */}
            <nav className="fixed top-0 left-0 w-full px-6 py-6 flex justify-between items-center z-[51] mix-blend-difference text-white">
                <div className="w-12 h-12 md:w-16 md:h-16 relative z-[60]">
                    <img
                        src="/images/logo/lofo.svg"
                        alt="Zuned Aalim Logo"
                        className="w-full h-full object-contain invert brightness-0 filter"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest text-neutral-400">
                    <a href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-white transition-colors cursor-pointer">Services</a>
                    <a href="#works" onClick={(e) => handleScroll(e, "#works")} className="hover:text-white transition-colors cursor-pointer">Works</a>
                    <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="hover:text-white transition-colors cursor-pointer">Contact</a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden relative z-[60] p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
                </button>
            </nav>

            {/* Full Screen Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-[#050505]/95 backdrop-blur-md z-50 px-6 pb-8 pt-28 flex flex-col justify-between transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-mono">Navigation</span>
                    <div className="mt-5 flex flex-col gap-4">
                        {['Services', 'Works', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => handleScroll(e, `#${item.toLowerCase()}`)}
                                className="text-4xl font-black uppercase tracking-tight text-[#EAEAEA] hover:text-white transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-mono">Connect</span>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                        {mobileSocials.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="h-20 rounded-xl border border-white/10 bg-black/30 flex flex-col items-center justify-center gap-2 text-white/90 hover:border-white/30 hover:bg-white/5 transition-colors"
                                >
                                    <Icon className="w-5 h-5" />
                                    <span className="text-[11px] uppercase tracking-widest font-mono">{social.label}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <header className="relative w-full h-screen overflow-hidden flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12 lg:px-24">
                <PixelatedPhotoBackground
                    src="/images/IMG_6355-removebg-preview.png"
                    className="z-0 opacity-80"
                />
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#050505]/70 via-[#050505]/45 to-[#050505]/85 pointer-events-none" />

                {/* Background Number/Graphic - Subtle Parallax */}
                <div className="absolute top-0 right-0 p-12 opacity-10 select-none z-[2] bg-number-parallax">
                    <span className="text-[clamp-number] font-black leading-none text-white/5">01</span>
                </div>

                {/* Main Content Grid */}
                <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-8 items-end">

                    {/* Title Area */}
                    <div className="md:col-span-9 flex flex-col justify-end">
                        <div className="overflow-hidden mb-4 md:mb-6">
                            <p className="hero-subtitle opacity-0 text-[#888] font-mono text-xs md:text-sm uppercase tracking-[0.2em] pl-1 translate-y-full">
                                Portofolio
                            </p>
                        </div>
                        <div className="overflow-hidden -ml-[0.05em]">
                            <h1 className="hero-title opacity-0 text-[#EAEAEA] normal-case translate-y-full" style={{ fontFamily: 'Satoshi, sans-serif', fontSize: 'clamp(60px, 12vw, 180px)', letterSpacing: '-0.06em', lineHeight: '1.0', fontWeight: '700' }}>
                                Luewire
                            </h1>
                        </div>
                    </div>

                    {/* Description Area */}
                    <div className="md:col-span-3 flex flex-col justify-end h-full pb-2 md:pb-4">
                        <div className="hero-desc opacity-0 p-4 border-l border-white/10 bg-white/5 backdrop-blur-sm rounded-r-lg">
                            <p className="text-[#888] text-xs md:text-sm font-light leading-relaxed">
                                Designing digital experiences with a focus on precision, motion, and clarity.
                                <span className="block mt-2 text-[#EAEAEA] font-medium">Available for freelance.</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer / Scroll Indicator */}
                <div className="hero-footer relative z-10 opacity-0 w-full flex justify-between items-end mt-12 border-t border-white/5 pt-6">
                    <div className="hidden md:flex gap-12">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-widest text-[#555]">Location</span>
                            <span className="text-xs text-[#ccc]">Indonesia, ID</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-widest text-[#555]">Role</span>
                            <span className="text-xs text-[#ccc]">Full-stack Developer</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-[#555] text-xs font-mono uppercase tracking-[0.2em] group cursor-pointer hover:text-white transition-colors"
                        onClick={(e) => handleScroll(e as any, "#services")}>
                        <span>Scroll</span>
                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                            <span className="animate-pulse">↓</span>
                        </div>
                    </div>
                </div>

            </header>



            {/* Sections */}
            <div id="services">
                <WhatIDo />
            </div>

            <div id="works">
                <SelectedWorks />
            </div>

            {/* The Mind (About + Skills) */}
            <div id="about">
                <TheMind />
            </div>

            <div id="contact">
                <Footer />
            </div>

        </div>
    );
};

export default Index;
