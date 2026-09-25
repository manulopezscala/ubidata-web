import Link from "next/link";
import type { CSSProperties } from "react";
import styles from "./PostCard.module.css";
import { makeCx } from "@/lib/cx";
import { ArrowRight } from "./icons";
import type { PostCover, PostMeta } from "@/lib/blog";

const c = makeCx(styles);

/** Bar-mark motif per cover variant, as drawn on the original Novedades cards. */
const BARS: Record<PostCover, CSSProperties[]> = {
  c1: [{ height: "60%" }, { height: "90%" }, { height: "40%" }, { height: "75%" }],
  c2: [
    { height: "80%", background: "var(--cyan-400)" },
    { height: "45%", background: "var(--green-400)" },
    { height: "95%", background: "var(--cyan-300)" },
    { height: "65%", background: "var(--green-400)" },
  ],
  c3: [{ height: "55%" }, { height: "85%" }, { height: "70%" }, { height: "95%" }],
};

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link className={c("post")} href={`/blog/${post.slug}`} data-reveal>
      <div className={c("post__cover", post.cover)}>
        <div className={c("grid-tex")} />
        <div className={c("bars")}>
          {BARS[post.cover].map((style, i) => (
            <span key={i} style={style} />
          ))}
        </div>
      </div>
      <div className={c("post__body")}>
        <div className={c("post__meta")}>
          <span className={c("tag")}>{post.category}</span>
          <span className={c("dot")}>·</span>
          <span className={c("date")}>{post.readingTime} min de lectura</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <span className={c("read")}>
          Leer artículo <ArrowRight className={c("i")} />
        </span>
      </div>
    </Link>
  );
}
