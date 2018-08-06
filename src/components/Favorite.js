import React, {Component} from "react";
import { Text, View, Image, Button, Dimensions } from "react-native";
//Cindy was here

class Favorite extends Component{
  static navigationOptions = {
    drawerIcon: (
   <Image source={require("/Users/MarkM/Desktop/native-app-copy/src/images/ICONS/ic_favorite_3x.png")} />
    )
  }
render(){
  return (
    <View style={styles.containerStyle}>

    <View style={styles.imageStyle}>
    <Button
    onPress={() => this.props.navigation.navigate('DrawerOpen')}
    title="Back"
    />
    <Text
    style={styles.headerText}
    >
    Favorites </Text>

      <Image
        source={require("../images/icon.jpg")}
      />
    </View>


      <View style={styles.garageNameStyle}>
        <View style={styles.detailStyleLeftColumn}>
          <Text style={styles.subHeaderText}>Garage</Text>
        </View>

        <View style={styles.detailStyleRightColumn}>
          <Text style={styles.subHeaderText}>Occupancy</Text>
        </View>
      </View>

      <View style={styles.garageNameStyle}>
        <View style={styles.detailStyleLeftColumn}>
          <Text style={styles.detailText}>San Francisco </Text>
        </View>
        <View style={styles.detailStyleRightColumn}>
          <Text style={styles.detailText}>L1 80/100</Text>
          <Text style={styles.detailText}>L2 100/100</Text>
          <Text style={styles.detailText}>L3 70/100</Text>
          <Text style={styles.detailText}>L4 90/100</Text>
        </View>
      </View>

      <View style={styles.garageNameStyle}>
        <View style={styles.detailStyleLeftColumn}>
          <Text style={styles.detailText}>San Jose State</Text>
        </View>
        <View style={styles.detailStyleRightColumn}>
          <Text style={styles.detailText}>50/200</Text>
        </View>
      </View>

      <View style={styles.garageNameStyle}>
        <View style={styles.detailStyleLeftColumn}>
          <Text style={styles.detailText}>Santa Clara</Text>
        </View>
        <View style={styles.detailStyleRightColumn}>
          <Text style={styles.detailText}>80/150</Text>
        </View>
      </View>
    </View>
  );
}
}
const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: "#42b8ba",
    flexDirection: "column",
    justifyContent: "flex-start",
    width:Dimensions.get('window').width,
    height: Dimensions.get('window').height

  },
  imageStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:15
  },
  garageNameStyle: {
    flex: 0,
    flexDirection: "row"
  },
  headerStyle: {
    margin: 30,
    flexDirection: "row"
  },
  detailStyleLeftColumn: {
    width: 150,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10
  },
  detailStyleRightColumn: {
    width: 150,
    margin: 10
  },
  headerText: {
      fontFamily: 'Avenir Next Condensed',
      fontSize: 30,
      color: "black",
      fontWeight: "900"

  },
  detailText: {
    // fontFamily: 'Avenir Next Condensed',
    fontSize: 20
  },
  subHeaderText: {
    fontFamily: 'Avenir Next Condensed',
    fontSize: 25,
    textDecorationLine: "underline"

  }
};
export default Favorite;