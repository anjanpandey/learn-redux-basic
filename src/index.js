import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// store should be created where our app start
// combine reducer is a function that takes js objects
// mapping our reducers to different slices of our state
// as input and merges everything into one state and one reducer

import {createStore, combineReducers} from 'redux';
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';

// connect store to react - need a package
// npm install --save react-redux
import {Provider} from 'react-redux';

//
const rootReducers = combineReducers({
    cter: counterReducer,
    res: resultsReducer
});

// takes reducer as input
const store = createStore(rootReducers);



ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root'));
registerServiceWorker();
