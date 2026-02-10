import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";
import { Mail } from "lucide-react";

const EMAIL = 'candidaturalabvicomtech@gmail.com';

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-heading text-2xl font-bold text-primary tracking-wider mb-2"></p>
        <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 text-background/80 hover:text-primary transition-colors text-sm mb-2">
          <Mail size={16} />
          {EMAIL}
        </a>
        <p className="text-background/60 text-sm">{translations.footer.rights[lang]}</p>
      </div>
    </footer>
  );
};

export default Footer;
