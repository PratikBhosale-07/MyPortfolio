# style.css - Complete Code Documentation

## Overview

This is the main stylesheet for the portfolio website. It contains all CSS styling including variables, responsive design, animations, and dark mode theming.

---

## File Structure

### Lines 1-48: CSS Variables & Root Configuration

```css
:root {
    /* Primary Colors */
    --primary-color: #6C63FF;
    --primary-dark: #5548E8;
    --primary-light: #8A84FF;
    --secondary-color: #FF6584;
    --accent-color: #00D4FF;

    /* Gradient Colors */
    --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --gradient-3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --gradient-4: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
    --gradient-hero: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
```

**Line-by-line explanation:**

- **Line 4**: `:root` - Pseudo-class targeting document root for global CSS variables
- **Line 5-10**: Color variables for consistent theming throughout the site
  - `--primary-color` - Main purple brand color (#6C63FF)
  - `--primary-dark` - Darker purple for hover states
  - `--primary-light` - Lighter purple for accents
  - `--secondary-color` - Pink accent color
  - `--accent-color` - Cyan accent for variety
- **Line 12-16**: Gradient definitions used for backgrounds, text effects, buttons
  - All gradients use 135-degree angle for consistent diagonal flow
  - Purple/pink gradients (gradient-1, gradient-2) for brand consistency
  - Blue/cyan gradient (gradient-3) for variation
  - Green/cyan gradient (gradient-4) for success states

**Lines 18-31: Light Mode Colors**

```css
/* Light Mode Colors */
--bg-primary: #ffffff;
--bg-secondary: #f8f9fa;
--bg-tertiary: #f0f2f5;
--text-primary: #1a1a1a;
--text-secondary: #4a5568;
--text-tertiary: #718096;
--border-color: #e2e8f0;
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.2);
```

**Explanation:**

- **Background colors**: Three levels for layered UI (primary=white, secondary=light gray, tertiary=darker gray)
- **Text colors**: Three levels for text hierarchy (primary=dark, secondary=gray, tertiary=light gray)
- **Shadows**: Four sizes for elevation system (sm, md, lg, xl) with increasing blur and opacity

**Lines 33-48: Typography, Transitions, and Sizes**

```css
/* Typography */
--font-primary: "Poppins", sans-serif;
--font-secondary: "Montserrat", sans-serif;

/* Transitions */
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;

/* Sizes */
--nav-height: 70px;
--container-max-width: 1200px;
--border-radius-sm: 8px;
--border-radius-md: 12px;
--border-radius-lg: 16px;
```

**Explanation:**

- **Fonts**: Primary for body text, secondary for headings (Google Fonts)
- **Transitions**: Consistent timing for all animations
- **Sizes**: Layout constants for navbar height, container width, border radii

---

### Lines 50-62: Dark Mode Variables

```css
[data-theme="dark"] {
  --bg-primary: #0f1419;
  --bg-secondary: #1a1f2e;
  --bg-tertiary: #252d3d;
  --text-primary: #ffffff;
  --text-secondary: #cbd5e0;
  --text-tertiary: #a0aec0;
  --border-color: #2d3748;
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.5);
  --shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.6);
}
```

**Explanation:**

- **Attribute selector**: `[data-theme="dark"]` - Applied when JavaScript sets data-theme attribute
- **Overrides light mode colors** with dark equivalents
- **Inverts text/background colors**: Dark backgrounds, light text
- **Stronger shadows** needed for contrast on dark backgrounds

---

### Lines 64-70: Reset & Base Styles

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}
```

**Explanation:**

- **Line 64-68**: Universal selector reset
  - Removes default browser margins/padding
  - `box-sizing: border-box` makes padding/border included in element width
- **Line 70-73**: HTML root styles
  - `scroll-behavior: smooth` enables smooth scrolling for anchor links
  - Base font size 16px (1rem = 16px)

---

### Lines 72-100: Fluid Typography (Responsive Font Scaling)

```css
@media (min-width: 320px) {
  html {
    font-size: 14px;
  }
}

@media (min-width: 480px) {
  html {
    font-size: 15px;
  }
}

@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}
```

**Explanation:**

- **Progressive font sizing**: Scales base font size from 14px (mobile) to 18px (large desktop)
- **Breakpoints**: 320px, 480px, 768px, 1024px, 1440px, 1920px
- **Why it matters**: All rem-based measurements scale proportionally
- **Result**: Larger screens get bigger text without media queries for every element

---

### Lines 102-115: Body Styles

```css
body {
  font-family: var(--font-primary);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  transition: background-color var(--transition-normal), color var(--transition-normal);
  min-width: 320px;
}
```

**Explanation:**

- **Line 103**: Uses Poppins font for all body text
- **Line 104-105**: Background and text colors from CSS variables (theme-aware)
- **Line 106**: `line-height: 1.6` improves readability (1.5-1.8 is ideal)
- **Line 107**: `overflow-x: hidden` prevents horizontal scrollbar
- **Line 108**: Smooth transition when switching themes
- **Line 109**: Minimum width prevents breaking on very small screens

---

### Lines 117-125: Container Class

```css
.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
  width: 100%;
}
```

**Explanation:**

- **Purpose**: Centers content and constrains max width
- **Line 118**: Max width 1200px on large screens
- **Line 119**: `margin: 0 auto` centers horizontally
- **Line 120**: `clamp()` function for responsive padding
  - Minimum 1rem (16px)
  - Preferred 5vw (5% of viewport width)
  - Maximum 2rem (32px)
- **Line 121**: Full width up to max-width

---

### Lines 127-275: Navigation Styles

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--bg-primary);
  box-shadow: var(--shadow-sm);
  z-index: 1000;
  transition: all var(--transition-normal);
}
```

**Explanation:**

- **Line 128-132**: Fixed positioning keeps navbar at top while scrolling
- **Line 133**: Uses theme-aware background color
- **Line 134**: Small shadow for depth
- **Line 135**: High z-index ensures it stays above all content
- **Line 136**: Smooth transition for scroll effects

**Navbar Scrolled State:**

```css
.navbar.scrolled {
  background: var(--bg-primary);
  box-shadow: var(--shadow-md);
  padding: 0.5rem 0;
}
```

- Applied via JavaScript when user scrolls down
- Increases shadow for more prominence
- Reduces padding for compact look

**Navigation Links:**

```css
.nav-link {
  position: relative;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: color var(--transition-fast);
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--gradient-1);
  transition: width var(--transition-fast);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 80%;
}
```

**Explanation:**

- **Underline animation**: Uses pseudo-element `::after`
- **Initially hidden**: `width: 0`
- **Centers from middle**: `left: 50%; transform: translateX(-50%)`
- **Expands on hover/active**: Animates to 80% width
- **Gradient underline**: Uses brand gradient for visual interest

---

### Lines 277-350: Hero Section Styles

```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: var(--nav-height);
}
```

**Explanation:**

- **Line 278**: `min-height: 100vh` makes hero section full viewport height
- **Line 279-281**: Flexbox centers content vertically and horizontally
- **Line 282-283**: `position: relative` and `overflow: hidden` contain animated shapes
- **Line 284**: Top padding prevents content being hidden behind fixed navbar

**Animated Background Shapes:**

```css
.animated-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(80px);
  animation: float 20s infinite ease-in-out;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: #667eea;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(50px, 50px);
  }
  50% {
    transform: translate(-50px, 100px);
  }
  75% {
    transform: translate(100px, -50px);
  }
}
```

**Explanation:**

- **Three floating circles** create dynamic background
- **Heavily blurred** (`filter: blur(80px)`) for soft effect
- **Low opacity** (0.3) for subtle presence
- **Staggered animations**: Different delays for organic movement
- **20-second loop**: Slow, smooth floating motion

**Profile Picture Styling:**

```css
.hero-profile-image {
  flex: 0 0 50%;
  max-width: 400px;
  position: relative;
}

.hero-profile-image::before {
  content: "";
  position: absolute;
  top: -30px;
  left: -30px;
  right: -30px;
  bottom: -30px;
  background: linear-gradient(
    135deg,
    #2c7a7b 0%,
    #2d6a6a 25%,
    #38b2ac 50%,
    #2c7a7b 75%,
    #2d6a6a 100%
  );
  border-radius: 50%;
  z-index: -1;
  opacity: 0.15;
  filter: blur(15px);
}

.hero-profile-image::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-25deg);
  width: 140%;
  height: 60%;
  background: linear-gradient(135deg, #319795 0%, #2c7a7b 50%, #285e61 100%);
  border-radius: 20px;
  z-index: -1;
  opacity: 0.9;
}

.hero-profile-image img {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Explanation:**

- **50% width layout**: `flex: 0 0 50%` for side-by-side design
- **Pseudo-elements create artistic effect**:
  - `::before` - Soft circular glow behind image
  - `::after` - Diagonal brush stroke (teal gradient, rotated 25°)
- **Image styling**:
  - `aspect-ratio: 1/1` ensures perfect circle
  - `object-fit: cover` crops image to fit circle
  - `z-index: 1` places image above pseudo-elements
  - Smooth scale transform on hover

---

### Lines 352-520: Typography & Animations

**Typing Animation:**

```css
.typing-text {
  background: var(--gradient-2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cursor {
  color: var(--primary-color);
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}
```

**Explanation:**

- **Gradient text effect**:
  - `background-clip: text` clips gradient to text shape
  - `text-fill-color: transparent` makes text transparent to show gradient
- **Blinking cursor**: Simple opacity animation

**Fade-in Animation:**

```css
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;
}

.fade-in:nth-child(1) {
  animation-delay: 0.1s;
}
.fade-in:nth-child(2) {
  animation-delay: 0.2s;
}
.fade-in:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Explanation:**

- **Initial state**: Invisible and shifted down 30px
- **Staggered delays**: Each child element animates sequentially
- **Forwards**: Keeps final animated state
- **Smooth entrance**: Fades in while moving up

---

### Lines 522-650: Button Styles

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all var(--transition-normal);
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: var(--gradient-1);
  color: white;
  box-shadow: 0 4px 15px rgba(108, 99, 255, 0.4);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(108, 99, 255, 0.6);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-secondary:hover {
  background: var(--primary-color);
  color: white;
}
```

**Explanation:**

- **Inline-flex**: Allows icon and text to sit side-by-side
- **Pill shape**: `border-radius: 50px` creates rounded ends
- **Primary button**: Gradient background with shadow
- **Secondary button**: Outlined style with fill on hover
- **Hover effects**: Lift animation and intensified shadow

---

### Lines 652-830: Skills Section

```css
.skill-category {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}
```

**Explanation:**

- **Card-based design**: Each category is a card
- **Subtle hover lift**: Moves up 5px with enhanced shadow

**Skill Progress Bars:**

```css
.skill-bar {
  width: 100%;
  height: 8px;
  background: var(--bg-tertiary);
  border-radius: 4px;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-card:hover .skill-bar {
  opacity: 1;
}

.skill-progress {
  height: 100%;
  background: var(--gradient-1);
  border-radius: 4px;
  width: 0;
  transition: width 1s ease;
}

.skill-card:hover .skill-progress {
  width: var(--progress-width);
}
```

**Explanation:**

- **Hidden by default**: `opacity: 0`
- **Reveals on hover**: Fades in when hovering skill card
- **Animated fill**: Width animates from 0 to data-progress value
- **CSS variable**: `--progress-width` set by JavaScript

---

### Lines 832-1050: Projects Section

```css
.project-card {
  background: var(--bg-primary);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
}
```

**Explanation:**

- **Card hover effect**: Lifts 10px with dramatic shadow increase
- **Grid layout**: Uses CSS Grid for responsive project cards

**Project Icon Placeholder:**

```css
.project-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  color: white;
  background: var(--gradient-1);
  opacity: 1;
}
```

**Explanation:**

- **Font Awesome icons**: Large centered icons representing projects
- **Gradient background**: Matches brand colors
- **Full opacity**: Changed from 0.2 to 1 for better visibility

**Project Overlay:**

```css
.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(108, 99, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.project-card:hover .project-overlay {
  opacity: 1;
}
```

**Explanation:**

- **Hidden overlay**: Initially transparent
- **Appears on hover**: Fades in purple overlay with project links
- **Semi-transparent background**: 0.95 opacity for slight image visibility

---

### Lines 1052-1350: Responsive Design (Media Queries)

**Tablet (768px):**

```css
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: var(--nav-height);
    right: -100%;
    width: 300px;
    height: calc(100vh - var(--nav-height));
    background: var(--bg-primary);
    flex-direction: column;
    padding: 2rem;
    box-shadow: var(--shadow-lg);
    transition: right var(--transition-normal);
  }

  .nav-menu.active {
    right: 0;
  }
}
```

**Explanation:**

- **Mobile menu**: Slides in from right
- **Off-canvas by default**: `right: -100%` hides menu
- **Active state**: JavaScript adds .active class, slides to `right: 0`
- **Full-height**: Uses calc to account for navbar height

**Mobile (600px):**

```css
@media (max-width: 600px) {
  .hero-profile-wrapper {
    flex-direction: column;
    gap: 1.5rem;
  }

  .hero-profile-image {
    flex: 0 0 auto;
    max-width: 250px;
  }

  .hero-text {
    flex: 0 0 auto;
    text-align: center;
  }
}
```

**Explanation:**

- **Stacked layout**: Profile image above text on mobile
- **Centered alignment**: Text centered for narrow screens
- **Smaller image**: Max width 250px instead of 400px

---

### Lines 1352-1550: Scroll Animations

```css
.scroll-animate {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-animate.active {
  opacity: 1;
  transform: translateY(0);
}
```

**Explanation:**

- **Intersection Observer API**: JavaScript detects when element enters viewport
- **Initial state**: Invisible and shifted down
- **Active state**: Fades in and moves to natural position
- **Applied to**: Skill categories, project cards, education cards

---

### Lines 1552-1750: Form Styles

```css
.form-group {
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-primary);
  transition: border-color var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.form-group.error input,
.form-group.error textarea {
  border-color: var(--secondary-color);
}
```

**Explanation:**

- **Full-width inputs**: 100% width for mobile-friendly forms
- **Focus state**: Primary color border when typing
- **Error state**: Red border when validation fails
- **Theme-aware**: Uses CSS variables for colors

---

### Lines 1752-1889: Utility Classes & Dark Mode Tweaks

```css
.text-gradient {
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="dark"] .project-card {
  background: var(--bg-secondary);
}

[data-theme="dark"] .skill-category {
  background: var(--bg-tertiary);
}
```

**Explanation:**

- **Utility class**: Can apply gradient text anywhere
- **Dark mode adjustments**: Some elements need different backgrounds in dark mode
- **Maintains contrast**: Ensures readability in both themes

---

## Key CSS Concepts Used

### 1. CSS Custom Properties (Variables)

- **Global theming** system
- **Easy maintenance** - change one value, updates everywhere
- **Runtime switching** for dark mode

### 2. Flexbox & Grid

- **Flexbox** for one-dimensional layouts (navigation, cards)
- **Grid** for two-dimensional layouts (project grid, skill grid)
- **Responsive by default** with auto-fit and minmax

### 3. Pseudo-elements

- **::before & ::after** for decorative elements
- **No extra HTML** needed
- **Animated underlines**, **background effects**

### 4. Transitions & Animations

- **Transitions** for state changes (hover, focus)
- **@keyframes** for complex animations
- **CSS variables** for consistent timing

### 5. Clamp() Function

- **Fluid sizing** between min and max values
- **Reduces media queries**
- **Used for**: Typography, padding, gaps

### 6. Media Queries

- **Mobile-first approach** with min-width
- **Breakpoint system** for all devices
- **Progressive enhancement**

---

## Performance Considerations

### 1. Will-change Property

- Not overused (can hurt performance)
- Applied to animated elements

### 2. Transform over Top/Left

- GPU-accelerated animations
- Smoother 60fps animations

### 3. Contain Property

- Could be added for layout containment
- Helps browser optimize repaints

---

## Browser Compatibility

### Modern Features Used

- CSS Variables (IE11 needs fallbacks)
- CSS Grid (IE11 needs fallbacks)
- Clamp() function (IE11 not supported)

### Vendor Prefixes

- `-webkit-background-clip` for gradient text
- `-webkit-text-fill-color` for gradient text

---

## Maintenance Tips

### Adding New Colors

1. Add to `:root` for light mode
2. Add to `[data-theme="dark"]` for dark mode
3. Use `var(--your-color)` in styles

### Adding New Breakpoints

1. Follow mobile-first approach
2. Use min-width media queries
3. Adjust fluid typography if needed

### Adding New Animations

1. Define @keyframes
2. Apply with animation property
3. Use CSS variable timing for consistency

---

## File Size: 1889 lines

- **Well-organized** with comments
- **Scalable** architecture
- **Maintainable** with variables
