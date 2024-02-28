import { View, Text } from "react-native";
import styles from "./styles";

export const Modal = ({ message }: { message: string }) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};
