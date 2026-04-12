const links = {
  Platform: ["Overview", "ML Pipeline", "Features", "How It Works"],
  Company: ["About", "Team", "Careers", "Contact"],
  Resources: ["Documentation", "API Reference", "Blog", "Support"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold gradient-text">DriveIQ</span>
            <p className="text-xs md:text-sm text-muted-foreground mt-3 leading-relaxed">
              AI-powered driving intelligence for safer roads and smarter training.
            </p>
          </div>
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs md:text-sm font-semibold mb-3 md:mb-4">{title}</h4>
              <ul className="space-y-2 md:space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border mt-8 md:mt-12 pt-6 md:pt-8 text-center text-[10px] md:text-xs text-muted-foreground">
          © {new Date().getFullYear()} DriveIQ. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
