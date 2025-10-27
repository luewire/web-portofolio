import { useState } from "react";
import { Button } from "./ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import heroCharacter from "@/assets/hero-character.png";

export const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "7h7FjNZGZ54KJzUtvx2eS9u61HbPX8XZS8WjyQtrpump";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    toast.success("Contract address copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen pt-32 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text and CA */}
          <div className="space-y-8">
            <h1 className="text-7xl md:text-9xl font-black text-white text-stroke">
              ADZILLA
            </h1>

            {/* Contract Address */}
            <div className="bg-white border-4 border-foreground rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-sm font-bold mb-2">CA:</p>
              <div className="flex items-center gap-2">
                <p className="text-sm font-mono break-all flex-1">{contractAddress}</p>
                <Button
                  size="sm"
                  onClick={copyToClipboard}
                  className="bg-primary hover:bg-primary/90 border-2 border-foreground shrink-0"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 flex-wrap">
              <Button
                size="icon"
                className="w-14 h-14 rounded-full bg-white hover:bg-white/90 border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <span className="text-2xl">💊</span>
              </Button>
              <Button
                size="icon"
                className="w-14 h-14 rounded-full bg-white hover:bg-white/90 border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <span className="text-2xl">✈️</span>
              </Button>
              <Button
                size="icon"
                className="w-14 h-14 rounded-full bg-white hover:bg-white/90 border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <span className="text-2xl">𝕏</span>
              </Button>
              <Button
                className="bg-primary hover:bg-primary/90 border-4 border-foreground font-black px-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                MORE
              </Button>
            </div>
          </div>

          {/* Right side - Character */}
          <div className="flex justify-center">
            <img
              src={heroCharacter}
              alt="AdZilla Character"
              className="w-full max-w-lg animate-bounce-slow"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center space-y-6">
          <h2 className="text-5xl md:text-7xl font-black text-white text-stroke">
            WE HATE ADS! WE EAT ADS!
          </h2>
          <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-black px-12 py-8 text-2xl border-4 border-foreground rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
            BUY $ADZILLA WITH CRYPTO
          </Button>
        </div>
      </div>
    </section>
  );
};
