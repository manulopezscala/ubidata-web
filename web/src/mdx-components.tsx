import type { MDXComponents } from "mdx/types";
import Link from "next/link";

// Article typography lives in app/blog/[slug]/article.module.css (.prose).
// Overrides: tables get a scroll wrapper for narrow screens, and internal links
// go through next/link so they navigate client-side.
const components: MDXComponents = {
  table: (props) => (
    <div data-table-wrap>
      <table {...props} />
    </div>
  ),
  a: ({ href = "", children, ...rest }) =>
    href.startsWith("/") ? (
      <Link href={href} {...rest}>
        {children}
      </Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
