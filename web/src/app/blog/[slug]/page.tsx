import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./article.module.css";
import { makeCx } from "@/lib/cx";
import { formatPostDate, getAllPosts, getPost } from "@/lib/blog";
import PostCard from "@/components/PostCard";
import { ArrowRight, ClockDial } from "@/components/icons";

const c = makeCx(styles);

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

// Only slugs with an MDX file exist; anything else is a 404.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Ubidata`,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);
  const others = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <section className={c("spotlight", "hero")}>
        <div className={c("wrap")}>
          <div className={c("narrow")}>
            <span className={c("hero__crumb")}>
              <Link href="/">Inicio</Link> <span className={c("sep")}>/</span>{" "}
              <Link href="/blog">Novedades</Link> <span className={c("sep")}>/</span> {post.category}
            </span>
            <div>
              <span className={c("tag")}>{post.category}</span>
            </div>
            <h1 className={c("hero__h1")}>{post.title}</h1>
            <p className={c("hero__sub")}>{post.description}</p>
            <div className={c("meta")}>
              <time className={c("meta__item")} dateTime={post.date}>
                {formatPostDate(post.date)}
              </time>
              <span className={c("dot")}>·</span>
              <span className={c("meta__item")}>
                <ClockDial className={c("i")} /> {post.readingTime} min de lectura
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className={c("body")}>
        <div className={c("wrap")}>
          <div className={c("narrow")}>
            <div className={c("prose")}>
              <Content />
            </div>
            <Link className={c("back")} href="/blog">
              <ArrowRight className={c("i")} /> Volver a Novedades
            </Link>
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className={c("more")}>
          <div className={c("wrap")}>
            <div className={c("more__head")}>
              <div>
                <span className={c("eyebrow")}>Seguí leyendo</span>
                <h2 className={c("more__h2")}>Más novedades sobre Address Intelligence</h2>
              </div>
              <Link className={c("more__all")} href="/blog">
                Ver todas <ArrowRight className={c("i")} />
              </Link>
            </div>
            <div className={c("grid")}>
              {others.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
