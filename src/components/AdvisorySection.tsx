import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import { Shield } from 'lucide-react';

const EMAIL = 'candidaturalabvicomtech@gmail.com';

const AdvisorySection = () => {
  const { lang } = useLanguage();
  const t = translations.advisory;

  const ctaText = t.cta[lang];
  const parts = ctaText.split(EMAIL);

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-4 mb-3">
          <Shield className="text-primary" size={36} />
          <h2 className="section-title text-foreground">{t.title[lang]}</h2>
        </div>
        <div className="section-divider mb-8" />
        <p className="text-lg leading-relaxed text-foreground/90 mb-6">
          {t.description[lang]}
        </p>
        <p className="text-primary font-semibold text-lg italic">
          {parts[0]}
          <a href={`mailto:${EMAIL}`} className="underline hover:text-primary/80">{EMAIL}</a>
          {parts[1] || ''}
        </p>
      </div>
    </section>
  );
};

export default AdvisorySection;
