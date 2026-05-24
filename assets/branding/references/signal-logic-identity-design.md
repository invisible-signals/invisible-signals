---
name: Invisible Signals
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#dec0bc'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a68a88'
  outline-variant: '#57423f'
  surface-tint: '#ffb3ad'
  primary: '#ffb3ad'
  on-primary: '#66070c'
  primary-container: '#e86961'
  on-primary-container: '#5c0006'
  inverse-primary: '#a63834'
  secondary: '#b1cccc'
  on-secondary: '#1c3435'
  secondary-container: '#354d4e'
  on-secondary-container: '#a3bdbd'
  tertiary: '#edc14d'
  on-tertiary: '#3e2e00'
  tertiary-container: '#b28b17'
  on-tertiary-container: '#362800'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb3ad'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#86211f'
  secondary-fixed: '#cde8e8'
  secondary-fixed-dim: '#b1cccc'
  on-secondary-fixed: '#051f20'
  on-secondary-fixed-variant: '#334b4b'
  tertiary-fixed: '#ffdf96'
  tertiary-fixed-dim: '#edc14d'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#594400'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  background-deep: '#050505'
  surface-charcoal: '#121212'
  signal-alert: '#e86961'
  telemetry-healthy: '#99b3b3'
  warning-pulse: '#ebbf4b'
  border-muted: '#262626'
  text-dim: '#737373'
typography:
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
spacing:
  unit: 4px
  gutter: 16px
  margin-sm: 16px
  margin-md: 32px
  margin-lg: 48px
  grid-cols: '12'
---

## Brand & Style

This design system embodies the concept of "Observability and Intelligence" through a high-intelligence, technical diagnostic aesthetic. It moves away from standard corporate tropes, opting for a mood that feels like a mission control terminal or a high-end debugger. The system prioritizes precision, clarity, and the visualization of complex data flows.

The design style is **Minimalist-Diagnostic**. It utilizes heavy whitespace—or in this case, "dark space"—to allow technical elements to breathe. It incorporates subtle grid-based structures, monochromatic surfaces, and high-legibility typography to evoke a sense of professional mastery over data. The emotional response is one of calm authority, intellectual focus, and technical depth.

## Colors

The palette is anchored in a "Dark Mode First" philosophy. The primary surface is a nearly-black deep charcoal, providing a high-contrast foundation for technical accents.

- **Primary (Coral):** Used strictly for active signals, critical alerts, and primary diagnostic pulses. It represents the "energy" of the signal.
- **Secondary (Sage):** Used for healthy telemetry, stable data streams, and background system status. It provides a calming, readable counterpoint to the coral.
- **Tertiary (Gold):** Reserved for warnings, transient states, or specific highlights in spectrum analysis.
- **Neutral:** A range of deep grays and blacks used to define the UI structure without distracting from the data.

Secondary text should use low-contrast grays (`text-dim`) to maintain a clear hierarchy, ensuring primary labels and data points remain the focal point.

## Typography

The typography strategy leverages two distinct families to separate UI navigation from technical data.

1.  **JetBrains Mono (Headlines & Labels):** Provides a sharp, technical character. Used for all data-heavy displays, technical labels, and major headings. Labels should frequently use uppercase with increased letter spacing for a "readout" feel.
2.  **Inter (Body):** A high-legibility sans-serif used for descriptive text and documentation. It provides a neutral, professional bridge between the technical mono elements.

All typography should prioritize legibility over decoration. Avoid soft weights; stick to Medium (500) and SemiBold (600) for emphasis.

## Layout & Spacing

This design system uses a **Strict Fluid Grid** model based on a 4px baseline unit. 

- **Alignment:** Every element must snap to the grid. Use 1px borders to define regions rather than relying on background color shifts alone.
- **Margins & Gutters:** A 12-column grid is standard for desktop, collapsing to 4 columns on mobile. Margins are generous (32px+) to maintain the "minimalist" feel.
- **Reflow:** On mobile, side-by-side diagnostic panels should stack vertically, maintaining a 16px gutter between blocks.
- **Technical Overlays:** Elements like floating tooltips or HUD-style overlays should align to the nearest grid intersection, reinforcing the "calculated" nature of the layout.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layering** and **Thin Borders** rather than traditional shadows.

- **Surfaces:** Use slightly lighter charcoal shades (`#121212`) to indicate elevated panels or "container" tiers. 
- **Borders:** A 1px solid border (`#262626`) is the primary method for defining depth and separation.
- **Interactions:** Hover states should use subtle tonal shifts or a "pulse" of the primary coral color on the border, rather than a shadow.
- **Negative Space:** Use empty space as a structural element. Do not feel compelled to fill every area; the "invisible" parts of the layout are as important as the signals themselves.

## Shapes

The shape language is **Strictly Geometric**. 

To maintain the diagnostic, high-intelligence aesthetic, all UI elements utilize **Sharp (0px)** corners. This reinforces the precision-engineered feel of the system. Avoid any "bubbly" or soft appearances. Circular elements are permitted only for specific functional metaphors like status indicators (pings) or radar-style visualizations.

## Components

- **Buttons:** Rectangular with 1px borders. Primary buttons use a ghost style with a Coral border that fills on hover. Text is always uppercase JetBrains Mono.
- **Input Fields:** Minimalist under-lines or full 1px boxes with no fill. The cursor/caret should be the primary Coral color.
- **Cards/Panels:** Defined by 1px borders. Header areas are separated by a horizontal 1px line.
- **Chips/Status Tags:** Small, rectangular labels. Use "Sage" for 'Active/Healthy' and "Coral" for 'Alert/Error'.
- **Lists:** Clean rows separated by 1px dividers. Monospaced data should be right-aligned for numerical comparison.
- **Iconography:** Use "Technical/Abstract" icons only. Focus on:
    - **Waveforms:** For activity and signals.
    - **Nodes:** For architecture and connection points.
    - **Spectrum/Radar:** For scanning and analysis states.
    - **Strict Constraint:** Never use people, briefcases, or generic "AI" sparkles. Icons should look like they belong on a blueprint or a hardware schematic.
- **Diagnostic Overlays:** Small, floating text fragments (labels) that appear near data points, often connected by a thin 1px "leader line" to the data point they describe.