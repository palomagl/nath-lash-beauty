import { createFileRoute } from "@tanstack/react-router";
import heroLashes from "../assets/hero-lashes.jpg";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nath Beauty — Lash Designer em São Paulo" },
      {
        name: "description",
        content:
          "Ateliê de lash design da Nath: extensão de cílios fio a fio com técnicas exclusivas, naturalidade e sofisticação. Agende sua avaliação.",
      },
      {
        property: "og:title",
        content: "Nath Beauty — Lash Designer em São Paulo",
      },
      {
        property: "og:description",
        content:
          "Extensão de cílios fio a fio com técnicas exclusivas e resultados naturais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-petal font-body text-ink antialiased selection:bg-rose/20 selection:text-ink">
      {/* Atmospheric Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-20 size-[600px] rounded-full bg-rose-light/40 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-1/3 -right-40 size-[500px] rounded-full bg-rose/10 blur-[140px]"></div>
        <div className="absolute -bottom-20 left-1/4 size-[550px] rounded-full bg-petal-deep blur-[100px]"></div>
      </div>

      <Header />

      <main className="relative z-20">
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <ReviewsSection />
        <BookingSection />
      </main>

      <Footer />

      {/* Floating Action */}
      <a
        href="#agendar"
        className="fixed bottom-8 right-8 z-50 flex size-14 items-center justify-center rounded-full bg-rose text-white shadow-2xl shadow-rose/40 transition-transform hover:scale-110 active:scale-90 md:hidden"
        aria-label="Agendar horário"
      >
        <span className="text-xl">+</span>
      </a>
    </div>
  );
}

function Header() {
  return (
    <header className="relative z-30 mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
      <div className="group cursor-default">
        <span className="font-display text-2xl font-semibold tracking-tighter">
          nath beauty
        </span>
        <span className="mt-1 block font-meta text-[9px] uppercase tracking-[0.4em] text-rose">
          master lash atelier
        </span>
      </div>
      <nav className="hidden items-center gap-10 font-body text-[13px] tracking-wide text-ink-soft md:flex">
        <a href="#servicos" className="transition-colors hover:text-rose">
          Serviços
        </a>
        <a href="#galeria" className="transition-colors hover:text-rose">
          Galeria
        </a>
        <a href="#depoimentos" className="transition-colors hover:text-rose">
          Reviews
        </a>
      </nav>
      <a
        href="#agendar"
        className="rounded-full bg-ink px-6 py-2.5 font-body text-xs font-medium text-white transition-all hover:bg-rose hover:shadow-lg hover:shadow-rose/20"
      >
        Agendar
      </a>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-6 lg:pt-12">
      <div className="grid items-center gap-16 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <div className="absolute -top-16 -left-12 -z-10 font-display text-[180px] italic leading-none text-rose/5 select-none">
            Nath
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-petal-deep shadow-2xl shadow-rose/5 ring-1 ring-white/60">
            <img
              src={heroLashes}
              alt="Close macro de cílios premium aplicados com técnica exclusiva"
              width={1000}
              height={1250}
              className="size-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute bottom-6 left-6 rounded-full bg-white/80 px-4 py-2 font-meta text-[9px] uppercase tracking-[0.2em] text-ink backdrop-blur-md ring-1 ring-black/5">
              Premium Silk
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="animate-entry inline-flex items-center gap-3 rounded-full bg-white/40 px-4 py-1.5 font-meta text-[10px] uppercase tracking-[0.25em] text-rose backdrop-blur-sm ring-1 ring-rose/10">
            <span className="size-1.5 rounded-full bg-rose"></span>
            Estética do Olhar
          </div>
          <h1 className="animate-entry mt-8 max-w-[15ch] font-display text-5xl font-medium leading-[0.95] tracking-tight text-balance lg:text-7xl [animation-delay:150ms]">
            A leveza de um <em className="italic text-rose">olhar</em> sob
            medida.
          </h1>
          <p className="animate-entry mt-8 max-w-[42ch] font-body text-lg leading-relaxed text-ink-soft text-pretty [animation-delay:300ms]">
            Design de cílios focado na naturalidade. Técnicas exclusivas para
            quem busca sofisticação sem excessos.
          </p>
          <div className="animate-entry mt-10 flex flex-wrap items-center gap-4 [animation-delay:450ms]">
            <a
              href="#agendar"
              className="group inline-flex items-center gap-3 rounded-full bg-rose px-8 py-4 font-body text-sm font-medium text-white transition-all hover:bg-ink hover:shadow-xl hover:shadow-ink/10"
            >
              Reservar Horário
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center rounded-full border border-rose/20 bg-transparent px-8 py-4 font-body text-sm text-ink transition-colors hover:bg-rose/5"
            >
              Conhecer Técnicas
            </a>
          </div>

          <div className="animate-entry mt-16 flex gap-12 border-t border-hairline pt-8 [animation-delay:600ms]">
            <div>
              <span className="font-display text-3xl font-semibold text-rose">
                98%
              </span>
              <span className="mt-1 block font-meta text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                Fidelidade
              </span>
            </div>
            <div>
              <span className="font-display text-3xl font-semibold text-rose">
                15k+
              </span>
              <span className="mt-1 block font-meta text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                Aplicação
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Soft Volume Rose",
      description:
        "A técnica assinatura do ateliê. Volume etéreo com fios ultrafinos em curvaturas personalizadas.",
      duration: "2h 30m",
      price: "R$ 290",
    },
    {
      number: "02",
      title: "Natural Mapping",
      description:
        "Extensões clássicas que respeitam a anatomia do seu olho, realçando a beleza que já existe.",
      duration: "1h 45m",
      price: "R$ 220",
    },
    {
      number: "03",
      title: "Hybrid Glow",
      description:
        "Combinação equilibrada de fios clássicos e volumosos para um olhar com leveza e definição.",
      duration: "2h",
      price: "R$ 250",
    },
    {
      number: "04",
      title: "Retoque Express",
      description:
        "Manutenção rápida para manter o design impecável entre as aplicações completas.",
      duration: "1h",
      price: "R$ 120",
    },
  ];

  return (
    <section id="servicos" className="mx-auto max-w-6xl px-6 pt-32">
      <div className="mb-16">
        <span className="font-meta text-[10px] uppercase tracking-[0.3em] text-rose">
          menu de serviços
        </span>
        <h2 className="mt-4 font-display text-4xl font-medium tracking-tight">
          Técnicas e Protocolos
        </h2>
      </div>

      <div className="grid gap-4">
        {services.map((service) => (
          <div
            key={service.number}
            className="group relative overflow-hidden rounded-3xl bg-white/30 p-8 ring-1 ring-rose/5 transition-all hover:bg-white/60"
          >
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div className="flex gap-6">
                <span className="font-meta text-xs text-rose/40">
                  {service.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-md font-body text-sm text-ink-soft">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8 md:text-right">
                <div>
                  <span className="block font-meta text-[10px] uppercase tracking-widest text-ink-soft">
                    Duração
                  </span>
                  <span className="font-display text-lg">
                    {service.duration}
                  </span>
                </div>
                <div className="h-8 w-px bg-hairline"></div>
                <div>
                  <span className="block font-meta text-[10px] uppercase tracking-widest text-ink-soft">
                    Valor
                  </span>
                  <span className="font-display text-lg text-rose">
                    {service.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function GallerySection() {
  const images = [
    { src: gallery1, alt: "Resultado natural de extensão de cílios clássica" },
    { src: gallery2, alt: "Look volumoso com técnica de volume russo" },
    { src: gallery3, alt: "Estilo híbrido com curvatura suave e natural" },
    { src: gallery4, alt: "Detalhe de cílios em estilo cat-eye elegante" },
  ];

  return (
    <section id="galeria" className="mx-auto max-w-6xl px-6 pt-32">
      <div className="mb-16">
        <span className="font-meta text-[10px] uppercase tracking-[0.3em] text-rose">
          galeria
        </span>
        <h2 className="mt-4 font-display text-4xl font-medium tracking-tight">
          Olhares que contam histórias
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-3xl bg-petal-deep ring-1 ring-rose/5"
          >
            <img
              src={image.src}
              alt={image.alt}
              width={1024}
              height={1024}
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviews = [
    {
      quote:
        "Parece que nasci assim. Leveza total, sem nada artificial. A Nath tem um olhar único.",
      name: "Marina P.",
      service: "Soft Volume Rose",
    },
    {
      quote:
        "Atendimento impecável e resultado cirúrgico. Virei cliente fiel do ateliê.",
      name: "Clara S.",
      service: "Natural Mapping",
    },
    {
      quote:
        "A Nath entende o seu olhar antes de colocar um fio só. Experiência premium do início ao fim.",
      name: "Bianca R.",
      service: "Hybrid Glow",
    },
  ];

  return (
    <section id="depoimentos" className="mx-auto max-w-6xl px-6 pt-32">
      <div className="mb-16">
        <span className="font-meta text-[10px] uppercase tracking-[0.3em] text-rose">
          reviews
        </span>
        <h2 className="mt-4 font-display text-4xl font-medium tracking-tight">
          Confiança em cada olhar
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {reviews.map((review, index) => (
          <figure
            key={index}
            className="rounded-3xl bg-white/30 p-8 ring-1 ring-rose/5"
          >
            <blockquote className="font-body text-sm leading-relaxed text-ink">
              “{review.quote}”
            </blockquote>
            <figcaption className="mt-6">
              <span className="font-display text-base font-medium text-rose">
                {review.name}
              </span>
              <span className="mt-1 block font-meta text-[10px] uppercase tracking-widest text-ink-soft">
                {review.service}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function BookingSection() {
  return (
    <section id="agendar" className="mx-auto max-w-6xl px-6 py-32">
      <div className="relative overflow-hidden rounded-[3rem] bg-ink px-8 py-20 text-center text-white md:px-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-1/2 -left-1/4 size-[800px] rounded-full bg-rose blur-[160px]"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="font-meta text-[10px] uppercase tracking-[0.4em] text-rose">
            agendamento exclusivo
          </span>
          <h2 className="mt-8 font-display text-4xl font-medium leading-tight md:text-5xl">
            Transforme seu olhar com a precisão que você merece.
          </h2>
          <p className="mt-6 font-body text-white/60">
            Horários limitados para garantir a excelência em cada aplicação.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-rose px-10 py-4 font-medium transition-transform hover:scale-105 active:scale-95"
            >
              Falar no WhatsApp
            </a>
            <span className="font-meta text-[10px] uppercase tracking-widest text-white/40">
              Atendimento seg a sáb
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <span className="font-display text-xl font-semibold">
            nath beauty
          </span>
          <p className="mt-1 font-meta text-[9px] uppercase tracking-widest text-ink-soft">
            © 2024 · All rights reserved
          </p>
        </div>
        <div className="flex gap-8 font-meta text-[10px] uppercase tracking-widest text-ink-soft">
          <a
            href="https://instagram.com/nathbeauty"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose"
          >
            WhatsApp
          </a>
          <a href="#" className="hover:text-rose">
            Location
          </a>
        </div>
      </div>
    </footer>
  );
}
