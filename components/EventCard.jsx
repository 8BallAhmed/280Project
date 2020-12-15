import { useNavigation } from "@react-navigation/native";
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

export default function EventCard() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Event Name");
      }}
      style={styles.body}
    >
      <Image
        source={require("../assets/images/no-image-placeholder-2.jpg")}
        style={styles.Images}
      ></Image>
      <Text style={styles.Textual}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Necessitatibus, tempore.
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "#ECECEC",
    display: "flex",
    flexDirection: "row",
    borderWidth: 2,
    width: Math.round(WINWIDTH * 0.95),
    height: Math.round(WINHEIGHT * 0.1),
    borderRadius: 30,
  },

  Images: {
    marginRight: 20,
    width: "25%",
    height: "100%",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },

  Textual: { width: "75%", fontSize: 14, fontWeight: "300" },
});
