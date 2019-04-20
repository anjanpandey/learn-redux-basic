import {INCREMENT, DECREMENT, ADD5, SUBTRACT5} from './actionTypes';

// action creator
// a func that creates an action - js object

export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

export const add5 = val => {
    return {
        type: ADD5,
        value: val
    };
};

export const subtract5 = val => {
    return {
        type: SUBTRACT5,
        value: val
    };
};


