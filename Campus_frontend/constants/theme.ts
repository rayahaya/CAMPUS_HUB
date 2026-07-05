/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
// ─── COLOURS ────
export const colors = {
  primary: "#1E3A5F",
  secondary: "#2E75B6",
  accent: "#0097A7",
  social: "#E91E63",
  background: "#F8F9FA",
  surface: "#FFFFFF",
  text: "#212121",
  textLight: "#757575",
  border: "#E0E0E0",
  shadow: "#000000",
  badgePrimary: "#E3ECF7",
  badgeSecondary: "#E3F0FB",
  badgeAccent: "#E0F5F7",
  badgeSocial: "#FCE4EC",
  badgeDefault: "#F5F5F5",
  error: "#D32F2F",
  success: "#388E3C",
};

// ─── SPACING ─────
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

// ─── FONTS ──────
export const fonts = {
  heading: { fontSize: 22, fontWeight: "bold" },
  subheading: { fontSize: 17, fontWeight: "600" },
  body: { fontSize: 14 },
  caption: { fontSize: 12 },
};
