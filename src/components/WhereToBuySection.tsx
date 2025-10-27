import { Button } from "./ui/button";

const platforms = [
  { name: "Jupiter", emoji: "🪐" },
  { name: "Pump.fun", emoji: "🚀" },
  { name: "DEXScreener", emoji: "📊" },
  { name: "Birdeye", emoji: "🐦" },
  { name: "MEXC", emoji: "💱" },
  { name: "OKX Wallet", emoji: "💼" },
];

export const WhereToBuySection = () => {
  return (
    <section id="where-to-buy" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-16 text-foreground">
          Where to buy
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {platforms.map((platform) => (
            <Button
              key={platform.name}
              className="bg-background hover:bg-background/90 border-4 border-foreground h-32 flex flex-col items-center justify-center gap-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
            >
              <span className="text-4xl">{platform.emoji}</span>
              <span className="font-black text-xs">{platform.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
