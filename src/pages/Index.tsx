import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/9f54e8c0-24e5-4a85-9211-db6b3029508f/files/92515f0e-f1ca-4057-b306-14acf689529c.jpg";

const NAV_LINKS = [
  { href: "#about", label: "О нас" },
  { href: "#services", label: "Услуги" },
  { href: "#privacy", label: "Конфиденциальность" },
  { href: "#formats", label: "Форматы" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#process", label: "Процесс" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacts", label: "Контакты" },
];

const TRUST_ITEMS = [
  {
    icon: "ShieldCheck",
    title: "NDA с командой",
    desc: "Все сотрудники и подрядчики работают по соглашению о конфиденциальности.",
  },
  {
    icon: "EyeOff",
    title: "Контроль фото и видео",
    desc: "Согласуем правила съёмки и публикаций, исключаем несанкционированный контент.",
  },
  {
    icon: "Users",
    title: "Закрытый список доступа",
    desc: "Доступ на мероприятие только по приглашениям и подтверждению.",
  },
  {
    icon: "Lock",
    title: "Защищённое хранение материалов",
    desc: "Материалы хранятся по согласованным протоколам и срокам.",
  },
];

const SERVICES = [
  {
    icon: "Briefcase",
    title: "Корпоративные события",
    desc: "Форумы, стратегические сессии, закрытые встречи и клиентские мероприятия.",
  },
  {
    icon: "Wine",
    title: "Частные мероприятия",
    desc: "Дни рождения, ужины, private party и камерные события без лишнего внимания.",
  },
  {
    icon: "Star",
    title: "VIP / Closed events",
    desc: "Закрытые презентации, визиты VIP-гостей и события с особым уровнем приватности.",
  },
  {
    icon: "KeyRound",
    title: "Под ключ",
    desc: "Концепция, площадка, подрядчики, тайминг, безопасность и сопровождение в одном окне.",
  },
];

const AUDIENCE = [
  {
    icon: "Building2",
    title: "Для бизнеса",
    desc: "Когда важны репутация, точность исполнения и приватность переговоров.",
  },
  {
    icon: "User",
    title: "Для private clients",
    desc: "Когда событие должно остаться только для своих.",
  },
  {
    icon: "UserCheck",
    title: "Для публичных персон",
    desc: "Когда требуется деликатная организация и полный контроль информации.",
  },
];

const ADVANTAGES = [
  {
    icon: "Lock",
    title: "Всё под 7 печатями",
    desc: "Всё, что происходит на мероприятии, не разглашается и не выходит за рамки проекта.",
  },
  {
    icon: "ShieldCheck",
    title: "NDA и ограниченный доступ",
    desc: "Подрядчики и команда работают по согласованным правилам конфиденциальности.",
  },
  {
    icon: "EyeOff",
    title: "Контроль контента",
    desc: "Регулируем съёмку, публикации, списки гостей и доступ к материалам.",
  },
  {
    icon: "Heart",
    title: "Спокойствие клиента",
    desc: "Вы уверены в результате и в том, что лишней огласки не будет.",
  },
];

const PROCESS = [
  { num: "01", title: "Бриф", desc: "Уточняем цели, формат, состав гостей и требования к приватности." },
  { num: "02", title: "Концепция", desc: "Собираем сценарий, площадку, логистику и карту рисков." },
  { num: "03", title: "Подготовка", desc: "Подрядчики, тайминг, доступы, протоколы безопасности и контроль контента." },
  { num: "04", title: "Проведение", desc: "Координируем событие в день мероприятия без шума и сбоев." },
  { num: "05", title: "После события", desc: "Передаём материалы по согласованному контуру или архивируем без разглашения." },
];

const FAQ = [
  {
    q: "Можно ли организовать мероприятие без публичности?",
    a: "Да, мы выстраиваем процесс так, чтобы событие оставалось закрытым.",
  },
  {
    q: "Как контролируется фото и видео?",
    a: "Согласуем правила съёмки, публикации и хранения материалов заранее.",
  },
  {
    q: "Можно ли подписать NDA?",
    a: "Да, конфиденциальность фиксируется в документах и рабочих процессах.",
  },
];

const BENEFIT_TAGS = [
  { icon: "Lock", label: "Конфиденциально" },
  { icon: "KeyRound", label: "Под ключ" },
  { icon: "Clock", label: "Точный тайминг" },
  { icon: "HandHeart", label: "Деликатное сопровождение" },
];

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    const sectionIds = ["hero", "trust", "services", "audience", "process", "faq", "cta"];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;
      observers[id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
            observers[id].unobserve(element);
          }
        },
        { threshold: 0.1 }
      );
      observers[id].observe(element);
    });

    return () => Object.values(observers).forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/70 backdrop-blur-xl border-b border-border/60 z-50">
        <div className="max-w-[1400px] mx-auto px-8 py-5 flex justify-between items-center">
          <div className="font-display font-black text-[13px] leading-[1.05] tracking-tight text-white uppercase">
            BROSCO<br />PRIVATE<br />EVENTS
          </div>
          <nav className="hidden lg:flex gap-8 text-sm font-medium">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-muted-foreground hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#cta"
            className="btn-shimmer hidden md:inline-flex px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-accent via-[#ff6a1a] to-accent text-white rounded-full shadow-[0_6px_24px_-8px_rgba(255,77,26,0.7)] hover:shadow-[0_10px_30px_-6px_rgba(255,77,26,0.9)] hover:-translate-y-0.5 transition-all"
          >
            Обсудить
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative pt-28 pb-20 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 right-0 w-[60%] h-full ember-glow opacity-60 pointer-events-none animate-pulse-glow" />
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-accent/10 blur-[140px] pointer-events-none" />
        <div
          className="absolute bottom-0 right-1/3 w-[420px] h-[420px] rounded-full bg-accent/20 blur-[160px] pointer-events-none animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 items-stretch">
            <div
              className={`flex flex-col justify-between transition-all duration-1000 ${
                visibleSections["hero"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
                    Конфиденциальные мероприятия
                  </span>
                </div>

                <h1 className="font-display font-black text-[56px] lg:text-[76px] leading-[0.95] tracking-[-0.035em] uppercase mb-10">
                  <span className="text-gradient-hero">
                    Организуем<br />
                    мероприятия,<br />
                    о которых знают<br />
                    только{" "}
                  </span>
                  <span className="text-gradient-accent">приглашённые</span>
                </h1>

                <p className="text-[15px] lg:text-base text-muted-foreground leading-relaxed max-w-[520px] mb-10">
                  Частные, корпоративные и VIP-события под ключ.<br />
                  Главное преимущество — абсолютная конфиденциальность:<br />
                  всё, что происходит на мероприятии, остаётся внутри и не разглашается.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#cta"
                    className="btn-shimmer group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent via-[#ff6a1a] to-accent text-white rounded-full font-medium shadow-[0_10px_40px_-10px_rgba(255,77,26,0.6)] hover:shadow-[0_20px_60px_-10px_rgba(255,77,26,0.8)] hover:-translate-y-0.5 transition-all"
                  >
                    Обсудить мероприятие
                    <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#cta"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-full font-medium text-white hover:border-accent/60 hover:bg-accent/5 transition-all"
                  >
                    <Icon name="Lock" size={16} />
                    Запросить NDA
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 ${
                visibleSections["hero"] ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"
              }`}
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-accent/40 via-accent/10 to-transparent rounded-[36px] blur-3xl animate-pulse-glow pointer-events-none" />
              <div className="relative rounded-[28px] overflow-hidden border-gradient-accent bg-card/60 min-h-[460px] lg:min-h-[580px] glow-ring scanlines">
                <img
                  src={HERO_IMAGE}
                  alt="Закрытое мероприятие"
                  className="absolute inset-0 w-full h-full object-cover animate-float"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-background/70 backdrop-blur-md border border-accent/30 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[11px] tracking-[0.15em] text-white uppercase">Private access</span>
                </div>
                <div className="absolute bottom-7 right-7 max-w-[240px] text-right">
                  <p className="text-sm text-white/90 leading-snug">
                    Премиальная организация закрытых мероприятий в Москве и по всему миру
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section id="trust" className="px-8 pb-20">
        <div className="max-w-[1400px] mx-auto">
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-3 border border-border rounded-[24px] bg-card/40 backdrop-blur-sm transition-all duration-1000 ${
              visibleSections["trust"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {TRUST_ITEMS.map((item, i) => (
              <div key={i} className="p-6 flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl border border-accent/40 bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={18} className="text-accent" fallback="Shield" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[15px] mb-1.5 text-white">{item.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div
            className={`grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end mb-14 transition-all duration-1000 ${
              visibleSections["services"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-medium tracking-[0.2em] text-accent uppercase">Услуги</span>
              </div>
              <h2 className="font-display font-black text-[44px] lg:text-[64px] leading-[0.95] tracking-[-0.03em] uppercase text-gradient-hero">
                Какие мероприятия<br />мы организуем
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md lg:text-right lg:ml-auto">
              От идеи и логистики до координации площадки и полного продакшна события.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => {
              const isVisible = visibleSections["services"];
              return (
                <div
                  key={i}
                  className={`card-hover group relative p-7 border border-border rounded-[22px] bg-card/50 hover:bg-card hover:border-accent/60 overflow-hidden ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${i * 90}ms`, transitionDuration: "700ms" }}
                >
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative w-12 h-12 rounded-xl border border-accent/40 bg-accent/10 flex items-center justify-center mb-12 group-hover:bg-accent/20 group-hover:border-accent/70 group-hover:shadow-[0_0_24px_-4px_rgba(255,77,26,0.6)] transition-all duration-500">
                    <Icon name={s.icon} size={20} className="text-accent" fallback="Circle" />
                  </div>
                  <h3 className="font-display font-black uppercase text-[17px] leading-tight tracking-tight mb-3 text-white">
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audience + Advantages */}
      <section id="audience" className="px-8 py-24">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16">
          <div
            className={`transition-all duration-1000 ${
              visibleSections["audience"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium tracking-[0.2em] text-accent uppercase">Для кого</span>
            </div>
            <h2 className="font-display font-black text-[40px] lg:text-[52px] leading-[0.95] tracking-[-0.03em] uppercase mb-10 text-gradient-hero">
              Кому подходит<br />наш формат
            </h2>
            <div className="space-y-3">
              {AUDIENCE.map((a, i) => (
                <div key={i} className="flex gap-5 items-start p-5 border border-border rounded-2xl bg-card/40 hover:border-accent/40 transition-all">
                  <div className="w-12 h-12 rounded-xl border border-accent/40 bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={a.icon} size={20} className="text-accent" fallback="User" />
                  </div>
                  <div>
                    <h3 className="font-display font-black uppercase text-[15px] tracking-tight mb-1.5 text-white">
                      {a.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="advantages"
            className={`transition-all duration-1000 ${
              visibleSections["audience"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium tracking-[0.2em] text-accent uppercase">Ключевое преимущество</span>
            </div>
            <h2 className="font-display font-black text-[40px] lg:text-[52px] leading-[0.95] tracking-[-0.03em] uppercase mb-10 text-gradient-hero">
              Почему нам<br />доверяют<br />конфиденциальные<br />проекты
            </h2>
            <div className="space-y-3">
              {ADVANTAGES.map((a, i) => (
                <div key={i} className="flex gap-5 items-start p-5 border border-border rounded-2xl bg-card/40 hover:border-accent/40 transition-all">
                  <div className="w-12 h-12 rounded-xl border border-accent/40 bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={a.icon} size={20} className="text-accent" fallback="Shield" />
                  </div>
                  <div>
                    <h3 className="font-display font-black uppercase text-[15px] tracking-tight mb-1.5 text-white">
                      {a.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div
            className={`mb-14 transition-all duration-1000 ${
              visibleSections["process"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium tracking-[0.2em] text-accent uppercase">Процесс</span>
            </div>
            <h2 className="font-display font-black text-[44px] lg:text-[64px] leading-[0.95] tracking-[-0.03em] uppercase text-gradient-hero">
              Как мы работаем
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-[34px] left-0 right-0 h-px bg-gradient-to-r from-border via-accent/40 to-border" />
            <div className="grid md:grid-cols-5 gap-6">
              {PROCESS.map((step, i) => {
                const isVisible = visibleSections["process"];
                return (
                  <div
                    key={i}
                    className={`group relative transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    <div className="hidden md:flex absolute top-[28px] left-0 w-3 h-3 rounded-full bg-accent ring-4 ring-background shadow-[0_0_20px_rgba(255,77,26,0.9)] animate-pulse" />
                    <div className="md:pt-16 pt-0">
                      <div className="font-display font-black text-[56px] leading-none mb-4 tracking-tighter text-gradient-accent group-hover:scale-110 transition-transform">
                        {step.num}
                      </div>
                      <h3 className="font-display font-black uppercase text-[16px] tracking-tight mb-2 text-white">
                        {step.title}
                      </h3>
                      <p className="text-[13px] text-muted-foreground leading-relaxed max-w-[220px]">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div
            className={`mb-14 transition-all duration-1000 ${
              visibleSections["faq"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium tracking-[0.2em] text-accent uppercase">FAQ</span>
            </div>
            <h2 className="font-display font-black text-[44px] lg:text-[64px] leading-[0.95] tracking-[-0.03em] uppercase text-gradient-hero">
              Что важно клиентам<br />перед стартом
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {FAQ.map((item, i) => {
              const isVisible = visibleSections["faq"];
              return (
                <div
                  key={i}
                  className={`card-hover group relative p-7 border border-border rounded-[22px] bg-card/50 hover:border-accent/60 overflow-hidden ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms`, transitionDuration: "700ms" }}
                >
                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-accent/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative w-10 h-10 rounded-xl border border-accent/40 bg-accent/10 flex items-center justify-center mb-6 group-hover:shadow-[0_0_24px_-4px_rgba(255,77,26,0.6)] transition-all">
                    <Icon name="HelpCircle" size={18} className="text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-[16px] leading-snug mb-3 text-white">{item.q}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="px-8 pb-12">
        <div className="max-w-[1400px] mx-auto">
          <div
            className={`relative overflow-hidden rounded-[28px] border-gradient-accent bg-card/60 p-10 lg:p-14 glow-ring transition-all duration-1000 ${
              visibleSections["cta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="absolute -right-32 -top-32 w-[480px] h-[480px] ember-glow pointer-events-none animate-pulse-glow" />
            <div
              className="absolute right-0 top-0 bottom-0 w-[200px] opacity-60 pointer-events-none"
              style={{
                background:
                  "repeating-linear-gradient(90deg, transparent 0, transparent 14px, rgba(255,77,26,0.18) 14px, rgba(255,77,26,0.18) 16px)",
              }}
            />

            <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
              <div>
                <h2 className="font-display font-black text-[40px] lg:text-[56px] leading-[0.95] tracking-[-0.03em] uppercase mb-5 text-gradient-hero">
                  Готовы обсудить<br />закрытое мероприятие?
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-xl mb-8">
                  Расскажите задачу — предложим формат, план и безопасную организацию под ваш сценарий.
                </p>
                <div className="flex flex-wrap gap-2">
                  {BENEFIT_TAGS.map((t, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 border border-border rounded-full text-[12px] text-muted-foreground"
                    >
                      <Icon name={t.icon} size={14} className="text-accent" fallback="Check" />
                      {t.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:events@brosco.studio"
                  className="btn-shimmer group inline-flex items-center justify-center gap-2 px-8 py-5 bg-gradient-to-r from-accent via-[#ff6a1a] to-accent text-white rounded-full font-medium shadow-[0_10px_40px_-10px_rgba(255,77,26,0.6)] hover:shadow-[0_20px_60px_-10px_rgba(255,77,26,0.8)] hover:-translate-y-0.5 transition-all text-base"
                >
                  Получить предложение
                  <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <div id="contacts" className="space-y-3 mt-2">
                  <a href="tel:+79991234567" className="flex items-center gap-3 text-sm text-white/90 hover:text-accent transition">
                    <span className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center">
                      <Icon name="Phone" size={15} className="text-accent" />
                    </span>
                    +7 (999) 123-45-67
                  </a>
                  <a
                    href="mailto:events@brosco.studio"
                    className="flex items-center gap-3 text-sm text-white/90 hover:text-accent transition"
                  >
                    <span className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center">
                      <Icon name="Mail" size={15} className="text-accent" />
                    </span>
                    events@brosco.studio
                  </a>
                  <div className="flex items-center gap-3 text-sm text-white/90">
                    <span className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center">
                      <Icon name="MapPin" size={15} className="text-accent" />
                    </span>
                    Москва, Россия
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2025 BROSCO Private Events — Закрытые мероприятия под ключ</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition">
              NDA
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;