import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Feed from "../../screens/feed";
import Profile from "../../screens/profile";
import Friends from "../../screens/friends";
import Inbox from "../../screens/inbox";
import { Feather } from "@expo/vector-icons";
import CameraScreen from "../../screens/camera";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const Bottom = createMaterialBottomTabNavigator();
  return (
    <Bottom.Navigator
      barStyle={{ backgroundColor: "black" }}
      initialRouteName="Feed"
      activeColor="#F6BE00"
    >
      <Bottom.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Bottom.Screen
        name="friends"
        component={Friends}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-people-sharp" size={24} color={color} />
          ),
        }}
      />
      <Bottom.Screen
        name="Create"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-camera" size={24} color={color} />
          ),
        }}
      />
      <Bottom.Screen
        name="Chat"
        component={Inbox}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubbles" size={24} color={color} />
          ),
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}
