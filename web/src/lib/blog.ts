import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/** Card cover style, matching the three variants of the original Novedades cards. */
export type PostCover = "c1" | "c2" | "c3";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  category: string;
  /** Estimated reading time in minutes. */
  readingTime: number;
  cover: PostCover;
};

const POSTS_DIR = path.join(process.cwd(), "src", "content", "blog");
const COVERS: PostCover[] = ["c1", "c2", "c3"];

function fail(file: string, msg: string): never {
  throw new Error(`[blog] ${file}: ${msg}`);
}

function requireString(data: Record<string, unknown>, key: string, file: string): string {
  const v = data[key];
  if (typeof v !== "string" || !v.trim()) fail(file, `frontmatter "${key}" is required`);
  return v.trim();
}

/** YAML turns an unquoted 2026-08-12 into a Date at UTC midnight; accept both forms. */
function toIsoDate(v: unknown, file: string): string {
  if (v instanceof Date && !isNaN(v.getTime())) return v.toISOString().slice(0, 10);
  if (typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v.trim())) return v.trim();
  fail(file, 'frontmatter "date" must be YYYY-MM-DD');
}

function parsePost(file: string): PostMeta {
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data } = matter(raw);
  const fileSlug = file.replace(/\.mdx$/, "");

  const slug = requireString(data, "slug", file);
  if (slug !== fileSlug) fail(file, `slug "${slug}" must match the file name "${fileSlug}"`);

  const readingTime = Number(data.readingTime);
  if (!Number.isFinite(readingTime) || readingTime <= 0) {
    fail(file, 'frontmatter "readingTime" must be a positive number of minutes');
  }

  const cover = (data.cover ?? "c1") as PostCover;
  if (!COVERS.includes(cover)) fail(file, `frontmatter "cover" must be one of ${COVERS.join(", ")}`);

  return {
    slug,
    title: requireString(data, "title", file),
    description: requireString(data, "description", file),
    date: toIsoDate(data.date, file),
    category: requireString(data, "category", file),
    readingTime,
    cover,
  };
}

/** All posts, newest first. */
export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(parsePost)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): PostMeta | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

const dateFmt = new Intl.DateTimeFormat("es-AR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** "12 de agosto de 2026" */
export function formatPostDate(iso: string): string {
  return dateFmt.format(new Date(`${iso}T00:00:00Z`));
}
