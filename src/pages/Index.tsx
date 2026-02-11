import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MorphPreloader = ({ onComplete }: { onComplete: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-accent-new"
        >
            <motion.div
                initial={{
                    scale: 0,
                    borderRadius: "100%",
                    backgroundColor: "#F9F9FB"
                }}
                animate={{
                    scale: [0, 1.1, 1, 15],
                    borderRadius: ["100%", "40%", "20%", "0%"],
                }}
                transition={{
                    duration: 2.5,
                    times: [0, 0.4, 0.7, 1],
                    ease: [0.76, 0, 0.24, 1]
                }}
                onAnimationComplete={onComplete}
                className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center overflow-hidden"
            >
                {/* Subtle horizontal stroke representing the future headline */}
                <motion.div
                    layoutId="hero-title"
                    className="h-[1px] bg-accent-new w-12 md:w-20 rounded-full opacity-40"
                    transition={{
                        duration: 1.5,
                        ease: [0.76, 0, 0.24, 1]
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

const SectionWrapper = ({ children, id, className = "" }: { children: React.ReactNode, id?: string, className?: string }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className={className}
        >
            {children}
        </motion.section>
    );
};

const translations = {
    IDN: {
        nav: {
            about: 'Tentang',
            projects: 'Proyek',
            contact: 'Kontak'
        },
        hero: {
            subtitle: 'Pengembang Web yang menciptakan',
            subtitleHighlight: 'pengalaman digital',
            subtitleEnd: 'yang bermakna dengan presisi dan keanggunan.'
        },
        about: {
            title: 'TENTANG © SAYA',
            description: 'Pengembang web yang sangat berdedikasi dengan pengalaman dalam Frontend Development dan Web Design. Saya menggabungkan keahlian teknis dengan estetika desain yang kuat untuk menciptakan solusi digital yang efisien, skalabel, dan ramah pengguna.',
            stats: {
                experience: 'Tahun Pengalaman',
                projects: 'Proyek Selesai',
                support: 'Dukungan Tersedia'
            }
        },
        projects: {
            title: 'Karya Terpilih',
            description: 'Saya memiliki kesempatan untuk membantu individu mewujudkan visi kreatif mereka, mengubah ide menjadi produk nyata yang dapat membuat perbedaan.'
        },
        experience: {
            title: 'PENGALAMAN © SAYA',
            description: 'Menjadi pengembang produk itu luar biasa. Saya bisa membantu orang-orang menciptakan visi mereka dan mengembangkan kehadiran digital mereka.',
            roles: [
                { title: 'FRONTEND DEVELOPER INTERN', date: 'Jun 2025 – Okt 2025' },
                { title: 'UI/UX DESIGN INTERN', date: 'Jun 2025 – Okt 2025' },
                { title: 'GAME FRONTEND DEVELOPER', date: '2024' }
            ]
        },
        philosophy: {
            title: 'Filosofi',
            description: 'Saya menerapkan praktek digital craftsmanship — menggabungkan teknik pragmatis dengan desain yang berpusat pada manusia. Bagi saya, kode bukan hanya sekadar logika, melainkan media untuk menghadirkan emosi, performa, dan pengalaman yang bermakna.',
            traits: ['Ambisius', 'Pekerja Keras', 'Inovatif', 'Komunikatif'],
            quote: '"Kesederhanaan adalah kesempurnaan tertinggi."'
        },
        contact: {
            title: 'Mari ciptakan sesuatu',
            titleHighlight: 'yang luar biasa bersama.',
            availability: 'Tersedia untuk proyek & peluang',
            social: {
                linkedin: 'LinkedIn',
                github: 'GitHub',
                telegram: 'Telegram'
            }
        },
        footer: {
            copyright: '© 2025 Luewire — Hak Cipta Dilindungi',
            tagline: 'Dibuat dengan presisi & passion'
        }
    },
    ENG: {
        nav: {
            about: 'About',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            subtitle: 'Web Developer crafting purposeful',
            subtitleHighlight: 'digital experiences',
            subtitleEnd: 'with precision and elegance.'
        },
        about: {
            title: 'ABOUT © ME',
            description: 'Highly dedicated web developer with experience in Frontend Development and Web Design. I combine technical expertise with strong design aesthetics to create efficient, scalable, and user-friendly digital solutions.',
            stats: {
                experience: 'Years Experience',
                projects: 'Projects Completed',
                support: 'Support Available'
            }
        },
        projects: {
            title: 'Selected Works',
            description: 'I have the opportunity to help individuals bring their creative visions to life, turning ideas into tangible products that can make a difference.'
        },
        experience: {
            title: 'MY © EXPERIENCE',
            description: 'Being a product developer is incredible. I get to assist people in creating their visions and scaling their digital presence.',
            roles: [
                { title: 'FRONTEND DEVELOPER INTERN', date: 'Jun 2025 – Oct 2025' },
                { title: 'UI/UX DESIGN INTERN', date: 'Jun 2025 – Oct 2025' },
                { title: 'GAME FRONTEND DEVELOPER', date: '2024' }
            ]
        },
        philosophy: {
            title: 'Philosophy',
            description: 'I practice digital craftsmanship — combining pragmatic engineering with human-centered design. For me, code is not only logic, but a medium to deliver emotion, performance, and meaningful experiences.',
            traits: ['Ambitious', 'Hard Working', 'Innovative', 'Communicative'],
            quote: '"Simplicity is the ultimate sophistication."'
        },
        contact: {
            title: 'Let\'s create something',
            titleHighlight: 'remarkable together.',
            availability: 'Available for projects & opportunities',
            social: {
                linkedin: 'LinkedIn',
                github: 'GitHub',
                telegram: 'Telegram'
            }
        },
        footer: {
            copyright: '© 2025 Luewire — All Rights Reserved',
            tagline: 'Built with precision & passion'
        }
    }
};

const Index = () => {
    const [loading, setLoading] = useState(true);
    const [language, setLanguage] = useState<'IDN' | 'ENG'>('ENG');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const t = translations[language];

    return (
        <div className="antialiased selection:bg-accent-new selection:text-white bg-soft-gray">
            <AnimatePresence mode="wait">
                {loading && <MorphPreloader key="preloader" onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: loading ? 0 : 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <nav className="fixed top-0 left-0 w-full z-50 bg-soft-gray/80 backdrop-blur-md">
                    <div className="layout-container py-8 flex justify-between items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={!loading ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <img
                                src="/images/logo/logo.svg"
                                alt="Logo"
                                className="h-8 md:h-10 w-auto object-contain grayscale"
                            />
                        </motion.div>
                        <div className="flex items-center gap-6 md:gap-12">
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={!loading ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="hidden md:flex gap-12 text-sm tracking-widest uppercase"
                            >
                                <a className="text-link" href="#about">{t.nav.about}</a>
                                <a className="text-link" href="#projects">{t.nav.projects}</a>
                                <a className="text-link" href="#contact">{t.nav.contact}</a>
                            </motion.div>

                            {/* Language Switcher */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={!loading ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="text-[10px] font-sans tracking-[0.2em] font-medium text-gray-400 flex items-center"
                            >
                                <span
                                    onClick={() => setLanguage('IDN')}
                                    className={`cursor-pointer transition-colors ${language === 'IDN' ? 'text-accent-new' : 'hover:text-accent-new'}`}
                                >
                                    IDN
                                </span>
                                <span className="mx-1">|</span>
                                <span
                                    onClick={() => setLanguage('ENG')}
                                    className={`cursor-pointer transition-colors ${language === 'ENG' ? 'text-accent-new' : 'hover:text-accent-new'}`}
                                >
                                    ENG
                                </span>
                            </motion.div>

                            {/* Mobile Menu Toggle */}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={!loading ? { opacity: 1 } : {}}
                                className="md:hidden text-accent-new"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <span className="material-symbols-outlined text-3xl">
                                    {isMenuOpen ? 'close' : 'menu'}
                                </span>
                            </motion.button>
                        </div>

                        {/* Mobile Menu Overlay */}
                        <AnimatePresence>
                            {isMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="absolute top-full left-0 w-full bg-soft-gray border-b border-gray-100 md:hidden overflow-hidden"
                                >
                                    <div className="layout-container py-8 flex flex-col gap-6 text-sm tracking-widest uppercase font-medium">
                                        <a className="text-link" href="#about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a>
                                        <a className="text-link" href="#projects" onClick={() => setIsMenuOpen(false)}>{t.nav.projects}</a>
                                        <a className="text-link" href="#contact" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </nav>

                <section className="min-h-screen flex flex-col justify-center items-center text-center pt-20">
                    <div className="layout-container w-full">
                        <div className="max-w-4xl mx-auto space-y-8">
                            <motion.h1
                                layoutId="hero-title"
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={!loading ? { opacity: 1, filter: "blur(0px)" } : {}}
                                transition={{
                                    opacity: { duration: 1.2, ease: "easeOut" },
                                    filter: { duration: 1.5, ease: "easeOut" },
                                    layout: { duration: 1.8, ease: [0.76, 0, 0.24, 1] }
                                }}
                                className="text-5xl md:text-8xl lg:text-9xl leading-[1.1] tracking-tight text-accent-new font-serif px-4"
                            >
                                luewire
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={!loading ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.7, duration: 0.8 }}
                                className="text-xl md:text-2xl font-light text-gray-500 max-w-xl mx-auto leading-relaxed"
                            >
                                {t.hero.subtitle} <span className="italic font-serif text-accent-new">{t.hero.subtitleHighlight}</span> {t.hero.subtitleEnd}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={!loading ? { opacity: 1 } : {}}
                                transition={{ delay: 1, duration: 1 }}
                                className="pt-32"
                            >
                                <span className="material-symbols-outlined text-4xl animate-bounce font-light text-accent-new">expand_more</span>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <main className="space-y-24 md:space-y-48 pb-24">
                    <SectionWrapper id="about" className="">
                        <div className="layout-container space-y-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                <h2 className="text-4xl font-bold tracking-tighter font-sans uppercase text-accent-new">ABOUT © ME</h2>
                                <p className="text-xl leading-relaxed text-gray-900 font-medium">
                                    {t.about.description}
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.4 }}
                                    className="aspect-video overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                                >
                                    <img alt="Luewire Profile" className="w-full h-full object-cover" src="/images/photo.webp" />
                                </motion.div>
                                <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                                    {[
                                        { label: t.about.stats.experience, value: "3+" },
                                        { label: t.about.stats.projects, value: "31+" },
                                        { label: t.about.stats.support, value: "24/7" }
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 * i, duration: 0.5 }}
                                            className="space-y-1 md:space-y-2"
                                        >
                                            <p className="text-4xl md:text-5xl font-bold font-sans tracking-tighter text-accent-new">{stat.value}</p>
                                            <p className="text-[10px] md:text-sm text-gray-500 font-light uppercase tracking-wider leading-tight">{stat.label}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SectionWrapper>

                    <SectionWrapper id="projects" className="">
                        <div className="layout-container space-y-12">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                                <div className="flex items-center gap-2">
                                    <h2 className="text-xl font-bold tracking-tighter font-sans uppercase text-accent-new">Selected Works</h2>
                                    <span className="material-symbols-outlined text-sm font-bold text-accent-new">star</span>
                                </div>
                                <p className="max-w-md text-sm text-gray-500 font-light leading-relaxed">
                                    {t.projects.description}
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { title: "KAMPUNG INGGRIS INDONESIA", tags: "EDUCATION, WEB DESIGN", img: "/images/kampunginggrisindonesia-wrdB2fDa.webp", url: "https://kampunginggrisindonesia.com" },
                                    { title: "FRANKY WEBSITE", tags: "MUSIC, WEB DESIGN", img: "/images/franky-CaXXKedN.webp", url: "https://luewire.github.io/franky/landingpage.html" },
                                    { title: "KAMAR TAMU", tags: "HOSPITALITY, FRONTEND", img: "/images/kamartamu-D4HiwwYw.webp", url: "https://github.com/Alfianrefinofebrian/kamartamu" },
                                    { title: "GAME THE LOUIS", tags: "GAME DEV, PIXEL ART", img: "/images/thelouis-C02qwm2O.webp", url: "https://luewire.github.io/gamexpplg3-kelompok3/" }
                                ].map((project, i) => (
                                    <a key={i} href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.98 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 * i, duration: 0.6 }}
                                            className="group relative aspect-square bg-charcoal overflow-hidden rounded-sm cursor-pointer"
                                        >
                                            <img alt={project.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" src={project.img} />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                            <div className="absolute bottom-0 left-0 p-8 space-y-1">
                                                <h3 className="text-white font-sans text-xs font-bold tracking-[0.2em] uppercase leading-none">{project.title}</h3>
                                                <p className="text-white/50 font-sans text-[8px] tracking-[0.3em] uppercase leading-none">{project.tags}</p>
                                            </div>
                                        </motion.div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </SectionWrapper>

                    <SectionWrapper id="experience" className="">
                        <div className="layout-container space-y-20">
                            <div className="text-center space-y-4">
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-sans uppercase text-accent-new">MY © EXPERIENCE</h2>
                                <p className="text-gray-500 text-sm md:text-base font-light max-w-2xl mx-auto">
                                    Being a product developer is incredible. I get to assist people in creating their visions and scaling their digital presence.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative">
                                <div className="space-y-0 text-accent-new">
                                    {[
                                        { role: "FRONTEND DEVELOPER INTERN", period: "Jun 2025 – Oct 2025" },
                                        { role: "UI/UX DESIGN INTERN", period: "Jun 2025 – Oct 2025" },
                                        { role: "GAME FRONTEND DEVELOPER", period: "2024" }
                                    ].map((exp, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 * i, duration: 0.5 }}
                                            className="py-6 border-b border-gray-200 flex justify-between items-end"
                                        >
                                            <span className="text-sm font-bold uppercase tracking-tight">{exp.role}</span>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{exp.period}</p>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="flex justify-center items-center z-10">
                                    <motion.div
                                        initial={{ rotate: -10, opacity: 0 }}
                                        whileInView={{ rotate: -3, opacity: 1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ rotate: 0 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="relative w-full max-w-xs transform shadow-2xl"
                                    >
                                        <div className="aspect-[4/5] overflow-hidden rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 bg-gray-200">
                                            <img alt="Profile Portrait" className="w-full h-full object-cover" src="/images/photo2.webp" />
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="space-y-10 flex flex-col items-center lg:items-end text-accent-new">
                                    {[
                                        "PT IMERSA SOLUSI TEKNOLOGI",
                                        "ENGLISH CAFE INDONESIA",
                                        "THE LOUIS"
                                    ].map((company, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 * i, duration: 0.5 }}
                                            className="flex items-center gap-3"
                                        >
                                            <span className="text-xs font-bold uppercase tracking-[0.2em]">{company}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SectionWrapper>

                    <SectionWrapper id="philosophy" className="">
                        <div className="layout-container">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 border-t border-gray-100 pt-24">
                                <div className="space-y-8">
                                    <h2 className="text-3xl italic text-accent-new">Philosophy</h2>
                                    <div className="space-y-6">
                                        <p className="text-gray-600 font-light leading-relaxed">
                                            {t.philosophy.description}
                                        </p>
                                        <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs uppercase tracking-[0.3em] font-bold text-accent-new">
                                            {t.philosophy.traits.map((trait, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    transition={{ delay: 0.5 + (0.1 * i) }}
                                                >{trait}</motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center justify-center bg-gray-50 rounded-2xl p-12"
                                >
                                    <p className="text-center font-serif italic text-2xl text-gray-400">"by any means necessary."</p>
                                </motion.div>
                            </div>
                        </div>
                    </SectionWrapper>
                </main>

                <SectionWrapper className="bg-black text-white w-full">
                    <div className="layout-container">
                        <section className="py-48 text-center space-y-12" id="contact">
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-7xl tracking-tight leading-tight"
                            >Let's create something <br /> remarkable together.</motion.h2>
                            <div className="space-y-6">
                                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">{t.contact.availability}</p>
                                <motion.a
                                    whileHover={{ x: 10 }}
                                    className="inline-block text-3xl md:text-6xl font-serif border-b-2 border-white pb-2 hover:opacity-50 transition-all font-normal italic"
                                    href="mailto:luewire@gmail.com"
                                >
                                    luewire@gmail.com
                                </motion.a>
                            </div>
                            <div className="flex justify-center gap-10 pt-12 text-sm font-medium uppercase tracking-[0.3em]">
                                <a className="text-link-white" href="https://www.linkedin.com/in/muhammad-ridho-zen-4665a22bb/" target="_blank" rel="noopener noreferrer">{t.contact.social.linkedin}</a>
                                <a className="text-link-white" href="https://github.com/luewire" target="_blank" rel="noopener noreferrer">{t.contact.social.github}</a>
                                <a className="text-link-white" href="https://t.me/luewire" target="_blank" rel="noopener noreferrer">{t.contact.social.telegram}</a>
                            </div>
                        </section>
                        <footer className="py-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.4em] text-gray-500 gap-6">
                            <p>© 2025 Luewire — All Rights Reserved</p>
                            <p>Built with precision & passion</p>
                        </footer>
                    </div>
                </SectionWrapper>
            </motion.div>
        </div>
    );
};

export default Index;
