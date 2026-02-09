import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import teamPhoto from '@/assets/team-group.jpg';

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = translations.hero;

  return (
    <>
      {/* Mobile: stacked layout */}
      <section className="md:hidden flex flex-col pt-16">
        <div className="relative w-full aspect-[4/3]">
          <img src={teamPhoto} alt="Equipo BASARA" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-secondary/70" />
          <h1 className="absolute bottom-4 left-0 right-0 text-center font-heading text-6xl font-bold tracking-tighter text-primary-foreground drop-shadow-lg">
            {t.title[lang]}
          </h1>
        </div>
        <div className="bg-secondary text-center px-6 py-8">
          <p className="font-body text-2xl italic text-primary">
            {t.subtitle[lang]}
          </p>
          <p className="mt-4 text-base font-semibold text-secondary-foreground/90 max-w-md mx-auto">
            {t.tagline[lang]}
          </p>
        </div>
      </section>

      {/* Desktop: original overlay layout */}
      <section className="hidden md:flex relative min-h-screen flex-col items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={teamPhoto} alt="Equipo BASARA" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/40 to-background" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="font-heading text-9xl font-bold tracking-tighter text-primary-foreground drop-shadow-lg">
            {t.title[lang]}
          </h1>
          <p className="font-body text-5xl italic text-primary mt-[-1rem] drop-shadow-md">
            {t.subtitle[lang]}
          </p>
          <p className="mt-8 text-2xl font-semibold text-primary-foreground/90 max-w-2xl mx-auto drop-shadow">
            {t.tagline[lang]}
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
