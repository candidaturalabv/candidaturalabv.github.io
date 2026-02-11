import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import { Shield } from 'lucide-react';

const EMAIL = 'candidaturalabvicomtech@gmail.com';
const TELEGRAM_URL = 'https://t.me/+3Daj16NC3iphM2Q0';

const telegramTexts = {
  es: 'Únete a nuestro canal de Telegram',
  eu: 'Batu gure Telegram kanalera',
  en: 'Join our Telegram channel',
};

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="24" height="24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

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
        <p className="text-primary font-semibold text-lg italic mb-6">
          {parts[0]}
          <a href={`mailto:${EMAIL}`} className="underline hover:text-primary/80">{EMAIL}</a>
          {parts[1] || ''}
        </p>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/85 transition-colors"
        >
          <TelegramIcon className="shrink-0" />
          {telegramTexts[lang]}
        </a>
      </div>
    </section>
  );
};

export default AdvisorySection;
