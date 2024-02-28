import {
  View,
  ViewStyle,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from "react-native";
import React from "react";
import { useTheme } from "../../../context";

interface LayoutProps {
  children: any;
  isSafeArea?: boolean;
  isRefreshing?: boolean;
  isScrollable?: boolean;
  onRefresh?: () => void;
  style?: ViewStyle;
  backgroundColor?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  isRefreshing = false,
  isSafeArea = false,
  isScrollable = false,
  onRefresh = () => {},
  style,
  backgroundColor,
}) => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    constainer: {
      backgroundColor: backgroundColor ?? colors.white,
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
      {isSafeArea ? (
        <SafeAreaView style={{ flex: 1 }}>{renderLayout()}</SafeAreaView>
      ) : (
        <View>{renderLayout()}</View>
      )}
    </>
  );
};
