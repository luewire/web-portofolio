import { Button } from "./ui/button";
import heroCharacter from "@/assets/hero-character.png";

const socialLinks = [
  { name: "Jupiter", icon: "🪐" },
  { name: "Pump.fun", icon: "🚀" },
  { name: "X/Twitter", icon: "𝕏" },
  { name: "Telegram", icon: "✈️" },
  { name: "DEXScreener", icon: "📊" },
  { name: "CoinGecko", icon: "🦎" },
  { name: "Birdeye", icon: "🐦" },
  { name: "GeckoTerminal", icon: "🦎" },
];

export const CommunitySection = () => {
  return (
    <section id="community" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="flex justify-center mb-12">
          <img
            src={heroCharacter}
            alt="AdZilla"
            className="w-64 h-64 object-contain"
          />
        </div>

        <h2 className="text-5xl md:text-7xl font-black text-center mb-4 text-white text-stroke">
          We love adzilla. Do you?
        </h2>

        <h3 className="text-3xl font-black text-center mb-12 text-foreground">
          Official links
        </h3>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              size="icon"
              className="w-16 h-16 rounded-full bg-white hover:bg-white/90 border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              title={link.name}
            >
              <span className="text-2xl">{link.icon}</span>
            </Button>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 border-4 border-foreground font-black px-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            MORE
          </Button>
        </div>
      </div>
    </section>
  );
};
