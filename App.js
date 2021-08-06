import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Home from "./screens/Home";
import AddChat from "./screens/AddChat";
import ChatScreen from "./screens/ChatScreen";


const Stack = createNativeStackNavigator();


const globalScreenOptions = {
  headerStyle : {backgroundColor:'#26CBED'},
  headerTitleStyle : {color:"white"},
  headerTintColor:"white"
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Add Chat" component={AddChat}/>
        <Stack.Screen name="Chat" component={ChatScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
