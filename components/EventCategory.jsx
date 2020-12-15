import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

const WINWIDTH = Dimensions.get("screen").width;
const WINHEIGHT = Dimensions.get("screen").height;

export default function EventCard(props) {
  return (
    <TouchableOpacity style={styles.body}>
      <Image
        source={require("../assets/images/no-image-placeholder-2.jpg")}
        style={styles.Images}
      ></Image>
      <Text style={styles.Textual}>{props.Category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  body: {
    margin: 10,
    alignItems: "center",
    backgroundColor: "#aaaaa0",
    display: "flex",
    flexDirection: "column",
    width: Math.round(WINWIDTH * 0.35),
    height: Math.round(WINHEIGHT * 0.2),
    borderRadius: 30,
    borderWidth: 2,
  },

  Images: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
    backgroundColor: "white",
  },

  Textual: {
    width: "100%",
    fontSize: 18,
    fontWeight: "300",
    marginTop: 10,
    textAlign: "center",
  },
});
