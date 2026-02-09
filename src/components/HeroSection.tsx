import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import teamPhoto from '@/assets/team-group.jpg';

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = translations.hero;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={teamPhoto} alt="Equipo BASARA" className="w-full h-full object-cover object-center md:object-top" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/40 to-background" />
      </div>

      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="font-heading text-7xl md:text-9xl font-bold tracking-tighter text-primary-foreground drop-shadow-lg">
          {t.title[lang]}
        </h1>
        <p className="font-body text-3xl md:text-5xl italic text-primary mt-[-0.5rem] md:mt-[-1rem] drop-shadow-md">
          {t.subtitle[lang]}
        </p>
        <p className="mt-8 text-lg md:text-2xl font-semibold text-primary-foreground/90 max-w-2xl mx-auto drop-shadow">
          {t.tagline[lang]}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
