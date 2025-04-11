import { Alert } from "react-native";

export default function sendAlert({
  title,
  message,
  onPress,
  buttonText,
  style = "default",
}: {
  title: string;
  message: string;
  onPress: () => void;
  buttonText: string;
  style?: "default" | "cancel" | "destructive";
}) {
  return Alert.alert(title, message, [
    {
      text: buttonText,
      onPress: onPress,
      style: style,
    },
  ]);
}
