import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import { Calendar } from 'lucide-react';

const BlogSection = () => {
  const { lang } = useLanguage();
  const t = translations.blog;

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="section-title text-foreground">{t.title[lang]}</h2>
        <div className="section-divider mt-3 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.posts.map((post, i) => (
            <article key={i} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-2 bg-primary" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title[lang]}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {post.excerpt[lang]}
                </p>
                <button className="mt-4 text-primary font-semibold text-sm hover:underline">
                  {t.readMore[lang]} →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
