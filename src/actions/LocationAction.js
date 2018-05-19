import {
  LOCATION_CHANGED,
  CURRENT_LOCATION,
  GET_INPUT,
  GET_ADDRESS_PREDICTIONS,
  GET_SELECTED_ADDRESS,
  GET_SJ_API
} from "./types";
import firebase from 'firebase';

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
    console.log('------------------------------------');
    console.log('inside getSelectedAddress');
    console.log(payload);
    console.log('------------------------------------');
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

//get realtime San Jose Public Garage Information from their public API
export function fetchSanJoseAPI(){

  return (dispatch) =>{ 

  fetch('http://api.data.sanjoseca.gov/api/v2/datastreams/PARKI-GARAG-DATA/data.json/?auth_key=974e8db20c97825c8fe806dcbeaa3889c7b8c921&limit=50')
  .then((response) => response.json())
  .then((responseJson) => {
    
    dispatch({
      type: GET_SJ_API,
      payload: sjAPIFilter(responseJson.result.fArray ) 
    });
  })
  .catch((error) => {
    console.error(error);
    });

  };
}

const sjAPIFilter = (sjData) => {
  console.log('------------------------------------');
  console.log('sjAPIFilter()');
  console.log('------------------------------------');
  var stripHeaderArr = sjData.slice(4);
  var garageName = 'City Hall Garage';
  var garageDetail = { 
    garageName: '',
    garageStatus: '',
    garageAvailable: 0,
  };
  for (var i = 0; i < stripHeaderArr.length; i++){
    if(stripHeaderArr[i].fStr === garageName){
      garageDetail.garageName = stripHeaderArr[i].fStr;
      garageDetail.garageStatus = stripHeaderArr[i+1].fStr;
      garageDetail.garageAvailable = stripHeaderArr[i+2].fStr + '/' + stripHeaderArr[i+3].fStr;
    }
  }
  return garageDetail;
};