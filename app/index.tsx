import { router, useRootNavigationState } from 'expo-router';
import { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function BaseIndex() {
  const rootNavigation = useRootNavigationState();

  useEffect(() => {
		// Wait until the root navigation is ready
    if (!rootNavigation?.key) return;
    router.replace('/(auth)');
  }, [rootNavigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Redirecting...</Text>
    </View>
  );
}