import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FaqSection = () => {
  const { lang } = useLanguage();
  const t = translations.faq;

  return (
    <section id="faq" className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="section-title text-foreground">{t.title[lang]}</h2>
        <div className="section-divider mt-3 mb-10" />

        <Accordion type="single" collapsible className="space-y-3">
          {t.items.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6 overflow-hidden">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                {item.q[lang]}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed space-y-3">
                {item.a[lang].split('\n\n').map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
