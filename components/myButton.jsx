import React, { Component, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const WINWIDTH = Dimensions.get("screen").width;
const WINHEIGHT = Dimensions.get("screen").height;

export default function MyButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.body}>
      <Text style={styles.Textual}>{props.Text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  body: {
    borderRadius: 25,
    backgroundColor: "#ECECEC",
    width: WINWIDTH * 0.5,
    height: WINHEIGHT * 0.1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 2,
  },

  Textual: {
    fontSize: 22,
    fontWeight: "400",
  },
});
