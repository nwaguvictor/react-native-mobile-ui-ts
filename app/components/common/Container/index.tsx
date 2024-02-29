import React from 'react';
import { StyleProp, View, ViewStyle, DimensionValue, SafeAreaView } from 'react-native';

import styles from './styles';

export interface ContainerProps {
  children: React.ReactNode;
  justify?: 'space-between' | 'space-around';
  useSafeArea?: boolean;
  width?: string | number;
  height?: string | number;
  bgColor?: string;
  style?: StyleProp<ViewStyle>;
}

export const Container: React.FC<ContainerProps> = (props) => {
  const blockStyles: ViewStyle = {
    backgroundColor: props.bgColor ?? 'transparent',
    width: props.width ? (props.width as DimensionValue) : ('100%' as DimensionValue),
    height: props.height ? (props.height as DimensionValue) : ('auto%' as DimensionValue),
  };

  const Component = props.useSafeArea ? SafeAreaView : View;

  return <Component style={[styles.block, blockStyles, props.style]}>{props.children}</Component>;
};
