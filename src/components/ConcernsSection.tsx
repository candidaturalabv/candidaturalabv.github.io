import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import { Briefcase, Home, Plane, DollarSign, Heart, MapPin } from 'lucide-react';

const icons = [DollarSign, Home, Briefcase, Plane, Heart, MapPin];

const ConcernsSection = () => {
  const { lang } = useLanguage();
  const t = translations.concerns;

  return (
    <section id="concerns" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="section-title text-secondary-foreground">{t.title[lang]}</h2>
        <div className="section-divider mt-3 mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="flex items-center gap-4 bg-secondary-foreground/5 rounded-lg p-5 border border-border/30 hover:border-primary/50 transition-colors">
                <Icon className="text-primary shrink-0" size={28} />
                <span className="text-secondary-foreground font-semibold text-lg">{item[lang]}</span>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-secondary-foreground/80 text-lg font-semibold italic">
          {t.more[lang]}
        </p>
      </div>
    </section>
  );
};

export default ConcernsSection;
