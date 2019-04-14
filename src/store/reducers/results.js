// we only care about results state in this reducers

import * as actionTypes from '../actions';

// create a initial state
const initialState = {
    results: []
}

// reducer is just a fun
// retrives a state and action
// return a state
// this has no access to global state
// need to get a value from global state then get if from action payload
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id:Math.random(), value: action.result})
            };
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            };
    }
    // return the current state - default
    return state;
};

export default reducer;