import { cyberpunkColors } from "@/components/styles";
import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text style={styles.text}>This screen doesn't exist.</Text>
        <Link href="/" style={styles.link}>
          <Text style={styles.text}>Go to home screen!</Text>
        </Link>
      </View>
    </>
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
  link: {
    marginTop: 15,
    paddingVertical: 15,
    backgroundColor: "rgba(233, 69, 96, 0.1)",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: cyberpunkColors.errorText,
  },
  text: {
    fontFamily: "Orbitron",
    fontSize: 16,
    color: cyberpunkColors.errorText,
    marginBottom: 15,
  },
});
