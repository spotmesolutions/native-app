import {
  LOCATION_CHANGED,
  CURRENT_LOCATION,
  GET_INPUT,
  GET_ADDRESS_PREDICTIONS
} from "./types";
import RNGooglePlaces from "react-native-google-places";

export const locationChanged = text => {
  return {
    type: LOCATION_CHANGED,
    payload: text
  };
};

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
  console.log("------------------------------------");
  console.log("getinputData ACTION");
  console.log(payload);
  console.log("------------------------------------");
  return {
    type: GET_INPUT,
    payload: payload
  };
}

export function getAddressPredictions(text) {
    console.log("------------------------------------");
  console.log("getAddressPredictions ACTION");
  console.log(text);
  console.log("------------------------------------");
  return (dispatch, store) => {
    RNGooglePlaces.getAutocompletePredictions(text, { country: "USA" })
      .then((results) =>
        
        dispatch({
          type: GET_ADDRESS_PREDICTIONS,
          payload: results
        })
      )
      .catch(error => console.log(error.message));
  };
}
