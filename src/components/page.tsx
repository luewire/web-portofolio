import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useInView } from '@/hooks/use-in-view';
// Import assets from src so Vite bundles them correctly
import logoImg from '@/assets/logo1.png';
import imgKII from '@/assets/projects/kampunginggrisindonesia.webp';
import imgFranky from '@/assets/projects/franky.webp';
import imgkamartamu from '@/assets/projects/kamartamu.webp';
import imglouis from '@/assets/projects/thelouis.webp';
import experienceBg from '../assets/experience.webp';
import flagID from '@/assets/flags/id.svg';
import flagEN from '@/assets/flags/en.svg';



export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [entered, setEntered] = useState(false);
  const [lang, setLang] = useState<'id' | 'en'>(() => (typeof window !== 'undefined' ? (localStorage.getItem('lang') as 'id' | 'en') || 'id' : 'id'));
  const [switching, setSwitching] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const lastScrollRef = useRef(0);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const aboutInView = useInView(aboutRef);
  const projectsInView = useInView(projectsRef);
  const experienceInView = useInView(experienceRef);
  const skillsInView = useInView(skillsRef);
  const contactInView = useInView(contactRef);
  

  // Internationalized strings and data
  const T = {
    id: {
      nav: {
        about: 'Tentang Saya',
        experience: 'Pengalaman',
        projects: 'Proyek',
        skills: 'Keahlian',
        contact: 'Kontak',
      },
      hero: {
        line1: 'Hai, selamat datang di',
        line2: 'website portofolio saya!',
        cta: 'Lihat Proyek Saya',
      },
      about: {
        heading: 'Tentang Saya',
        body:
          'Saya adalah lulusan SMK Telkom Purwokerto jurusan Rekayasa Perangkat Lunak. Saya seorang Frontend, Web Developer, dan Web Designer yang memiliki antusiasme tinggi dalam menciptakan solusi yang efisien dan skalabel. Saya selalu bersemangat untuk mempelajari hal-hal baru serta menggunakan keterampilan saya untuk memberikan kontribusi yang bermakna. Dengan pengalaman yang telah saya peroleh, saya yakin akan kemampuan saya untuk memberikan nilai dan dampak positif bagi setiap tim yang saya ikuti.',
      },
      experience: {
        heading: 'Pengalaman',
        items: [
          {
            role: 'Frontend Developer Magang',
            company: 'PT Imersa Solusi Teknologi',
            period: 'Jun 2025 — Oct 2025',
            desc:
              'Membangun dan memoles komponen UI (header, hero, section promo) dengan Tailwind dan React, fokus pada performa, aksesibilitas, dan responsivitas.',
            stack: ['React', 'Tailwind', 'Aksesibilitas'],
          },
          {
            role: 'Desain Magang',
            company: 'English Cafe Indonesia',
            period: 'Jun 2025 — Oct 2025',
            desc:
              'Mendesain dan memoles komponen UI (seperti header, hero, dan section promo) secara visual menggunakan Figma, dengan penekanan kuat pada responsivitas, performa, dan aksesibilitas desain. Juga mendukung produksi media internal untuk video editing.',
            stack: ['Figma', 'Module Design', 'Video Editing'],
          },
          {
            role: 'Game Frontend (Proyek Sekolah)',
            company: 'The Louis',
            period: '2024',
            desc:
              'Mengimplementasikan UI game bergaya pixel-art dan mekanik dasar dengan fokus pada animasi ringan dan kontrol intuitif.',
            stack: ['HTML5', 'CSS', 'JavaScript'],
          },
        ],
      },
      projects: {
        heading: 'Proyek Saya',
        list: [
          {
            title: 'Kampung Inggris Indonesia',
            desc:
              'Website untuk promosi dan informasi bagi calon peserta yang ingin belajar bahasa Inggris intensif seperti di Pare, namun berlokasi di Jogja. Dibuat saat magang (PKL).',
            img: imgKII,
            url: 'https://kampunginggrisindonesia.com/',
          },
          {
            title: 'Franky Website',
            desc:
              'Terinspirasi dari blonded.co. Saat kelas 10, saya membuat redesign yang lebih modern dan interaktif untuk menunjukkan kemampuan frontend dan web design.',
            img: imgFranky,
            url: 'https://luewire.github.io/franky/landingpage.html',
          },
          {
            title: 'Kamar Tamu',
            desc:
              'Bagian dari tugas PKL dalam tim kecil: mengembangkan section untuk website Villa Kamar Tamu sesuai desain yang ditentukan.',
            img: imgkamartamu,
            url: 'https://github.com/Alfianrefinofebrian/kamartamu',
          },
          {
            title: 'Game The Louis',
            desc:
              'Proyek game pertama sebagai tugas akhir DPK D kelas 10 (tim). Mengadopsi pixel art dan genre defense ala Plants vs. Zombies.',
            img: imglouis,
            url: 'https://luewire.github.io/gamexpplg3-kelompok3/',
          },
        ],
        viewProject: 'Lihat Proyek',
      },
      skills: { heading: 'Keahlian' },
      contact: {
        heading: 'Hubungi Saya',
        body: 'Ayo bekerjasama untuk proyek berikutnya!',
        email: 'Email Saya',
      },
      footer: '© 2025 luewire. Dibuat dengan semangat dan cinta.',
    },
    en: {
      nav: {
        about: 'About Me',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',
      },
      hero: {
        line1: 'Hi, welcome to',
        line2: 'my portfolio website!',
        cta: 'See My Work',
      },
      about: {
        heading: 'About Me',
        body:
          'I graduated from SMK Telkom Purwokerto majoring in Software Engineering. I am a Frontend, Web Developer, and Web Designer passionate about building efficient and scalable solutions. I love learning new things and using my skills to deliver meaningful contributions. With my experience, I am confident in providing value and positive impact to any team I join.',
      },
      experience: {
        heading: 'Experience',
        items: [
          {
            role: 'Frontend Developer Intern',
            company: 'PT Imersa Solusi Teknologi',
            period: 'Jun 2025 — Oct 2025',
            desc:
              'Built and refined UI components (header, hero, promo sections) with Tailwind and React, focusing on performance, accessibility, and responsiveness.',
            stack: ['React', 'Tailwind', 'Accessibility'],
          },
          {
            role: 'Design Intern',
            company: 'English Cafe Indonesia',
            period: 'Jun 2025 — Oct 2025',
            desc:
              'Designed and polished UI components in Figma with strong emphasis on responsiveness, performance, and accessibility. Also supported internal media production for video editing.',
            stack: ['Figma', 'Module Design', 'Video Editing'],
          },
          {
            role: 'Game Frontend (School Project)',
            company: 'The Louis',
            period: '2024',
            desc:
              'Implemented pixel-art style UI and basic game mechanics with lightweight animations and intuitive controls.',
            stack: ['HTML5', 'CSS', 'JavaScript'],
          },
        ],
      },
      projects: {
        heading: 'My Projects',
        list: [
          {
            title: 'Kampung Inggris Indonesia',
            desc:
              'A website for promotion and information for prospective students wanting an immersive English course similar to Pare, but located in Jogja. Built during my internship.',
            img: imgKII,
            url: 'https://kampunginggrisindonesia.com/',
          },
          {
            title: 'Franky Website',
            desc:
              "Inspired by blonded.co. Back in grade 10 I created a more modern, interactive redesign to showcase my frontend and web design skills.",
            img: imgFranky,
            url: 'https://luewire.github.io/franky/landingpage.html',
          },
          {
            title: 'Kamar Tamu',
            desc:
              'Part of an internship assignment in a small team: developing sections for Villa Kamar Tamu’s website based on the given design.',
            img: imgkamartamu,
            url: 'https://github.com/Alfianrefinofebrian/kamartamu',
          },
          {
            title: 'The Louis Game',
            desc:
              'My first game project as a final assignment in grade 10 (team). Pixel-art visuals and a defense genre inspired by Plants vs. Zombies.',
            img: imglouis,
            url: 'https://luewire.github.io/gamexpplg3-kelompok3/',
          },
        ],
        viewProject: 'View Project',
      },
      skills: { heading: 'Skills' },
      contact: {
        heading: 'Get In Touch',
        body: "Let's work together on your next project!",
        email: 'Email Me',
      },
      footer: '© 2025 luewire. Built with passion and love.',
    },
  } as const;

  const toggleLang = () => {
    const next = lang === 'id' ? 'en' : 'id';
    // Smooth crossfade/slide animation: out -> swap -> in
    setSwitching(true);
    window.setTimeout(() => setLang(next), 160);
    window.setTimeout(() => setSwitching(false), 340);
  };

  useEffect(() => {
    localStorage.setItem('lang', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  // Small helper to animate language text nicely
  const LangText = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <span
      className={`${className} inline-block transition-all duration-300 ease-out ${
        switching ? 'opacity-0 -translate-y-1 blur-[2px]' : 'opacity-100 translate-y-0 blur-0'
      }`}
    >
      {children}
    </span>
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  useEffect(() => {
    const nav = navRef.current;
    if (nav) nav.classList.remove('-translate-y-full');
    const t = setTimeout(() => setEntered(true), 50);

    let ticking = false;
    const threshold = 2; // minimal pixel change to consider a direction
    const onScroll = () => {
      const current = window.pageYOffset || document.documentElement.scrollTop;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = navRef.current;
        if (el) {
          // Always show near the very top
          if (current <= 10 || menuOpen) {
            el.classList.remove('-translate-y-full');
          } else if (current > lastScrollRef.current + threshold) {
            // scrolling down
            el.classList.add('-translate-y-full');
          } else if (current < lastScrollRef.current - threshold) {
            // scrolling up
            el.classList.remove('-translate-y-full');
          }
        }
        lastScrollRef.current = current;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(t);
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-[#FFBA00]">
      {/* Capsule Navbar */}
      <nav
        ref={navRef}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white border-2 border-black rounded-full shadow-md px-6 md:px-10 py-3 flex items-center gap-4 md:gap-10 font-extrabold text-black uppercase tracking-wide transition-transform duration-500 ease-in-out w-[92vw] max-w-[1200px] transition-opacity duration-700 ease-out ${entered ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Main"
      >
        {/* Logo small circle */}
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black overflow-hidden flex items-center justify-center bg-white">
          <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
          <button onClick={() => scrollToSection('about')} className="hover:text-[#F5C33B]">
            <LangText>{T[lang].nav.about.toUpperCase()}</LangText>
          </button>
          <button onClick={() => scrollToSection('experience')} className="hover:text-[#F5C33B]">
            <LangText>{T[lang].nav.experience.toUpperCase()}</LangText>
          </button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-[#F5C33B]">
            <LangText>{T[lang].nav.projects.toUpperCase()}</LangText>
          </button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-[#F5C33B]">
            <LangText>{T[lang].nav.skills.toUpperCase()}</LangText>
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-[#F5C33B]">
            <LangText>{T[lang].nav.contact.toUpperCase()}</LangText>
          </button>
        </div>
        {/* Spacer */}
        <div className="flex-1" />
        {/* Language toggle */}
        <button
          onClick={toggleLang}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-black overflow-hidden flex items-center justify-center"
          aria-label={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
          title={lang === 'id' ? 'English' : 'Indonesia'}
        >
          <img src={lang === 'id' ? flagEN : flagID} alt={lang === 'id' ? 'English flag' : 'Indonesian flag'} className={`w-full h-full object-cover transition-transform duration-300 ${switching ? 'rotate-180 scale-90' : 'rotate-0 scale-100'}`} />
        </button>
        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden w-10 h-10 rounded-full bg-white border-2 border-black flex items-center justify-center"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <div className="relative w-5 h-4">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 bg-black transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-1/2 -translate-y-1/2 block h-0.5 w-5 bg-black transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`absolute left-0 bottom-0 block h-0.5 w-5 bg-black transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile full-screen menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 flex items-center justify-center animate-fade-in">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center text-2xl font-bold"
            aria-label="Close menu"
          >
            ×
          </button>
          <div className="text-center space-y-6 uppercase tracking-wide">
            <button onClick={() => scrollToSection('about')} className="block text-white text-2xl md:text-3xl font-extrabold hover:text-[#F5C33B] transition-colors animate-slide-up animation-delay-0">
              <LangText>{T[lang].nav.about}</LangText>
            </button>
            <button onClick={() => scrollToSection('experience')} className="block text-white text-2xl md:text-3xl font-extrabold hover:text-[#F5C33B] transition-colors animate-slide-up animation-delay-100">
              <LangText>{T[lang].nav.experience}</LangText>
            </button>
            <button onClick={() => scrollToSection('projects')} className="block text-white text-2xl md:text-3xl font-extrabold hover:text-[#F5C33B] transition-colors animate-slide-up animation-delay-200">
              <LangText>{T[lang].nav.projects}</LangText>
            </button>
            <button onClick={() => scrollToSection('skills')} className="block text-white text-2xl md:text-3xl font-extrabold hover:text-[#F5C33B] transition-colors animate-slide-up animation-delay-300">
              <LangText>{T[lang].nav.skills}</LangText>
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-white text-2xl md:text-3xl font-extrabold hover:text-[#F5C33B] transition-colors animate-slide-up animation-delay-400">
              <LangText>{T[lang].nav.contact}</LangText>
            </button>
          </div>
        </div>
      )}

      {/* Social Icons - Left Side */}
  <div className={`fixed left-6 top-1/2 -translate-y-1/2 z-30 space-y-4 hidden md:flex md:flex-col transition-all duration-700 ease-out delay-200 ${entered ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-4'}`}>
        <a href="https://github.com/luewire" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-white border-4 border-black flex items-center justify-center hover:scale-110 transition-transform" aria-label="GitHub">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/muhammad-ridho-zen-4665a22bb/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-white border-4 border-black flex items-center justify-center hover:scale-110 transition-transform" aria-label="LinkedIn">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="https://x.com/luewire1" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-white border-4 border-black flex items-center justify-center hover:scale-110 transition-transform" aria-label="Twitter">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="mailto:luewire@email.com" className="w-16 h-16 rounded-full bg-white border-4 border-black flex items-center justify-center hover:scale-110 transition-transform" aria-label="Email">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </a>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4">
        <div className="text-center max-w-6xl mx-auto">
          <h2
            aria-hidden="true"
            className={`pointer-events-none select-none text-[33vw] md:text-[20vw] font-black uppercase relative font-graphy text-stroke transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 font-glacial'}`}
          >
            luewire
          </h2>
          <p className={`text-[6vw] md:text-[2.5vw] font-bold text-[#1f1f1f] mb-12 max-w-3xl mx-auto transition-all duration-700 ease-out delay-150 font-glacial ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="block"><LangText>{T[lang].hero.line1}</LangText></span>
            <span className="block"><LangText>{T[lang].hero.line2}</LangText></span>
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className={`px-9 py-5 text-xl md:px-12 md:py-6 md:text-2xl font-black bg-black text-white border-2 md:border-4 border-black hover:bg-[#cf3c15] hover:border-[#cf3c15] transition-colors rounded-full uppercase transition-all duration-700 ease-out delay-300 ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <LangText>{T[lang].hero.cta}</LangText>
          </button>
        </div>
      </section>

      

      {/* Scrolling Text */}
      <div className="border-y-4 border-black bg-white py-6 overflow-hidden"> 
        <div className="flex animate-scroll flex-nowrap shrink-0" aria-hidden="true">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center gap-8 md:gap-12">
              {[...Array(6)].flatMap((_, i) => (
                ['WEB DEVELOPMENT','MODERN DESIGNER','REACT DEV','FAST LEARNER','CURIOUS BUILDER','ACCESSIBILITY'].map((label, j) => (
                  <span key={`lbl-${dup}-${i}-${j}`} className="text-2xl md:text-4xl font-black">{label}</span>
                ))
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-16 md:py-24 px-4">
        <div ref={aboutRef} className={`container mx-auto max-w-6xl transition-all duration-700 ease-out ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h3 className="text-6xl md:text-9xl font-black text-black uppercase mb-12 text-center font-opsilon">
            <LangText>{T[lang].about.heading}</LangText>
          </h3>
          <div className="bg-white border-2 md:border-4 border-black p-6 md:p-12 rounded-3xl">
            <p className="text-sm md:text-2xl font-bold text-black mb-6 leading-normal">
              <LangText>{T[lang].about.body}</LangText>
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section (moved below About) */}
      <section
        id="experience"
        className="relative min-h-screen flex items-center py-16 md:py-24 px-4 bg-no-repeat bg-cover bg-center bg-bottom"
        style={{ backgroundImage: `url(${experienceBg})` }}
      >
        {/* subtle tint for readability */}
        <div className="absolute inset-0 bg-[#58C4FE]/25" aria-hidden="true" />
        <div ref={experienceRef} className={`relative z-10 container mx-auto max-w-6xl transition-all duration-700 ease-out ${experienceInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h3 className="text-5xl md:text-8xl font-black text-black text-outlined-thin uppercase mb-12 text-center font-opsilon">
            <LangText>{T[lang].experience.heading}</LangText>
          </h3>
          <div className="space-y-6 md:space-y-8">
            {T[lang].experience.items.map((exp, i) => (
              <div
                key={exp.role + i}
                className={`bg-white border-2 md:border-4 border-black p-6 md:p-8 rounded-3xl transition-all duration-700 ease-out ${experienceInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${i === 0 ? 'delay-0' : i === 1 ? 'delay-100' : 'delay-200'}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-black font-opsilon"><LangText>{exp.role}</LangText></h4>
                    <p className="text-lg md:text-xl font-bold text-gray-700"><LangText>{exp.company}</LangText></p>
                  </div>
                  <span className="self-start md:self-auto inline-block px-3 py-1 text-sm md:text-base font-black bg-black text-white border-2 md:border-4 border-black rounded-full">
                    <LangText>{exp.period}</LangText>
                  </span>
                </div>
                <p className="mt-4 text-base md:text-lg font-bold text-gray-800"><LangText>{exp.desc}</LangText></p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.stack.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs md:text-sm font-black bg-[#fbbb04] text-black border-2 border-black rounded-full">
                      <LangText>{tag}</LangText>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
  <section id="projects" className="min-h-screen py-16 md:py-24 px-4 bg-[#cf3c15]">
        <div ref={projectsRef} className="container mx-auto max-w-6xl">
          <h3 className="text-5xl md:text-8xl font-black text-white text-outlined-thin uppercase mb-10 md:mb-12 text-center font-opsilon">
            <LangText>{T[lang].projects.heading}</LangText>
          </h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {T[lang].projects.list.map((p, idx) => {
              const isLeft = idx % 2 === 0;
              const hiddenDir = isLeft
                ? 'opacity-0 translate-y-6 md:-translate-x-10 md:translate-y-0'
                : 'opacity-0 translate-y-6 md:translate-x-10 md:translate-y-0';
              const visibleDir = 'opacity-100 translate-y-0 md:translate-x-0';
              const delay = idx === 0 ? 'delay-0' : idx === 1 ? 'delay-100' : idx === 2 ? 'delay-200' : 'delay-300';
              return (
                <div
                  key={p.title}
                  className={`${projectsInView ? visibleDir : hiddenDir} ${delay} bg-white border-2 md:border-4 border-black p-6 md:p-8 rounded-3xl transition-all duration-700 ease-out will-change-transform hover:scale-105`}
                >
                <div className="aspect-video bg-[#fbbb04] border-2 md:border-4 border-black rounded-2xl mb-6 overflow-hidden flex items-center justify-center">
                  {p.img ? (
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl md:text-6xl font-black text-white text-outlined">#{idx + 1}</span>
                  )}
                </div>
                <h4 className="text-2xl md:text-3xl font-black mb-4 font-opsilon"><LangText>{p.title}</LangText></h4>
                <p className="text-base md:text-lg font-bold text-gray-700 mb-6 "><LangText>{p.desc}</LangText></p>
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2.5 text-base md:px-6 md:py-3 md:text-lg font-black bg-black text-white border-2 md:border-4 border-black hover:bg-[#fbbb04] hover:text-black transition-colors rounded-full"
                  >
                    <LangText>{T[lang].projects.viewProject}</LangText>
                  </a>
                ) : null}
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-16 md:py-24 px-4">
        <div ref={skillsRef} className={`container mx-auto max-w-6xl transition-all duration-700 ease-out ${skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h3 className="text-5xl md:text-8xl font-black text-white text-outlined-thin uppercase mb-12 text-center font-opsilon">
            <LangText>{T[lang].skills.heading}</LangText>
          </h3>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[ 
              { name: 'React', level: 95 },
              { name: 'Next.js', level: 90 },
              { name: 'CMD/CLI', level: 80 },
              { name: 'Node.js', level: 80 },
              { name: 'Back end', level: 70 },
              { name: 'UI/UX Design', level: 85 }
            ].map((skill, idx) => (
              <div
                key={skill.name}
                className="bg-white border-2 md:border-4 border-black p-5 md:p-6 rounded-3xl font-opsilon group relative cursor-pointer"
                tabIndex={0}
                aria-label={`${skill.name} skill level ${skill.level} percent`}
              >
                <h4 className="text-xl md:text-2xl font-black mb-4">{skill.name}</h4>
                <div className="relative">
                  <div className="h-3 md:h-4 bg-gray-200 border-2 border-black rounded-full overflow-visible">
                    <div
                      className="relative h-full bg-[#cf3c15] rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: skillsInView ? `${skill.level}%` : '0%',
                        transitionDelay: skillsInView ? `${idx * 120}ms` : '0ms',
                      }}
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={skill.level}
                    >
                      {/* Percentage badge anchored to the end (right) of the red bar */}
                      <div
                        className="pointer-events-none absolute -top-4 md:-top-5 right-0 translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100"
                        aria-hidden="true"
                      >
                        <span className="px-2 py-1 text-xs md:text-sm font-black bg-black text-white border-2 border-black rounded-full shadow">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-16 md:py-24 px-4 bg-black">
        <div ref={contactRef} className={`container mx-auto max-w-4xl transition-all duration-700 ease-out ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h3 className="text-5xl md:text-8xl font-black text-[#fbbb04] uppercase mb-12 text-center font-opsilon">
            <LangText>{T[lang].contact.heading}</LangText>
          </h3>
          <div className="bg-white border-2 md:border-4 border-[#fbbb04] p-6 md:p-12 rounded-3xl">
            <p className="text-lg md:text-2xl font-bold text-black mb-8 text-center">
              <LangText>{T[lang].contact.body}</LangText>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:luewire@email.com" className="px-6 py-3 text-base md:px-8 md:py-4 md:text-xl font-black bg-[#fbbb04] text-black border-2 md:border-4 border-black hover:scale-110 transition-transform rounded-full">
                <LangText>{T[lang].contact.email}</LangText>
              </a>
              <a href="https://github.com/luewire" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-base md:px-8 md:py-4 md:text-xl font-black bg-black text-white border-2 md:border-4 border-[#fbbb04] hover:scale-110 transition-transform rounded-full">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/muhammad-ridho-zen-4665a22bb/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-base md:px-8 md:py-4 md:text-xl font-black bg-[#cf3c15] text-white border-2 md:border-4 border-black hover:scale-110 transition-transform rounded-full">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fbbb04] border-t-4 border-black py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-xl font-black font-glacial">© 2025 luewire. Built with passion and love.</p>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-scroll {
          animation: marquee 30s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
