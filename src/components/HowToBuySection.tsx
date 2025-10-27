import { Card } from "./ui/card";

const steps = [
  {
    number: "1",
    title: "Create wallet",
    description: "Visit phantom.app and follow the simple steps to create a new account with the Phantom app or browser extension.",
    icon: "👛",
  },
  {
    number: "2",
    title: "GET SOME $SOL",
    description: "Tap the BUY button in the app to purchase Solana, or BUY ON ANOTHER EXCHANGE AND SEND IT TO YOUR WALLET.",
    icon: "💰",
  },
  {
    number: "3",
    title: "GO TO Jupiter",
    description: "Visit jup.ag. Tap the CONNECT WALLET button to connect your phantom wallet.",
    icon: "🚀",
  },
  {
    number: "4",
    title: "Swap for $ADZILLA",
    description: "Swap your $SOL for $ADZILLA. You are now an $ADZILLA holder! Welcome to the $ADZILLA FAMILY!",
    icon: "🦖",
  },
];

export const HowToBuySection = () => {
  return (
    <section id="how-to-buy" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-4 text-white text-stroke">
          join $adzilla family
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-center mb-16 text-foreground">
          How to buy $adzilla
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="bg-white border-4 border-foreground p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
            >
              <div className="text-6xl mb-4">{step.icon}</div>
              <div className="text-5xl font-black mb-4">{step.number}</div>
              <h4 className="text-2xl font-black mb-4 uppercase">{step.title}</h4>
              <p className="text-sm">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
