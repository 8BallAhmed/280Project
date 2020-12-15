import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import MapComponent from "../components/MapComponent.jsx";
import Ticket from "../components/Ticket.jsx";
import MyButton from "../components/myButton.jsx";
import PaymentCard from "../components/PaymentCard.jsx";
import CheckoutCard from "../components/CheckoutCard.jsx";
import { useNavigation } from "@react-navigation/native";

const WINWIDTH = Dimensions.get("screen").width;
const WINHEIGHT = Dimensions.get("screen").height;

export default function PaymentScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <PaymentCard></PaymentCard>
      <View>
        <Text style={styles.Textual}>Order Details</Text>
        <CheckoutCard type="Gold" price={250}></CheckoutCard>
        <CheckoutCard type="Silver" price={150}></CheckoutCard>
      </View>
      <View style={{ marginBottom: 45 }}>
        <Text style={[styles.Textual, { textAlign: "left" }]}>
          {"Price: 400.0 SAR\nVAT:   15%\nTotal: 460.0 SAR"}
        </Text>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              "Your order has been confirmed, we will be in touch shortly!"
            );
            navigation.navigate("Home");
          }}
          style={styles.body}
        >
          <Text style={styles.Textual}>{"Confirm Order"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECECEC",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Textual: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
  },
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
});
