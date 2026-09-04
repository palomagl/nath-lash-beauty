import { createFileRoute } from "@tanstack/react-router";
import heroLashes from "../assets/hero-lashes.jpg";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";

const instagram = "https://www.instagram.com/nathlorenzon_beauty/";
const whatsapp =
  "https://api.whatsapp.com/send/?phone=5551999866217&text=Ol%C3%A1%2C+tudo+bem%3F+Ser%C3%A1+uma+honra+atende-l%C3%A1%21";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nath Beauty — Extensão de Cílios em Sapiranga" },
      {
        name: "description",
        content:
          "Nath Lorenzon é especialista em extensão de cílios e design de sobrancelhas em Sapiranga, RS. Agende seu horário.",
      },
      { property: "og:title", content: "Nath Beauty — Olhar que transforma" },
      {
        property: "og:description",
        content: "Extensão de cílios e sobrancelhas com atendimento em Sapiranga, RS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased selection:bg-secondary selection:text-primary">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <ReviewsSection />
        <BookingSection />
      </main>
      <Footer />
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Nath no WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-editorial transition-transform hover:scale-105 md:hidden"
      >
        <span aria-hidden="true" className="text-xl">↗</span>
      </a>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#inicio" className="font-display text-2xl leading-none">
          Nath <span className="italic text-primary">Beauty</span>
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-8 text-sm md:flex">
          <a href="#servicos" className="transition-colors hover:text-primary">Serviços</a>
          <a href="#resultados" className="transition-colors hover:text-primary">Resultados</a>
          <a href="#depoimentos" className="transition-colors hover:text-primary">Depoimentos</a>
        </nav>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="inicio" className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-14 px-6 py-16 lg:grid-cols-12 lg:py-20">
      <div className="relative z-10 lg:col-span-6">
        <span className="inline-block bg-secondary px-4 py-2 text-xs font-semibold uppercase text-primary">
          Nath Lorenzon · Sapiranga/RS
        </span>
        <h1 className="mt-8 font-display text-6xl leading-[0.92] text-balance sm:text-7xl lg:text-8xl">
          Olhar que <span className="block italic text-primary">transforma.</span>
        </h1>
        <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
          Especialista em extensão de cílios e sobrancelhas, elevando sua autoestima através de um olhar feito para você.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-primary transition-all hover:-translate-y-0.5 hover:bg-foreground"
          >
            Agendar via WhatsApp
          </a>
          <a href="#resultados" className="border-b-2 border-secondary pb-1 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">
            Ver resultados
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md lg:col-span-6 lg:mr-0">
        <div aria-hidden="true" className="absolute -left-5 -top-5 size-full border-2 border-secondary" />
        <div className="relative aspect-[4/5] overflow-hidden bg-secondary shadow-editorial">
          <img src={heroLashes} alt="Aplicação profissional de extensão de cílios" width={1000} height={1250} fetchPriority="high" className="size-full object-cover" />
        </div>
        <div className="absolute -bottom-8 -left-4 bg-card p-5 shadow-editorial sm:-left-10">
          <strong className="block font-display text-3xl font-normal text-primary">+6 anos</strong>
          <span className="text-[11px] font-semibold uppercase text-muted-foreground">de experiência</span>
        </div>
      </div>
    </section>
  );
}

const services = [
  { number: "01", title: "Volume Brasileiro", description: "Preenchimento marcante, leve e com acabamento personalizado para o seu olhar." },
  { number: "02", title: "Volume Russo", description: "Fios delicados em leques para conquistar mais densidade, definição e sofisticação." },
  { number: "03", title: "Design de Sobrancelhas", description: "Desenho personalizado que valoriza seus traços e cria harmonia para o rosto." },
];

function ServicesSection() {
  return (
    <section id="servicos" className="bg-card py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase text-primary">Especialidades</span>
            <h2 className="mt-3 font-display text-5xl">Serviços</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">Técnicas escolhidas para respeitar seus fios naturais e traduzir o resultado que você deseja.</p>
        </div>
        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="group bg-background p-8 transition-colors duration-300 hover:bg-primary hover:text-primary-foreground">
              <span className="font-display text-4xl text-primary/35 transition-colors group-hover:text-primary-foreground/50">{service.number}</span>
              <h3 className="mt-10 font-display text-2xl">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/80">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const gallery = [
  { src: gallery1, alt: "Extensão de cílios com acabamento natural" },
  { src: gallery2, alt: "Resultado de volume de cílios marcante" },
  { src: gallery3, alt: "Extensão de cílios com curvatura personalizada" },
  { src: gallery4, alt: "Detalhe de aplicação profissional de cílios" },
];

function GallerySection() {
  return (
    <section id="resultados" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase text-primary">Portfólio</span>
          <h2 className="mt-4 max-w-sm font-display text-5xl leading-tight">O resultado que você merece.</h2>
          <p className="mt-7 max-w-sm leading-relaxed text-muted-foreground">Cada aplicação é planejada para valorizar a beleza que já existe em você.</p>
          <div className="mt-10 space-y-6 border-l-2 border-secondary pl-6">
            <div><strong className="block text-sm">Atendimento personalizado</strong><span className="text-sm text-muted-foreground">Mapeamento pensado para cada olhar</span></div>
            <div><strong className="block text-sm">Técnica e segurança</strong><span className="text-sm text-muted-foreground">Cuidado em todas as etapas</span></div>
          </div>
          <a href={instagram} target="_blank" rel="noopener noreferrer" className="mt-10 inline-block border-b-2 border-primary pb-1 font-semibold text-primary">@nathlorenzon_beauty ↗</a>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:col-span-7">
          <div className="space-y-4">
            <GalleryImage image={gallery[0]} shape="square" />
            <GalleryImage image={gallery[1]} shape="portrait" />
          </div>
          <div className="space-y-4 pt-12">
            <GalleryImage image={gallery[2]} shape="portrait" />
            <GalleryImage image={gallery[3]} shape="square" />
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryImage({ image, shape }: { image: { src: string; alt: string }; shape: "square" | "portrait" }) {
  return (
    <figure className={`group overflow-hidden bg-secondary ${shape === "square" ? "aspect-square" : "aspect-[3/4]"}`}>
      <img src={image.src} alt={image.alt} width={800} height={shape === "square" ? 800 : 1067} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
    </figure>
  );
}

function ReviewsSection() {
  return (
    <section id="depoimentos" className="bg-foreground py-24 text-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase text-secondary">Experiências reais</span>
          <h2 className="mt-4 font-display text-5xl">Quem confia na Nath</h2>
          <p aria-label="5 estrelas" className="mt-5 text-lg text-secondary">★★★★★</p>
        </div>
        <div className="mx-auto mt-14 grid max-w-4xl gap-px bg-background/15 md:grid-cols-2">
          <figure className="bg-foreground p-8 md:p-10">
            <blockquote className="font-display text-2xl italic leading-relaxed">“A Nath tem um cuidado incrível e o resultado fica leve, delicado e lindo.”</blockquote>
            <figcaption className="mt-8 text-sm text-background/60">Cliente Nath Beauty</figcaption>
          </figure>
          <figure className="bg-foreground p-8 md:p-10">
            <blockquote className="font-display text-2xl italic leading-relaxed">“Ela entende exatamente o que combina com o nosso olhar. Atendimento impecável.”</blockquote>
            <figcaption className="mt-8 text-sm text-background/60">Cliente Nath Beauty</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function BookingSection() {
  return (
    <section id="agendar" className="bg-primary py-24 text-primary-foreground">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <span className="text-xs font-semibold uppercase text-primary-foreground/70">Seu novo olhar começa aqui</span>
        <h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">Pronta para se sentir ainda mais linda?</h2>
        <p className="mt-6 max-w-xl text-primary-foreground/80">Fale diretamente com a Nath, escolha o melhor procedimento e reserve seu horário.</p>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-10 rounded-md bg-foreground px-10 py-5 font-semibold text-background transition-transform hover:-translate-y-0.5">Falar com a Nath no WhatsApp ↗</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
        <div><strong className="font-display text-2xl font-normal">Nath <span className="italic text-primary">Beauty</span></strong><p className="mt-1 text-xs text-muted-foreground">Nath Lorenzon · Sapiranga/RS</p></div>
        <div className="flex gap-7 text-sm font-semibold"><a href={instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram ↗</a><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp ↗</a></div>
        <p className="text-xs text-muted-foreground">© 2026 Nath Beauty</p>
      </div>
    </footer>
  );
}