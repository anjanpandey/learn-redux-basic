// concept of redux
// node import
const redux = require('redux');
const createStore = redux.createStore;

// initialize state
const initialState = {
    counter: 0
};

//reducer
// set current state to initial state - default value
// listen and react to experience 
const rootReducer = (currentState = initialState, action) => {
    // for increment counter by 1
    if(action.type === 'INC_COUNTER') {
        return {
            ...currentState,
            counter : currentState.counter+1
        };
    }
    // for add counter
    if(action.type === 'ADD_COUNTER') {
        return {
            ...currentState,
            counter : currentState.counter+action.value
        };
    }
    // returns updated state
    return currentState;
;}

// store 
const store = createStore(rootReducer);
console.log(store.getState());

// subscription action - trigger when state is updated
// takes an argument, function which will be executed whenever 
// the state is updated
// when action reached to reducer
store.subscribe(() => {
    // on state update
    console.log('subscription', store.getState());
});


// dispatching action
// dispatch is a function that takes action as an argument 
// you HAVE TO use type as is
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER', value: 10});
console.log(store.getState());

