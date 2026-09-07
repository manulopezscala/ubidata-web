/**
 * Builds a classname helper bound to a CSS Module's exports.
 *
 * Lets JSX keep the original prototype class names verbatim — including
 * hyphenated (`sec-h2`) and compound (`btn btn-grad`) ones — while still
 * resolving to the module's locally-scoped, hashed class names.
 *
 * Unknown names pass through unchanged (useful for stateful/global hooks).
 */
export function makeCx(styles: Record<string, string>) {
  return (...names: Array<string | false | null | undefined>): string =>
    names
      .filter((n): n is string => Boolean(n))
      .map((n) => styles[n] ?? n)
      .join(" ");
}
