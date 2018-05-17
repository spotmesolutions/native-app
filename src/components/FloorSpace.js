import React from "react";
import { Text, View, Image } from "react-native";
import { Card, CardSection, Button, Input } from "./common";

const FloorSpace = props => {
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
    source={require("../images/icon.jpg")}
  />
      </View>

      <View style={styles.detailStyle}>
        <Text style={styles.detailText}>Level 1       80/100</Text>
      </View>

      <View style={styles.detailStyle}>
        <Text style={styles.detailText}>Level 2     100/100</Text>
      </View>

      <View style={styles.detailStyle}>
        <Text style={styles.detailText}>Level 3       70/100</Text>
      </View>

      <View style={styles.detailStyle}>
        <Text style={styles.detailText}>Level 4       90/100</Text>
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
    margin: 50,
    flexDirection: "row"
  },
  detailStyle: {
    margin: 20
  },
  payStyle: {
    margin: 40
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
export default FloorSpace;
