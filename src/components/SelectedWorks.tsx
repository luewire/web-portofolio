import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

import imgKII from "../assets/projects/kampunginggrisindonesia.webp";
import imgFranky from "../assets/projects/franky.webp";
import imgkamartamu from "../assets/projects/kamartamu.webp";
import imglouis from "../assets/projects/thelouis.webp";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: 'Kampung Inggris Indonesia',
        desc: 'Website untuk promosi dan informasi bagi calon peserta yang ingin belajar bahasa Inggris intensif seperti di Pare, namun berlokasi di Jogja. Dibuat saat magang (PKL).',
        img: imgKII,
        url: 'https://kampunginggrisindonesia.com/',
        year: "2024",
    },
    {
        id: 2,
        title: 'Franky Website',
        desc: 'Terinspirasi dari blonded.co. Saat kelas 10, saya membuat redesign yang lebih modern dan interaktif untuk menunjukkan kemampuan frontend dan web design.',
        img: imgFranky,
        url: 'https://luewire.github.io/franky/landingpage.html',
        year: "2023",
    },
    {
        id: 3,
        title: 'Kamar Tamu',
        desc: 'Bagian dari tugas PKL dalam tim kecil: mengembangkan section untuk website Villa Kamar Tamu sesuai desain yang ditentukan.',
        img: imgkamartamu,
        url: 'https://github.com/Alfianrefinofebrian/kamartamu',
        year: "2024",
    },
    {
        id: 4,
        title: 'Game The Louis',
        desc: 'Proyek game pertama sebagai tugas akhir DPK D kelas 10 (tim). Mengadopsi pixel art dan genre defense ala Plants vs. Zombies.',
        img: imglouis,
        url: 'https://luewire.github.io/gamexpplg3-kelompok3/',
        year: "2023",
    },
];

const SelectedWorks = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card) => {
                if (!card) return;

                gsap.fromTo(card,
                    {
                        y: 100,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            end: "top 50%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full py-32 md:py-48 bg-[#050505] overflow-hidden min-h-screen">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col gap-20 md:gap-32">
                {/* Header */}
                <div className="flex flex-col gap-8 md:gap-12 md:pl-12 border-l border-white/10">
                    <h2 className="text-[clamp(3.5rem,9vw,10rem)] leading-[0.85] font-black uppercase tracking-tighter text-[#EAEAEA]">
                        Selected <br />
                        <span className="text-stroke hover:text-white transition-colors duration-500">Works</span>
                    </h2>
                    <p className="text-[#888] font-mono text-xs md:text-sm uppercase tracking-widest max-w-[fit-content]">
                        (2023 — Present)
                    </p>
                </div>

                {/* List of cards */}
                <div className="flex flex-col w-full gap-24 md:gap-40">
                    {projects.map((project, i) => (
                        <div
                            key={project.id}
                            ref={(el) => (cardsRef.current[i] = el)}
                            className={`flex flex-col md:flex-row gap-8 md:gap-16 w-full group ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Image Part */}
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full md:w-3/5 lg:w-2/3 relative block overflow-hidden rounded-lg"
                            >
                                <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                                    {/* Overlay - Reveal on Hover */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent z-10 transition-colors duration-500"></div>

                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out filter grayscale group-hover:grayscale-0 transition-all"
                                    />
                                </div>
                            </a>

                            {/* Content Part */}
                            <div className="w-full md:w-2/5 lg:w-1/3 flex flex-col justify-end pb-4 md:pb-12">
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-center gap-4 text-[#555] font-mono text-xs uppercase tracking-widest">
                                        <span>0{i + 1}</span>
                                        <span className="w-12 h-[1px] bg-[#333]"></span>
                                        <span>{project.year}</span>
                                    </div>

                                    <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tight text-[#EAEAEA] leading-[0.9]">
                                        {project.title}
                                    </h3>

                                    <p className="text-[#888] text-sm md:text-base leading-relaxed max-w-sm">
                                        {project.desc}
                                    </p>

                                    <div className="pt-8">
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-[#EAEAEA] border-b border-white/20 pb-1 hover:border-white transition-colors"
                                        >
                                            Live Project
                                            <ArrowUpRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SelectedWorks;
