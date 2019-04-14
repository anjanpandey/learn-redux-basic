// this is a reducer for counter state only
// we do not care about other intial state in this file

import * as actionTypes from '../actions';

// create a initial state
const initialState = {
    counter: 0
}

// reducer is just a fun
// retrives a state and action
// return a state
// can also called counter reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter +1
            };
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter -1
            };
        case actionTypes.ADD5:
            return {
                ...state,
                counter: state.counter +action.value
            };
        case actionTypes.SUBTRACT5:
            return {
                ...state,
                counter: state.counter - action.value
            };
    }
    // return the current state - default
    return state;
};

export default reducer;