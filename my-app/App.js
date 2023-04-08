import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/photo-bg.jpg")}
      >
        <RegistrationScreen />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
