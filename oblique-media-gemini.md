# Oblique Media — Premium 3D Interactive Website Specification

## Project Overview
A single-page premium digital marketing agency website featuring cinematic 3D interactions, scroll-based animations, and editorial-grade visual hierarchy. Built for modern creative agencies that demand sophistication without sacrificing performance.

**Design Inspiration: Dylan Brouwer's Portfolio Aesthetic**

This specification draws significant influence from Dylan Brouwer's award-winning portfolio website (dylanbrouwer.design), known for its:

- **Bold Motion Graphics**: Infinite scrolling text marquees, dynamic headlines, smooth parallax effects
- **Editorial Minimalism**: Clean typography hierarchy, generous whitespace, no visual clutter
- **Sophisticated Interactions**: Hover reveals, magnetic buttons, cursor-following elements, staggered animations
- **Premium 3D Showcases**: Floating device mockups, layered depth effects, mouse parallax
- **Full-Screen Overlays**: Elegant menu systems, smooth transitions, large typography
- **Content-First Layout**: Profile-style sections, work-focused grid, minimal decorative elements
- **Signature Details**: Copyright badges (©Design by Dylan), diamond separators (✦), location/time widgets

**Key Adaptations for Oblique Media:**

We maintain Dylan's aesthetic principles while adapting for a digital marketing agency context:
- Hero marquees reference creative agency motion ("Built to move → Driven by design")
- 3D device showcases display campaign reels instead of design work
- Service sections use editorial blocks with hover reveals (not traditional cards)
- Work preview follows Dylan's asymmetric project grid layout
- Client logos presented as infinite scroll ticker
- Navigation uses full-screen overlay menu system
- Footer adopts minimal single-line copyright style
- Orange (#F94F37) replaces Dylan's accent colors while maintaining the same visual weight

---

## Brand Identity

### Core Values
- **Premium Creative Agency**: Cinematic, editorial, bold
- **Sophisticated Minimalism**: High whitespace, strong hierarchy, minimal copy density
- **Motion-First Design**: Scroll reveals, micro-interactions, parallax depth
- **Performance-Driven**: Fast, optimized, production-ready

### Visual Language
- No tech/SaaS aesthetics, no futuristic HUD elements
- Creative studio photography, campaign visuals, editorial layouts
- Clean grids, asymmetric balance, generous breathing room
- 3D elements used for depth and engagement, not decoration

---

## Design System

### Color Palette
**Primary Palette:**
- **Midnight Black**: `#0B0B0B` — Primary background, text
- **Vivid Orange**: `#F94F37` — Primary accent, CTA, highlights
- **Warm Orange**: `#f47418` — Secondary accent, hover states
- **Light Cream**: `#022E15` — Soft backgrounds, contrast sections
- **Pure White**: `#FFFFFF` — Typography, cards, highlights

**Background Strategy:**
- Base: Midnight black (`#0B0B0B`) with warm orange accents
- Alternating sections: Deep black (#0B0B0B) and subtle warm gray (#1A1A1A)
- High-contrast moments: Pure white sections for breathing room
- Accent: Vivid orange (#F94F37) used sparingly for CTAs, separators, active states

**Color Application:**
- 80% neutrals (blacks, grays, whites)
- 15% warm supporting tones
- 5% vivid orange for critical actions

---

### Typography System

**Display Font (Headings):**
- Font: **Space Grotesk** or **Syne** (geometric, bold, modern editorial)
- Weight: 700 for H1, 600 for H2/H3
- Use: Hero headlines, section titles, impact moments

**Body Font:**
- Font: **Inter** or **DM Sans** (clean, readable, professional)
- Weight: 400 regular, 500 medium, 600 semi-bold
- Use: Body copy, descriptions, navigation

**Typography Scale:**
```
H1 (Hero): 96px / 5.5rem (desktop), 48px / 3rem (mobile)
H2 (Section): 64px / 4rem (desktop), 36px / 2.25rem (mobile)
H3 (Sub-section): 48px / 3rem (desktop), 28px / 1.75rem (mobile)
H4 (Card Title): 32px / 2rem (desktop), 24px / 1.5rem (mobile)
Body Large: 24px / 1.5rem
Body: 18px / 1.125rem
Body Small: 16px / 1rem
Caption: 14px / 0.875rem
```

**Line Heights:**
- Headings: 1.1 - 1.2
- Body: 1.6 - 1.7
- Captions: 1.4

**Letter Spacing:**
- Headings: -0.02em to -0.04em (tight, modern)
- Body: 0em (normal)
- All-caps labels: 0.1em (tracking)

---

### Spacing System
**Base Unit: 8px**

```
4px    → xs (micro gaps)
8px    → sm (tight spacing)
16px   → md (default)
24px   → lg (breathing room)
32px   → xl (section padding start)
48px   → 2xl (comfortable section padding)
64px   → 3xl (component spacing)
96px   → 4xl (section dividers)
128px  → 5xl (major sections)
160px  → 6xl (hero/footer padding)
```

**Section Padding:**
- Desktop: 128px vertical, 80px horizontal (max-width: 1400px)
- Mobile: 64px vertical, 24px horizontal

---

### UI Components

#### Buttons

**Primary Button (CTA):**
```
Background: #F94F37 (Vivid Orange)
Text: #FFFFFF
Padding: 18px 40px
Border-radius: 8px
Font: 16px / 600 weight
Transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)

Hover:
  Background: #f47418
  Transform: translateY(-2px)
  Box-shadow: 0 12px 32px rgba(249, 79, 55, 0.3)
```

**Secondary Button:**
```
Background: transparent
Border: 2px solid #FFFFFF
Text: #FFFFFF
Padding: 16px 36px
Border-radius: 8px

Hover:
  Background: rgba(255, 255, 255, 0.1)
  Border-color: #F94F37
  Text: #F94F37
```

**Ghost Button (Navigation):**
```
Background: transparent
Text: #FFFFFF
Padding: 12px 24px
Position: relative
Underline animation on hover (orange)
```

#### Cards

**Service Card:**
```
Background: rgba(255, 255, 255, 0.03)
Border: 1px solid rgba(255, 255, 255, 0.08)
Border-radius: 16px
Padding: 40px
Backdrop-filter: blur(20px)

Hover:
  Border-color: rgba(249, 79, 55, 0.4)
  Transform: translateY(-8px)
  Box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4)
  
Layout:
  - Icon/thumbnail (64px, rounded-lg)
  - Title (H4, 32px)
  - Description (Body, 18px, opacity 0.8)
  - Hover reveal: "Learn More" link
```

**Proof Block:**
```
Background: transparent
Border-left: 3px solid #F94F37
Padding: 24px 32px
Transition: 0.4s ease

Hover:
  Background: rgba(249, 79, 55, 0.05)
  Border-left-width: 6px
```

---

### 3D & Motion Design Principles

#### Scroll-Based Animations

**Parallax Layers:**
- Background elements: 0.3x scroll speed (slower)
- Mid-ground content: 1x scroll speed (normal)
- Foreground elements: 1.5x scroll speed (faster)
- Creates depth without overwhelming users

**Scroll Reveal Strategy:**
```javascript
// Staggered entrance animations
Elements appear with:
  - Opacity: 0 → 1
  - TranslateY: 40px → 0
  - Duration: 0.8s
  - Delay: stagger by 0.1s per element
  - Easing: cubic-bezier(0.16, 1, 0.3, 1)
```

**Scroll Trigger Zones:**
- Hero: Immediate (no delay)
- Sections: Trigger at 20% viewport entry
- Cards: Trigger at 30% viewport entry
- Text blocks: Trigger at 25% viewport entry

#### 3D Transform Elements

**Hero Scene:**
```
3D rotating media showcase:
  - Perspective: 1200px
  - RotateY on scroll: 0deg to 15deg
  - RotateX on mouse move: -10deg to 10deg
  - Smooth damping for natural feel
  
Floating elements:
  - Small UI motifs (play buttons, comment icons)
  - Gentle floating animation (2-4s cycle)
  - Blur effect for depth (filter: blur(0.5px))
```

**Service Cards:**
```
Card tilt on hover:
  - Transform-style: preserve-3d
  - RotateX: based on mouse Y position
  - RotateY: based on mouse X position
  - Maximum tilt: ±8 degrees
  - Inner content: translateZ(20px) for depth
```

**Process Timeline:**
```
3D step progression:
  - Each step: translateZ on scroll reveal
  - Active step: scale(1.05) + translateZ(30px)
  - Connecting line: grows with scroll progress
  - Number badges: rotate on reveal (360deg entrance)
```

#### Micro-interactions

**Navigation:**
- Logo: Scale pulse on page load (1 → 1.05 → 1)
- Menu items: Underline slide from left on hover (0.3s)
- Active state: Orange dot indicator

**Buttons:**
- Ripple effect on click (expand from center)
- Icon animations (arrows slide right on hover)
- Loading states: Spinner with orange accent

**Imagery:**
- Lazy load with blur-up technique
- Hover scale: 1.05 with smooth transition
- Overlay gradient on hover (orange tint)

**Cursor Interactions:**
- Custom cursor on desktop (orange dot)
- Grows on hover over interactive elements
- Text cursor on text, pointer on buttons

---

## Page Structure & Layout

### Global Navigation

**Sticky Header - Dylan Brouwer Style:**

```
Position: fixed, top: 0
Background: Transparent initially, then rgba(11, 11, 11, 0.85) on scroll
Backdrop-filter: blur(24px) (frosted glass effect)
Height: 88px
Padding: 0 80px (desktop), 0 24px (mobile)
Z-index: 1000
Border-bottom: 1px solid rgba(255, 255, 255, 0.08) (only when scrolled)

Scroll Behavior:
  - At top (0px): Transparent background, no border
  - Scrolled (>100px): Dark background + blur + border
  - Smooth transition: 0.3s ease

Layout Structure:
  
  Left Side:
    - Logo: Oblique Media (text + orange slashes icon)
      * Logo text: 20px, Space Grotesk Bold
      * Orange slashes: SVG icon, 24px
      * Hover: subtle scale(1.05)
      * Links to homepage with smooth scroll reset
  
  Right Side - Desktop:
    - Main navigation links (horizontal)
      Links: About | Services | Work | Contact
      * Font: 15px, Inter Medium
      * Color: rgba(255, 255, 255, 0.7)
      * Spacing: 40px gap between items
      * Hover: 
        - Color: white (full opacity)
        - Underline animation (slides in from left, orange)
        - Duration: 0.25s
      * Active page: Orange underline (persistent)
    
    - Menu link (far right):
      * Text: "Menu" with icon
      * Opens full-screen navigation overlay
      * Replaces traditional hamburger on desktop too
  
  Right Side - Mobile:
    - Menu button
      * Text or icon: "Menu" or hamburger (3 lines)
      * Hamburger: 3 lines (white, 2px thick, 20px wide)
      * Transforms to X when menu open
      * Smooth rotation animation (0.3s)

Mobile/Desktop Menu Overlay (Full-Screen):
  - Trigger: Menu button/link click
  - Transition: Fade in + scale from center
  - Background: rgba(11, 11, 11, 0.98)
  - Backdrop-filter: blur(40px)
  - Z-index: 2000
  
  Menu Layout:
    - Grid layout: Left column (links) + Right column (info)
    - Or centered single column on mobile
  
  Left Column - Main Links:
    - Links: About | Services | Work | Contact
    - Large text: 56px (desktop), 36px (mobile)
    - Space Grotesk Bold
    - Stacked vertically, generous spacing (48px gap)
    - Link animation:
      * Default: white, opacity 0.5
      * Hover: orange (#F94F37), opacity 1
      * Slide-in from bottom on menu open (stagger 0.1s)
      * Underline expands from left on hover
    
  Right Column - Additional Info:
    - Contact email: hello@obliquemedia.com
      (16px, orange, clickable)
    - Social links:
      * Instagram, LinkedIn, Twitter, YouTube
      * Text links or icons
      * 14px, white, orange on hover
      * Vertical stack or horizontal row
    - Location/Time: "Hyderabad, IN | 6:24 PM IST"
      (12px, opacity: 0.5, updates live)
  
  Close Button:
    - Position: Top-right corner (48px from edges)
    - Large X icon or "Close" text
    - Size: 24px icon or 16px text
    - Hover: orange color, rotate 90deg
  
  Animation:
    - Open: Fade in (0ms) + links stagger from bottom
    - Close: Fade out (300ms) + scale down slightly
    - Links exit: fade out (no stagger)
    - Duration: 0.5s cubic-bezier(0.16, 1, 0.3, 1)

Special Features:
  - Logo copyright: "©Design by Dylan" style badge
    * Small text in header: "©2025 Oblique"
    * Position: Left side, near logo (optional)
    * 10px, opacity: 0.4
  
  - Active page indicator:
    * Small orange dot (6px) next to active link
    * Or orange text color for current page
  
  - Scroll progress indicator (optional):
    * Thin orange line at top of header (2px)
    * Width grows 0% → 100% as page scrolls
    * Smooth width transition

Accessibility:
  - Focus states: Orange outline, 2px
  - Keyboard: Tab navigation, Enter to activate
  - Escape key: Closes menu overlay
  - Screen reader: Proper ARIA labels
  - Skip to main content link (visible on Tab focus)
```

---

### Section 1: Hero

**Layout: Full-viewport impact with dynamic text + 3D media showcase**

```
Hero Structure (Dylan Brouwer inspired):
  
Top Section:
  - Large motion text marquee: "Built to move — Built to move —"
    (48px, uppercase, infinite horizontal scroll, orange)
  - Secondary marquee below: "Driven by design — Driven by design —"
    (48px, uppercase, scroll opposite direction, white)
  - Gap between: 24px
  - Both use text-stroke effect (outlined text)
  
Center Content:
  - Massive headline: "Out-think the Algorithm."
    (Clamp: 64px mobile → 120px desktop, Space Grotesk Black)
    (Line-height: 0.95, letter-spacing: -0.03em)
    (Split into lines, each line slides in with stagger)
  - Accent badge: "Digital Marketing" 
    (Small pill badge, orange background, inline with headline)
  - Location/Time widget: "Hyderabad, IN | [Current Time]"
    (Small, top-right corner, opacity: 0.6, updates live)

Main Description:
  - Centered below headline, max-width: 640px
  - "I craft performance-driven strategies for brands that 
    move with clarity, creativity, and measurable growth"
    (20px, line-height: 1.6, opacity: 0.85)
  - Replace "I craft" with "We help brands grow"

Professional Tag:
  - "Digital Marketing Agency + Creative Storytelling"
    (14px, uppercase, letter-spacing: 0.12em, orange)

3D Media Showcase:
  - Position: Center-stage, below text
  - Desktop monitor mockup with video/reel playing
  - Parallax depth: Monitor frame moves slower than content
  - Screen content: Campaign reel or case study preview
  - Floating elements around monitor:
    * Smaller tablet/phone screens showing content
    * Stats badges: "2M+ Views", "47% ROI Increase"
    * Social media UI elements (likes, comments, shares)
  - All elements have subtle float animation (3-5s cycles)
  - Mouse parallax: Elements shift based on cursor position

CTA Section:
  - Below media showcase
  - Primary: "View Work" (large orange button, 24px padding)
  - Secondary: "Let's Talk" (outline button)
  - Tertiary: "Learn more" link with down arrow
  - Horizontal layout with 20px gap

Background:
  - Pure black (#0B0B0B)
  - Radial gradient spotlight (orange glow, 8% opacity) behind media
  - Subtle animated grain texture overlay
  - Optional: Slow-moving gradient mesh in background
  
Height: 100vh minimum, can extend to 120vh
Vertical centering with flex/grid
Padding: 120px 80px (desktop), 80px 24px (mobile)

Scroll Animation:
  - Marquees continue scrolling
  - Main content parallax: slower scroll speed (0.6x)
  - Media showcase: even slower (0.4x)
  - Creates depth as user scrolls down
  - Fade out at 70% scroll

Mobile Adaptation:
  - Stack vertically, all center-aligned
  - Headline: 48px
  - Single marquee (combine both messages)
  - Media showcase: 90% width, single screen mockup
  - Remove floating elements (performance)
  - CTAs: Stack vertically, full-width buttons
```

---

### Optional: Work Preview Strip

**Placement: Between Hero and "Who We Are"**

```
Background: #1A1A1A (slightly lighter than black)
Padding: 80px 0
Overflow: hidden

Layout:
  - Horizontal scroll carousel (3-5 thumbnails)
  - Each thumbnail: 400px wide, 300px tall
  - Gap: 24px
  - Rounded: 12px
  
Thumbnail Content:
  - Project image (full bleed)
  - Overlay on hover:
    * Gradient from bottom (black to transparent)
    * Project name (H4, white)
    * Category tag (Caption, orange)
  - Hover scale: 1.03
  
Controls:
  - Desktop: Drag to scroll or arrow navigation
  - Mobile: Swipe gesture
  - Auto-scroll option (pauses on hover)
  
Intro:
  - Label: "FEATURED WORK" (small, uppercase, orange)
  - Optional: Short description above carousel
```

---

### Section 2: Who We Are

**Layout: Profile-style introduction with large text + image**

```
Layout Style: Dylan Brouwer inspired profile section
Background: #0B0B0B
Padding: 160px 80px
Max-width: 1400px (centered)

Section Prefix:
  - Small leading dash/hyphen: "-"
    (64px, orange, positioned left of text)

Main Content Block:
  - Large body text (not headline style):
    "We are Oblique Media, a digital marketing agency built for 
    brands that want clarity, consistency, and measurable growth. 
    Our team blends creativity, strategy, and performance marketing 
    to help businesses scale in the digital space."
    (36px font-size on desktop, 24px mobile)
    (Line-height: 1.4, Space Grotesk Medium)
    (Max-width: 900px)
    (Not bolded - medium weight for readability)
  
Profile Card (Right side or below):
  - Profile image: Team photo or founder image
    (Aspect ratio: 3:4 portrait, rounded corners 12px)
    (Size: 280px × 360px desktop)
  - Card background: subtle border, dark card style
  - Image has subtle hover scale (1.02)
  
  Info below image:
    - "Oblique Media Team" or founder name
    (18px, bold, white)
    - Location: "Based in India"
    (14px, opacity: 0.6)
    - "More about us →" link
    (14px, orange, underline on hover)

Layout:
  Desktop: 
    - Text (65% width) + Profile card (35% width)
    - Flex layout with gap: 80px
  Mobile:
    - Stack vertically
    - Text first, full width
    - Profile card: centered, 240px wide

Scroll Animation:
  - Dash slides in from left
  - Text fades up with slight delay
  - Profile card slides in from right
  - All staggered by 0.15s

Alternative Layout Option:
  - Full-width text centered
  - Profile card positioned absolute, right side
  - Creates asymmetric balance
```

---

### Work Preview Section (Between "Who We Are" and "What We Do")

**Layout: Featured work grid - Dylan Brouwer inspired**

```
Background: #0B0B0B
Padding: 120px 80px
Max-width: 1600px (centered)

Section Header:
  - Small eyebrow: "Selected Work" 
    (12px, uppercase, orange, letter-spacing: 0.12em)
  - Large headline: "Case Studies" or "Recent Projects"
    (64px, Space Grotesk Bold, margin-top: 16px)
  - View all link: "Show all → [0]"
    (Float right, orange, hover underline)
    (Number updates based on total projects)

Project Grid:
  Desktop Layout:
    - Asymmetric grid (not equal sizes)
    - 3 featured projects visible
    - Grid structure:
      * Project 1: Large (60% width)
      * Project 2: Medium (40% width, same row)
      * Project 3: Full-width below
    - Gap: 24px

Project Card Component:
  - Image: Full-bleed project thumbnail
    * Aspect ratio: 4:3 or 16:10
    * Border-radius: 16px
    * Overflow: hidden
  
  - Overlay (appears on hover):
    * Dark gradient from bottom (black 80% opacity)
    * Project name: H3 (32px, white, bottom: 40px)
    * Services tags: "Design • Development"
      (14px, orange, bottom: 20px, separated by bullets)
    * Smooth opacity transition (0.3s)
  
  - Hover state:
    * Image: scale(1.05) with 0.6s ease
    * Overlay: opacity 0 → 1
    * Border: subtle orange glow appears
    * Cursor: Custom "View" cursor or arrow
  
  Example Projects (use your actual work):
    1. "Brand X Social Campaign"
       Tags: Social Media • Video Production
    2. "E-commerce Growth Strategy"
       Tags: Performance Marketing • SEO
    3. "Product Launch Campaign"
       Tags: Branding • Creative Design

Mobile Layout:
  - Single column stack
  - All projects same width
  - Smaller images (280px height)
  - Always show overlay (no hover state)
  - Swipe carousel option

Scroll Animation:
  - Header fades in from top
  - Projects stagger in from bottom
  - Delay: 0.2s between each card
  - Each card: translateY(60px) → 0 + opacity 0 → 1

Link Behavior:
  - Each card links to case study page
  - Smooth page transition
  - Maintain scroll position on back
```

---

### Brands Collaboration Ticker

**Placement: After Work Preview, before "What We Do"**

```
Background: #0B0B0B
Padding: 80px 0
Border-top: 1px solid rgba(255, 255, 255, 0.08)
Border-bottom: 1px solid rgba(255, 255, 255, 0.08)

Section Title:
  - "Brands & creative teams we've collaborated with:"
    (16px, center-aligned, margin-bottom: 48px, opacity: 0.7)

Logo Ticker:
  - Infinite horizontal scroll marquee
  - Direction: Left to right, continuous loop
  - Speed: Slow (40s for full cycle)
  - Pause on hover (optional)
  
  Logo Style:
    - Client logos in SVG format
    - Monochrome: white or orange
    - Size: 80px height (auto width)
    - Filter: grayscale(100%) brightness(0) invert(1)
    - Opacity: 0.4
    - Hover: opacity 1, orange filter
    - Gap between logos: 80px
  
  Content:
    - Add 8-12 client/partner logos
    - Duplicate set for seamless loop
    - Examples: Meta, Google, Shopify, Adobe, etc.

Technical Implementation:
  - CSS animation: translateX loop
  - No JavaScript (pure CSS)
  - Smooth performance (GPU-accelerated)
  
Mobile:
  - Same behavior, slower speed (60s)
  - Smaller logos (60px height)
  - Gap: 48px
```

---

### Section 3: What We Do

**Layout: Service showcase with hover-reveal descriptions**

```
Background: #0B0B0B (pure black)
Padding: 160px 80px
Max-width: 1400px (centered)

Section Header:
  - Large headline: "Services"
    (80px, Space Grotesk Bold, margin-bottom: 80px)
  - Optional subheading: "Full-spectrum digital marketing"
    (20px, opacity: 0.7)

Services Grid:
  Desktop Layout:
    - 5 service blocks in flexible grid
    - Row 1: 2 services (50/50 split)
    - Row 2: 3 services (33/33/33 split)
    - Gap: 2px (minimal gap for grid effect)
    - Each block: Minimum 400px height
  
  Alternative: Stacked list with separators
    - Vertical stack with horizontal dividers
    - Each service: Full-width block
    - Cleaner, more editorial feel

Service Block Component (Dylan-inspired):
  
  Structure:
    - Number badge: "01" - "05"
      (80px, top-left, Space Grotesk, orange, opacity: 0.3)
    - Service title: (Large, bold)
      (48px, Space Grotesk Bold, white)
      (Position: Center or left-aligned)
    - Description: (Hidden by default)
      (18px, Inter Regular, opacity: 0.8)
      (Max-width: 400px)
      (Reveals on hover with slide-up animation)
    - Icon/Thumbnail:
      (64px, minimal line icon or service visual)
      (Top-right corner, subtle)
  
  Service List (EXACT):
    01. Social Media Marketing
        "Content, reels, and strategies that build visibility and engagement."
        Icon: Social grid or Instagram-style icon
        
    02. Performance Marketing (Ads)
        "ROI-focused Meta & Google Ads optimized for leads and sales."
        Icon: Analytics graph or ad interface
        
    03. Branding & Creative Design
        "Strong visuals and brand systems that stand out."
        Icon: Color palette or design tool
        
    04. Video Production & Reels
        "High-performing short-form videos designed to convert."
        Icon: Video play button or camera
        
    05. SEO & Content Marketing
        "Search-optimized content that drives long-term organic growth."
        Icon: Search magnifier or content document

  Default State:
    - Background: transparent
    - Border: 1px solid rgba(255, 255, 255, 0.06)
    - Padding: 60px 48px
    - Number: visible, low opacity
    - Title: visible, white
    - Description: hidden (opacity: 0, translateY: 20px)
    - Icon: visible, low opacity
  
  Hover State:
    - Background: rgba(249, 79, 55, 0.03)
    - Border-left: 4px solid #F94F37 (accent bar)
    - Number: orange, full opacity
    - Title: slight translateX(12px) shift
    - Description: Slides up and fades in (opacity: 1, translateY: 0)
    - Icon: orange tint, full opacity
    - Subtle lift: translateY(-4px)
    - Duration: 0.4s ease-out
  
  Active/Click State:
    - Expands to show full description
    - Background: slight orange glow
    - Border: full orange outline
    - Optional: Links to service detail page

Link to Services Page:
  - "Discover more →" link below grid
    (16px, orange, underline on hover, right-aligned)
  - Links to /services page with full details

Mobile Layout:
  - Single column stack
  - Full-width blocks
  - Default: Show title + description always (no hover)
  - Smaller text (32px titles, 16px descriptions)
  - Padding: 40px 24px per block
  - Number badges: 48px

Scroll Animation:
  - Header slides in from top
  - Service blocks stagger in from bottom
  - Delay: 0.15s between each
  - Each block: opacity 0 → 1 + translateY(40px) → 0
```

---

### Section 4: How We Work

**Layout: Horizontal timeline (Desktop) / Vertical stepper (Mobile)**

```
Background: #0B0B0B
Padding: 128px 80px
Max-width: 1400px (centered)

Section Header:
  - Label: "HOW WE WORK"
    (14px, uppercase, orange, letter-spacing: 0.1em)
  - Subheading: "Our proven 5-step growth process"
    (48px, Space Grotesk, margin-bottom: 80px)

Desktop Timeline:
  - Layout: Horizontal flex (5 steps, equal distribution)
  - Connecting line: 
    * Height: 3px
    * Background: rgba(255, 255, 255, 0.1)
    * Progress fill: orange (#F94F37)
    * Animates with scroll (left to right)
  
Process Steps (Exact Copy):
  01. Discover
      "Understand your brand, goals, and audience."
      
  02. Strategize
      "Build a custom growth roadmap."
      
  03. Create
      "Design content, ads, and creatives."
      
  04. Launch & Optimize
      "Test, track, and improve performance."
      
  05. Scale
      "Focus on what works and grow faster."

Step Component:
  Structure:
    - Number badge: Large "01" - "05"
      * Size: 64px circle
      * Background: rgba(249, 79, 55, 0.1)
      * Border: 2px solid #F94F37
      * Font: 32px, bold
      * Position: above step
    - Icon: Minimal line icon (optional, 24px, below number)
    - Title: H4 (28px, bold, margin-top: 24px)
    - Description: Body (16px, opacity: 0.7, max-width: 220px)
  
  Active State (on scroll):
    - Number: Rotates 360deg on reveal
    - Background: solid orange
    - Text: white
    - Scale: 1.1
  
  Scroll Animation:
    - Steps reveal sequentially as user scrolls
    - Timeline progress bar fills from left to right
    - Active step pulses gently

Mobile Adaptation:
  - Vertical stepper layout
  - Left: Number badges + connecting vertical line
  - Right: Title + description
  - Line animates top to bottom
  - Gap: 48px between steps
```

---

### Section 5: Why Oblique Media

**Layout: 2×3 Proof grid**

```
Background: #1A1A1A
Padding: 128px 80px
Max-width: 1400px (centered)

Section Header:
  - Label: "WHY OBLIQUE MEDIA"
    (14px, uppercase, orange, letter-spacing: 0.1em)
  - Headline: "Built different, designed to deliver."
    (48px, Space Grotesk, margin-bottom: 64px)

Grid Layout:
  - Desktop: 2 columns × 3 rows
  - Gap: 32px (horizontal), 40px (vertical)
  - Mobile: 1 column (stack)

Proof Blocks (Exact Bullets + Supporting Lines):
  
  1. Performance-first approach
     Supporting: "We measure every move. ROI isn't a metric—it's the goal."
     
  2. Clear communication & transparency
     Supporting: "No jargon, no surprises. You'll always know what's happening."
     
  3. Creative + data-driven execution
     Supporting: "Beautiful work that actually converts. Strategy meets artistry."
     
  4. Platform-native content
     Supporting: "Content built for where your audience lives—not copy-paste."
     
  5. Reliable delivery & consistency
     Supporting: "On time, every time. We're a partner, not a vendor."
     
  6. Growth-focused mindset
     Supporting: "We don't chase vanity metrics. We build sustainable scale."

Block Component:
  - Border-left: 4px solid #F94F37
  - Padding: 32px 40px
  - Background: transparent
  - Transition: 0.4s ease
  
  Inner Structure:
    - Title: H4 (24px, bold, margin-bottom: 12px)
    - Supporting line: Body (16px, opacity: 0.7)
  
  Hover State:
    - Background: rgba(249, 79, 55, 0.05)
    - Border-left: 6px (thicker)
    - Transform: translateX(8px)
    - Supporting text: opacity 1
    
Scroll Animation:
  - Blocks stagger in (3 per row)
  - Delay: 0.15s between each
  - Entrance: fade + slide from left
```

---

### Section 6: Final CTA

**Layout: Editorial impact section with dynamic text**

```
Background: #0B0B0B
Padding: 200px 80px
Text-align: center
Max-width: 1000px (centered)
Position: relative

Content Structure:
  
  Eyebrow Text:
    - "Ready to start your next digital experience?"
      (18px, Inter Regular, opacity: 0.7, margin-bottom: 32px)
    - Or: "LET'S WORK TOGETHER"
      (12px, uppercase, orange, letter-spacing: 0.15em)
  
  Main Headline:
    - "Let's build something that grows."
      (Clamp: 56px mobile → 88px desktop)
      (Space Grotesk Bold, line-height: 1.05)
      (Letter-spacing: -0.02em)
      (Max-width: 800px, centered)
      (Margin-bottom: 24px)
    
  Subtext:
    - "Still confused? Let's connect. Growth starts with a conversation."
      (22px, Inter Regular, line-height: 1.6)
      (Opacity: 0.8, max-width: 640px, centered)
      (Margin-bottom: 56px)
  
  CTA Button:
    - Text: "Start a Conversation" or "Get in Touch"
    - Style: Large premium button
      * Font: 18px, Inter Semi-bold
      * Padding: 24px 56px
      * Background: #F94F37 (orange)
      * Border-radius: 8px
      * Color: white
      * Box-shadow: 0 16px 48px rgba(249, 79, 55, 0.25)
    - Hover state:
      * Background: #f47418 (warm orange)
      * Transform: translateY(-4px)
      * Box-shadow: 0 24px 64px rgba(249, 79, 55, 0.35)
      * Transition: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)
    - Active/Click:
      * Transform: scale(0.97)
      * Duration: 0.1s
  
  Alternative CTA Options:
    - Email link: "hello@obliquemedia.com"
      (20px, orange, underline on hover)
      (Positioned below button with 32px gap)
    - Or phone number if applicable

Background Treatment:
  - Radial gradient spotlight:
    * Center: rgba(249, 79, 55, 0.08)
    * Edges: transparent
    * Creates subtle glow behind content
  
  - Optional: Large decorative text
    * Word "GROWTH" or "OBLIQUE" in huge outlined text
    * Position: Absolute, behind content
    * Opacity: 0.02
    * Size: 300px+
    * Stroke-only, no fill
    * Creates editorial depth

3D/Motion Effects:
  - Headline: Subtle parallax on scroll
    * Moves slightly slower than viewport (0.8x)
  
  - Button: Magnetic cursor effect (desktop)
    * Follows cursor within 100px radius
    * Subtle pull toward button on proximity
    * Returns to center when cursor leaves
  
  - Background gradient: Moves with mouse
    * Subtle radial shift based on cursor position
    * Creates interactive depth
  
  - Button ripple on click:
    * Circular expand from click point
    * Orange pulse effect
    * Fades out after 0.6s

Decorative Elements (Optional):
  - Corner brackets or frame elements
    * Minimal line graphics (1px, orange)
    * Four corners of section
    * Creates editorial "crop marks" feel
  
  - Floating indicator:
    * "Scroll to top" text with up arrow
    * Bottom of section
    * 12px, opacity: 0.4
    * Clickable, smooth scroll to top

Mobile Adaptation:
  - Headline: 48px
  - Subtext: 18px
  - Button: Full-width or larger tap target (min 44px height)
  - Padding: 120px 24px
  - Reduce/remove decorative elements
  - Simplify animations for performance

Link Behavior:
  - Button links to /contact page or opens contact form modal
  - Email link: Opens default mail client
  - Smooth transition, no hard page reload if possible

Scroll Animation (on reveal):
  - Eyebrow: Fade in from top (0.4s delay)
  - Headline: Scale in from 0.95 to 1 + fade (0.6s delay)
  - Subtext: Fade up (0.8s delay)
  - Button: Slide up + fade (1s delay)
  - All with smooth easing: cubic-bezier(0.16, 1, 0.3, 1)
```

---

### Global Footer

**Dylan Brouwer Inspired Minimal Footer:**

```
Background: #0B0B0B (pure black)
Padding: 80px 80px 48px (desktop), 64px 24px 32px (mobile)
Border-top: 1px solid rgba(255, 255, 255, 0.06)
Max-width: 1600px (centered)

Layout Style: Multi-column grid (Desktop)

Desktop Grid (3 columns):
  
  Column 1 - Branding & Copyright:
    - Oblique Media logo (smaller version, 18px)
      * Orange slashes + white text
      * Not clickable (footer placement)
    
    - Decorative element:
      * Small diamond/star: "✦" 
      * Or custom SVG icon
      * 16px, orange, between logo and copyright
      
    - Copyright text:
      * "©2025 All rights reserved"
      * Font: 13px, Inter Regular
      * Opacity: 0.5
      * Margin-top: 24px
    
    - Optional tagline:
      * "Digital Designer & Marketing Agency" 
      * (Similar to Dylan's "Digital Designer & Webflow Developer")
      * 12px, opacity: 0.4, margin-top: 8px

  Column 2 - Quick Links:
    - Links laid out horizontally or vertical
    - About | Services | Work | Contact
    - Font: 14px, Inter Medium
    - Color: rgba(255, 255, 255, 0.6)
    - Hover: 
      * Color: white (opacity: 1)
      * Orange underline (slide from left)
    - Spacing: 24px between links (if horizontal)
    
    - Secondary links below (smaller):
      * FAQ | Privacy Policy
      * 12px, opacity: 0.4
      * Same hover behavior

  Column 3 - Contact & Social:
    - Heading: "Let's Connect" (optional)
      (14px, bold, margin-bottom: 16px)
    
    - Email: hello@obliquemedia.com
      * 14px, orange
      * Hover: underline
      * Clickable (mailto: link)
    
    - Social links:
      * Awwwards | Instagram | LinkedIn | Twitter
      * Horizontal list or icon row
      * Font: 13px or icon size: 20px
      * Color: rgba(255, 255, 255, 0.5)
      * Hover: Orange + opacity: 1
      * Gap: 20px between items
      * Margin-top: 20px

Alternative: Minimal Single-Line Footer (Dylan style):
  - Ultra-minimal approach
  - Single row: Logo + Copyright (left) | Links (center) | Social (right)
  - Height: 80px
  - Everything on one line
  - Clean and editorial

Dylan-Specific Footer Elements:
  - Logo treatment: "©Design by Dylan" becomes "©Oblique Media"
    * Very small: 11px
    * Positioned far left
    * Diamond separator: ✦
    * Example: "©Oblique Media ✦ Digital Marketing Agency"
  
  - Minimal link style:
    * Just text, no boxes or backgrounds
    * Subtle underline on hover only
    * Very clean, no clutter

Mobile Layout:
  - Single column stack
  - Order:
    1. Logo + branding
    2. Quick links (vertical stack, center-aligned)
    3. Contact + social
    4. Copyright (bottom, center)
  
  - Alignment: Center for all elements
  - Padding: 64px 24px 32px
  - Spacing: 40px between sections

Bottom Legal Bar (Optional):
  - Very bottom, separate from main footer
  - Privacy Policy | Terms of Service | Cookies
  - 11px, opacity: 0.3
  - Center-aligned
  - Margin-top: 48px
  - Separated by pipes or bullets

Interactive Elements:
  - Newsletter signup (optional):
    * Small inline form
    * Email input + Subscribe button
    * Position: Column 3 or bottom of footer
    * Minimal design: borderless input, orange button
    * Placeholder: "Enter your email"
    
  - Back to top button (optional):
    * "↑" arrow or "Top" text
    * Position: Absolute, top-right of footer
    * Clicks: Smooth scroll to page top
    * Hover: Orange color
    * Size: 32px icon or 14px text

Accessibility:
  - All links have focus states (orange outline)
  - Sufficient color contrast (AA compliant)
  - Keyboard navigable
  - ARIA labels for icon-only links
  - Email link clearly labeled

Design Details:
  - Typography: Consistent with site (Inter family)
  - Spacing: Generous breathing room (not cramped)
  - Color harmony: Blacks, grays, orange accents only
  - No heavy borders or boxes
  - Editorial cleanliness throughout
```

---

## Responsive Breakpoints

```css
/* Mobile First Approach */

/* Mobile (Default) */
Base: 320px - 767px

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1440px) { 
  max-width: 1600px;
  margin: 0 auto;
}

/* Extra Large */
@media (min-width: 1920px) {
  max-width: 1800px;
}
```

**Mobile Optimizations:**
- Stack all grid layouts to single column
- Reduce heading sizes by 40-50%
- Increase button tap targets (minimum 44px)
- Disable complex 3D effects (performance)
- Simplify parallax (reduce scroll speed multipliers)
- Hide decorative floating elements
- Hamburger navigation (full-screen overlay)
- Touch-optimized carousels (swipe gestures)

**Tablet Optimizations:**
- 2-column grids where possible
- Moderate heading size reduction (30%)
- Retain some parallax effects
- Side-drawer navigation option
- Increase horizontal padding to 48px

**Desktop Enhancements:**
- Full multi-column layouts
- Complex 3D interactions enabled
- Mouse-based parallax and hover effects
- Fixed navigation bar
- Maximum content width constraints
- Generous whitespace (80-160px padding)

---

## Performance Specifications

### Loading Strategy
```
1. Critical CSS (inline):
   - Above-the-fold styles
   - Font declarations
   - Layout structure
   
2. Deferred JavaScript:
   - 3D libraries (Three.js, GSAP) load after paint
   - Scroll animation libraries (Locomotive Scroll, Lenis)
   - Analytics and tracking scripts
   
3. Image Optimization:
   - WebP format with JPEG fallback
   - Lazy loading (native + library)
   - Blur-up technique for placeholders
   - Responsive images (srcset)
   - Maximum width: 2400px
   
4. Font Loading:
   - font-display: swap
   - WOFF2 format (modern browsers)
   - Subset fonts (Latin only if possible)
   - Self-host fonts (avoid CDN latency)
```

### Animation Performance
```javascript
// Use GPU-accelerated properties only:
  - transform (translate, scale, rotate)
  - opacity
  - filter (sparingly)

// Avoid:
  - Animating width, height, top, left
  - Excessive box-shadows
  - Multiple simultaneous filters

// Optimization:
  - will-change on interactive elements only
  - RequestAnimationFrame for scroll listeners
  - Debounce/throttle scroll events (16ms max)
  - Intersection Observer for scroll triggers
  - Reduce motion media query for accessibility
```

### Lighthouse Targets
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## Technical Implementation Stack

### Recommended Technologies

**Framework Options:**
1. **Next.js 14+ (App Router)**
   - Server components for performance
   - Image optimization built-in
   - SEO-friendly with metadata API
   
2. **Astro + React Islands**
   - Zero JS by default
   - Hydrate interactive components only
   - Excellent performance out of the box

3. **Webflow / Framer**
   - Visual development with code export
   - Built-in animations
   - CMS integration for work portfolio

**Animation Libraries:**
- **GSAP** (GreenSock): Industry-standard animation
- **Framer Motion**: React-based declarative animations
- **Lenis / Locomotive Scroll**: Smooth scrolling
- **Three.js**: 3D rendering (minimal usage for hero)

**Styling:**
- **Tailwind CSS**: Utility-first, customizable
- **CSS Modules**: Scoped styles
- **Styled Components**: Dynamic styling

**Performance:**
- **Vercel / Netlify**: Edge deployment
- **Cloudflare CDN**: Global distribution
- **Sharp**: Server-side image processing

---

## Content Strategy

### Copywriting Principles
- **Clarity over cleverness**: No jargon unless earned
- **Active voice**: "We build" not "Built by us"
- **Benefit-focused**: What the client gets, not what you do
- **Scannable**: Short paragraphs, clear headings
- **Conversational**: Professional but approachable

### SEO Requirements
```html
<title>Oblique Media — Performance-Driven Digital Marketing Agency</title>
<meta name="description" content="We help brands grow through 
data-backed digital marketing, creative storytelling, and ROI-focused 
ad campaigns. Social media, video, SEO, and more.">

<!-- Open Graph -->
<meta property="og:title" content="Oblique Media — Digital Marketing Agency">
<meta property="og:description" content="Growth-driven marketing 
strategies for modern brands.">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:type" content="website">

<!-- Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Oblique Media",
  "url": "https://obliquemedia.com",
  "logo": "https://obliquemedia.com/logo.png",
  "sameAs": [
    "https://instagram.com/obliquemedia",
    "https://linkedin.com/company/obliquemedia"
  ]
}
</script>
```

**Keyword Targets:**
- Digital marketing agency
- Performance marketing
- Social media marketing
- Video production agency
- Brand strategy
- Meta ads agency
- ROI-focused marketing

---

## Accessibility Guidelines

### WCAG 2.1 AA Compliance
```
1. Color Contrast:
   - Text on dark: minimum 4.5:1 ratio
   - Large text (24px+): minimum 3:1 ratio
   - Test all orange/black combinations
   
2. Keyboard Navigation:
   - All interactive elements reachable via Tab
   - Focus indicators (orange outline, 3px)
   - Skip to main content link
   - Escape key closes modals/menus
   
3. Screen Reader Support:
   - Semantic HTML (header, nav, main, footer)
   - ARIA labels for icons
   - Alt text for all images
   - aria-live for dynamic content
   
4. Motion Preferences:
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   
5. Focus Management:
   - Visible focus states
   - Logical tab order
   - Focus trapping in modals
   - Return focus after close
```

---

## Deployment Checklist

### Pre-Launch
- [ ] All images optimized (WebP, lazy load)
- [ ] Fonts loaded and subset
- [ ] Meta tags and OG images set
- [ ] 404 page designed
- [ ] SSL certificate active
- [ ] Analytics installed (Google Analytics, Plausible)
- [ ] Forms connected (contact, newsletter)
- [ ] Mobile tested on real devices
- [ ] Cross-browser tested (Chrome, Safari, Firefox, Edge)
- [ ] Lighthouse audit passed (90+ performance)
- [ ] Accessibility audit (WAVE, axe DevTools)

### Post-Launch
- [ ] Google Search Console submitted
- [ ] XML sitemap generated
- [ ] robots.txt configured
- [ ] Monitor Core Web Vitals
- [ ] Set up uptime monitoring
- [ ] Heatmap tracking (Hotjar, Microsoft Clarity)
- [ ] A/B test CTA buttons

---

## Component Library Overview

### Core Components
1. **Hero**
   - Props: headline, subtext, primaryCTA, secondaryCTA, mediaUrl
   - Variants: split-screen, center-aligned, full-bleed video
   
2. **ServiceCard**
   - Props: title, description, icon, hoverContent
   - States: default, hover, active
   - 3D tilt on hover
   
3. **ProcessStep**
   - Props: number, title, description, icon
   - Animation: number rotation on reveal
   - Timeline connector component
   
4. **ProofBlock**
   - Props: title, supportingText
   - Hover: background glow, border expand
   
5. **CTASection**
   - Props: headline, subtext, buttonText, buttonLink
   - Background: gradient options
   
6. **Navigation**
   - States: transparent (top), solid (scrolled)
   - Mobile: hamburger → full-screen overlay
   
7. **Footer**
   - Layout: 3-column (desktop), stacked (mobile)
   - Social icons, links, branding

---

## Final Notes

### Brand Voice
- **Confident but not arrogant**: "We know what works"
- **Direct but warm**: "Let's talk" not "Submit form"
- **Results-focused**: Always tie back to growth/ROI
- **Minimal hype**: No "revolutionary" or "game-changing"

### Design Philosophy
This website is not:
- A portfolio gallery (it's a conversion tool)
- A tech demo (it's a business homepage)
- Over-animated (motion serves purpose)

This website is:
- Editorial and premium
- Performance-optimized
- Conversion-focused
- Strategically minimalist

### Success Metrics
Primary KPIs:
- Contact form submissions
- "View Work" clicks
- Time on page (target: 60+ seconds)
- Scroll depth (target: 70%+ reach final CTA)
- Mobile bounce rate (target: <40%)

---

## Appendix: Extended Copy

### Hero Variations (A/B Test Options)
**Variant A (Current):**
"Out-think the Algorithm."

**Variant B:**
"Built for Brands That Refuse to Blend In."

**Variant C:**
"Growth Isn't Luck. It's Strategy."

### CTA Variations
**Primary:**
- "View Work" (current)
- "See Our Work"
- "Explore Projects"

**Secondary:**
- "Let's Talk" (current)
- "Start a Conversation"
- "Book a Call"

---

## Version Control
- **Document Version**: 1.0
- **Last Updated**: February 2025
- **Author**: Senior Creative Agency Web Designer
- **Brand**: Oblique Media
- **Target Launch**: Q1 2025

---

**End of Specification**

This document serves as the master reference for the Oblique Media website build. All design, development, and content decisions should align with the principles and specifications outlined above.

For questions or clarifications, refer to the Brand Identity and Design System sections first. When in doubt: less is more, performance is paramount, and every element must earn its place on the page.
