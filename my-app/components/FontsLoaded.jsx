import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function FontsLoaded() {
  const [fontsLoaded] = useFonts({
    "ChakraPetch-Regular": require("../assets/fonts/ChakraPetch-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return <View onLayout={onLayoutRootView}></View>;
}
