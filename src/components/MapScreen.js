/* global google */ 
/* eslint-disable no-undef */
import React, { Component } from "react";
import { Text, View, Image, Button, TouchableHighlight, TextInput,TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import {Card, CardSection } from "./common";
import axios from 'axios';

import { Actions} from 'react-native-router-flux';

export default class MapScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      locationInput: '',
      locationCoordinates: {
        latitude: 37.339023,
        longitude: -121.880835,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      }
    };
    this.handleLocationInput = this.handleLocationInput.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  callout() {
    Actions.witnessed({
      latitude: this.state.locationCoordinates.latitude,
      longitude: this.state.locationCoordinates.longitude
      })
  }
  handleLocationInput(textInput) {
    this.setState({
      locationInput: textInput
    });
  }

  updateLocationCoordinates(response){
    var info = response.data.results[0].geometry.location 
    this.setState({
      locationCoordinates: {
        latitude: info.lat,
        longitude: info.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    })
  }

  handleSubmit(textInput) {
    const REACT_APP_GOOGLE_PLACES_API ='AIzaSyCNK0H3ySQivhxwMuF5UAtVH4ReqCxHCek';
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + this.state.locationInput.split(' ').join('') + "&key=" + REACT_APP_GOOGLE_PLACES_API)
    .then(response => this.updateLocationCoordinates(response))
    .catch(error => console.log("Failjax: ", error))
  }

  handleLocationChange(response){
    this.setState({
      locationCoordiante: response
    })
  }


  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.navigationBar}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
            underlayColor={"white"}
          >
            <Image
              source={require("../menu.png")}
            />
          </TouchableHighlight>

          <Text style={styles.companyText}>SPOT ME</Text>

          <Image
            source={require("../icon.jpg")}
          />
        </View>

        <View style={styles.mapAndSearchBarContainer}>
          <MapView
            provider={ PROVIDER_GOOGLE }
            style={styles.mapContainer}
            region={this.state.locationCoordinates}
            onRegionChange={this.handleLocationChange}
            zoomEnabled={true} 
            scrollEnabled={true} 
          >
            <MapView.Marker
              coordinate={{
                latitude: 37.339023,
                longitude: -121.880835
              }}
              title={"Noth Garage"}
              description={"Slots: 120/200"}
            />

            <MapView.Marker
              coordinate={{
                latitude: 37.333032,
                longitude: -121.88081
              }}
              title={"7th street Garage"}
              description={"Slots: 100/250"}
            />

            <MapView.Marker
              coordinate={{
                latitude: 37.332785,
                longitude: -121.883231
              }}
              title={"West Garage"}
              description={"Slots: 90/150"}
            />
          </MapView>

            <View style={styles.inputContainer}>
              <Text style={styles.labelStyle}>Search</Text>
              <TextInput 
              style={styles.inputStyle}
              placeholder="garage name" 
              onChangeText={this.handleLocationInput}
              value={this.state.locationInput}
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
    justifyContent: "center",
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

  allNonMapThings: {
    
  },

  inputContainer: {
    height: 40, 
    elevation: 1,
    backgroundColor: "white",
    width: "90%",
    height: "6%",
    top: 40,
    borderRadius: 3,
    shadowOpacity: 0.75,
    shadowRadius: 1,
    shadowColor: "gray",
    shadowOffset: { height: 0, width: 0 },
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle:{
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
};
