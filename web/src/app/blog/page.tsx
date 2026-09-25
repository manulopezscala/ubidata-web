import type { Metadata } from "next";
import Link from "next/link";
import styles from "./blog.module.css";
import { makeCx } from "@/lib/cx";
import { getAllPosts } from "@/lib/blog";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Novedades — Ubidata",
  description:
    "Novedades e insights sobre Address Intelligence: captura, validación, normalización y calidad de datos de direcciones.",
};

const c = makeCx(styles);

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <section className={c("spotlight", "hero")}>
        <div className={c("wrap")}>
          <span className={c("hero__crumb")}>
            <Link href="/">Inicio</Link> <span className={c("sep")}>/</span> Novedades
          </span>
          <div>
            <span className={c("eyebrow", "eyebrow--on-dark")}>Novedades</span>
          </div>
          <h1 className={c("hero__h1")}>
            Novedades e insights sobre <span className={c("grad")}>Address Intelligence</span>
          </h1>
          <p className={c("hero__sub")}>
            Buenas prácticas, casos aplicados y criterios para capturar, validar y operar con
            direcciones confiables.
          </p>
        </div>
      </section>

      <section className={c("list")}>
        <div className={c("wrap")}>
          <div className={c("list__head")}>
            <span className={c("eyebrow")}>Todos los artículos</span>
            <span className={c("list__count")}>
              {posts.length} {posts.length === 1 ? "artículo" : "artículos"}
            </span>
          </div>
          <div className={c("grid")}>
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
