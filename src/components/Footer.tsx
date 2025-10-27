import logoIcon from "@/assets/logo-icon.png";

export const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-foreground py-12 px-4">
      <div className="container mx-auto text-center space-y-6">
        <div className="flex justify-center">
          <img src={logoIcon} alt="AdZilla" className="w-16 h-16 rounded-full border-2 border-foreground" />
        </div>
        <h3 className="text-3xl font-black">adzilla</h3>
        <p className="text-sm max-w-2xl mx-auto">
          This site and project are for entertainment and community engagement only. Nothing presented here should be
          construed as financial advice, investment guidance, or solicitation.
        </p>
      </div>
    </footer>
  );
};
