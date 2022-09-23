import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthScreen from "./src/screens/auth/AuthScreen";

export default function App() {
  return (
    <SafeAreaView>
      <AuthScreen />
    </SafeAreaView>
  );
}
