import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { widthPercentageToDP as wd } from 'react-native-responsive-screen';

import { useTheme } from '../../../context';

interface SectionProps {
  children: React.ReactNode | React.ReactNode[];
  addBorderTop?: boolean;
  addBorderBottom?: boolean;
  borderColor?: string;
  bgColor?: string;
  style?: StyleProp<ViewStyle>;
}

export const Section: React.FC<SectionProps> = (props) => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    section: {
      borderTopWidth: props.addBorderTop ? 1.4 : 0,
      borderBottomWidth: props.addBorderBottom ? 1.4 : 0,
      paddingHorizontal: wd(2),
      borderColor: props.borderColor ?? colors.grey1,
      backgroundColor: props.bgColor ?? 'transparent',
    },
  });
  return <View style={[styles.section, props.style]}>{props.children}</View>;
};
