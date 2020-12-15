import React, { Component } from "react";
import EventCard from "../components/EventCard";
import EventCategory from "../components/EventCategory";
import SearchBar from "../components/SearchBar";
import { ScrollView, View, StyleSheet, Dimensions, Text } from "react-native";

const WINWIDTH = Dimensions.get("screen").width;
const WINHEIGHT = Dimensions.get("screen").height;

let catCards = [
  <EventCategory Category="Music & Concerts"></EventCategory>,
  <EventCategory Category="Sports & Football"></EventCategory>,
  <EventCategory Category="Movies & Film"></EventCategory>,
  <EventCategory Category="Cars & Automotives"></EventCategory>,
];

export default function MainScreen(props, { navigation }) {
  let evtCards = [
    <EventCard></EventCard>,
    <EventCard></EventCard>,
    <EventCard></EventCard>,
    <EventCard></EventCard>,
    <EventCard></EventCard>,
    <EventCard></EventCard>,
    <EventCard></EventCard>,
    <EventCard></EventCard>,
    <EventCard></EventCard>,
    <EventCard></EventCard>,
    <EventCard></EventCard>,
    <EventCard></EventCard>,
    <EventCard></EventCard>,
    <EventCard></EventCard>,
    <EventCard></EventCard>,
  ];

  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
      <Text style={styles.Textual}>Select A Category</Text>
      <>
        <ScrollView
          horizontal="true"
          contentContainerStyle={styles.HScrollView}
        >
          {catCards}
        </ScrollView>
      </>
      <Text style={styles.Textual}>Trending Events</Text>
      <ScrollView style>{evtCards}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  HScrollView: {
    flex: 1,
    padding: 10,
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    width: WINWIDTH * catCards.length * 0.9,
    // minHeight: WINHEIGHT * 0.3,
    // maxHeight: WINHEIGHT * 0.65,
    // margin: "auto",
  },
  VScrollView: {
    margin: "auto",
    padding: 10,
    backgroundColor: "silver",

    width: WINWIDTH * catCards.length * 0.5,
    flex: 0.2,
  },

  container: {
    paddingTop: 50,
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#ECECEC",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  Textual: {
    width: "100%",
    fontSize: 28,
    fontWeight: "300",
    margin: 10,
    textAlign: "center",
  },
});
