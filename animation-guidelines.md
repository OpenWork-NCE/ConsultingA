# Memoria Animation Design System

A design system for creating premium, cinematic micro-animations that feel alive and rewarding.
---
## Philosophy

Every animation should feel like a **moment** — not just movement, but an experience. We design for delight, depth, and tactility. Our animations make digital interfaces feel physical, premium, and worth watching twice.

**Every interaction is an opportunity to reward the user.**
---
## Core Principles
### 1. Depth Over Flatness
Never animate in 2D when 3D is possible. Elements should move *through* space, not just across it.
- Use Z-axis movement liberally
- Add perspective to containers (1000–1200px)
- Let things come toward the viewer, then settle back
- Rotation adds believability — objects tumble, tilt, and stabilize
### 2. Arc Over Line
Nothing in nature moves in straight lines. Neither should your animations.
- Use circular/parabolic arcs for trajectories
- Math.sin(t * Math.PI) creates natural arc curves
- Overshoot and settle — go past the target, then ease back
- Bezier curves for complex multi-point paths
### 3. Celebrate Completion
When something finishes, mark the moment. Make it feel earned.
- Particle bursts (confetti, sparks, embers)
- Glowing backdrops that pulse with energy
- Border animations that trace and shimmer
- Text that fades in to acknowledge success
### 4. Reward Interaction
After the show, let the user play. Completed states should be interactive.
- 3D tilt on hover (follow the cursor)
- Glare/reflection effects
- Enhanced shadows on interaction
- Subtle scale changes (1.02–1.04x lift)
### 5. Monochromatic Sophistication
Color is a crutch. Master the grayscale.
- Whites and grays only (neutral-50 through neutral-950)
- Depth through opacity, not hue
- Glow effects use white at varying alphas
- Let motion and light create visual interest
---
## Creative Direction Framework
When given a creative brief, think through these layers in order. Every animation must address all four.
### Layer 1: The Journey (Entry)
*How do elements arrive?*
Ask yourself:
- Where do they come from? (corners, behind, above, scattered)
- What path do they take? (arc, spiral, straight, bounce)
- Do they travel alone or together? (staggered, synchronized, choreographed)
- What's their personality? (aggressive, gentle, playful, elegant)
**Entry Patterns:**
| Pattern | Feeling | Best For |
|---------|---------|----------|
| Corner Convergence | Assembly, unity | Cards, puzzles, forms |
| Depth Emergence | Reveal, surprise | Heroes, modals, focus |
| Scatter Assembly | Magic, complexity | Logos, icons, particles |
| Cascade | Order, sequence | Lists, timelines, steps |
| Explosion Outward | Energy, celebration | Completions, unlocks |
### Layer 2: The Moment (Climax)
*What happens at the peak?*
The moment of completion should feel significant:
- **Lock** — elements snap into place with finality
- **Burst** — energy releases (confetti, particles, ripples)
- **Glow** — light emanates from the completed form
- **Pulse** — the object breathes, showing life
- **Transform** — the sum becomes greater than parts
Always combine at least two climax effects. A lock alone is lifeless. A lock + burst + glow is an event.
### Layer 3: The Reward (Interaction)
*How does the user engage with the result?*
Completed states must invite exploration:
- **Tactile** — responds to touch/hover with physical feedback
- **Reflective** — catches light, shows depth
- **Alive** — subtle ambient motion, breathing
- **Responsive** — acknowledges user presence
### Layer 4: The Loop (Replay)
*Can they experience it again?*
Great animations are worth rewatching:
- Always provide replay controls
- Reset gracefully, never abruptly
- Consider ambient loops for idle states
---
## Immersive Experience Principles
### Create a Stage
The animation doesn't exist in isolation. Set the scene:
- **Background atmosphere** — subtle gradients, particles, noise
- **Depth layers** — foreground, subject, background
- **Lighting** — where does light come from? How does it react?
- **Sound design** (if applicable) — motion should feel audible even when silent
### Control Attention
Guide the eye deliberately:
- **Focal point** — one primary area of attention
- **Supporting motion** — secondary animations that don't compete
- **Negative space** — let elements breathe
- **Timing hierarchy** — important things move first or last
### Build Anticipation
The setup is as important as the payoff:
- **Delay gratification** — don't reveal everything instantly
- **Progressive disclosure** — information unfolds over time
- **Tension and release** — build up, then resolve
### Reward Curiosity
Users who explore should find delight:
- **Easter eggs** — hidden interactions for attentive users
- **Progressive enhancement** — more interaction reveals more animation
- **State memory** — remember user preferences and history
---
## Motion Feel Guide
Robotic motion is the enemy. Every moving element should feel like it has **mass, personality, and intent.**
### Weight & Inertia
Objects are not weightless. They resist starting, resist stopping, and overshoot their targets.
- Use multi-phase easing: accelerate into motion, then decelerate with overshoot
- Heavy objects ease in slowly and slam into place
- Light objects dart quickly and flutter to rest
- The final 15% of any motion should include a subtle oscillation or settle
### Stagger With Variety
When multiple elements animate simultaneously, uniformity looks mechanical.
- Give each element a slightly different delay (don't use equal spacing)
- Vary arc heights, rotation amounts, and scale ranges per element
- Let some elements arrive early, some fashionably late
- Randomize just enough to feel organic, not chaotic
### The Snap Moment
When elements lock into their final position, sell the impact:
- A brief flash of light at the moment of completion (50–100ms)
- A micro scale overshoot (1.02–1.04x) that settles back to 1.0
- Rotation wobble: a sine wave oscillation (2–3 cycles) that decays
- Drop shadow that appears/intensifies on landing
### Two-Phase Animation Curves
Never use a single easing function across the full duration. Split into approach and settle:
- **Phase 1 (0–65%)**: easeInOutCubic — dramatic, weighted approach
- **Phase 2 (65–100%)**: easeOutElastic — organic overshoot and settle
This two-phase pattern is the single biggest differentiator between premium and generic motion.
---
## Interaction Reward System
Every user action deserves acknowledgment. Scale the response to the action's significance.
### Micro-Rewards (subtle, frequent)
For: hovers, focuses, small clicks
- Subtle scale (1.02x)
- Opacity shifts
- Cursor changes
- Gentle glows
### Standard Rewards (noticeable, expected)
For: button clicks, form submissions, navigation
- Ripples and waves
- State transitions
- Progress indicators
- Confirmation animations
### Milestone Rewards (celebratory, memorable)
For: completions, achievements, unlocks
- Confetti bursts from the top edge of the completed element
- Glowing reveals with breathing pulse
- Animated border beams tracing the element perimeter
- Screen-wide ambient effects
### Surprise Rewards (delightful, unexpected)
For: easter eggs, perfect timing, persistence
- Hidden animations
- Special effects
- Playful responses
- Breaking the fourth wall
---
## Component Library Reference
When building animations, combine primitives from established libraries. Here's what to reach for:
### Entry & Assembly Effects
| Need | Component | Library | URL |
|------|-----------|---------|-----|
| 3D card perspective | 3D Card Effect | Aceternity | https://ui.aceternity.com/components/3d-card-effect |
| Comet-style tilt | Comet Card | Aceternity | https://ui.aceternity.com/components/comet-card |
| Glare on hover | Glare Card | Aceternity | https://ui.aceternity.com/components/glare-card |
| Direction-aware | Direction Aware Hover | Aceternity | https://ui.aceternity.com/components/direction-aware-hover |
| 3D tilt primitive | Tilt | Motion Primitives | https://motion-primitives.com/docs/tilt |
| Magnetic attraction | Magnetic | Motion Primitives | https://motion-primitives.com/docs/magnetic |
| Morphing shapes | Morphing Dialog | Motion Primitives | https://motion-primitives.com/docs/morphing-dialog |
### Celebration Effects
| Need | Component | Library | URL |
|------|-----------|---------|-----|
| Confetti burst | Confetti | Magic UI | https://magicui.design/docs/components/confetti |
| Particle explosion | Cool Mode | Magic UI | https://magicui.design/docs/components/cool-mode |
| Border beam | Border Beam | Magic UI | https://magicui.design/docs/components/border-beam |
| Shine border | Shine Border | Magic UI | https://magicui.design/docs/components/shine-border |
| Animated beam | Animated Beam | Magic UI | https://magicui.design/docs/components/animated-beam |
| Border trail | Border Trail | Motion Primitives | https://motion-primitives.com/docs/border-trail |
| Glow effect | Glow Effect | Motion Primitives | https://motion-primitives.com/docs/glow-effect |
| Glowing border | Glowing Effect | Aceternity | https://ui.aceternity.com/components/glowing-effect |
| Sparkles | Sparkles | Aceternity | https://ui.aceternity.com/components/sparkles |
| Fireworks | Fireworks Background | Animate UI | https://animate-ui.com/docs/components/backgrounds/fireworks |
### Background & Atmosphere
| Need | Component | Library | URL |
|------|-----------|---------|-----|
| Floating particles | Particles | Magic UI | https://magicui.design/docs/components/particles |
| Aurora glow | Aurora Background | Aceternity | https://ui.aceternity.com/components/aurora-background |
| Meteor shower | Meteors | Aceternity | https://ui.aceternity.com/components/meteors |
| Grid patterns | Grid Pattern | Magic UI | https://magicui.design/docs/components/grid-pattern |
| Animated grid | Animated Grid Pattern | Magic UI | https://magicui.design/docs/components/animated-grid-pattern |
| Dot pattern | Dot Pattern | Magic UI | https://magicui.design/docs/components/dot-pattern |
| Light beams | Background Beams | Aceternity | https://ui.aceternity.com/components/background-beams |
| Ripple effect | Ripple | Magic UI | https://magicui.design/docs/components/ripple |
| Gradient animation | Gradient Animation | Aceternity | https://ui.aceternity.com/components/background-gradient-animation |
| Noise texture | Noise Background | Aceternity | https://ui.aceternity.com/components/noise-background |
| Bubble gooey | Bubble Background | Animate UI | https://animate-ui.com/docs/components/backgrounds/bubble |
| Star warp | Warp Background | Magic UI | https://magicui.design/docs/components/warp-background |
### Text & Reveal Effects
| Need | Component | Library | URL |
|------|-----------|---------|-----|
| Text generate | Text Generate Effect | Aceternity | https://ui.aceternity.com/components/text-generate-effect |
| Typewriter | Typewriter Effect | Aceternity | https://ui.aceternity.com/components/typewriter-effect |
| Text morph | Text Morph | Motion Primitives | https://motion-primitives.com/docs/text-morph |
| Text scramble | Text Scramble | Motion Primitives | https://motion-primitives.com/docs/text-scramble |
| Shimmer text | Text Shimmer | Motion Primitives | https://motion-primitives.com/docs/text-shimmer |
| Number animation | Animated Number | Motion Primitives | https://motion-primitives.com/docs/animated-number |
| Blur fade in | Blur Fade | Magic UI | https://magicui.design/docs/components/blur-fade |
| Shiny text | Animated Shiny Text | Magic UI | https://magicui.design/docs/components/animated-shiny-text |
### Interactive Primitives
| Need | Component | Library | URL |
|------|-----------|---------|-----|
| Cursor follow | Following Pointer | Aceternity | https://ui.aceternity.com/components/following-pointer |
| Smooth cursor | Smooth Cursor | Magic UI | https://magicui.design/docs/components/smooth-cursor |
| Spotlight | Spotlight | Motion Primitives | https://motion-primitives.com/docs/spotlight |
| Lens zoom | Lens | Aceternity | https://ui.aceternity.com/components/lens |
| Ripple button | Ripple Button | Magic UI | https://magicui.design/docs/components/ripple-button |
| Shimmer button | Shimmer Button | Magic UI | https://magicui.design/docs/components/shimmer-button |
| Liquid button | Liquid Button | Animate UI | https://animate-ui.com/docs/components/buttons/liquid |
### Scroll & Parallax
| Need | Component | Library | URL |
|------|-----------|---------|-----|
| Parallax scroll | Parallax Scroll | Aceternity | https://ui.aceternity.com/components/parallax-scroll |
| Sticky reveal | Sticky Scroll Reveal | Aceternity | https://ui.aceternity.com/components/sticky-scroll-reveal |
| Scroll progress | Scroll Progress | Motion Primitives | https://motion-primitives.com/docs/scroll-progress |
| In view trigger | In View | Motion Primitives | https://motion-primitives.com/docs/in-view |
| Container scroll | Container Scroll Animation | Aceternity | https://ui.aceternity.com/components/container-scroll-animation |
### Device & Mockups
| Need | Component | Library | URL |
|------|-----------|---------|-----|
| iPhone frame | iPhone | Magic UI | https://magicui.design/docs/components/iphone |
| Safari browser | Safari | Magic UI | https://magicui.design/docs/components/safari |
| MacBook | MacBook Pro | Eldora UI | https://www.eldoraui.site/docs/components/macbook-pro |
| Terminal | Terminal | Magic UI | https://magicui.design/docs/components/terminal |
---
## Animation Taxonomy
### Entry Animations
**Corner Convergence**
Elements fly in from screen corners toward center.

Start: viewport corners (±width/2, ±height/2)
Path: 3D arc with Z-axis curve
End: center (0, 0, 0)

**Depth Emergence**
Elements rise from behind (negative Z) to surface.

Start: z = -500 to -800
Path: forward arc, overshoot, settle
End: z = 0

**Scatter Assembly**
Multiple pieces from random positions converge to form whole.

Start: randomized positions with rotation
Path: curved trajectories with staggered timing
End: locked formation

### Celebration Animations
**Fountain Burst**
Particles shoot upward from the top edge of the completed element and fall with gravity.

Origin: top edge of completed element (never center)
Direction: upward with ±35° spread
Physics: initial velocity + gravity simulation
Count: 50–100 particles
Duration: 2–4 seconds
Particle variety: mix shapes (rect, circle, diamond), sizes, opacities
Each particle: unique velocity, rotation, wobble offset, delay

**Pulse Glow**
Concentric layers of light that breathe.

Layers: 3–5 elliptical gradients
Timing: staggered pulse rates (2s, 2.5s, 3s, 4s)
Opacity: 0.1 to 0.4 range
Effect: radial-gradient with white center

**Border Trace**
Light beams that travel along element edges.

Method: SVG stroke-dasharray animation
Beams: 2–3 at different speeds and directions
Length: 5–15% of perimeter
Glow: Gaussian blur filter (3–6px)

### Interaction Animations
**3D Tilt**
Element rotates to follow cursor position.

Rotation X: (mouseY - 0.5) * -20deg
Rotation Y: (mouseX - 0.5) * 20deg
Scale: 1.03–1.04 on hover
Transition: 0.08s while moving (fast, responsive), 0.5–0.6s on leave (smooth settle)

**Cursor Glare**
Light reflection that follows mouse.

Effect: radial-gradient (ellipse) at cursor position
Size: 60–70% of element
Opacity: 0.15–0.20
Blend: screen mode for additive light

**Shadow Depth**
Shadow intensifies and drops on interaction.

Rest: 22px blur, 55% opacity
Hover: 35px blur, 80% opacity
Offset: bottom increases on Y-axis (rest: -28px, hover: -38px)
Transition: 0.4s ease-out

---
## Timing & Easing
### Duration Guidelines
| Animation Type | Duration |
|----------------|----------|
| Micro-interaction | 150–300ms |
| Element entry | 500–800ms |
| Full assembly | 2.0–3.0s |
| Celebration | 2–4s |
| Ambient loops | 3–8s |
### Easing Functions
**easeOutQuart** — Primary for entries
javascript
const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

Fast start, gentle landing. Use for elements arriving at destination.
**easeInOutCubic** — Dramatic approach phase
javascript
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

Slow start, fast middle, deceleration. Use for Phase 1 of two-phase animations.
**easeOutElastic** — Organic settle phase
javascript
const easeOutElastic = (t) => {
  if (t === 0 || t === 1) return t;
  return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1;
};

Overshoot and ring. Use for Phase 2 of two-phase animations (the settle).
**easeOutBack** — Confident overshoot
javascript
const easeOutBack = (t) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

Goes past target, comes back. Use for scale and position landings.
**linear** — Continuous motion
javascript
// Use for border beams, ambient rotation, looping effects

Constant speed for looping animations only.
**sine curve** — Arc movements
javascript
const arc = Math.sin(t * Math.PI); // 0 → 1 → 0

Natural rise and fall for Z-axis arcs.
### The Two-Phase Pattern (Critical)
Never use one easing function for a full animation. Split every motion:
javascript
// Phase 1: dramatic approach (0 → 0.65 of normalized progress)
if (normalized < 0.65) {
  eased = easeInOutCubic(normalized / 0.65) * 0.92;
}
// Phase 2: organic settle (0.65 → 1.0)
else {
  const sub = (normalized - 0.65) / 0.35;
  eased = 0.92 + easeOutElastic(sub) * 0.08;
}

This is the foundation of premium-feeling motion. The first phase builds drama. The second phase adds life.
---
## Technical Patterns
### 3D Container Setup
jsx
// Parent needs perspective
<div style={{ perspective: "1200px" }}>
  // Children need preserve-3d
  <div style={{ transformStyle: "preserve-3d" }}>
    // Elements use translate3d
    <div style={{
      transform: `translate3d(${x}px, ${y}px, ${z}px)`,
      backfaceVisibility: "hidden"
    }} />
  </div>
</div>

### Animation Loop Pattern
jsx
const [progress, setProgress] = useState(0);
const animRef = useRef(null);
const startAnimation = useCallback(() => {
  const duration = 2600;
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min((now - start) / duration, 1);
    setProgress(t);
    if (t >= 1) {
      onComplete();
      return;
    }
    animRef.current = requestAnimationFrame(tick);
  };
  animRef.current = requestAnimationFrame(tick);
}, []);
// Always clean up
useEffect(() => {
  return () => cancelAnimationFrame(animRef.current);
}, []);

### Z-Axis Arc Calculation
javascript
// Circular arc: behind → toward viewer → settle
const zStart = -700;
const zEnd = 0;
const arcHeight = 400; // varies per element for organic feel
const arcT = Math.min(normalized * 1.3, 1);
const arcZ = Math.sin(arcT * Math.PI) * arcHeight;
const baseZ = zStart * (1 - eased);
const currentZ = baseZ + arcZ;

### Staggered Multi-Element Config
javascript
// Each element gets unique timing parameters
const ELEMENT_CONFIGS = [
  { delay: 0.00, arcHeight: 420, startScale: 0.30, spinExtra: -15 },
  { delay: 0.08, arcHeight: 360, startScale: 0.25, spinExtra:  20 },
  { delay: 0.14, arcHeight: 450, startScale: 0.35, spinExtra: -10 },
  { delay: 0.05, arcHeight: 380, startScale: 0.20, spinExtra:  25 },
];
// Per-element progress with stagger
const delayed = Math.max(0, progress - config.delay);
const normalized = Math.min(delayed / (1 - config.delay), 1);

### Rotation Settle Wobble
javascript
// After 80% progress, add decaying sine wobble
const rotSettle = normalized > 0.8
  ? Math.sin((normalized - 0.8) / 0.2 * Math.PI * 2) * 3
  : 0;
const rotX = startRotX * (1 - eased) + rotSettle * 0.5;
const rotY = startRotY * (1 - eased) - rotSettle * 0.3;

### Scale Overshoot
javascript
// Base scale interpolation
const scaleBase = startScale + (1 - startScale) * Math.min(eased / 0.92, 1);
// Add overshoot bump near the end
const scaleOvershoot = normalized > 0.85
  ? Math.sin((normalized - 0.85) / 0.15 * Math.PI) * 0.03
  : 0;
const scale = scaleBase + scaleOvershoot;

### Viewport-Responsive Positioning
javascript
const [viewport, setViewport] = useState({ w: 800, h: 600 });
useEffect(() => {
  const update = () => setViewport({
    w: window.innerWidth,
    h: window.innerHeight
  });
  update();
  window.addEventListener('resize', update);
  return () => window.removeEventListener('resize', update);
}, []);
// Start positions scale with viewport
const spreadX = Math.max(viewport.w * 0.6, 400);
const spreadY = Math.max(viewport.h * 0.6, 350);

### Confetti Physics
javascript
const particles = Array.from({ length: 80 }, (_, i) => {
  const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.6;
  const velocity = 200 + Math.random() * 400;
  return {
    id: i,
    // Anchor from top edge of element, not center
    offsetX: (Math.random() - 0.5) * 160,
    offsetY: -elementHeight * 0.45 + Math.random() * 20,
    vx: Math.cos(angle) * velocity * 0.5,
    vy: Math.sin(angle) * velocity * 0.5,
    rotation: Math.random() * 900 - 450,
    wobble: Math.random() * 60 - 30,
    size: 3 + Math.random() * 5,
    opacity: 0.5 + Math.random() * 0.5,
    duration: 2 + Math.random() * 1.5,
    delay: Math.random() * 0.4,
    shape: ["rect", "circle", "diamond"][Math.floor(Math.random() * 3)],
  };
});

### Border Beam SVG
jsx
<svg>
  <defs>
    <linearGradient id="beam">
      <stop offset="0%" stopColor="transparent" />
      <stop offset="30%" stopColor="rgba(255,255,255,0.4)" />
      <stop offset="50%" stopColor="rgba(255,255,255,0.7)" />
      <stop offset="70%" stopColor="rgba(255,255,255,0.4)" />
      <stop offset="100%" stopColor="transparent" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3.5" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  {/* Multiple beams at different speeds/directions */}
  <rect
    rx={borderRadius}
    fill="none"
    stroke="url(#beam)"
    strokeWidth="1.5"
    filter="url(#glow)"
    strokeDasharray=`${dashLen} ${perimeter - dashLen}`}
    style={{ animation: "borderTrace 2.8s linear infinite" }}
  />
</svg>

### 3D Tilt Hover
jsx
const [isHovered, setIsHovered] = useState(false);
const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  setMousePos({
    x: (e.clientX - rect.left) / rect.width,
    y: (e.clientY - rect.top) / rect.height,
  });
};
// In render
<div
  onMouseMove={handleMouseMove}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => {
    setIsHovered(false);
    setMousePos({ x: 0.5, y: 0.5 });
  }}
  style={{
    transform: isHovered
      ? `rotateX(${(mousePos.y - 0.5) * -20}deg) rotateY(${(mousePos.x - 0.5) * 20}deg) scale(1.04)`
      : "rotateX(0) rotateY(0) scale(1)",
    transition: isHovered ? "transform 0.08s" : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
  }}
>
  {/* Glare overlay — ellipse, screen blend */}
  {isHovered && (
    <div style={{
      background: `radial-gradient(ellipse 70% 70% at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255,255,255,0.18), transparent 65%)`,
      mixBlendMode: "screen"
    }} />
  )}
</div>

### Snap Flash on Completion
jsx
// Brief radial white flash when elements lock together
const [snapFlash, setSnapFlash] = useState(false);
// On assembly complete:
setSnapFlash(true);
setTimeout(() => setSnapFlash(false), 400);
// In render:
<div style={{
  background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 50%)",
  opacity: snapFlash ? 1 : 0,
  transition: snapFlash ? "opacity 0.05s" : "opacity 0.5s ease-out",
}} />

---
## Component Checklist
When building any assembly animation, ensure you have:
- [ ] **Entry motion** — How do pieces arrive? (corners, depth, scatter)
- [ ] **3D arc** — Z-axis movement with overshoot, varied per element
- [ ] **Two-phase easing** — Dramatic approach + elastic settle
- [ ] **Rotation** — Tumble/tilt that settles with wobble decay
- [ ] **Scale** — Grow from small with overshoot bump near landing
- [ ] **Staggered timing** — Each element has unique delay, arc, spin
- [ ] **Snap flash** — Brief light burst on completion
- [ ] **Celebration** — Confetti (from top edge), glow, border beams — at least two
- [ ] **Interaction** — Hover tilt (fast response), glare (screen blend), shadow depth
- [ ] **Replay** — Button to restart the experience gracefully
- [ ] **Performance** — requestAnimationFrame, willChange, backfaceVisibility
---
## Response Behavior
When given a creative brief:
1. **Think cinematically** — Envision the animation as a scene with an arc: setup, climax, resolution
2. **Address all four layers** — Entry, Moment, Reward, Loop — every time, no exceptions
3. **Choose patterns from the taxonomy** — Don't invent from scratch; combine and customize documented patterns
4. **Set the aesthetic** — Dark, monochromatic, premium. Motion and light do the visual work
5. **Build with documented technical patterns** — Two-phase easing, Z-axis arcs, staggered configs, responsive positioning
6. **Implement celebration correctly** — Confetti anchors from the top edge of the element, not center. Multiple concurrent effects.
7. **Make interaction feel physical** — Fast response on hover (0.08s), slow settle on leave (0.6s), additive glare, deepening shadow
---
## Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| neutral-950 | #0a0a0a | Backgrounds |
| neutral-900 | #171717 | Card surfaces |
| neutral-800 | #262626 | Borders, subtle elements |
| neutral-700 | #404040 | Secondary surfaces |
| neutral-600 | #525252 | Muted elements |
| neutral-500 | #737373 | Body text, icons |
| neutral-400 | #a3a3a3 | Secondary text |
| neutral-300 | #d4d4d4 | Primary text |
| neutral-200 | #e5e5e5 | Emphasized text |
| white | #ffffff | Highlights, glows |
### Glow Opacity Scale

Subtle:   rgba(255,255,255,0.05)
Light:    rgba(255,255,255,0.1)
Medium:   rgba(255,255,255,0.2)
Strong:   rgba(255,255,255,0.4)
Intense:  rgba(255,255,255,0.8)

---
## Typography
- **Labels**: 9–10px, uppercase, tracking-[0.2em], font-medium, neutral-500
- **Titles**: 16–18px, font-light, tracking-tight, white
- **Body**: 12–14px, font-medium, neutral-200/300
- **Numbers**: tabular-nums for alignment
---
## Dependencies
json
{
  "react": "^18.0.0",
  "framer-motion": "^10.0.0",
  "tailwindcss": "^3.0.0"
}

Required Framer Motion imports:
javascript
import { motion, AnimatePresence } from "framer-motion";

---
*Memoria Animation Design System v2.0*
