import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";
import type { Language } from "@/lib/i18n";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const langLabels: Record<Language, string> = { es: "ES", eu: "EU", en: "EN" };

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const t = translations.nav;
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: t.about[lang] },
    { href: "#concerns", label: t.concerns[lang] },
    { href: "#blog", label: t.blog[lang] },
    { href: "#faq", label: t.faq[lang] },
    { href: "#candidates", label: t.candidates[lang] },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-2xl font-bold text-primary-foreground tracking-wider"></a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-semibold uppercase tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-1 ml-4 border border-border rounded-md overflow-hidden">
            {(["es", "eu", "en"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs font-bold transition-colors ${lang === l ? "bg-primary text-primary-foreground" : "text-secondary-foreground/70 hover:text-primary-foreground"}`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-secondary border-t border-border px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-secondary-foreground/80 hover:text-primary text-sm font-semibold uppercase"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-1 mt-3">
            {(["es", "eu", "en"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLang(l);
                  setOpen(false);
                }}
                className={`px-3 py-1 text-xs font-bold rounded ${lang === l ? "bg-primary text-primary-foreground" : "text-secondary-foreground/70"}`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
