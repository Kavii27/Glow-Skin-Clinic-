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
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
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
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-2xl shadow-luxe">
            <img src={post.image} alt={post.title} className="aspect-16/9 w-full object-cover" />
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <article className="mx-auto max-w-2xl space-y-6 px-5 py-16 text-[15px] leading-relaxed text-foreground/90 sm:px-8">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </article>
      </Reveal>

      <ConsultationCTA />
    </>
  );
}
