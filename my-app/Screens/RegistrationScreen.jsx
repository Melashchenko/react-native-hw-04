import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function RegistrationScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.form}>
        <View style={styles.imageContainer}>
          <Image style={styles.image}></Image>
        </View>

        <View>
          <Text style={styles.title}>Registration</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Login"
            textAlign={"center"}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            textAlign={"center"}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            textAlign={"center"}
            secureTextEntry={true}
          />
        </View>

        <View>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.btnTitle}>Registration</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text}>Do you have account? Login</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  input: {
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    color: "#BDBDBD",
  },
  title: {
    fontFamily: "Roboto",
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
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
    marginTop: 16,
    marginBottom: 45,
  },
  image: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",

    marginBottom: 100,
  },
});
