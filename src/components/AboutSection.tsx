import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';

const AboutSection = () => {
  const { lang } = useLanguage();
  const t = translations.about;

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="section-title text-foreground">{t.title[lang]}</h2>
        <div className="section-divider mt-3 mb-8" />
        <p className="text-lg leading-relaxed text-foreground/90 mb-6">
          {t.description[lang]}
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          {t.initiative[lang]}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
