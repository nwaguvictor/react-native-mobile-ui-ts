import React from 'react';
import { View, ViewStyle, SafeAreaView, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import { widthPercentageToDP as wd } from 'react-native-responsive-screen';

import { useTheme } from '../../../context';

interface LayoutProps {
  children: any;
  isSafeArea?: boolean;
  isRefreshing?: boolean;
  isScrollable?: boolean;
  onRefresh?: () => void;
  style?: ViewStyle;
  bgColor?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  isRefreshing = false,
  isSafeArea = false,
  isScrollable = false,
  onRefresh = () => {},
  style,
  bgColor,
}) => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    constainer: {
      // paddingHorizontal: wd(2),
      backgroundColor: bgColor ?? colors.white,
    },
  });

  const renderLayout = () => {
    return (
      <>
        {isScrollable ? (
          <ScrollView
            style={{ ...styles.constainer, ...style }}
            refreshControl={
              <RefreshControl
                colors={[colors.primary]}
                onRefresh={onRefresh}
                refreshing={isRefreshing}
                progressBackgroundColor={colors.white}
              />
            }
          >
            {children}
          </ScrollView>
        ) : (
          <View style={{ ...styles.constainer, ...style }}>{children}</View>
        )}
      </>
    );
  };
  return (
    <>
      {isSafeArea ? <SafeAreaView style={{ flex: 1 }}>{renderLayout()}</SafeAreaView> : <View>{renderLayout()}</View>}
    </>
  );
};
