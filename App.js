import React from "react";
import Home from "./src/home";
import Dashboard from "./src/dashboard";
import StudentForm from "./src/studentForm";
import StudentData from "./src/studentData";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UpdateData from "./src/updateData";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#AD40AF",
          },
          tabBarInactiveTinColor: "white",
          tabBarActiveTinColor: "yellow",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name="home-outline" color={"white"} size={size} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerTitleAlign: "center",
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name="book-outline" color={"white"} size={size} />
              );
            },
          }}
        />
        <Tab.Screen
          name="StudentForm"
          component={StudentForm}
          options={{
            headerTitleAlign: "center",

            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name="create-outline" color={"white"} size={size} />
              );
            },
          }}
        />
        <Tab.Screen
          name="StudentData"
          component={StudentData}
          options={{
            headerTitleAlign: "center",
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name="server-outline" color={"white"} size={size} />
              );
            },
          }}
        />
        <Tab.Screen
          name="UpdateData"
          component={UpdateData}
          options={{
            headerTitleAlign: "center",
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name="enter-outline" color={"white"} size={size} />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
