/* @ds-bundle: {"format":3,"namespace":"UbidataDesignSystem_f0fbdd","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"CodeBlock","sourcePath":"components/data/CodeBlock.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"KeyValueList","sourcePath":"components/data/KeyValueList.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"StatusPill","sourcePath":"components/feedback/StatusPill.jsx"},{"name":"AddressInput","sourcePath":"components/forms/AddressInput.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Topbar","sourcePath":"components/navigation/Topbar.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"bc381dfa5701","components/actions/IconButton.jsx":"69a112ca4fc0","components/data/Card.jsx":"e7750ab6345e","components/data/CodeBlock.jsx":"449137d341b7","components/data/DataTable.jsx":"fb8ed62e93f8","components/data/KeyValueList.jsx":"849fc621c13f","components/data/StatCard.jsx":"9194697cc43c","components/feedback/Alert.jsx":"406f3233af14","components/feedback/Badge.jsx":"4e21ee28fd1f","components/feedback/StatusPill.jsx":"338fad506e94","components/forms/AddressInput.jsx":"fd4f47810368","components/forms/Checkbox.jsx":"b792cb82c0e3","components/forms/Input.jsx":"f40f668f2ccc","components/forms/Select.jsx":"cfb6c6e2a0b4","components/forms/Switch.jsx":"d576b2b2de12","components/navigation/Sidebar.jsx":"067688b9d7c6","components/navigation/Tabs.jsx":"07aaac614108","components/navigation/Topbar.jsx":"8d1a8a57637e","ui_kits/plataforma/screen-apikeys.jsx":"1bb6523406a7","ui_kits/plataforma/screen-batches.jsx":"945e1363ad4f","ui_kits/plataforma/screen-dashboard.jsx":"83e946aaaf05","ui_kits/plataforma/screen-validate.jsx":"88f91a56a1ed","ui_kits/website/website-sections.jsx":"5a399bf455df"},"inlinedExternals":[],"unexposedExports":[{"name":"ensureUbiDataStyle","sourcePath":"components/data/Card.jsx"},{"name":"ensureUbiFbStyle","sourcePath":"components/feedback/Badge.jsx"},{"name":"ensureUbiFormStyle","sourcePath":"components/forms/Input.jsx"},{"name":"ensureUbiNavStyle","sourcePath":"components/navigation/Tabs.jsx"},{"name":"ensureUbiStyle","sourcePath":"components/actions/Button.jsx"}]} */

(() => {

const __ds_ns = (window.UbidataDesignSystem_f0fbdd = window.UbidataDesignSystem_f0fbdd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ubi-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  font: 500 0.9375rem/1 var(--font-sans); border-radius: var(--radius-md);
  border: 1px solid transparent; cursor: pointer; white-space: nowrap;
  transition: background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out);
}
.ubi-btn:focus-visible { outline: none; box-shadow: var(--shadow-focus); }
.ubi-btn[disabled] { opacity: 0.45; cursor: not-allowed; }
.ubi-btn:active:not([disabled]) { transform: translateY(0.5px); }
.ubi-btn--md { height: 38px; padding: 0 16px; }
.ubi-btn--sm { height: 30px; padding: 0 12px; font-size: 0.8125rem; }
.ubi-btn--lg { height: 46px; padding: 0 22px; font-size: 1rem; }
.ubi-btn--primary {
  background: linear-gradient(180deg, #364555 0%, var(--brand-navy) 100%); color: var(--text-on-accent);
  box-shadow: 0 1px 2px rgba(23,33,56,0.24), inset 0 1px 0 rgba(255,255,255,0.10);
}
.ubi-btn--primary:hover:not([disabled]) { background: linear-gradient(180deg, #3F4F60 0%, #2E3A47 100%); }
.ubi-btn--primary:active:not([disabled]) { background: var(--navy-900); box-shadow: inset 0 1px 2px rgba(0,0,0,0.2); }
.ubi-btn--accent {
  background: linear-gradient(180deg, var(--cyan-500) 0%, var(--cyan-600) 100%); color: var(--text-on-accent);
  box-shadow: 0 1px 2px rgba(0,97,110,0.30), inset 0 1px 0 rgba(255,255,255,0.18);
}
.ubi-btn--accent:hover:not([disabled]) { background: linear-gradient(180deg, var(--cyan-600) 0%, var(--cyan-700) 100%); }
.ubi-btn--accent:active:not([disabled]) { background: var(--cyan-800); box-shadow: inset 0 1px 2px rgba(0,0,0,0.2); }
.ubi-btn--secondary { background: var(--surface-card); color: var(--text-heading); border-color: var(--border-subtle); box-shadow: var(--shadow-xs); }
.ubi-btn--secondary:hover:not([disabled]) { background: var(--gray-50); border-color: var(--border-strong); }
.ubi-btn--ghost { background: transparent; color: var(--text-heading); }
.ubi-btn--ghost:hover:not([disabled]) { background: var(--gray-100); }
.ubi-btn--danger { background: var(--danger); color: #fff; }
.ubi-btn--danger:hover:not([disabled]) { background: #B23232; }
.ubi-btn--full { width: 100%; }
`;
function ensureUbiStyle(id, cssText) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = cssText;
    document.head.appendChild(el);
  }
}
function Button({
  variant = "primary",
  size = "md",
  icon,
  fullWidth,
  disabled,
  children,
  ...rest
}) {
  ensureUbiStyle("ubi-btn-css", css);
  const cls = ["ubi-btn", `ubi-btn--${variant}`, `ubi-btn--${size}`, fullWidth ? "ubi-btn--full" : ""].join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled
  }, rest), icon, children);
}
Object.assign(__ds_scope, { ensureUbiStyle, Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ubi-iconbtn {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: var(--radius-md); border: 1px solid transparent; cursor: pointer;
  background: transparent; color: var(--gray-600);
  transition: background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out);
}
.ubi-iconbtn:hover:not([disabled]) { background: var(--gray-100); color: var(--text-heading); }
.ubi-iconbtn:active:not([disabled]) { background: var(--gray-200); }
.ubi-iconbtn:focus-visible { outline: none; box-shadow: var(--shadow-focus); }
.ubi-iconbtn[disabled] { opacity: 0.45; cursor: not-allowed; }
.ubi-iconbtn--outline { border-color: var(--border-strong); background: var(--surface-card); }
.ubi-iconbtn--md { width: 38px; height: 38px; }
.ubi-iconbtn--sm { width: 30px; height: 30px; }
`;
function IconButton({
  variant = "plain",
  size = "md",
  label,
  disabled,
  children,
  ...rest
}) {
  __ds_scope.ensureUbiStyle("ubi-iconbtn-css", css);
  const cls = ["ubi-iconbtn", variant === "outline" ? "ubi-iconbtn--outline" : "", `ubi-iconbtn--${size}`].join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
const css = `
.ubi-card {
  position: relative;
  background: linear-gradient(180deg, #FFFFFF 0%, #FCFDFE 100%);
  border-radius: var(--radius-lg);
  box-shadow: var(--ring-hairline), var(--shadow-card);
  padding: 22px;
  transition: box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out);
}
.ubi-card--hoverable { cursor: pointer; }
.ubi-card--hoverable:hover { box-shadow: var(--ring-hairline), var(--shadow-card-hover); transform: translateY(-2px); }
.ubi-card__head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
.ubi-card__title { font: var(--text-h4); color: var(--text-heading); letter-spacing: -0.01em; }
.ubi-card--flush { padding: 0; overflow: hidden; }
.ubi-card--flush .ubi-card__head { padding: 18px 22px 2px; }
/* Inset sub-panel (cards within cards) */
.ubi-card--inset {
  background: var(--surface-subtle);
  box-shadow: none; border-radius: var(--radius-md);
  padding: 16px 18px;
}
/* Fluid glass \u2014 frosted translucent panel */
.ubi-card--glass {
  background: var(--glass-bg-strong);
  -webkit-backdrop-filter: var(--glass-blur);
  backdrop-filter: var(--glass-blur);
  box-shadow: var(--glass-ring), var(--glass-shadow);
}
`;
function ensureUbiDataStyle(id, cssText) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = cssText;
    document.head.appendChild(el);
  }
}
function Card({
  title,
  actions,
  hoverable,
  flush,
  glass,
  inset,
  children,
  style
}) {
  ensureUbiDataStyle("ubi-card-css", css);
  const cls = ["ubi-card", hoverable ? "ubi-card--hoverable" : "", flush ? "ubi-card--flush" : "", glass ? "ubi-card--glass" : "", inset ? "ubi-card--inset" : ""].join(" ");
  return /*#__PURE__*/React.createElement("section", {
    className: cls,
    style: style
  }, title || actions ? /*#__PURE__*/React.createElement("div", {
    className: "ubi-card__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ubi-card__title"
  }, title), actions ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 8
    }
  }, actions) : null) : null, children);
}
Object.assign(__ds_scope, { ensureUbiDataStyle, Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/CodeBlock.jsx
try { (() => {
const css = `
.ubi-code {
  background: var(--surface-dark); border-radius: var(--radius-lg);
  overflow: hidden; font: var(--text-code);
}
.ubi-code__bar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 8px 14px; border-bottom: 1px solid var(--border-dark);
}
.ubi-code__title { font: var(--text-data); color: var(--text-inverse-muted); }
.ubi-code__lang { font: var(--text-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--cyan-400); }
.ubi-code pre { margin: 0; padding: 14px 16px; color: #C9E6EA; overflow-x: auto; }
.ubi-code .tk-key { color: #7BD4DC; }
.ubi-code .tk-str { color: var(--brand-green); }
.ubi-code .tk-num { color: #E3C57E; }
.ubi-code .tk-com { color: #5A7290; }
`;
function highlight(code) {
  const esc = code.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return esc.replace(/(&quot;|")([^"]*)("):/g, '<span class="tk-key">"$2"</span>:').replace(/: "([^"]*)"/g, ': <span class="tk-str">"$1"</span>').replace(/: (-?\d[\d.]*)/g, ': <span class="tk-num">$1</span>').replace(/(\/\/[^\n]*)/g, '<span class="tk-com">$1</span>');
}
function CodeBlock({
  title,
  lang = "JSON",
  code = "",
  children
}) {
  __ds_scope.ensureUbiDataStyle("ubi-code-css", css);
  const content = code || (typeof children === "string" ? children : "");
  return /*#__PURE__*/React.createElement("div", {
    className: "ubi-code"
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "ubi-code__bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ubi-code__title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "ubi-code__lang"
  }, lang)) : null, /*#__PURE__*/React.createElement("pre", {
    dangerouslySetInnerHTML: {
      __html: highlight(content)
    }
  }));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
const css = `
.ubi-table { width: 100%; border-collapse: collapse; font: var(--text-body-sm); }
.ubi-table th {
  text-align: left; font: var(--text-overline); letter-spacing: var(--tracking-overline);
  text-transform: uppercase; color: var(--text-muted); padding: 10px 16px;
  border-bottom: 1px solid var(--border-subtle); background: var(--gray-50);
}
.ubi-table td { padding: 12px 16px; border-bottom: 1px solid var(--border-subtle); color: var(--text-body); vertical-align: middle; }
.ubi-table tr:last-child td { border-bottom: 0; }
.ubi-table tbody tr { transition: background var(--duration-fast) var(--ease-out); }
.ubi-table tbody tr:hover { background: var(--gray-50); }
.ubi-table td.ubi-table--mono, .ubi-table th.ubi-table--right { font-variant-numeric: tabular-nums; }
.ubi-table .ubi-table--mono { font: var(--text-data); color: var(--text-heading); }
.ubi-table .ubi-table--right { text-align: right; }
`;
function DataTable({
  columns = [],
  rows = []
}) {
  __ds_scope.ensureUbiDataStyle("ubi-table-css", css);
  return /*#__PURE__*/React.createElement("table", {
    className: "ubi-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    className: c.align === "right" ? "ubi-table--right" : ""
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    className: [c.mono ? "ubi-table--mono" : "", c.align === "right" ? "ubi-table--right" : ""].join(" ")
  }, row[c.key]))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/KeyValueList.jsx
try { (() => {
const css = `
.ubi-kv { display: flex; flex-direction: column; }
.ubi-kv__row { display: flex; justify-content: space-between; align-items: baseline; gap: 16px; padding: 9px 0; border-bottom: 1px solid var(--border-subtle); }
.ubi-kv__row:last-child { border-bottom: 0; }
.ubi-kv__key { font: var(--text-body-sm); color: var(--text-muted); }
.ubi-kv__val { font: var(--text-data); color: var(--text-heading); text-align: right; }
`;
function KeyValueList({
  items = []
}) {
  __ds_scope.ensureUbiDataStyle("ubi-kv-css", css);
  return /*#__PURE__*/React.createElement("div", {
    className: "ubi-kv"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "ubi-kv__row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "ubi-kv__key"
  }, it.key), /*#__PURE__*/React.createElement("span", {
    className: "ubi-kv__val"
  }, it.value))));
}
Object.assign(__ds_scope, { KeyValueList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KeyValueList.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
const css = `
.ubi-stat { display: flex; flex-direction: column; gap: 6px; }
.ubi-stat__label { font: var(--text-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--text-muted); }
.ubi-stat__value { font: 600 1.875rem/1.1 var(--font-sans); color: var(--text-heading); letter-spacing: -0.01em; font-variant-numeric: tabular-nums; }
.ubi-stat__delta { font: var(--text-caption); display: inline-flex; align-items: center; gap: 4px; }
.ubi-stat__delta--up { color: var(--success); }
.ubi-stat__delta--down { color: var(--danger); }
.ubi-stat__delta--flat { color: var(--text-muted); }
`;
function StatCard({
  label,
  value,
  delta,
  direction = "flat"
}) {
  __ds_scope.ensureUbiDataStyle("ubi-stat-css", css);
  const arrow = direction === "up" ? "↑" : direction === "down" ? "↓" : "·";
  return /*#__PURE__*/React.createElement("div", {
    className: "ubi-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ubi-stat__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "ubi-stat__value"
  }, value), delta ? /*#__PURE__*/React.createElement("span", {
    className: `ubi-stat__delta ubi-stat__delta--${direction}`
  }, arrow, " ", delta) : null);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const css = `
.ubi-badge {
  display: inline-flex; align-items: center; gap: 5px; height: 22px; padding: 0 8px;
  border-radius: var(--radius-sm); font: 500 0.75rem/1 var(--font-sans);
  background: var(--surface-inset); color: var(--gray-700);
}
.ubi-badge--cyan { background: var(--cyan-100); color: var(--cyan-800); }
.ubi-badge--green { background: var(--green-100); color: var(--green-700); }
.ubi-badge--navy { background: var(--navy-900); color: #fff; }
.ubi-badge--success { background: var(--success-bg); color: var(--success); }
.ubi-badge--warning { background: var(--warning-bg); color: var(--warning); }
.ubi-badge--danger { background: var(--danger-bg); color: var(--danger); }
.ubi-badge--outline { background: transparent; border: 1px solid var(--border-strong); color: var(--gray-600); }
.ubi-badge--mono { font-family: var(--font-mono); }
`;
function ensureUbiFbStyle(id, cssText) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = cssText;
    document.head.appendChild(el);
  }
}
function Badge({
  tone = "neutral",
  mono,
  children
}) {
  ensureUbiFbStyle("ubi-badge-css", css);
  const toneCls = tone === "neutral" ? "" : `ubi-badge--${tone}`;
  return /*#__PURE__*/React.createElement("span", {
    className: ["ubi-badge", toneCls, mono ? "ubi-badge--mono" : ""].join(" ")
  }, children);
}
Object.assign(__ds_scope, { ensureUbiFbStyle, Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const css = `
.ubi-alert {
  display: flex; gap: 10px; padding: 12px 14px; border-radius: var(--radius-md);
  font: var(--text-body-sm); border: 1px solid transparent;
}
.ubi-alert svg { flex: none; margin-top: 1px; }
.ubi-alert__title { font-weight: 600; }
.ubi-alert__body { margin-top: 2px; }
.ubi-alert--info { background: var(--info-bg); color: var(--cyan-800); border-color: var(--cyan-200); }
.ubi-alert--success { background: var(--success-bg); color: var(--success); border-color: #C8E8D7; }
.ubi-alert--warning { background: var(--warning-bg); color: var(--warning); border-color: #F0DDB4; }
.ubi-alert--danger { background: var(--danger-bg); color: var(--danger); border-color: #F2CECE; }
`;
const ICONS = {
  info: /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }),
  success: /*#__PURE__*/React.createElement("path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4M12 17h.01"
  }),
  danger: /*#__PURE__*/React.createElement("path", {
    d: "M12 8v4M12 16h.01M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20"
  })
};
function Alert({
  tone = "info",
  title,
  children
}) {
  __ds_scope.ensureUbiFbStyle("ubi-alert-css", css);
  return /*#__PURE__*/React.createElement("div", {
    className: `ubi-alert ubi-alert--${tone}`,
    role: "status"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ICONS[tone], tone === "info" ? /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4M12 8h.01"
  }) : null), /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("div", {
    className: "ubi-alert__title"
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    className: "ubi-alert__body"
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusPill.jsx
try { (() => {
const css = `
.ubi-pill {
  display: inline-flex; align-items: center; gap: 6px; height: 24px; padding: 0 10px;
  border-radius: var(--radius-pill); font: 500 0.75rem/1 var(--font-sans);
}
.ubi-pill__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.ubi-pill--verificada { background: var(--success-bg); color: var(--success); }
.ubi-pill--parcial { background: var(--warning-bg); color: var(--warning); }
.ubi-pill--no-encontrada { background: var(--danger-bg); color: var(--danger); }
.ubi-pill--procesando { background: var(--info-bg); color: var(--info); }
.ubi-pill--pendiente { background: var(--surface-inset); color: var(--gray-600); }
`;
const LABELS = {
  verificada: "Verificada",
  parcial: "Parcial",
  "no-encontrada": "No encontrada",
  procesando: "Procesando",
  pendiente: "Pendiente"
};
function StatusPill({
  status = "pendiente",
  children
}) {
  __ds_scope.ensureUbiFbStyle("ubi-pill-css", css);
  return /*#__PURE__*/React.createElement("span", {
    className: `ubi-pill ubi-pill--${status}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "ubi-pill__dot"
  }), children || LABELS[status] || status);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ubi-field { display: flex; flex-direction: column; gap: 6px; }
.ubi-field__label { font: 500 0.8125rem/1.3 var(--font-sans); color: var(--text-heading); }
.ubi-field__hint { font: var(--text-caption); color: var(--text-muted); }
.ubi-field__hint--error { color: var(--danger); }
.ubi-input {
  height: 38px; padding: 0 12px; border-radius: var(--radius-md);
  border: 1px solid var(--border-strong); background: var(--surface-card);
  font: var(--text-body-md); color: var(--text-heading); width: 100%;
  transition: border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);
}
.ubi-input::placeholder { color: var(--text-faint); }
.ubi-input:hover:not(:disabled) { border-color: var(--gray-400); }
.ubi-input:focus { outline: none; border-color: var(--cyan-500); box-shadow: var(--shadow-focus); }
.ubi-input:disabled { background: var(--surface-inset); color: var(--text-muted); cursor: not-allowed; }
.ubi-input--error { border-color: var(--danger); }
.ubi-input--mono { font: var(--text-data); }
.ubi-input-wrap { position: relative; display: flex; align-items: center; }
.ubi-input-wrap .ubi-input { padding-left: 36px; }
.ubi-input-wrap__icon { position: absolute; left: 11px; display: inline-flex; color: var(--gray-500); pointer-events: none; }
`;
function ensureUbiFormStyle(id, cssText) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = cssText;
    document.head.appendChild(el);
  }
}
function Input({
  label,
  hint,
  error,
  icon,
  mono,
  id,
  ...rest
}) {
  ensureUbiFormStyle("ubi-input-css", css);
  const inputCls = ["ubi-input", error ? "ubi-input--error" : "", mono ? "ubi-input--mono" : ""].join(" ");
  const field = icon ? /*#__PURE__*/React.createElement("span", {
    className: "ubi-input-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ubi-input-wrap__icon"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    className: inputCls
  }, rest))) : /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    className: inputCls
  }, rest));
  if (!label && !hint && !error) return field;
  return /*#__PURE__*/React.createElement("label", {
    className: "ubi-field",
    htmlFor: id
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "ubi-field__label"
  }, label) : null, field, error ? /*#__PURE__*/React.createElement("span", {
    className: "ubi-field__hint ubi-field__hint--error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "ubi-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { ensureUbiFormStyle, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/AddressInput.jsx
try { (() => {
const {
  useState
} = React;
const css = `
.ubi-addr { position: relative; width: 100%; }
.ubi-addr__field {
  display: flex; align-items: center; gap: 10px; height: 46px; padding: 0 14px;
  border: 1px solid var(--border-strong); border-radius: var(--radius-md); background: var(--surface-card);
  transition: border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);
}
.ubi-addr__field:focus-within { border-color: var(--cyan-500); box-shadow: var(--shadow-focus); }
.ubi-addr__field svg { color: var(--cyan-600); flex: none; }
.ubi-addr__field input { border: 0; outline: none; flex: 1; font: var(--text-body-md); color: var(--text-heading); background: transparent; }
.ubi-addr__field input::placeholder { color: var(--text-faint); }
.ubi-addr__menu {
  position: absolute; top: calc(100% + 6px); left: 0; right: 0; z-index: 20;
  background: var(--surface-card); border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); overflow: hidden;
}
.ubi-addr__item { display: flex; align-items: center; gap: 12px; padding: 10px 14px; cursor: pointer; }
.ubi-addr__item:hover { background: var(--gray-50); }
.ubi-addr__item + .ubi-addr__item { border-top: 1px solid var(--border-subtle); }
.ubi-addr__main { flex: 1; min-width: 0; }
.ubi-addr__line { font: var(--text-body-md); color: var(--text-heading); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.ubi-addr__meta { font: var(--text-data); color: var(--text-muted); }
.ubi-addr__conf { font: var(--text-data); color: var(--success); flex: none; }
`;
const PIN = /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
function AddressInput({
  placeholder = "Escribe una dirección…",
  suggestions = [],
  onSelect,
  defaultValue = ""
}) {
  __ds_scope.ensureUbiFormStyle("ubi-addr-css", css);
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const visible = open && value.length > 0 && suggestions.length > 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "ubi-addr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ubi-addr__field"
  }, PIN, /*#__PURE__*/React.createElement("input", {
    value: value,
    placeholder: placeholder,
    onChange: e => {
      setValue(e.target.value);
      setOpen(true);
    },
    onFocus: () => setOpen(true),
    onBlur: () => setTimeout(() => setOpen(false), 150)
  })), visible ? /*#__PURE__*/React.createElement("div", {
    className: "ubi-addr__menu"
  }, suggestions.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "ubi-addr__item",
    onMouseDown: () => {
      setValue(s.direccion);
      setOpen(false);
      onSelect && onSelect(s);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ubi-addr__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ubi-addr__line"
  }, s.direccion), /*#__PURE__*/React.createElement("div", {
    className: "ubi-addr__meta"
  }, "CP ", s.cp, " \xB7 ", s.municipio)), /*#__PURE__*/React.createElement("span", {
    className: "ubi-addr__conf"
  }, (s.confianza * 100).toFixed(1), "%")))) : null);
}
Object.assign(__ds_scope, { AddressInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/AddressInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ubi-check { display: inline-flex; align-items: center; gap: 8px; cursor: pointer; font: var(--text-body-md); color: var(--text-heading); }
.ubi-check input { position: absolute; opacity: 0; width: 0; height: 0; }
.ubi-check__box {
  width: 18px; height: 18px; border-radius: 4px; border: 1.5px solid var(--border-strong);
  background: var(--surface-card); display: inline-flex; align-items: center; justify-content: center;
  transition: background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out);
  flex: none;
}
.ubi-check__box svg { opacity: 0; transform: scale(0.6); transition: all var(--duration-fast) var(--ease-out); }
.ubi-check input:checked + .ubi-check__box { background: var(--cyan-600); border-color: var(--cyan-600); }
.ubi-check input:checked + .ubi-check__box svg { opacity: 1; transform: scale(1); }
.ubi-check input:focus-visible + .ubi-check__box { box-shadow: var(--shadow-focus); }
.ubi-check input:disabled ~ * { opacity: 0.5; cursor: not-allowed; }
`;
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  ...rest
}) {
  __ds_scope.ensureUbiFormStyle("ubi-check-css", css);
  return /*#__PURE__*/React.createElement("label", {
    className: "ubi-check"
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ubi-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ubi-select {
  height: 38px; padding: 0 32px 0 12px; border-radius: var(--radius-md);
  border: 1px solid var(--border-strong); background: var(--surface-card);
  font: var(--text-body-md); color: var(--text-heading); width: 100%;
  appearance: none; cursor: pointer;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2354657E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 10px center;
  transition: border-color var(--duration-fast) var(--ease-out);
}
.ubi-select:hover:not(:disabled) { border-color: var(--gray-400); }
.ubi-select:focus { outline: none; border-color: var(--cyan-500); box-shadow: var(--shadow-focus); }
.ubi-select:disabled { background-color: var(--surface-inset); color: var(--text-muted); cursor: not-allowed; }
`;
function Select({
  label,
  hint,
  options = [],
  id,
  ...rest
}) {
  __ds_scope.ensureUbiFormStyle("ubi-select-css", css);
  const field = /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: "ubi-select"
  }, rest), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)));
  if (!label && !hint) return field;
  return /*#__PURE__*/React.createElement("label", {
    className: "ubi-field",
    htmlFor: id
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "ubi-field__label"
  }, label) : null, field, hint ? /*#__PURE__*/React.createElement("span", {
    className: "ubi-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ubi-switch { display: inline-flex; align-items: center; gap: 10px; cursor: pointer; font: var(--text-body-md); color: var(--text-heading); }
.ubi-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.ubi-switch__track {
  width: 36px; height: 20px; border-radius: var(--radius-pill); background: var(--gray-300);
  position: relative; transition: background var(--duration-base) var(--ease-out); flex: none;
}
.ubi-switch__track::after {
  content: ""; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px;
  border-radius: 50%; background: #fff; box-shadow: var(--shadow-xs);
  transition: transform var(--duration-base) var(--ease-out);
}
.ubi-switch input:checked + .ubi-switch__track { background: var(--cyan-600); }
.ubi-switch input:checked + .ubi-switch__track::after { transform: translateX(16px); }
.ubi-switch input:focus-visible + .ubi-switch__track { box-shadow: var(--shadow-focus); }
.ubi-switch input:disabled ~ * { opacity: 0.5; cursor: not-allowed; }
`;
function Switch({
  label,
  checked,
  onChange,
  disabled,
  ...rest
}) {
  __ds_scope.ensureUbiFormStyle("ubi-switch-css", css);
  return /*#__PURE__*/React.createElement("label", {
    className: "ubi-switch"
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ubi-switch__track"
  }), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const css = `
.ubi-tabs { display: flex; gap: 4px; border-bottom: 1px solid var(--border-subtle); }
.ubi-tabs__tab {
  appearance: none; background: none; border: 0; cursor: pointer;
  font: 500 0.875rem/1 var(--font-sans); color: var(--text-muted);
  padding: 10px 14px 12px; border-bottom: 2px solid transparent; margin-bottom: -1px;
  transition: color var(--duration-fast) var(--ease-out);
}
.ubi-tabs__tab:hover { color: var(--text-heading); }
.ubi-tabs__tab:focus-visible { outline: none; box-shadow: var(--shadow-focus); border-radius: var(--radius-sm); }
.ubi-tabs__tab--active { color: var(--text-heading); border-bottom-color: var(--cyan-500); }

/* Pill / segmented variant */
.ubi-tabs--pill {
  display: inline-flex; gap: 2px; padding: 3px; border: 0;
  background: var(--surface-inset); border-radius: var(--radius-pill);
  box-shadow: inset 0 1px 2px rgba(23,33,56,0.05);
}
.ubi-tabs--pill .ubi-tabs__tab {
  border: 0; margin: 0; padding: 6px 16px; border-radius: var(--radius-pill);
  transition: color var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out);
}
.ubi-tabs--pill .ubi-tabs__tab:hover { color: var(--text-heading); }
.ubi-tabs--pill .ubi-tabs__tab--active {
  background: var(--navy-900); color: #fff; border: 0;
  box-shadow: 0 1px 2px rgba(23,33,56,0.18);
}
`;
function ensureUbiNavStyle(id, cssText) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = cssText;
    document.head.appendChild(el);
  }
}
function Tabs({
  tabs = [],
  active,
  onChange,
  variant = "underline"
}) {
  ensureUbiNavStyle("ubi-tabs-css", css);
  return /*#__PURE__*/React.createElement("div", {
    className: "ubi-tabs" + (variant === "pill" ? " ubi-tabs--pill" : ""),
    role: "tablist"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    role: "tab",
    "aria-selected": t === active,
    className: "ubi-tabs__tab" + (t === active ? " ubi-tabs__tab--active" : ""),
    onClick: () => onChange && onChange(t)
  }, t)));
}
Object.assign(__ds_scope, { ensureUbiNavStyle, Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
const css = `
.ubi-side {
  width: 240px; min-height: 100%; background: var(--surface-dark);
  display: flex; flex-direction: column; padding: 16px 12px; gap: 2px; flex: none;
}
.ubi-side__brand { display: flex; align-items: center; padding: 4px 10px 18px; }
.ubi-side__brand img { height: 26px; }
.ubi-side__section { font: var(--text-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: #5A7290; padding: 16px 10px 6px; }
.ubi-side__item {
  display: flex; align-items: center; gap: 10px; padding: 9px 10px;
  border-radius: var(--radius-md); cursor: pointer; border: 0; background: none; width: 100%; text-align: left;
  font: 500 0.875rem/1 var(--font-sans); color: var(--text-inverse-muted);
  transition: background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out);
}
.ubi-side__item:hover { background: rgba(255,255,255,0.06); color: #fff; }
.ubi-side__item--active { background: var(--surface-dark-raised); color: #fff; box-shadow: inset 2px 0 0 var(--cyan-500); }
.ubi-side__item svg { flex: none; opacity: 0.85; }
`;
function Sidebar({
  logoSrc,
  sections = [],
  active,
  onSelect,
  footer
}) {
  __ds_scope.ensureUbiNavStyle("ubi-side-css", css);
  return /*#__PURE__*/React.createElement("nav", {
    className: "ubi-side"
  }, logoSrc ? /*#__PURE__*/React.createElement("div", {
    className: "ubi-side__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Ubidata"
  })) : null, sections.map((sec, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, sec.label ? /*#__PURE__*/React.createElement("div", {
    className: "ubi-side__section"
  }, sec.label) : null, sec.items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: "ubi-side__item" + (active === it.id ? " ubi-side__item--active" : ""),
    onClick: () => onSelect && onSelect(it.id)
  }, it.icon, it.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, footer));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Topbar.jsx
try { (() => {
const css = `
.ubi-top {
  height: 60px; display: flex; align-items: center; gap: 16px; padding: 0 24px;
  background: var(--glass-bg-strong);
  -webkit-backdrop-filter: var(--glass-blur); backdrop-filter: var(--glass-blur);
  box-shadow: inset 0 -1px 0 rgba(23,33,56,0.06);
  position: sticky; top: 0; z-index: 20;
}
.ubi-top__title { font: var(--text-h4); color: var(--text-heading); letter-spacing: -0.01em; }
.ubi-top__spacer { flex: 1; }
.ubi-top__actions { display: flex; align-items: center; gap: 10px; }
.ubi-top__avatar {
  width: 34px; height: 34px; border-radius: 50%; background: var(--brand-gradient);
  color: #fff; font: 600 0.75rem/1 var(--font-sans);
  display: inline-flex; align-items: center; justify-content: center;
  box-shadow: 0 1px 2px rgba(23,33,56,0.18), inset 0 1px 0 rgba(255,255,255,0.25);
}
`;
function Topbar({
  title,
  actions,
  initials = "UD"
}) {
  __ds_scope.ensureUbiNavStyle("ubi-top-css", css);
  return /*#__PURE__*/React.createElement("header", {
    className: "ubi-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ubi-top__title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "ubi-top__spacer"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ubi-top__actions"
  }, actions, /*#__PURE__*/React.createElement("span", {
    className: "ubi-top__avatar"
  }, initials)));
}
Object.assign(__ds_scope, { Topbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/screen-apikeys.jsx
try { (() => {
const {
  Card,
  DataTable,
  Badge,
  Button,
  CodeBlock
} = window.UbidataDesignSystem_f0fbdd;
function ApiKeysScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "3fr 2fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    flush: true,
    title: "API keys",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "accent"
    }, "Crear API key")
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: "nombre",
      label: "Nombre"
    }, {
      key: "key",
      label: "Key",
      mono: true
    }, {
      key: "amb",
      label: "Ambiente"
    }, {
      key: "uso",
      label: "Uso mensual",
      mono: true,
      align: "right"
    }],
    rows: [{
      nombre: "Checkout producción",
      key: "ubi_live_••••8f2a",
      amb: /*#__PURE__*/React.createElement(Badge, {
        tone: "green"
      }, "Producci\xF3n"),
      uso: "1,182,440"
    }, {
      nombre: "Integración WMS",
      key: "ubi_live_••••c91d",
      amb: /*#__PURE__*/React.createElement(Badge, {
        tone: "green"
      }, "Producci\xF3n"),
      uso: "64,002"
    }, {
      nombre: "Sandbox equipo datos",
      key: "ubi_test_••••77b0",
      amb: /*#__PURE__*/React.createElement(Badge, {
        tone: "outline"
      }, "Sandbox"),
      uso: "1,860"
    }]
  })), /*#__PURE__*/React.createElement(CodeBlock, {
    title: "POST /v2/direcciones/validar",
    lang: "cURL",
    code: 'curl https://api.ubidata.com/v2/direcciones/validar \\\n  -H "Authorization: Bearer ubi_live_..." \\\n  -d \'{ "direccion": "Av. Insurgentes Sur 1602" }\'\n\n// Respuesta — 200 OK · 74 ms\n{\n  "estatus": "verificada",\n  "cp": "03940",\n  "municipio": "Benito Juárez",\n  "confianza": 0.987\n}'
  })));
}
window.UbiKitApiKeysScreen = ApiKeysScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/screen-apikeys.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/screen-batches.jsx
try { (() => {
const {
  Card,
  DataTable,
  StatusPill,
  Badge,
  Button
} = window.UbidataDesignSystem_f0fbdd;
function ProgressBar({
  pct
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      minWidth: 140
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 6,
      borderRadius: 3,
      background: "var(--gray-200)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      borderRadius: 3,
      background: pct === 100 ? "var(--success)" : "var(--brand-gradient)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-data)",
      color: "var(--text-muted)"
    }
  }, pct, "%"));
}
function UploadCard({
  onUpload
}) {
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1.5px dashed var(--border-strong)",
      borderRadius: "var(--radius-md)",
      padding: "28px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--cyan-600)",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m17 8-5-5-5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3v12"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-md)",
      color: "var(--text-heading)",
      fontWeight: 500
    }
  }, "Arrastra un archivo CSV o XLSX"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-caption)",
      color: "var(--text-muted)"
    }
  }, "Hasta 5,000,000 de registros por lote"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: onUpload
  }, "Seleccionar archivo")));
}
function BatchesScreen() {
  const [rows, setRows] = React.useState([{
    id: "bt_8K2MQ4",
    archivo: "clientes_junio.csv",
    reg: "1,204,118",
    st: /*#__PURE__*/React.createElement(StatusPill, {
      status: "procesando"
    }),
    prog: /*#__PURE__*/React.createElement(ProgressBar, {
      pct: 62
    })
  }, {
    id: "bt_7HQ1Z8",
    archivo: "envios_mayo.xlsx",
    reg: "482,907",
    st: /*#__PURE__*/React.createElement(StatusPill, {
      status: "verificada"
    }, "Completado"),
    prog: /*#__PURE__*/React.createElement(ProgressBar, {
      pct: 100
    })
  }, {
    id: "bt_6P3WN2",
    archivo: "sucursales.csv",
    reg: "12,480",
    st: /*#__PURE__*/React.createElement(StatusPill, {
      status: "verificada"
    }, "Completado"),
    prog: /*#__PURE__*/React.createElement(ProgressBar, {
      pct: 100
    })
  }]);
  const addBatch = () => {
    setRows(r => [{
      id: "bt_9XW3T1",
      archivo: "nuevo_lote.csv",
      reg: "88,210",
      st: /*#__PURE__*/React.createElement(StatusPill, {
        status: "pendiente"
      }),
      prog: /*#__PURE__*/React.createElement(ProgressBar, {
        pct: 0
      })
    }, ...r]);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: "grid",
      gridTemplateColumns: "1fr 2.6fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(UploadCard, {
    onUpload: addBatch
  }), /*#__PURE__*/React.createElement(Card, {
    flush: true,
    title: "Lotes",
    actions: /*#__PURE__*/React.createElement(Badge, null, rows.length, " lotes")
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: "id",
      label: "ID",
      mono: true
    }, {
      key: "archivo",
      label: "Archivo"
    }, {
      key: "reg",
      label: "Registros",
      mono: true,
      align: "right"
    }, {
      key: "prog",
      label: "Progreso"
    }, {
      key: "st",
      label: "Estatus"
    }],
    rows: rows
  })));
}
window.UbiKitBatchesScreen = BatchesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/screen-batches.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/screen-dashboard.jsx
try { (() => {
const {
  Card,
  StatCard,
  DataTable,
  StatusPill,
  Badge,
  Button
} = window.UbidataDesignSystem_f0fbdd;
function VolumeChart() {
  const data = [42, 58, 51, 66, 72, 64, 80, 74, 88, 92, 84, 96];
  const labels = ["Jul", "Ago", "Sep", "Oct", "Nov", "Dic", "Ene", "Feb", "Mar", "Abr", "May", "Jun"];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 10,
      height: 160
    }
  }, data.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      height: "100%",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 26,
      height: `${v}%`,
      borderRadius: "6px 6px 3px 3px",
      background: i === data.length - 1 ? "var(--brand-gradient-v)" : "var(--cyan-500)",
      opacity: i === data.length - 1 ? 1 : 0.55 + i / data.length * 0.45
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-caption)",
      color: "var(--text-faint)"
    }
  }, labels[i])))));
}
function DashboardScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(StatCard, {
    label: "Direcciones validadas",
    value: "1,248,302",
    delta: "+4.2% vs. mes anterior",
    direction: "up"
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(StatCard, {
    label: "Tasa de verificaci\xF3n",
    value: "98.7%",
    delta: "+0.3 pts",
    direction: "up"
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(StatCard, {
    label: "Latencia p95",
    value: "78 ms",
    delta: "\u22126 ms",
    direction: "up"
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(StatCard, {
    label: "Lotes en proceso",
    value: "3",
    delta: "2 en cola",
    direction: "flat"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "3fr 2fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Volumen de validaciones",
    actions: /*#__PURE__*/React.createElement(Badge, {
      tone: "outline"
    }, "\xDAltimos 12 meses")
  }, /*#__PURE__*/React.createElement(VolumeChart, null)), /*#__PURE__*/React.createElement(Card, {
    flush: true,
    title: "\xDAltimas validaciones",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost"
    }, "Ver todas")
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: "dir",
      label: "Dirección"
    }, {
      key: "st",
      label: "Estatus"
    }],
    rows: [{
      dir: "Av. Insurgentes Sur 1602, CDMX",
      st: /*#__PURE__*/React.createElement(StatusPill, {
        status: "verificada"
      })
    }, {
      dir: "Calle 5 de Mayo s/n, Centro",
      st: /*#__PURE__*/React.createElement(StatusPill, {
        status: "parcial"
      })
    }, {
      dir: "Blvd. Manuel Ávila Camacho 36",
      st: /*#__PURE__*/React.createElement(StatusPill, {
        status: "verificada"
      })
    }, {
      dir: "Privada Olivos 12-B, Edo. Méx.",
      st: /*#__PURE__*/React.createElement(StatusPill, {
        status: "no-encontrada"
      })
    }, {
      dir: "Av. Universidad 3000, Coyoacán",
      st: /*#__PURE__*/React.createElement(StatusPill, {
        status: "verificada"
      })
    }]
  }))));
}
window.UbiKitDashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/screen-dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/screen-validate.jsx
try { (() => {
const {
  Card,
  AddressInput,
  KeyValueList,
  StatusPill,
  Button,
  Alert
} = window.UbidataDesignSystem_f0fbdd;
const ubiSuggestions = [{
  direccion: "Av. Insurgentes Sur 1602, Crédito Constructor",
  cp: "03940",
  municipio: "Benito Juárez",
  confianza: 0.987
}, {
  direccion: "Av. Insurgentes Sur 1605, San José Insurgentes",
  cp: "03900",
  municipio: "Benito Juárez",
  confianza: 0.942
}, {
  direccion: "Av. Insurgentes Norte 1602, Lindavista",
  cp: "07300",
  municipio: "Gustavo A. Madero",
  confianza: 0.871
}];
function CoordPanel() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 180,
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      background: "var(--surface-dark)",
      backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      backgroundSize: "28px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "52%",
      top: "44%",
      transform: "translate(-50%, -100%)",
      color: "var(--cyan-400)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      bottom: 10,
      font: "var(--text-data)",
      color: "var(--text-inverse-muted)"
    }
  }, "19.3721, -99.1781"));
}
function ValidateScreen() {
  const [result, setResult] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      maxWidth: 980
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Validar direcci\xF3n"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(AddressInput, {
    suggestions: ubiSuggestions,
    onSelect: setResult
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "accent",
    onClick: () => setResult(ubiSuggestions[0])
  }, "Validar")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-caption)",
      color: "var(--text-muted)",
      marginTop: 10
    }
  }, "Escribe \"Av. Insurgentes\" para ver sugerencias con nivel de confianza.")), result ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "3fr 2fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Resultado",
    actions: /*#__PURE__*/React.createElement(StatusPill, {
      status: "verificada"
    })
  }, /*#__PURE__*/React.createElement(KeyValueList, {
    items: [{
      key: "Dirección normalizada",
      value: result.direccion
    }, {
      key: "Código postal",
      value: result.cp
    }, {
      key: "Municipio",
      value: result.municipio
    }, {
      key: "Confianza",
      value: (result.confianza * 100).toFixed(1) + "%"
    }, {
      key: "Latencia",
      value: "74 ms"
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Geocodificaci\xF3n"
  }, /*#__PURE__*/React.createElement(CoordPanel, null))) : /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "Sin consultas todav\xEDa"
  }, "Valida una direcci\xF3n para ver el resultado estructurado y su geocodificaci\xF3n."));
}
window.UbiKitValidateScreen = ValidateScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/screen-validate.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/website-sections.jsx
try { (() => {
const {
  Button,
  Badge,
  AddressInput,
  CodeBlock,
  Card,
  StatCard
} = window.UbidataDesignSystem_f0fbdd;
const webIc = (d, size = 22) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  dangerouslySetInnerHTML: {
    __html: d
  }
});
const webIcons = {
  zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  layers: '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  plug: '<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8z"/>',
  cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
  truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  bank: '<path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 9h.01M9 12h.01M9 15h.01M15 9h.01M15 12h.01M15 15h.01"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>'
};
function WebHeader() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "var(--navy-900)",
      borderBottom: "1px solid var(--border-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 32px",
      height: 64,
      display: "flex",
      alignItems: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/ubidata-logo-white.png",
    alt: "Ubidata",
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 24,
      flex: 1
    }
  }, ["Producto", "API", "Industrias", "Precios", "Docs"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: "500 0.875rem/1 var(--font-sans)",
      color: "var(--text-inverse-muted)"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    style: {
      color: "#fff"
    }
  }, "Iniciar sesi\xF3n"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "accent"
  }, "Hablar con ventas"))));
}
function WebHero() {
  const [sel, setSel] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    style: {
      background: "var(--navy-900)",
      backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
      color: "#fff",
      padding: "88px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 26,
      borderRadius: 4,
      background: "var(--cyan-500)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 18,
      borderRadius: 4,
      background: "var(--brand-teal)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 12,
      borderRadius: 4,
      background: "var(--brand-green)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--cyan-400)",
      marginLeft: 8
    }
  }, "Address Intelligence")), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--text-display)",
      letterSpacing: "var(--tracking-tight)",
      color: "#fff",
      textWrap: "pretty"
    }
  }, "Direcciones confiables, decisiones precisas."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-lg)",
      color: "var(--text-inverse-muted)",
      marginTop: 20,
      maxWidth: 520,
      textWrap: "pretty"
    }
  }, "Captura, valida, normaliza y diagnostica direcciones en tiempo real o a escala \u2014 v\xEDa API, lotes o la plataforma web."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "accent"
  }, "Probar la API"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    style: {
      color: "#fff",
      borderColor: "rgba(255,255,255,0.25)",
      border: "1px solid rgba(255,255,255,0.25)"
    }
  }, "Ver documentaci\xF3n \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "var(--radius-lg)",
      padding: 14,
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement(AddressInput, {
    suggestions: [{
      direccion: "Av. Insurgentes Sur 1602, Crédito Constructor",
      cp: "03940",
      municipio: "Benito Juárez",
      confianza: 0.987
    }, {
      direccion: "Av. Insurgentes Sur 1605, San José Insurgentes",
      cp: "03900",
      municipio: "Benito Juárez",
      confianza: 0.942
    }],
    onSelect: setSel
  })), /*#__PURE__*/React.createElement(CodeBlock, {
    title: "POST /v2/direcciones/validar \u2014 200 OK \xB7 74 ms",
    lang: "JSON",
    code: sel ? `{\n  "direccion": "${sel.direccion}",\n  "cp": "${sel.cp}",\n  "municipio": "${sel.municipio}",\n  "confianza": ${sel.confianza},\n  "estatus": "verificada"\n}` : `{\n  "direccion": "Escribe arriba para validar…",\n  "estatus": "pendiente"\n}`
  }))));
}
function WebFlow() {
  const Step = ({
    icon,
    title,
    desc
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: "#fff",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cyan-600)"
    }
  }, webIc(icon)), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--text-h4)",
      marginTop: 10
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--text-muted)",
      marginTop: 6,
      textWrap: "pretty"
    }
  }, desc));
  const Arrow = () => /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-400)",
      flex: "none"
    }
  }, webIc('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>', 18));
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Flujo",
    style: {
      padding: "88px 32px",
      background: "var(--gray-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--cyan-700)"
    }
  }, "C\xF3mo funciona"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 10,
      maxWidth: 560,
      textWrap: "pretty"
    }
  }, "De dato crudo a direcci\xF3n accionable"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Step, {
    icon: webIcons.zap,
    title: "Captura",
    desc: "Autocompletado en checkout, CRM o formularios con sugerencias en <80 ms."
  }), /*#__PURE__*/React.createElement(Arrow, null), /*#__PURE__*/React.createElement(Step, {
    icon: webIcons.shield,
    title: "Validaci\xF3n",
    desc: "Cada direcci\xF3n se verifica contra fuentes oficiales y se punt\xFAa por confianza."
  }), /*#__PURE__*/React.createElement(Arrow, null), /*#__PURE__*/React.createElement(Step, {
    icon: webIcons.layers,
    title: "Normalizaci\xF3n",
    desc: "Estructura uniforme: calle, n\xFAmero, CP, municipio y coordenadas."
  }), /*#__PURE__*/React.createElement(Arrow, null), /*#__PURE__*/React.createElement(Step, {
    icon: webIcons.plug,
    title: "Diagn\xF3stico",
    desc: "Reportes de calidad por lote: cobertura, duplicados y registros corregibles."
  }))));
}
function WebIndustries() {
  const rows = [{
    icon: webIcons.cart,
    t: "Ecommerce",
    d: "Menos entregas fallidas y checkout más rápido."
  }, {
    icon: webIcons.truck,
    t: "Logística",
    d: "Rutas sobre direcciones geocodificadas y verificadas."
  }, {
    icon: webIcons.bank,
    t: "Banca y fintech",
    d: "KYC con comprobación de domicilio estructurada."
  }, {
    icon: webIcons.shield,
    t: "Seguros",
    d: "Suscripción y siniestros con datos de ubicación exactos."
  }];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Industrias",
    style: {
      padding: "88px 32px",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--cyan-700)"
    }
  }, "Industrias"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 10,
      textWrap: "pretty"
    }
  }, "Operaciones que dependen de la direcci\xF3n correcta"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16,
      marginTop: 36
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.t,
    style: {
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--navy-700)"
    }
  }, webIc(r.icon)), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--text-h4)",
      marginTop: 10
    }
  }, r.t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--text-muted)",
      marginTop: 6,
      textWrap: "pretty"
    }
  }, r.d))))));
}
function WebMetrics() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "M\xE9tricas",
    style: {
      background: "var(--navy-900)",
      padding: "72px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 32
    }
  }, [["99.2%", "de direcciones normalizadas"], ["<80 ms", "latencia p95 de la API"], ["5M", "registros por lote"], ["99.95%", "disponibilidad mensual"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 2.5rem/1.1 var(--font-sans)",
      color: "#fff",
      fontVariantNumeric: "tabular-nums",
      letterSpacing: "-0.01em"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--text-inverse-muted)",
      marginTop: 8
    }
  }, l)))));
}
function WebCta() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "CTA",
    style: {
      padding: "96px 32px",
      background: "var(--gray-50)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      textWrap: "pretty"
    }
  }, "Empieza con 1,000 validaciones sin costo"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-lg)",
      color: "var(--text-muted)",
      marginTop: 14
    }
  }, "Integra el endpoint de validaci\xF3n en una tarde. Sin tarjeta de cr\xE9dito."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center",
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary"
  }, "Crear cuenta"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "Hablar con ventas"))));
}
function WebFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--navy-950)",
      padding: "48px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/ubidata-logo-white.png",
    alt: "Ubidata",
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 24
    }
  }, ["Producto", "API", "Industrias", "Precios", "Docs", "Estatus", "Privacidad"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: "var(--text-body-sm)",
      color: "var(--text-inverse-muted)"
    }
  }, l))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-caption)",
      color: "#5A7290"
    }
  }, "\xA9 2026 Ubidata \xB7 Inteligencia en datos")));
}
Object.assign(window, {
  WebHeader,
  WebHero,
  WebFlow,
  WebIndustries,
  WebMetrics,
  WebCta,
  WebFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/website-sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.KeyValueList = __ds_scope.KeyValueList;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.AddressInput = __ds_scope.AddressInput;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Topbar = __ds_scope.Topbar;

})();
