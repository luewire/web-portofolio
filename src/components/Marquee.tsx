"use client";

import { Marquee as ShadcnMarquee } from "@/src/components/shadcn-space/animations/marquee";
import { Code, Palette, Layout, Search, Zap } from "lucide-react";

const servicesList = [
  {
    icon: Code,
    name: "Frontend Development",
  },
  {
    icon: Palette,
    name: "Web Design",
  },
  {
    icon: Layout,
    name: "UX Design",
  },
  {
    icon: Search,
    name: "SEO Optimization",
  },
  {
    icon: Zap,
    name: "Performance",
  },
];

export default function Marquee() {
  return (
    <div className="w-full px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div 
        className="relative w-full overflow-hidden py-4 md:py-6"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <ShadcnMarquee className="[--duration:40s] [--gap:1.5rem] md:[--gap:2.5rem] p-0" pauseOnHover>
          {servicesList.map((service, index) => (
            <div key={index} className="flex items-center gap-[inherit] shrink-0">
              <span 
                className="text-[15px] md:text-lg font-extrabold uppercase tracking-[0.15em] font-sans whitespace-nowrap"
                style={{ color: "var(--text)" }}
              >
                {service.name}
              </span>

              <span 
                className="text-lg md:text-xl font-light opacity-30 shrink-0"
                style={{ color: "var(--text)" }}
              >
                |
              </span>
            </div>
          ))}
        </ShadcnMarquee>
      </div>
    </div>
  );
}