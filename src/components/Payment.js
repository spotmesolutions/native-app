import React, { Component } from "react";
import { Text, View, Image, Button } from "react-native";
import { Card, CardSection, CustomedButton, Input } from "./common";

class Payment extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.imageStyle}>
          <Button
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
            title="Back"
          />

          <Text style={styles.headerText}>Santa Clara Garage </Text>

          <Image
            source={require("../icon.jpg")}
          />
        </View>

        <View style={styles.detailStyle}>
          <Text style={styles.detailTextTitle}>Select Vehicle</Text>
        </View>

        <View style={styles.detailStyle}>
          <Text style={styles.detailText}> Licence Model</Text>
        </View>

        <View style={styles.detailStyle}>
          <Text style={styles.detailText}> A2M3C BMW</Text>
        </View>

        <View style={styles.detailStyle}>
          <Text style={styles.detailText}> A2M3C Honda</Text>
        </View>

        <View style={styles.detailStyle}>
          <Text style={styles.detailTextTitle}>Select Card</Text>
        </View>

        <View style={styles.detailStyle}>
          <Text style={styles.detailText}> Number Card Expire</Text>
        </View>

        <View style={styles.detailStyle}>
          <Text style={styles.detailText}> 5871****** VISA 02/09</Text>
        </View>

        <View style={styles.detailStyle}>
          <Text style={styles.detailText}> 8902****** Master 02/09</Text>
        </View>
        <View style={styles.payStyle}>
          <CustomedButton>Confirm</CustomedButton>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: 15
  },
  headerStyle: {
    margin: 30
  },
  detailStyle: {
    margin: 10
  },
  payStyle: {
    marginTop: 20,
    marginLeft: 130
  },
  imageStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerText: {
    fontSize: 30,
      color: "#379b8c",
      fontWeight: "900"
  },
  detailText: {
    fontSize: 20
  },
  detailTextTitle: {
    fontSize: 20,
    textDecorationLine: "underline"
  }
};
export default Payment;
