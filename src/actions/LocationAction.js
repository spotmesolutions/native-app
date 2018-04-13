import { LOCATION_CHANGED, CURRENT_LOCATION } from './types';

export const locationChanged = (text) => {
    return {
        type: LOCATION_CHANGED,
        payload: text
    };
};

export function getCurrentLocation(){
    
	return(dispatch)=>{
        console.log('------------------------------------');
        console.log("getCurrentLocation() in Actions");
        console.log('------------------------------------');
		navigator.geolocation.getCurrentPosition(
			(position)=>{
                dispatch({
					type:CURRENT_LOCATION,
					payload:position
				});
			},
            (error)=> console.log(error.message),
            {enableHighAccuracy: true}

		);
	}
}
