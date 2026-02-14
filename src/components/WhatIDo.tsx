import { useRef, useState } from "react";


const services = [
    {
        id: "01",
        title: "Development",
        description: "Building scalable web applications with modern technologies. From frontend responsiveness to backend stability.",
        tags: ["React", "Node.js", "Tanstack"]
    },
    {
        id: "02",
        title: "UI/UX Design",
        description: "Crafting intuitive and engaging user experiences. Focusing on clarity, accessibility, and visual impact.",
        tags: ["Figma", "Prototyping", "Systems"]
    },
    {
        id: "03",
        title: "Consulting",
        description: "Providing technical strategy and architectural decisions for growing startups and businesses.",
        tags: ["Architecture", "Strategy", "Audit"]
    }
];

const WhatIDo = () => {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    return (
        <section className="w-full py-32 md:py-48 bg-[#050505] text-[#EAEAEA] px-6 md:px-12 lg:px-24">
            <div className="max-w-[1920px] mx-auto flex flex-col gap-24">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-8 border-b border-white/10">
                    <h2 className="text-[clamp(3rem,8vw,8rem)] leading-[0.9] font-black uppercase tracking-tighter text-[#EAEAEA]">
                        What <br /> I Do
                    </h2>
                    <p className="text-[#888] font-mono text-sm uppercase tracking-widest max-w-sm md:text-right">
                        Combining design and technology to built impactful digital products.
                    </p>
                </div>

                {/* Vertical List */}
                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative border-b border-white/10 transition-colors duration-500 hover:border-white/30"
                            onMouseEnter={() => setActiveIdx(index)}
                            onMouseLeave={() => setActiveIdx(null)}
                        >
                            <div className="py-12 md:py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-16">

                                {/* ID & Title */}
                                <div className="flex items-baseline gap-8 md:gap-16">
                                    <span className="font-mono text-sm text-[#444] group-hover:text-white transition-colors duration-300">
                                        /{service.id}
                                    </span>
                                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#333] group-hover:text-[#EAEAEA] transition-colors duration-500">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description & Tags - Reveal on Hover (Desktop) / Visible (Mobile) */}
                                <div className="md:max-w-md lg:max-w-xl flex flex-col gap-6 md:opacity-0 md:group-hover:opacity-100 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 ease-out">
                                    <p className="text-[#888] text-base md:text-lg leading-relaxed">
                                        {service.description}
                                    </p>
                                    <div className="flex gap-4">
                                        {service.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full border border-white/10 text-xs font-mono uppercase tracking-widest text-[#666]">
                                                {tag}
                                            </span>
                                        ))}
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

export default WhatIDo;