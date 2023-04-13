import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function PostsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.toShowPassword}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Login")}
        >
          <Icon size={24} name="log-out" color="#BDBDBD" />
        </TouchableOpacity>
      </View>

      <Text>PostsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
