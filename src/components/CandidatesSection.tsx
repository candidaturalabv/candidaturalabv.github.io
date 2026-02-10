import { useLanguage } from '@/contexts/LanguageContext';
import { translations, candidatesByDivision } from '@/lib/i18n';
import { User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Import candidate photos
const photoModules = import.meta.glob('@/assets/candidates/*.png', { eager: true, import: 'default' }) as Record<string, string>;

const getPhoto = (photoKey?: string): string | undefined => {
  if (!photoKey) return undefined;
  const match = Object.entries(photoModules).find(([path]) => path.includes(`/${photoKey}.png`));
  return match?.[1];
};

const CandidatesSection = () => {
  const { lang } = useLanguage();
  const t = translations.candidates;

  return (
    <section id="candidates" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="section-title text-secondary-foreground">{t.title[lang]}</h2>
        <div className="section-divider mt-3 mb-10" />

        <div className="space-y-8">
          {candidatesByDivision.map((div, idx) => {
            const divLabel = typeof div.division === 'string' ? div.division : (div.division as Record<string, string>)[lang];
            return (
            <div key={idx}>
              <h3 className="text-lg font-bold text-secondary-foreground mb-3">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-md text-sm font-mono">{divLabel}</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {div.candidates.map((c, i) => {
                  const photo = getPhoto(c.photo);
                  return (
                    <div key={i} className="flex flex-col items-center gap-2 bg-secondary-foreground/5 rounded-lg p-4 border border-border/30">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                        {photo ? (
                          <img src={photo} alt={c.name} className="w-full h-full object-cover" />
                        ) : (
                          <User className="text-primary" size={28} />
                        )}
                      </div>
                      <span className="text-secondary-foreground text-sm font-semibold text-center">{c.name}</span>
                      <Badge className="text-xs bg-primary/20 text-primary border-primary/30">{c.group}</Badge>
                    </div>
                  );
                })}
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
};

export default CandidatesSection;
