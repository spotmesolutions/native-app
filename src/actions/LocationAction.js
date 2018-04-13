import { LOCATION_CHANGED } from './types';

export const locationChanged = (text) => {
    return {
        type: LOCATION_CHANGED,
        payload: text
    };
};