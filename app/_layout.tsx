import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Orbitron_400Regular,
  Orbitron_700Bold,
} from "@expo-google-fonts/orbitron";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
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
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#1a1a2e" },
          headerStyle: {
            backgroundColor: "#1a1a2e",
          },
          headerTitleStyle: {
            fontFamily: "Orbitron-Bold",
            fontSize: 12,
            color: "#e94560",
          },
          headerTintColor: "#e94560",
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
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stackTitle: {
    fontFamily: "Orbitron-Bold",
    fontSize: 28,
    color: "#e94560",
    marginTop: 60,
    marginBottom: 20,
  },
});
