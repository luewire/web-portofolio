import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="AdZilla Logo" className="w-12 h-12 rounded-full border-2 border-foreground" />
            <span className="text-2xl font-black">ADZILLA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("about")} className="font-bold hover:scale-110 transition-transform">
              MEET ADZILLA
            </button>
            <button onClick={() => scrollToSection("how-to-buy")} className="font-bold hover:scale-110 transition-transform">
              HOW TO BUY
            </button>
            <button onClick={() => scrollToSection("where-to-buy")} className="font-bold hover:scale-110 transition-transform">
              FIND ADZILLA
            </button>
            <button onClick={() => scrollToSection("community")} className="font-bold hover:scale-110 transition-transform">
              COMMUNITY
            </button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-black px-8 py-6 text-lg border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              BUY NOW
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t-4 border-foreground">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("about")} className="font-bold text-left py-2">
                MEET ADZILLA
              </button>
              <button onClick={() => scrollToSection("how-to-buy")} className="font-bold text-left py-2">
                HOW TO BUY
              </button>
              <button onClick={() => scrollToSection("where-to-buy")} className="font-bold text-left py-2">
                FIND ADZILLA
              </button>
              <button onClick={() => scrollToSection("community")} className="font-bold text-left py-2">
                COMMUNITY
              </button>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-black border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                BUY NOW
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
