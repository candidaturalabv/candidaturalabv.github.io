import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-heading text-2xl font-bold text-primary tracking-wider mb-2">
          BASARA
        </p>
        <p className="text-background/60 text-sm">
          {translations.footer.rights[lang]}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
