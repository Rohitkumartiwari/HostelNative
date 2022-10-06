import React from "react";
import Home from "./src/home";
import Dashboard from "./src/dashboard";
import StudentForm from "./src/studentForm";
import StudentData from "./src/studentData";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UpdateData from "./src/updateData";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="StudentForm"
          component={StudentForm}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="StudentData"
          component={StudentData}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="UpdateData"
          component={UpdateData}
          options={{ headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
