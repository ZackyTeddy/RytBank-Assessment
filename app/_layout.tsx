import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Orbitron_400Regular,
  Orbitron_700Bold,
} from "@expo-google-fonts/orbitron";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { StyleSheet } from "react-native";
import { useFrameworkReady } from "@/hooks/useFrameworkReady";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { cyberpunkColors } from "@/components/styles";

export default function RootLayout() {
  useFrameworkReady();

  const [fontsLoaded] = useFonts({
    Orbitron: Orbitron_400Regular,
    "Orbitron-Bold": Orbitron_700Bold,
    Roboto: Roboto_400Regular,
    "Roboto-Bold": Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: cyberpunkColors.background },
          headerStyle: {
            backgroundColor: cyberpunkColors.background,
          },
          headerTitleStyle: {
            fontFamily: "Orbitron-Bold",
            fontSize: 12,
            color: cyberpunkColors.neonPurple,
          },
          headerTintColor: cyberpunkColors.neonPurple,
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: true, title: "Transactions" }}
        />
        <Stack.Screen
          name="transaction/[id]"
          options={{
            presentation: "modal",
            animation: "fade",
            headerShown: true,
            title: "Transaction Details",
          }}
        />
      </Stack>
      <StatusBar style="dark" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
