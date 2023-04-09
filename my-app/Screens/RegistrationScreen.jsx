import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  ImageBackground,
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

const initialState = {
  login: "",
  email: "",
  password: "",
};

SplashScreen.preventAutoHideAsync();

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [input, setInput] = useState(initialState);
  const [fontsLoaded] = useFonts({
    "ChakraPetch-Regular": require("../assets/fonts/ChakraPetch-Regular.ttf"),
  });
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 8 * 2
  );

  useEffect(() => {
    onChange = () => {
      const width = Dimensions.get("window").width - 8 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboardHidden = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(input);
    setInput(initialState);
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHidden}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/photo-bg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
          >
            <View style={styles.form}>
              <View style={styles.avatarContainer}>
                <Image style={styles.avatar}></Image>
              </View>

              <View>
                <Text style={styles.title}>Registration</Text>
              </View>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={{ ...styles.input, width: dimensions }}
                  placeholder="Login"
                  textAlign={"left"}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                    setInput((prevState) => ({ ...prevState, login: value }))
                  }
                  value={input.login}
                />
                <TextInput
                  style={{ ...styles.input, width: dimensions }}
                  placeholder="Email"
                  textAlign={"left"}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                    setInput((prevState) => ({ ...prevState, email: value }))
                  }
                  value={input.email}
                />
                <TextInput
                  style={{ ...styles.input, width: dimensions }}
                  placeholder="Password"
                  textAlign={"left"}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                    setInput((prevState) => ({ ...prevState, password: value }))
                  }
                  value={input.password}
                />
              </View>

              <View>
                {!isShowKeyboard && (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btn}
                    onPress={onSubmit}
                  >
                    <Text style={styles.btnTitle}>Registration</Text>
                  </TouchableOpacity>
                )}
              </View>
              <View>
                {!isShowKeyboard && (
                  <Text style={styles.text}>Do you have account? Login</Text>
                )}
              </View>
            </View>
          </KeyboardAvoidingView>
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
  form: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  inputWrapper: {
    alignItems: "center",
  },
  input: {
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    // marginHorizontal: 16,
    marginBottom: 16,
    color: "#BDBDBD",
    padding: 16,
  },
  title: {
    fontFamily: "ChakraPetch-Regular",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    marginBottom: 33,
    color: "#212121",
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    marginHorizontal: 16,
    borderRadius: 100,
    marginTop: 27,
    alignItems: "center",
    justifyContent: "center",
  },
  btnTitle: {
    fontFamily: "ChakraPetch-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  text: {
    fontFamily: "ChakraPetch-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
    marginTop: 16,
    marginBottom: 45,
  },
  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatarContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",

    marginBottom: 100,
  },
});
