import React, { Component } from "react";
import {
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
  StyleSheet,
  Image,
  View,
} from "react-native";

const WINWIDTH = Dimensions.get("screen").width;
const WINHEIGHT = Dimensions.get("screen").height;

export default function SearchBar() {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.mainView}>
        <TextInput
          placeholder={"Search..."}
          placeholderTextColor="black"
          style={styles.body}
        ></TextInput>
        <Image
          style={styles.Images}
          source={require("../assets/images/searchIcon.png")}
        ></Image>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
    justifyContent: "center",
    width: WINWIDTH * 0.8,
    display: "flex",
    borderRadius: 25,
    borderColor: "black",
    borderStyle: "solid",
    flexDirection: "row",
    backgroundColor: "#ececec",
    borderWidth: 1,
  },

  body: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    width: WINWIDTH * 0.65,
    height: Math.round(WINHEIGHT * 0.05),
    borderRadius: 25,
  },

  Images: {
    marginRight: 10,
    width: 30,
    height: 30,
  },

  Textual: { width: "75%", fontSize: 14, fontWeight: "300" },
});
