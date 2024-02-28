import { View, Text, ViewStyle } from "react-native";
import styles from "./styles";

interface CardProps {
  children?: any;
  style?: { [key: string]: string | number };
  rounded?: boolean;
}

const blockStyle: ViewStyle = {
  padding: 12,
};

export const Card: React.FC<CardProps> = ({
  children,
  rounded = false,
  style,
}) => {
  if (rounded) {
    blockStyle.borderRadius = 100;
  }
  return <View style={{ ...blockStyle, ...style }}>{children}</View>;
};
