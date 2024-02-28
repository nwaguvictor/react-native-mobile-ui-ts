import { Text as RNText, TextStyle } from "react-native";
import React from "react";

import { useTheme } from "../../../context/ThemeContext";
import styles from "./styles";

interface TextProps {
  children?: any;
  style?: TextStyle;
  align?: "center" | "left" | "right";
  size?: number;
  isTitle?: boolean;
  isSubtitle?: boolean;
  color?: string;
  numberOfLines?: number;
}

export const Text: React.FC<TextProps> = ({
  align,
  size,
  color,
  isTitle,
  isSubtitle,
  ...props
}) => {
  const { colors } = useTheme();
  let textStyle: TextStyle = {
    color: color ?? colors.black,
    textAlign: align ?? "auto",
    fontSize: size ?? 14,
  };

  if (isTitle) textStyle = { ...textStyle, ...styles.title };
  else if (isSubtitle) textStyle = { ...textStyle, ...styles.subTitle };
  else if (size) textStyle.fontSize = size;

  return (
    <RNText
      {...props}
      selectable
      textBreakStrategy="simple"
      numberOfLines={props.numberOfLines}
      style={{ ...textStyle, ...props.style }}
    >
      {props.children}
    </RNText>
  );
};
