import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ImageBackground,
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

const initialState = {
  email: "",
  password: "",
};

SplashScreen.preventAutoHideAsync();

export default function LoginScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [input, setInput] = useState(initialState);
  const [fontsLoaded] = useFonts({
    "ChakraPetch-Regular": require("../../../assets/fonts/ChakraPetch-Regular.ttf"),
  });

  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });

  const [hidePass, setHidePass] = useState(true);

  const handleInputFocus = (e) => {
    setIsFocused({ [e]: true });
    setIsShowKeyboard(true);
  };

  const handleInputBlur = (e) => {
    setIsFocused({ [e]: false });
    setIsShowKeyboard(false);
  };

  const onKeyboardHidden = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    console.log(input);
    setInput(initialState);
    navigation.navigate("Home");
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
    <TouchableWithoutFeedback onPress={onKeyboardHidden}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.image}
          source={require("../../../assets/images/photo-bg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
          >
            <View style={styles.form}>
              <View>
                <Text style={styles.title}>Login</Text>
              </View>
              <View style={styles.inputWrapper}>
                <View>
                  <TextInput
                    style={
                      isFocused.email
                        ? [styles.input, { borderColor: "#FF6C00" }]
                        : styles.input
                    }
                    placeholder="Email"
                    textAlign={"left"}
                    onFocus={() => handleInputFocus("email")}
                    onBlur={() => handleInputBlur("email")}
                    onChangeText={(value) =>
                      setInput((prevState) => ({ ...prevState, email: value }))
                    }
                    value={input.email}
                  />
                </View>

                <View style={styles.toShowPasswordWrapper}>
                  <TextInput
                    style={
                      isFocused.password
                        ? [styles.input, { borderColor: "#FF6C00" }]
                        : styles.input
                    }
                    placeholder="Password"
                    textAlign={"left"}
                    secureTextEntry={hidePass ? true : false}
                    onFocus={() => handleInputFocus("password")}
                    onBlur={() => handleInputBlur("password")}
                    onChangeText={(value) =>
                      setInput((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                    value={input.password}
                  ></TextInput>
                  <TouchableOpacity
                    style={styles.toShowPassword}
                    activeOpacity={0.8}
                    onPress={() => setHidePass(!hidePass)}
                  >
                    <Text style={styles.toShowPasswordTitle}>
                      {hidePass ? "to show" : "hide"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                {!isShowKeyboard && (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btn}
                    onPress={onSubmit}
                  >
                    <Text style={styles.btnTitle}>Sign in</Text>
                  </TouchableOpacity>
                )}
              </View>
              <View>
                {!isShowKeyboard && (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}
                  >
                    <Text style={styles.text}>No account? Sign up</Text>
                  </TouchableOpacity>
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

  title: {
    fontFamily: "ChakraPetch-Regular",
    fontStyle: "normal",
    // fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    marginBottom: 33,
    color: "#212121",
    marginTop: 32,
  },

  inputWrapper: {
    marginBottom: 16,
  },

  input: {
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    color: "#212121",
    fontFamily: "ChakraPetch-Regular",
    fontStyle: "normal",
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    paddingHorizontal: 16,
  },

  btn: {
    height: 51,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 100,
    marginTop: 11,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#FF6C00",
      },
      android: {
        backgroundColor: "#FF6C00",
        borderColor: "transparent",
      },
    }),
  },

  btnTitle: {
    fontFamily: "ChakraPetch-Regular",
    fontStyle: "normal",
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: Platform.OS === "ios" ? "#FF6C00" : "#FFFFFF",
  },

  text: {
    fontFamily: "ChakraPetch-Regular",
    fontStyle: "normal",
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
    marginTop: 16,
    marginBottom: 145,
  },

  toShowPasswordWrapper: {
    position: "relative",
  },

  toShowPassword: {
    position: "absolute",
    right: 32,
    top: 16,
  },

  toShowPasswordTitle: {
    fontFamily: "ChakraPetch-Regular",
    fontStyle: "normal",
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
