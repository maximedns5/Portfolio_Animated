# ABOUT PAGE — SPECIFICATION
> This file instructs Codex on the exact content and structure of the About page (`/about`).
> All content is in English. Style follows the blueprint/industrial aesthetic defined in PORTFOLIO_SPEC.md.

---

## 1. PAGE STRUCTURE (top to bottom)

```
/about
├── Hero block          → name + status + short intro
├── Section: Education  → timeline (3 entries)
├── Section: Skills     → categorized list, no progress bars
└── Section: Contact    → email + LinkedIn + GitHub
```

---

## 2. HERO BLOCK

### Name & Status label
- Name: **Maxime Denis**
- Status label (font-mono, text-xs, tracking-wider, --color-ink-faint):
  `MEng Mechanical Engineering · UC Berkeley`

### Short Intro (font-body, text-base, --color-ink, max-width 60ch)
Use this exact text:

> I'm a mechanical engineering student at UC Berkeley, finishing my MEng
> and actively looking for full-time opportunities in mechanical design,
> multiphysics simulation, or energy systems engineering — open to relocate.
>
> I'm genuinely passionate about engineering: I love the moment when
> a physical system starts making sense — whether it's a cam profile
> clicking into place analytically, a CFD simulation converging, or a
> machine learning model that actually learns something about the physics
> it's supposed to describe. I tend to work across scales and disciplines,
> which is probably why data centers, hydrogen reactors, and shoulder
> prostheses have all ended up in the same portfolio.
>
> Outside of engineering, I co-founded Well.Be, an AI-driven platform
> for caregiver support — because good engineering, at its best,
> solves problems that actually matter.

---

## 3. EDUCATION SECTION

Section label: `<SectionLabel label="EDUCATION" />`

Render as a **vertical timeline**: thin line on the left, each entry has
a date range, institution, degree, and location.
Style: date in `font-mono` `text-sm` `--color-ink-faint`, degree in
`font-title` `text-lg`, institution in `font-body` `--color-ink-light`.

### Entries (chronological, most recent first)

---

**Entry 1**
- Date: `Aug. 2025 – Present`
- Degree: `Master of Engineering in Mechanical Engineering`
- Institution: `University of California, Berkeley`
- Location: `Berkeley, CA`
- Note (optional, font-mono text-xs --color-accent): `In progress`

---

**Entry 2**
- Date: `Sept. 2023 – June 2025`
- Degree: `B.Sc. in Mechanical & Industrial Engineering`
- Institution: `Arts et Métiers ParisTech`
- Location: `Paris, France`
- Note: none

---

**Entry 3**
- Date: `Sept. 2021 – June 2023`
- Degree: `Classes Préparatoires aux Grandes Écoles — PTSI / PT*`
- Institution: `Lycée Raspail`
- Location: `Paris 14ème, France`
- Note (font-body text-sm --color-ink-light):
  `Intensive two-year preparatory program in mathematics, physics,
  and engineering sciences. PT* track (top section).`

---

## 4. SKILLS SECTION

Section label: `<SectionLabel label="SKILLS" />`

**No progress bars, no radar charts.** Render as a clean two-column
grid of skill categories. Each category has a label in `font-mono`
`text-xs` `tracking-wider` `--color-ink-faint` and items in `font-body`
`text-sm` `--color-ink`.

| Category | Skills |
|----------|--------|
| **Design & CAD** | CATIA V5 (400h+), SolidWorks, GD&T, parametric modeling, assemblies, technical drawings |
| **Simulation** | STARCCM+ (CFD), ABAQUS (FEA), COMSOL Multiphysics (electromagnetics, heat transfer, fluid flow), Reality DC |
| **Manufacturing** | Sand casting, turning, milling, 5-axis drilling, 3D printing, DFM/DFA |
| **Programming** | Python, MATLAB, TypeScript, MySQL, SQLite |
| **ML & Data** | Keras / TensorFlow, scikit-learn, genetic algorithms, PINNs, Random Forest, feature engineering |
| **Energy & Thermal** | Thermodynamics, fluid mechanics, heat transfer, cooling systems, hydrogen transport, psychrometrics |
| **Languages** | French (native), English (fluent — working language at Berkeley) |

---

## 5. CONTACT SECTION

Section label: `<SectionLabel label="CONTACT" />`

Render as a minimal horizontal row of links in `font-mono` `text-sm`,
separated by the `—` character.

| Label | Value |
|-------|-------|
| Email | maxime.denis@berkeley.edu |
| Phone (US) | +1 (341) 766-8027 |
| Phone (FR) | +33 7 83 75 11 79 |
| LinkedIn | Link (user will provide URL) |

Email should be an `<a href="mailto:...">` link.
Style: links in `--color-accent`, hover underline.

---

## 6. DESIGN NOTES FOR CODEX

- **No photo** unless Maxime adds one later. Leave a commented-out
  placeholder in the JSX: `{/* <img src="/about/photo.jpg" ... /> */}`
- The education timeline line is a `1px solid var(--color-border)` vertical
  bar on the left, with a small filled circle (`--color-accent`, 6px) at
  each entry's date.
- The skills grid uses `display: grid; grid-template-columns: 1fr 1fr`
  on desktop, single column on mobile.
- Page max-width: `--max-width-text` (680px), centered.
- All section labels use the `<SectionLabel />` blueprint component.
- The "In progress" note on the Berkeley entry uses the same badge style
  as `status: 'in-progress'` in ProjectDetail.
