/**
 * BR1CK3D Theme Configuration
 *
 * Change values here to update the entire site's look and feel.
 * These values are injected as CSS custom properties in globals.css
 * and referenced throughout all components via Tailwind utilities.
 */

export const theme = {
  colors: {
    /** Primary brand color — used for CTAs, links, accents */
    primary: "#00D4FF",
    /** Slightly lighter primary for hover states */
    primaryLight: "#33DDFF",
    /** Darker shade of primary for active states */
    primaryDark: "#00A3CC",

    /** Secondary accent — used sparingly for highlights */
    secondary: "#7C3AED",
    secondaryLight: "#8B5CF6",

    /** Background colors */
    bgDark: "#0A0A0F",
    bgCard: "#12121A",
    bgCardHover: "#1A1A26",
    bgNavbar: "rgba(10, 10, 15, 0.85)",

    /** Text colors */
    textPrimary: "#F1F5F9",
    textSecondary: "#94A3B8",
    textMuted: "#64748B",

    /** Border / divider */
    border: "#1E293B",
    borderLight: "#334155",

    /** Status colors */
    success: "#22C55E",
    error: "#EF4444",
    warning: "#F59E0B",
  },

  fonts: {
    /** Main heading font */
    heading: "'Inter', system-ui, -apple-system, sans-serif",
    /** Body text font */
    body: "'Inter', system-ui, -apple-system, sans-serif",
    /** Monospace / code font — great for the techy BR1CK3D vibe */
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },

  borderRadius: {
    sm: "0.375rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    full: "9999px",
  },

  spacing: {
    sectionY: "6rem",
    containerMax: "1200px",
  },

  animation: {
    /** Duration for hover transitions */
    fast: "150ms",
    /** Duration for general transitions */
    normal: "300ms",
    /** Duration for page/section transitions */
    slow: "500ms",
  },
} as const;

export type Theme = typeof theme;
