import {
  LOCATION_CHANGED,
  CURRENT_LOCATION,
  GET_INPUT,
  GET_ADDRESS_PREDICTIONS,
  GET_SELECTED_ADDRESS
} from "./types";

import RNGooglePlaces from "react-native-google-places";

export const locationChanged = text => {
  return {
    type: LOCATION_CHANGED,
    payload: text
  };
};

// get current gps location of the user
export function getCurrentLocation() {
  return dispatch => {
    console.log("getCurrentLocation() in Actions");
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        dispatch({
          type: CURRENT_LOCATION,
          payload: position
        });
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, maximumAge: 60000, timeout: 5000 }
    );
  };
}

export function getInputData(payload) {
  return {
    type: GET_INPUT,
    payload: payload
  };
}

// get places prediction from google place API
export function getAddressPredictions(text) {
  return dispatch => {
    RNGooglePlaces.getAutocompletePredictions(text, { country: "USA" })
      .then(results =>
        dispatch({
          type: GET_ADDRESS_PREDICTIONS,
          payload: results
        })
      )
      .catch(error => console.log(error.message));
  };
}

// get user-selected place from google place API and translate it into gps coordinate 
export function getSelectedAddress(payload) {
  return (dispatch) => {
    RNGooglePlaces.lookUpPlaceByID(payload)
      .then(results => {
        dispatch({
          type: GET_SELECTED_ADDRESS,
          payload: results
        });
      })
      .catch(error => console.log(error.message));
  };
}
