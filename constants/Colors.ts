/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    tint: tintColorDark,
    primary: "rgb(214, 186, 255)",
    onPrimary: "rgb(66, 0, 138)",
    primaryContainer: "rgb(95, 0, 192)",
    onPrimaryContainer: "rgb(236, 220, 255)",
    secondary: "rgb(0, 221, 221)",
    onSecondary: "rgb(0, 55, 55)",
    secondaryContainer: "rgb(0, 79, 79)",
    onSecondaryContainer: "rgb(0, 251, 251)",
    tertiary: "rgb(79, 216, 235)",
    onTertiary: "rgb(0, 54, 61)",
    tertiaryContainer: "rgb(0, 79, 88)",
    onTertiaryContainer: "rgb(151, 240, 255)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(29, 27, 30)",
    onBackground: "rgb(231, 225, 230)",
    surface: "rgb(29, 27, 30)",
    onSurface: "rgb(231, 225, 230)",
    surfaceVariant: "rgb(73, 69, 78)",
    onSurfaceVariant: "rgb(203, 196, 207)",
    outline: "rgb(149, 142, 153)",
    outlineVariant: "rgb(73, 69, 78)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(231, 225, 230)",
    inverseOnSurface: "rgb(50, 48, 51)",
    inversePrimary: "rgb(120, 48, 219)",
    elevation: {
      level0: "transparent",
      level1: "rgb(38, 35, 41)",
      level2: "rgb(44, 40, 48)",
      level3: "rgb(49, 45, 55)",
      level4: "rgb(51, 46, 57)",
      level5: "rgb(55, 49, 62)",
    },
    surfaceDisabled: "rgba(231, 225, 230, 0.12)",
    onSurfaceDisabled: "rgba(231, 225, 230, 0.38)",
    backdrop: "rgba(51, 47, 55, 0.4)",
  },
};
