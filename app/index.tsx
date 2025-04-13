import { cyberpunkColors } from '@/components/styles';
import { router, useRootNavigationState } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BaseIndex() {
  const rootNavigation = useRootNavigationState();

  useEffect(() => {
		// Wait until the root navigation is ready
    if (!rootNavigation?.key) return;
    router.replace('/(auth)');
  }, [rootNavigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text} >Redirecting...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
		backgroundColor: cyberpunkColors.background,
	},
	text: {
		fontFamily: "Orbitron",
		fontSize: 16,
		color: cyberpunkColors.errorText,
		marginBottom: 15,
	},
});