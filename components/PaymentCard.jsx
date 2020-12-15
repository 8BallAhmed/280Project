import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const WINWIDTH = Dimensions.get("screen").width;
const WINHEIGHT = Dimensions.get("screen").height;

var color1 = "#ececec";
var color2 = "#ececec";

export default function PaymentCard() {
  const [placebo, setPlacebo] = useState(0);

  return (
    <View style={styles.body}>
      <Text style={[styles.Textual, { fontSize: 30, marginBottom: 10 }]}>
        Payment Method
      </Text>
      <View style={styles.paymentContainer}>
        <TouchableOpacity
          onPress={() => {
            color1 = "#c9c9c9";
            color2 = "#ececec";
            setPlacebo(1);
          }}
          style={[styles.paymentMethod, { backgroundColor: color1 }]}
        >
          <Text style={[styles.Textual, { fontSize: 28 }]}>Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            color2 = "#c9c9c9";
            color1 = "#ececec";
            setPlacebo(0);
          }}
          style={[styles.paymentMethod, { backgroundColor: color2 }]}
        >
          <Text style={[styles.Textual, { fontSize: 28 }]}>Apple Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: WINWIDTH,
    height: WINHEIGHT * 0.35,
    backgroundColor: "#ECECEC",
    display: "flex",
    flexDirection: "column",
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: "center",
    paddingTop: 30,
  },

  paymentContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  paymentMethod: {
    width: WINWIDTH * 0.4,
    height: WINHEIGHT * 0.2,
    backgroundColor: "#ececec",
    borderWidth: 2,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  Textual: {
    fontSize: 18,
    fontWeight: "300",
    marginTop: 10,
    textAlign: "center",
  },
});
