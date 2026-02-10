import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, CalendarDays, MapPin, Clock, Users } from 'lucide-react';

const texts = {
  title: {
    es: '¡Construyamos juntos!',
    eu: 'Eraiki dezagun elkarrekin!',
    en: "Let's build together!",
  },
  subtitle: {
    es: 'Te invitamos a una charla abierta',
    eu: 'Hitzaldi ireki batera gonbidatzen zaitugu',
    en: 'You are invited to an open talk',
  },
  date: {
    es: '12 de Febrero',
    eu: 'Otsailaren 12a',
    en: 'February 12',
  },
  time: {
    es: '17:15h',
    eu: '17:15etan',
    en: '5:15 PM',
  },
  place: {
    es: 'KutxaEspacio',
    eu: 'KutxaEspazio',
    en: 'KutxaEspacio',
  },
  cta: {
    es: '¡Allí nos vemos!',
    eu: 'Han ikusiko gara!',
    en: 'See you there!',
  },
};

const EntryPopup = () => {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${closing ? 'opacity-0' : 'opacity-100'}`}
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className={`relative bg-background border-2 border-primary/40 rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center transition-all duration-500 ${closing ? 'scale-90 opacity-0' : 'scale-100 opacity-100 animate-scale-in'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>

        <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
          <Users size={32} className="text-primary" />
        </div>

        <h2 className="font-heading text-2xl font-bold text-primary mb-1">
          {texts.title[lang]}
        </h2>
        <p className="text-foreground font-semibold text-lg mb-6">
          {texts.subtitle[lang]}
        </p>

        <div className="space-y-3 mb-6 bg-muted/50 rounded-xl p-4">
          <div className="flex items-center justify-center gap-3">
            <CalendarDays size={20} className="text-primary" />
            <span className="font-bold text-lg text-foreground">{texts.date[lang]}</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Clock size={20} className="text-primary" />
            <span className="font-bold text-lg text-foreground">{texts.time[lang]}</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <MapPin size={20} className="text-primary" />
            <span className="font-bold text-lg text-foreground">{texts.place[lang]}</span>
          </div>
        </div>

        <button
          onClick={handleClose}
          className="bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors text-lg tracking-wide"
        >
          {texts.cta[lang]}
        </button>
      </div>
    </div>
  );
};

export default EntryPopup;
