import React, { Component } from "react";
import {
  Text,
  Image,
  Button,
  TouchableHighlight,
  TextInput,
  TouchableOpacity
} from "react-native";
// NOTE: need to be enabled in google api for map
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"; 


import { connect } from "react-redux";
import {
  locationChanged,
  getCurrentLocation,
  getInputData,
  getAddressPredictions,
  getSelectedAddress,
  fetchSanJoseAPI
} from "../actions";

import { Actions } from "react-native-router-flux";
import SearchResults from "./SearchResults";
import SearchBox from "./SearchBox";
import { View } from "native-base";
import { StyleSheet } from "react-native";

class MapScreen extends Component {
  
  componentWillMount() {
    console.log('------------------------------------');
    console.log("component will mount mapscreen");
    console.log('------------------------------------');
    this.props.getCurrentLocation(); //***** Bugs message: Unable to fetch location within 5.0s. 
  }
 
  render() {
    console.log('------------------------------------');
    console.log("render in mapscreen");
    console.log("current location ", this.props.currentLocation);
    console.log('------------------------------------');
    return (
      <View style={styles.outerContainer}>
        <View style={styles.navigationBar}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
            underlayColor={"white"}
          >
            <Image source={require("../images/menu.png")} />
          </TouchableHighlight>

          <Text style={styles.companyText}>SPOT ME</Text>

          <Image source={require("../images/icon.jpg")} />
        </View>

        <View style={styles.container}>
          {this.props.currentLocation.latitude && (
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              region={this.props.currentLocation}
            >
              <MapView.Marker 
              coordinate={this.props.currentLocation}
              title =  {this.props.sanjose.garageName}
              description = {this.props.sanjose.garageAvailable}
              />
            </MapView>
          )}

          <SearchBox
            getInputData={this.props.getInputData}
            getAddressPredictions={this.props.getAddressPredictions}
            inputData={this.props.inputData}
          />
          {this.props.inputData && (
            <SearchResults
              predictions={this.props.predictions}
              getSelectedAddress={this.props.getSelectedAddress}
              fetchSanJoseAPI={this.props.fetchSanJoseAPI}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  outerContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  companyText: {
    fontSize: 30,
    color: "#42b8ba",
    fontWeight: "900"
  },
  navigationBar: {
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  mapAndSearchBarContainer: {
    alignItems: "center",

    height: "90%",
    width: "100%"
  },
  mapContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  inputContainer: {
    height: 40,
    elevation: 1,
    backgroundColor: "white",
    width: "90%",
    height: "10%",
    top: 40,
    borderRadius: 3,
    shadowOpacity: 0.75,
    shadowRadius: 1,
    shadowColor: "gray",
    shadowOffset: { height: 0, width: 0 },
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  inputStyle: {
    color: "#000",
    padding: 10,
    height: 50,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
};

const mapStateToProps = ({ loc }) => {
  const {
    location,
    currentLocation,
    inputData,
    predictions,
    sanjose
  } = loc;
  return { location, currentLocation, inputData, predictions, sanjose };
};
const mapActionCreators = {
  locationChanged,
  getCurrentLocation,
  getInputData,
  getAddressPredictions,
  getSelectedAddress,
  fetchSanJoseAPI
};
export default connect(mapStateToProps, mapActionCreators)(MapScreen);
