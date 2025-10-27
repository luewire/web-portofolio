import { Button } from "./ui/button";
import heroCharacter from "@/assets/hero-character.png";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-12 text-foreground">
          AdZilla: The Ad-Eating Dino of Solana
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={heroCharacter}
              alt="AdZilla"
              className="w-full max-w-md"
            />
          </div>

          <div className="space-y-6 text-lg">
            <p className="font-semibold">
              AdZilla isn't just another meme coin — it's a movement.
            </p>
            <p>
              Born on Solana and powered by community energy, this small but mighty dinosaur is on a mission to
              <strong> destroy annoying ads</strong> and make crypto fun, viral, and accessible to everyone.
            </p>
            <p>
              Pop-ups, clickbait, spam banners — if it's an ad, AdZilla devours it. Every bite fuels a growing
              ecosystem built for people tired of noise and ready for something different.
            </p>
            <p>
              With smart marketing, a strong community, and pure meme energy, AdZilla is here to take over
              timelines, feeds, and wallets — bringing new users into crypto while shaking up the Solana scene.
            </p>
            <p className="font-bold text-xl">
              Join the rebellion. Feed the dino. Be part of the next big meme coin.
            </p>

            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-black px-8 py-6 text-xl border-4 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
              READ ADZILLA'S WHITEPAPER 📄
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
