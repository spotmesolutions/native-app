import {
  LOCATION_CHANGED,
  CURRENT_LOCATION,
  GET_INPUT,
  GET_ADDRESS_PREDICTIONS
} from "../actions/types";

const INITIAL_STATE = {
  location: "",
  currentLocation: {},
  inputData: "",
  predictions:{}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOCATION_CHANGED:
      return { ...state, location: action.payload };
    case CURRENT_LOCATION:
      console.log("CURRENT_LOCATION reducer");
      return {
        ...state,
        currentLocation: {
          latitude: action.payload.coords.latitude,
          longitude: action.payload.coords.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }
      };
    case GET_INPUT:
      //const { key, value } = action.payload;
      console.log('------------------------------------');
      console.log("GET_INPUT REDUCER");
      console.log(action.payload);
      console.log('------------------------------------');
      return {
        ...state,
        inputData: action.payload
      };
    case GET_ADDRESS_PREDICTIONS:
    console.log('------------------------------------');
    console.log("GET_ADDRESS_PREDICTIONS REDUCER");
    console.log(action.payload);
    console.log('------------------------------------');
      return{ ...state,
        predictions: action.payload};
    default:
      return state;
  }
};
