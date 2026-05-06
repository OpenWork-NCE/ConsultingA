# Design System for ConsultingADM

## 1. Visual Theme & Atmosphere

ConsultingADM's visual identity radiates trust and efficiency through a clean, professional palette. The system sits on a crisp, light bluish-white background (`#f8fafc`) that signals modern corporate reliability. This isn't just a white page — it's a deliberate choice to feel sharp, high-tech, and professional. The deep midnight blue text (`#0f172a`) against this cool background creates a high-contrast environment that ensures maximum readability and authority.

The custom Camera Plain Variable typeface remains the system's structural backbone. Its humanist warmth balances the professional color palette, preventing the "coldness" often found in corporate tools. At display sizes (48px–60px), weight 600 with aggressive negative letter-spacing (-0.9px to -1.5px) transforms headlines into authoritative, expert statements. The font uses `ui-sans-serif, system-ui` as fallbacks.

ConsultingADM's visual system uses an opacity-driven depth model. Rather than using arbitrary grays, the system modulates `#0f172a` at varying opacities to create a unified tonal range. This ensures that every shade of blue-gray on the page is harmonically linked. The border system follows suit: `1px solid #e2e8f0` for subtle divisions and `1px solid rgba(15, 23, 42, 0.4)` for stronger interactive boundaries.

**Key Characteristics:**
- Professional cool-white background (`#f8fafc`) — crisp, modern, and trustworthy.
- Camera Plain Variable typeface for a blend of authority and approachability.
- Opacity-driven color system: all neutrals derived from `#0f172a` at varying transparency levels.
- Deep Midnight Blue (`#0f172a`) for primary surfaces and Vivid Blue (`#2563eb`) for accents.
- Modern neutral border palette: `#e2e8f0` for subtle, `rgba(15, 23, 42, 0.4)` for interactive elements.
- Full-pill radius (`9999px`) for action pills; standard 6px radius for primary buttons.
- Focus state uses soft shadows and Vivid Blue rings for clear accessibility.
- shadcn/ui + Radix UI component primitives with Tailwind CSS utility styling.

## 2. Color Palette & Roles

### Primary
- **Professional White** (`#f8fafc`): Page background, card surfaces. The foundation — clean and focused.
- **Midnight Blue** (`#0f172a`): Headings, primary text, dark button backgrounds. Signals expertise and authority.
- **Vivid Blue** (`#2563eb`): Primary CTA backgrounds, active links, important highlights. The "Action" color.
- **Pure White** (`#ffffff`): Button text on dark backgrounds, card surfaces, clean highlights.

### Neutral Scale (Opacity-Based)
- **Midnight 100%** (`#0f172a`): Primary text, headings, dark surfaces.
- **Midnight 83%** (`rgba(15, 23, 42, 0.83)`): Strong secondary text.
- **Midnight 82%** (`rgba(15, 23, 42, 0.82)`): Body copy.
- **Slate Gray** (`#475569`): Secondary text, descriptions, captions.
- **Midnight 40%** (`rgba(15, 23, 42, 0.4)`): Interactive borders, button outlines.
- **Midnight 4%** (`rgba(15, 23, 42, 0.04)`): Subtle hover backgrounds.
- **Midnight 3%** (`rgba(15, 23, 42, 0.03)`): Barely-visible overlays.

### Surface & Border
- **Cool Border** (`#e2e8f0`): Card borders, dividers, subtle outlines.
- **Surface White** (`#f8fafc`): Card backgrounds, section fills — seamless with page background.

### Interactive
- **Accent Blue** (`#2563eb`): Main interaction color for CTA buttons and focus states.
- **Ring Blue** (`rgba(37, 99, 235, 0.5)`): `--tw-ring-color`, Tailwind focus ring.
- **Focus Shadow** (`rgba(15, 23, 42, 0.1) 0px 4px 12px`): Focus and active state shadow.

### Shadows
- **Button Inset** (`rgba(255, 255, 255, 0.2) 0px 0.5px 0px 0px inset, rgba(0, 0, 0, 0.2) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`): Tactile depth for primary buttons.

## 3. Typography Rules

### Font Family
- **Primary**: `Camera Plain Variable`, with fallbacks: `ui-sans-serif, system-ui`
- **Weight range**: 400 (body/reading), 480 (special display), 600 (headings/emphasis)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Camera Plain Variable | 60px | 600 | 1.05 | -1.5px | Expert authority |
| Section Heading | Camera Plain Variable | 48px | 600 | 1.10 | -1.2px | Major features |
| Sub-heading | Camera Plain Variable | 36px | 600 | 1.15 | -0.9px | Sub-sections |
| Body Large | Camera Plain Variable | 18px | 400 | 1.40 | normal | Intro text |
| Body | Camera Plain Variable | 16px | 400 | 1.50 | normal | Standard copy |
| Caption | Camera Plain Variable | 14px | 400 | 1.50 | normal | Metadata |

### Principles
- **Authoritative voice**: The deep blue and crisp white create a high-stakes, professional atmosphere.
- **Size over weight**: Hierarchy is primarily driven by large size gaps and consistent 600 weight for headings.
- **Tight display**: Large headlines use negative tracking to feel "locked-in" and intentional.

## 4. Component Stylings

### Buttons

**Primary Action (Vivid Blue)**
- Background: `#2563eb`
- Text: `#ffffff`
- Radius: 6px
- Shadow: Standard button inset for tactile feel
- Use: Main conversion points ("Contact Us", "Start Audit")

**Secondary Dark (Midnight)**
- Background: `#0f172a`
- Text: `#ffffff`
- Radius: 6px
- Use: Secondary high-priority actions ("View Services")

**Ghost / Outline**
- Background: transparent
- Text: `#0f172a`
- Border: `1px solid rgba(15, 23, 42, 0.4)`
- Radius: 6px
- Use: Low-priority actions ("Documentation", "Read More")

### Cards & Containers
- Background: `#f8fafc`
- Border: `1px solid #e2e8f0`
- Radius: 12px (standard)
- No box-shadow by default; uses borders for definition.

### Inputs & Forms
- Background: `#ffffff`
- Text: `#0f172a`
- Border: `1px solid #e2e8f0`
- Radius: 6px
- Focus: `2px solid #2563eb` or blue ring.

### Navigation
- Sticky header on `#f8fafc` background.
- Links: 16px weight 400, `#0f172a` text.
- Active state: `#2563eb` color or underline.
- CTA: Vivid Blue button on the right.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Vertical spacing: 80px–192px for section breathing room.
- Professional layout: centered 1200px container.

### Whitespace Philosophy
- **Efficient Clarity**: Spacing is used to separate concerns and drive the user toward action.
- **Clean Transitions**: Sections are divided by whitespace and subtle `#e2e8f0` lines rather than heavy blocks of color.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, background `#f8fafc` | Page surface |
| Bordered (Level 1) | `1px solid #e2e8f0` | Cards, images |
| Inset (Level 2) | Standard multi-layer inset | Action buttons |
| Focus (Level 3) | `rgba(15, 23, 42, 0.1) 0px 4px 12px` | Active states |

## 7. Do's and Don'ts

### Do
- Use `#f8fafc` for all page backgrounds to maintain the professional cool-white feel.
- Use Midnight Blue (`#0f172a`) for all primary text and headings.
- Use Vivid Blue (`#2563eb`) sparingly for key interaction points.
- Maintain the 12px radius for cards and 6px for buttons.
- Keep headlines tight with negative letter-spacing.

### Don't
- Don't use warm creams or beige — the system is cool and professional.
- Don't use pure black for text — always use the Midnight Blue `#0f172a`.
- Don't use heavy drop shadows — favor borders (`#e2e8f0`).
- Don't use saturated secondary colors — stick to the blue-slate-white spectrum.

## 8. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Vivid Blue (`#2563eb`)
- Secondary CTA: Midnight Blue (`#0f172a`)
- Background: Professional White (`#f8fafc`)
- Primary Text: Midnight Blue (`#0f172a`)
- Secondary Text: Slate Gray (`#475569`)
- Border: Cool Border (`#e2e8f0`)

### Example Component Prompts
- "Create a hero section for ConsultingADM on a #f8fafc background. Headline at 60px Camera Plain Variable weight 600, color #0f172a, letter-spacing -1.5px. Vivid Blue CTA button (#2563eb)."
- "Design a service card: #f8fafc background, 1px solid #e2e8f0 border, 12px radius. Title in #0f172a, description in #475569."
- "Navigation bar: sticky on #f8fafc. Links in #0f172a weight 400. Right-aligned Vivid Blue button."
