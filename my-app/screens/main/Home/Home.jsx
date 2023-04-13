import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";

const Tab = createMaterialBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={{ title: false }}
      activeColor="#fff"
      inactiveColor="#BDBDBD"
      barStyle={{
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#BDBDBD",
      }}
    >
      <Tab.Screen
        name="Post"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="post" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Feather name="plus" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Feather name="user" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
