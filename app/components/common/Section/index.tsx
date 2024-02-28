import { Text, View } from "react-native";
import React from "react";

interface SectionProps {}

export const Section: React.FC<SectionProps> = () => {
  return (
    <View>
      <Text>Section Component</Text>
    </View>
  );
};
