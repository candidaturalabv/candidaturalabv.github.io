import { useLanguage } from '@/contexts/LanguageContext';
import { translations, candidateNames } from '@/lib/i18n';
import { User } from 'lucide-react';

const CandidatesSection = () => {
  const { lang } = useLanguage();
  const t = translations.candidates;

  return (
    <section id="candidates" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="section-title text-secondary-foreground">{t.title[lang]}</h2>
        <div className="section-divider mt-3 mb-10" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {candidateNames.map((name, i) => (
            <div key={i} className="flex flex-col items-center gap-2 bg-secondary-foreground/5 rounded-lg p-4 border border-border/30">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="text-primary" size={24} />
              </div>
              <span className="text-secondary-foreground text-sm font-semibold text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CandidatesSection;
