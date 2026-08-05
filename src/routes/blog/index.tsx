import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/lib/clinic-data";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Glow Skin Clinic" },
      {
        name: "description",
        content:
          "Skincare insight, treatment guidance and clinic news from Dr. Apeksha Herath and the team.",
      },
      { property: "og:title", content: "Blog | Glow Skin Clinic" },
      {
        property: "og:description",
        content: "Skincare insight and treatment guidance from Glow Skin Clinic.",
      },
    ],
  }),
  component: BlogIndexPage,
});

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="The Glow Journal"
        description="Skincare insight, treatment guidance and clinic news from Dr. Apeksha Herath."
      />

      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1}>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group block h-full overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-luxe"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10px] tracking-[0.24em] text-gold uppercase">
                    {post.category} · {formatDate(post.date)}
                  </p>
                  <h2 className="mt-3 text-xl leading-snug">{post.title}</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[10px] tracking-[0.24em] text-foreground/70 uppercase transition-colors group-hover:text-gold">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
