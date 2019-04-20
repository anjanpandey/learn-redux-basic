import {STORE_RESULT, DELETE_RESULT} from './actionTypes';

// sync action creator
export const saveResult = res => {
    // can manipulate res here
    return {
        type: STORE_RESULT,
        result: res
    };
}

// async
// pass the new save result
// not the old result 
// PASS data here, do not use getState 
export const storeResult = result => {
    // get dispatch due to redux thunk
    // redux thunk also passes get state as another args
    // return (dispatch, getState)
    return dispatch => {
        setTimeout(() => {
            // get old counter/id/..
            // const oldCounter = getState().cter.counter;
            // console.log(oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    }
};

export const deleteResult = id => {
    return {
        type: DELETE_RESULT,
        resultElId: id
    };
};