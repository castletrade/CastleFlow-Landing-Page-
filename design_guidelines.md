# CastleFlow Landing Page - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing from modern SaaS landing pages with conversion-focused minimalism (Stripe, Linear, Notion). Single-page design optimized for WhatsApp conversion with psychological triggers for immediate action.

## Core Design Principles
- Extreme minimalism: Zero distractions from primary CTA
- Conversion-focused: Every element drives toward WhatsApp engagement
- Psychological optimization: Curiosity-driven copy, trust signals, action triggers
- Mobile-first: Optimized for where users will engage (WhatsApp on mobile)

## Typography System

**Font Family**: 
- Primary: Inter or DM Sans (modern, clean, professional SaaS aesthetic)
- Single font family for maximum consistency

**Hierarchy**:
- Hero Title: 3xl to 6xl (responsive), font-weight: 700-800, leading-tight
- Subtitle: lg to xl (responsive), font-weight: 400-500, leading-relaxed
- Mini-block text: sm to base, font-weight: 500
- Footer: xs to sm, font-weight: 400

## Layout System

**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Hero section: Full viewport height (100vh)
- Internal spacing: py-8, py-12, py-16 for sections
- Component gaps: gap-4, gap-6, gap-8

**Container Strategy**:
- Hero content: max-w-4xl centered
- Validation icons: max-w-2xl centered
- Footer: w-full with centered content

## Color Palette

**Primary Colors**:
- Background: Pure white (#FFFFFF) OR soft blue-gray (#F0F7FF / #F8FAFC)
- Text Primary: Near-black (#1F2937 / #111827)
- Text Secondary: Medium gray (#6B7280)
- WhatsApp Green: #25D366 (for WhatsApp elements)
- Accent: Soft blue (#3B82F6) for interactive elements

**Usage**:
- Clean, spacious feel with high contrast for readability
- WhatsApp green ONLY for WhatsApp-related CTAs and bubbles
- Neutral palette to maintain professional trust

## Component Library

### 1. Hero Section (Full Screen)
**Layout**: Centered vertical and horizontal alignment
- Large hero title (exact text provided by user)
- Subtitle below with breathing room (py-6)
- Animated WhatsApp bubble icon positioned prominently
- Primary CTA button below subtitle (mt-8)

**WhatsApp Bubble Animation**: 
- Subtle pulse effect (scale 1.0 to 1.05)
- Duration: 2s infinite
- Glow effect around bubble for attention
- Size: Large enough to be focal point (w-20 to w-32)

### 2. Primary CTA Button
**Style**: 
- Large, rounded corners (rounded-lg or rounded-xl)
- Prominent size: px-8 py-4
- WhatsApp green background (#25D366)
- White text with medium-bold weight
- Icon: WhatsApp icon prefixed to text
- Shadow: Elevated appearance (shadow-lg)

**Text**: "💬 Ver cómo funciona en WhatsApp"
**Link**: https://wa.me/message/XU72UNFVPNVOB1

### 3. Mini Validation Block
**Layout**: Horizontal three-column grid (single column on mobile)
- Icons: Large (w-8 to w-12), consistent size
- Text: Short, impactful phrases
- Spacing: gap-8 between items

**Content**:
- Icon ⚙️ | "100% Automatizado"
- Icon 💬 | "Conversaciones Reales"
- Icon ⏰ | "Atención 24/7"

**Position**: Below primary CTA with generous top margin (mt-16 to mt-20)

### 4. Secondary CTA
**Style**: Text-based with arrow/pointer animation
- Lighter visual weight than primary CTA
- Animated arrow (bounce or pulse)
- Positioned below validation block

**Text**: "Haz clic en el ícono de WhatsApp y vive cómo CastleFlow atiende a tus clientes por ti."

### 5. Floating WhatsApp Widget
**Style**: Fixed position bottom-right
- Circular button with WhatsApp icon
- WhatsApp green background (#25D366)
- White icon
- Size: w-14 h-14 to w-16 h-16
- Shadow: shadow-2xl for depth
- Position: bottom-6 right-6
- Subtle hover scale effect

### 6. Footer (Ultra-Minimal)
**Layout**: Single-line centered text
- Separated elements with vertical bars (|)
- Minimal padding: py-8
- Small text size (text-xs to text-sm)
- Medium gray color

**Content**: © 2025 CastleFlow | Hecho por CastleDevs | contacto@castleflow.app

## Animations

**Used Sparingly**:
1. WhatsApp bubble pulse (2s infinite, subtle scale)
2. Arrow/pointer animation on secondary CTA (1.5s bounce/pulse)
3. WhatsApp widget hover scale (1.05x)
4. Button hover states (subtle brightness increase)

**No animations for**: Text, layout shifts, backgrounds

## Images

**Hero Section**: NO large hero image
- Keep background clean (white or soft blue)
- WhatsApp bubble icon is the primary visual element
- Focus on typography and negative space

## Accessibility

- High contrast ratios for all text (WCAG AA minimum)
- Clear focus states on all interactive elements
- Semantic HTML structure
- Mobile-friendly touch targets (minimum 44x44px)
- Screen reader friendly labels for icons

## Responsive Behavior

**Mobile (< 768px)**:
- Single column layout throughout
- Larger touch targets for buttons
- Reduced font sizes appropriately
- Validation block stacks vertically

**Desktop (≥ 768px)**:
- Centered hero content with max-width
- Three-column validation block
- Optimal line lengths for readability

## Key Success Metrics
- Zero scroll required to see primary CTA
- Immediate visual hierarchy: Title → Bubble → CTA
- Trust signals visible without distraction
- WhatsApp widget always accessible