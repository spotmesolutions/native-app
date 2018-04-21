import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TextInput,
  TouchableOpacity
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import { Card, CardSection } from "./common";
import { connect } from "react-redux";
import { locationChanged, getCurrentLocation } from "../actions";
import { Actions } from "react-native-router-flux";

class MapScreen extends Component {
  componentDidMount() {
    console.log('------------------------------------');
    console.log("componentDidMount()");
    console.log('------------------------------------');
    this.props.getCurrentLocation();
    console.log('------------------------------------');
    console.log(this.props.currentLocation);
    console.log('------------------------------------');
  }

  
   
  // constructor(props) {
  //   super(props);
  //   console.log('------------------------------------');
  //   console.log("constructor");
  //   console.log('------------------------------------');
  //   this.state = {
  //     locationInput: "",
  //     locationCoordinates: {
  //       latitude: this.props.currentLocation.latitude,
  //       longitude: this.props.currentLocation.longitude,
  //       latitudeDelta: 0.1,
  //       longitudeDelta: 0.1
  //     }
  //   };
  //   this.handleLocationInput = this.handleLocationInput.bind(this);
  //   this.handleLocationChange = this.handleLocationChange.bind(this);
  // }

  onLocationChange(text) {
    this.props.locationChanged(text);
  }

  handleLocationInput(textInput) {
    this.setState({
      locationInput: textInput
    });
  }

  handleSubmit(textInput) {
    console.log('------------------------------------');
    console.log(this.props.currentLocation);
    console.log('------------------------------------');
   }

  handleLocationChange(locationCoordinates) {
    console.log('------------------------------------');
    console.log("handleLocationChange(locationCoordinates)");
    console.log('------------------------------------');
    this.setState({locationCoordinates});
    console.log('------------------------------------');
    console.log(this.props.currentLocation);
    console.log('------------------------------------');
  }

  render() {
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

        <View style={styles.mapAndSearchBarContainer}>
        {this.props.currentLocation.latitude &&
          <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapContainer}
          region={this.props.currentLocation}
          onRegionChange={this.handleLocationChange}
          zoomEnabled={true}
          scrollEnabled={true}
        >
          <MapView.Marker coordinate={this.props.currentLocation} />
        </MapView>
        }
         

          <View style={styles.inputContainer}>
            <Text style={styles.labelStyle}>Search</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder="garage name"
              onChangeText={this.onLocationChange.bind(this)}
              value={this.props.location}
              onSubmitEditing={this.handleSubmit.bind(this)}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
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
    flex: 1,
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
  const { location, currentLocation } = loc;
  return { location, currentLocation };
};

export default connect(mapStateToProps, {
  locationChanged,
  getCurrentLocation
})(MapScreen);
