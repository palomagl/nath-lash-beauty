import { createFileRoute } from "@tanstack/react-router";

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
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.463 3.488A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
        </svg>
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
          <img src="/foto1.jpeg" alt="Nath Lorenzon sorrindo, com blazer rosa, em foto de estúdio" width={668} height={1000} fetchPriority="high" className="size-full object-cover object-[center_20%]" />
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
  { number: "03", title: "Volume Egípcio 5D", description: "Fios abertos em leque de 5 pontas, puxados para os cantos externos, para um efeito marcante e alongado." },
  { number: "04", title: "Design de Sobrancelhas", description: "Desenho personalizado que valoriza seus traços e cria harmonia para o rosto." },
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
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
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

const gallery: { src: string; alt: string; type?: "video"; position?: string }[] = [
  { src: "/olhar.jpeg", alt: "Detalhe real de resultado de extensão de cílios" },
  { src: "/olhar3.png", alt: "Detalhe real de resultado de extensão de cílios" },
  { src: "/videoolhar.mp4", alt: "Vídeo mostrando resultado real de extensão de cílios", type: "video" },
  {
    src: "/olhar2.jpeg",
    alt: "Detalhe real de resultado de cílios e sobrancelha",
    position: "center 25%",
  },
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

function GalleryImage({
  image,
  shape,
}: {
  image: { src: string; alt: string; type?: "video"; position?: string };
  shape: "square" | "portrait";
}) {
  const style = image.position ? { objectPosition: image.position } : undefined;
  return (
    <figure className={`group overflow-hidden bg-secondary ${shape === "square" ? "aspect-square" : "aspect-[3/4]"}`}>
      {image.type === "video" ? (
        <video
          src={image.src}
          aria-label={image.alt}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          style={style}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <img
          src={image.src}
          alt={image.alt}
          width={800}
          height={shape === "square" ? 800 : 1067}
          loading="lazy"
          style={style}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
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