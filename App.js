import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import EventCard from "./components/EventCard.jsx";
import EventCategory from "./components/EventCategory.jsx";
import SearchBar from "./components/SearchBar.jsx";
import MainScreen from "./screens/mainScreen.jsx";
import MapComponent from "./components/MapComponent.jsx";
import Ticket from "./components/Ticket.jsx";
import MyButton from "./components/myButton.jsx";
import EventScreen from "./screens/eventScreen.jsx";
import PaymentCard from "./components/PaymentCard.jsx";
import PaymentScreen from "./screens/paymentScreen.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const WINWIDTH = Dimensions.get("screen").width;
const WINHEIGHT = Dimensions.get("screen").height;
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerLeft: null }}
          name="Home"
          component={MainScreen}
        ></Stack.Screen>
        <Stack.Screen name="Event Name" component={EventScreen}></Stack.Screen>
        <Stack.Screen name="Check out" component={PaymentScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "flex",
  },
});
