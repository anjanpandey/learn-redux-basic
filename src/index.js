import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// store should be created where our app start
// combine reducer is a function that takes js objects
// mapping our reducers to different slices of our state
// as input and merges everything into one state and one reducer

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';

// import from redux-thunk
import thunk from 'redux-thunk';

// connect store to react - need a package
// npm install --save react-redux
import {Provider} from 'react-redux';

//
const rootReducers = combineReducers({
    cter: counterReducer,
    res: resultsReducer
});

// for redux-dev tool
// in case the first condition fails,
// compose is executed
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
                        || compose;

// create a middle ware
// returns another function
// nested function is middle ware
const  logger = store => {
    return next  => {
        return action => {
            console.log('[Middleware] Dispatching',action);
            // let action continue to reducer
            const result =  next(action);
            console.log('[Middleware next', store.getState());
            return result;
        }
    }
};

// takes reducer as input
// second arg can be an enhancer 
// can pass list of middle ware
// they will be executed in the order we pass them
// applyMiddleware(logger1, logger2, ...)
const store = createStore(rootReducers, composeEnhancer(applyMiddleware(logger, thunk)));



ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root'));
registerServiceWorker();
