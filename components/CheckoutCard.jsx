import React, { Component, useState } from "react";
import { render } from "react-dom";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const WINWIDTH = Dimensions.get("screen").width;
const WINHEIGHT = Dimensions.get("screen").height;

export default class CheckoutCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  quant() {
    return this.state.quantity;
  }

  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.Textual}>{this.props.type}</Text>
        <Text style={styles.Textual}>{this.props.price + `SAR`}</Text>
        <Text style={styles.Textual}>{`x${1}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    margin: 4,
    borderRadius: 25,
    backgroundColor: "#ececec",
    borderWidth: 2,
    width: WINWIDTH * 0.9,
    height: WINHEIGHT * 0.07,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  Textual: {
    fontSize: 22,
    fontWeight: "400",
  },
});
