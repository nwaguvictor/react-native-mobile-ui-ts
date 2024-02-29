import { Text, View, Pressable } from "react-native";
import React from "react";

import styles from "./styles";

interface PropTypes {
  handlePress: () => void;
}

export const Button = ({ handlePress }: PropTypes) => {
  return (
    <View>
      <Pressable onPress={handlePress}>
        <Text style={{ color: "#fff" }}>Share</Text>
      </Pressable>
    </View>
  );
};
