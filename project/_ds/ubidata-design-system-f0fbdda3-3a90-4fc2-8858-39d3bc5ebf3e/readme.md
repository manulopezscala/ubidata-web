# Ubidata Design System

**Ubidata — Inteligencia en datos.** Address Intelligence platform for companies that need to capture, validate, normalize and diagnose addresses in real time or at scale. Ubidata serves ecommerce, logistics, banking, fintech, insurance and enterprise teams through **APIs, batch processing, custom integrations and a web platform**, turning incomplete or inconsistent address data into reliable, structured, actionable information.

**Brand positioning:** modern B2B SaaS — technological, precise and clean, yet trustworthy, corporate and robust enough for traditional enterprise buyers. The product *is* data quality, so the brand must always look exact: aligned grids, tabular numbers, validated states.

## Sources

- `uploads/logo_ubidata.png` — the only provided brand asset: white rounded wordmark + cyan→green bar mark, tagline "Inteligencia en datos". All brand colors were sampled from this mark.
- No codebase, Figma, decks or font files were provided. Everything else in this system is derived from the logo and the written brief (dark navy/blue base, light backgrounds, cyan accents; modular sections, diagrams, API blocks, dashboards, maps, address inputs, data-flow visuals; no stock office photos).

## Language

The brand tagline is Spanish ("Inteligencia en datos"); product UI copy in this system is written in **Spanish** (LATAM-neutral), with technical nouns kept in English where the industry does (API, batch, endpoint, webhook). Swap to English easily — structure and tone rules below apply to both.

---

## CONTENT FUNDAMENTALS

**Tone:** precise, confident, operational. Speak like an engineer who respects the reader's time. No hype, no exclamation marks, no emoji. Claims are quantified ("99.2% de direcciones normalizadas") rather than adjectival ("¡increíblemente preciso!").

**Voice and person:** address the customer as **usted-neutral "tú" implied by verb forms** in marketing ("Valida direcciones en tiempo real") and neutral/imperative in product UI ("Cargar archivo", "Ver resultados"). Ubidata speaks as "nosotros" sparingly; prefer the product as subject ("La API responde en <80 ms").

**Casing:** sentence case everywhere — headlines, buttons, labels, nav. Never Title Case. ALL-CAPS only for overline labels (11px, +0.08em tracking) like `PRECISIÓN`, `API REST`.

**Vocabulary:** dirección, validación, normalización, geocodificación, cobertura, lote (batch), consulta, latencia, campo, registro. Technical English loanwords kept: API, endpoint, payload, webhook, SDK, batch (alongside "lote").

**Numbers and data:** always tabular, always specific. Use mono type for addresses-as-data, IDs, coordinates, JSON. Percentages to one decimal where credible (98.7%), latency in ms, volume in registros/mes.

**Microcopy examples:**
- Button: "Validar dirección" · "Crear API key" · "Descargar resultados"
- Empty state: "Aún no hay lotes procesados. Carga un archivo CSV para comenzar."
- Success: "Dirección verificada" — Error: "No se encontró la dirección. Revisa el código postal."
- Hero: "Direcciones confiables, decisiones precisas."

**Never:** emoji, exclamation marks, fear-based selling, "revolucionario/disruptivo", placeholder lorem ipsum.

---

## VISUAL FOUNDATIONS

**Color.** Deep navy `--navy-900 #0A1C3A` is the brand base — used for dark sections, primary buttons, headings. Pages are light (`#FFFFFF` / `--gray-50`) with navy reserved for headers, heroes, code panels and footers — roughly an 80/20 light/dark rhythm. The **cyan→green brand gradient** (`#00AAB9 → #8FCB90`, 135°) comes straight from the logo mark and is the only gradient in the system: use it for the logo, thin accent rules, data-bar motifs, and selected-state hints — never as a full background wash. Functional accent is cyan: `--cyan-600 #00919F` for accent buttons, `--cyan-700 #007887` for links (AA on white). Green is secondary — success-adjacent, data-viz series 2. Semantic colors are muted, enterprise-calibrated (success `#1F9D63`, warning `#B97A09`, danger `#CC3D3D`).

**The bar-mark motif.** The logo mark is a cluster of rounded vertical bars (like a data histogram / signal). Reuse it as the system's decorative DNA: bar charts, loading indicators, section dividers made of 3–5 rounded bars in gradient steps. This replaces illustration; never use stock photography of people.

**Type.** IBM Plex Sans for everything UI and editorial; IBM Plex Mono for code, addresses-as-data, coordinates, IDs and table numerics. Semibold (600) for all headings — never 700+ display sizes; the brand's boldness lives in the navy, not in heavy type. Display/h1 get `-0.02em` tracking. UI default is 15px/1.55. Overlines are 11px caps cyan or muted gray.

**Spacing & layout.** 4px scale. Generous: cards pad 20–24px, marketing sections 80–96px vertical. 12-col, 1200px max-width marketing grid; app layouts are full-width with a 240px sidebar. Modular sections — each marketing section is self-contained with overline + heading + content, separated by `--border-subtle` hairlines or background alternation (white ↔ `--gray-50` ↔ navy).

**Corners.** Squarely-rounded: 6px badges, 8px buttons/inputs, 12px cards, 16px modals/hero panels. Pills only for status badges and tags.

**Borders & elevation.** Hairline `1px --gray-200` borders on cards *plus* a very low navy-tinted shadow (`--shadow-sm`). Elevation is whisper-quiet; `--shadow-lg` reserved for modals/popovers. On dark surfaces, borders are `rgba(255,255,255,0.12)` and surfaces step up via lighter navy (`#11254A`), never shadows.

**Backgrounds.** Flat colors and hairline patterns only. Dark navy sections may carry a subtle dot-grid or thin coordinate-grid texture (map/graph allusion) at ≤6% white opacity. No photographic backgrounds, no gradient washes, no glassmorphism.

**Motion.** Quick and precise: 120–180ms, `cubic-bezier(0.16,1,0.3,1)` ease-out. Fades and 4–8px translate-ins. No bounces, no springs, no infinite loops (exception: processing/loading bar animations).

**Hover states.** Buttons darken one step (navy-900→800, cyan-600→700). Cards lift to `--shadow-md` + border darkens to `--gray-300`. Links underline. Rows tint `--gray-50`.

**Press states.** Darken a further step, no scale transforms.

**Focus.** 3px soft cyan ring `rgba(0,170,185,.35)` on all interactive elements.

**Imagery.** No stock people photos. Use: product UI screenshots in browser-chrome frames, schematic data-flow diagrams (nodes + connectors in brand colors), map fragments (muted navy/gray cartography with cyan pins), and the bar-mark motif. Diagrams use 1.5px strokes, rounded caps, navy lines with cyan/green accents.

**Transparency & blur.** Essentially none. Solid surfaces; the only transparency is the focus ring and dark-section textures.

**Cards.** White, 12px radius, 1px `--gray-200` border, `--shadow-sm`, 20–24px padding. Title row (h4 + optional badge), body, optional mono data block inset on `--gray-100`.

---

## ICONOGRAPHY

No proprietary icon set was provided. The system uses **Lucide** (CDN: `https://unpkg.com/lucide@latest`) — 1.5px stroke, rounded caps, geometric — matching the diagram stroke style. **This is a substitution; replace if Ubidata has its own set.**

- Usage: 16px inline/buttons, 20px nav, 24px feature cards. Color: inherit text color; accent icons use `--cyan-600`.
- Recurring glyphs: `map-pin`, `search`, `check-circle-2`, `database`, `route`, `braces` (API), `upload`, `layers`, `building-2`, `truck`, `shield-check`, `bar-chart-3`.
- Never emoji. Unicode glyphs only for arrows in links (→) and the middot separator (·).
- Logo files (in `assets/logo/`): `ubidata-logo-white.png` (on navy/dark), `ubidata-logo-navy.png` (on light), `ubidata-mark.png` (bars only — favicon, avatars, loaders). Clear space: height of one bar around the logo. Never recolor the gradient mark, never set the wordmark in a substitute font.

---

## INDEX

- `styles.css` — global entry; imports everything under `tokens/`
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`
- `assets/logo/` — `ubidata-logo-white.png`, `ubidata-logo-navy.png`, `ubidata-mark.png`
- `guidelines/` — 13 foundation specimen cards (Colors / Type / Spacing / Brand)
- `components/actions/` — Button, IconButton
- `components/forms/` — Input, Select, Checkbox, Switch, AddressInput (brand-signature)
- `components/feedback/` — Badge, StatusPill (validation states), Alert
- `components/data/` — Card, StatCard, DataTable, CodeBlock, KeyValueList
- `components/navigation/` — Tabs, Sidebar, Topbar
- `ui_kits/plataforma/` — interactive web-app shell: Resumen, Validar dirección, Lotes, API keys
- `ui_kits/website/` — marketing landing: hero with live validation demo, flow, industrias, métricas
- `SKILL.md` — agent skill entry point

Each component ships `<Name>.jsx` + `<Name>.d.ts` (props) + `<Name>.prompt.md` (usage). Mount via `window.UbidataDesignSystem_f0fbdd` after loading `_ds_bundle.js`.

## CAVEATS

- **Fonts:** wordmark face unknown/custom — logo is used as an image only. UI font is an IBM Plex substitution; provide real brand fonts to replace `tokens/fonts.css`.
- **Colors beyond the mark** (navy value, semantic colors) are derived, not official — confirm against any brand guide.
- No real product screens were provided; UI kits are *proposals* consistent with the brief, not recreations.
