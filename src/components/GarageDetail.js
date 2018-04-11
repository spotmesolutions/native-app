import React from "react";
import { Text, View, Image } from "react-native";
import { Card, CardSection, Button, Input } from "./common";

const GarageDetails = props => {
  return (
    <View style={styles.containerStyle}>

    <CardSection>
    <Input
    label='Search'
    placeholder='garage name' 
    />
    </CardSection>
     

      <View style={styles.headerStyle}>
        <Text style={styles.headerText}>Santa Clara Garage </Text>
        <Image
        source={require("../icon.jpg")}
      />
      </View>

      <View style={styles.detailStyle}>
        <Text style={styles.detailText}>Midnight - 9am    $3.00/hr</Text>
      </View>

      <View style={styles.detailStyle}>
        <Text style={styles.detailText}>9am - 12pm          $3.00/hr</Text>
      </View>

      <View style={styles.detailStyle}>
        <Text style={styles.detailText}>12pm - 3pm          $3.00/hr</Text>
      </View>

      <View style={styles.detailStyle}>
        <Text style={styles.detailText}>3pm - midnight    $3.00/hr</Text>
      </View>

      <View style={styles.payStyle}>
        <Button>Pay</Button>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  headerStyle: {
    margin: 15,
    flexDirection:"row"
  },
  detailStyle: {
    margin: 20
  },
  payStyle: {
    margin: 20
  },
  imageStyle:{
    margin: 10
  },
  headerText: {
    fontSize: 30
  },
  detailText: {
    fontSize: 20
  }
};
export default GarageDetails;
