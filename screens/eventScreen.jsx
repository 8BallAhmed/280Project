import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import MapComponent from "../components/MapComponent.jsx";
import Ticket from "../components/Ticket.jsx";
import MyButton from "../components/myButton.jsx";
import { useNavigation } from "@react-navigation/native";

const WINWIDTH = Dimensions.get("screen").width;
const WINHEIGHT = Dimensions.get("screen").height;

let tickets = [
  <Ticket type={"Gold"} price={500}></Ticket>,
  <Ticket type={"Silver"} price={250}></Ticket>,
  <Ticket type={"Bronze"} price={100}></Ticket>,
];

export default function EventScreen(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style style={{ alignItems: "center" }}>
        <Text style={styles.Textual}>Redsea Mall, Jeddah, Saudi Arabia</Text>
        <MapComponent></MapComponent>
        <Text style={styles.Textual}>
          A Film Premiere being Hosted in Jeddah, and organized by the Red Sea
          Film Festival.
        </Text>
      </View>
      <View>{tickets}</View>
      <MyButton
        onPress={() => {
          navigation.navigate("Check out");
        }}
        Text="Checkout"
      ></MyButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECECEC",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  Textual: {
    marginTop: 5,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
  },
});
