import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { findBlogPostBySlug } from "@/lib/clinic-data";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = findBlogPostBySlug(params.slug);
    return {
      meta: [
        { title: post ? `${post.title} | Glow Skin Clinic` : "Blog | Glow Skin Clinic" },
        {
          name: "description",
          content: post?.excerpt ?? "Skincare insight from Glow Skin Clinic.",
        },
      ],
    };
  },
  component: BlogDetailPage,
});

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*.+?\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

type Block =
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "paragraph"; text: string };

function groupContentBlocks(content: string[]): Block[] {
  const blocks: Block[] = [];
  for (const line of content) {
    if (line.startsWith("## ")) {
      blocks.push({ type: "heading", text: line.slice(3) });
    } else if (line.startsWith("- ")) {
      const last = blocks[blocks.length - 1];
      if (last?.type === "list") {
        last.items.push(line.slice(2));
      } else {
        blocks.push({ type: "list", items: [line.slice(2)] });
      }
    } else {
      blocks.push({ type: "paragraph", text: line });
    }
  }
  return blocks;
}

function BlogDetailPage() {
  const { slug } = Route.useParams();
  const post = findBlogPostBySlug(slug);

  if (!post) {
    return (
      <section className="relative mx-auto max-w-2xl px-5 pt-44 pb-28 text-center sm:px-8">
        <p className="eyebrow">Not Found</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">We couldn't find that article</h1>
        <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
          The article you're looking for may have been renamed or moved.
        </p>
        <Link
          to="/blog"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-[11px] tracking-[0.26em] text-primary-foreground uppercase shadow-soft"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Journal
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="relative pt-36 pb-16 sm:pt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] text-muted-foreground uppercase transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Journal
            </Link>
            <p className="eyebrow mt-8">
              {post.category} · {formatDate(post.date)}
            </p>
            <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">{post.title}</h1>
            <p className="mt-4 text-[13px] tracking-[0.1em] text-muted-foreground uppercase">
              By {post.author}
            </p>
          </Reveal>
        </div>
      </section>

      <Reveal delay={0.1}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-2xl shadow-luxe">
            <img src={post.image} alt={post.title} className="aspect-16/9 w-full object-cover" />
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <article className="mx-auto max-w-7xl space-y-6 px-5 py-16 text-[15px] leading-relaxed text-foreground/90 sm:px-8">
          {groupContentBlocks(post.content).map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={i}
                  className="pt-4 font-[family-name:var(--font-display)] text-2xl leading-snug text-foreground sm:text-[28px]"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="list-none space-y-2.5 pl-1">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      <span>{renderInline(item)}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return <p key={i}>{renderInline(block.text)}</p>;
          })}
        </article>
      </Reveal>

      <ConsultationCTA />
    </>
  );
}
