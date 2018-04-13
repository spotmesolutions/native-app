import { LOCATION_CHANGED, CURRENT_LOCATION } from "../actions/types";

const INITIAL_STATE = {
  location: '',
  currentLocation:{
    latitude: 0,
    longitude: 0,
    latitudeDelta:0.1,
    longitudeDelta:0.1
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOCATION_CHANGED:
      return { ...state, location: action.payload };
    case CURRENT_LOCATION:
    console.log('------------------------------------');
    console.log("CURRENT_LOCATION reducer");
    console.log('------------------------------------');
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};
