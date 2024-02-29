import React, { useState } from "react";
import { useColorScheme } from "react-native";

import { LIGHT_COLORS, DARK_COLORS } from "../constants";

const ThemeContext = React.createContext<{
  isDark: boolean;
  colors: typeof LIGHT_COLORS;
  setScheme: (scheme: "dark" | "light") => void;
}>({
  isDark: false,
  colors: LIGHT_COLORS,
  setScheme: () => {},
});

export const ThemeProvider: React.FC<{ children: any }> = ({ children }) => {
  // Get the Device Scheme
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === "dark");

  const defaultTheme = {
    isDark,
    colors: isDark ? DARK_COLORS : LIGHT_COLORS,
    setScheme: (scheme: typeof colorScheme) => {
      setIsDark(scheme === "dark");
    },
  };

  return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>;
};

// Custom hook that returns theme object {isDark, colors, setScheme}
export const useTheme = () => React.useContext(ThemeContext);
