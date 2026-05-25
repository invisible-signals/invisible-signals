# Invisible Signals™ Identity

Invisible Signals™ uses a dark, diagnostic identity: precise, technical, and quietly intense. The system should feel like career intelligence instrumentation, not a conventional corporate learning brand.

## Positioning

Invisible Signals™ helps engineers and technical leaders detect, refine, and transmit professional impact. The identity should make invisible career evidence feel observable, structured, and actionable.

Core idea:

> Career signal intelligence.

Supporting language:

- Open-source telemetry for engineers and leaders.
- Technical skill is not the issue.
- Not hacking. Resolution.
- Initialize your signal.

## Visual Direction

Use a minimalist diagnostic style inspired by terminals, mission control, observability tools, and high-end debugging environments.

The mood should be:

- Precise
- Technical
- Calm
- High signal
- Evidence-oriented
- Slightly cinematic, but never decorative for its own sake

Avoid:

- Generic AI sparkle language
- Soft corporate gradients
- Friendly rounded SaaS cards
- Stock workplace imagery
- People, briefcases, or generic career metaphors
- Busy dashboards that make the system feel noisy

## Color System

Invisible Signals™ is dark-mode first. Deep black and charcoal surfaces carry the experience; color is used as signal, not decoration.

Primary roles:

| Role | Hex | Usage |
| --- | --- | --- |
| Background deep | `#05070a` | Page background, full-bleed dark fields |
| Background | `#0b0e14` | Main app/page surfaces |
| Surface charcoal | `#121212` | Panels and technical containers |
| Border muted | `#262626` | 1px panel lines and separators |
| On surface | `#e5e2e1` | Primary text |
| Text dim | `#737373` | Secondary metadata and quiet labels |
| Primary | `#70a1ff` | Active controls, highlights, selected states, signal glow |
| Signal alert | `#e86961` | Warnings, failures, diagnostic emphasis |
| Telemetry healthy | `#70a1ff` | Stable status and healthy system indicators |
| Warning pulse | `#ebbf4b` | Warnings, transient states, spectrum highlights |

Reusable tokens live in [tokens/invisible-signals-tokens.json](tokens/invisible-signals-tokens.json) and [tokens/invisible-signals-tokens.css](tokens/invisible-signals-tokens.css).

## Typography

Use typography to separate diagnostic structure from explanation.

| Role | Typeface | Usage |
| --- | --- | --- |
| Display | JetBrains Mono | Hero statements, major section headlines |
| Heading | JetBrains Mono | Section titles, panel headings, module labels |
| Label | JetBrains Mono | Navigation, chips, telemetry, metadata |
| Data | JetBrains Mono | Metrics, code-like fragments, readouts |
| Body | Inter | Explanatory copy and longer reading text |

Display and labels should often be uppercase. Use italics sparingly for emphasis in short phrases such as `INTELLIGENCE.` or `RESOLUTION.`.

## Layout

Use a strict grid based on a 4px unit.

- Desktop layouts should use a 12-column structure.
- Mobile layouts should collapse to 4 columns.
- Prefer 1px borders over shadows.
- Use generous dark space to make data and calls to action easier to scan.
- Align labels, readouts, and charts to the grid.
- Let diagnostic modules breathe; do not fill every empty area.

## Shape And Depth

The shape language is sharp and geometric.

- Default radius: `0px`
- Default border: `1px solid #262626`
- Depth comes from tonal layering and borders, not shadows.
- Circular forms are reserved for signal pulses, radar motifs, status dots, and logo marks.

## Components

Buttons:

- Rectangular, uppercase JetBrains Mono.
- Primary actions may use blue fill, blue border, or a restrained blue glow.
- Secondary actions should be dark with a muted border.

Panels:

- Use dark surfaces with 1px borders.
- Include small mono labels for module names, statuses, or references.
- Use header rules or tiny metadata rows when useful.

Status tags:

- Blue indicates healthy telemetry, active signal, or selected state.
- Coral indicates alert, failure, or diagnostic emphasis.
- Gold indicates warnings or temporary calibration states.

Data visuals:

- Favor waveforms, bars, radar rings, node maps, traces, and signal calibration panels.
- Keep charts sparse and legible.
- Use accent colors to reveal meaning, not to decorate.

## Motion

Motion should feel instrumental.

- Slow scanlines, subtle pulses, and low-opacity telemetry movement are appropriate.
- Avoid bouncy, playful, or ornamental animation.
- Respect reduced-motion preferences in production interfaces.

## Reference Artifacts

The current identity reference files are stored in [references](references):

- [signal-logic-identity-design.md](references/signal-logic-identity-design.md)
- [signal-logic-identity-prototype.html](references/signal-logic-identity-prototype.html)
- [signal-logic-identity-screen.png](references/signal-logic-identity-screen.png)
