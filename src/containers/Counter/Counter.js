import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// a function that returns a higher order component (function)
// take component as input
// returns a function
import {connect} from 'react-redux';
// import all action types
import * as actionTypes from '../../store/actions';


class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd5Counter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract5Counter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result => (
                        <li onClick={() => this.props.onDeleteResult(result.id)} key={result.id}>
                            {result.value}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

// configuration to a given component - for reciving 
// instruction about - how state managed by redux should be
// map to props that we can use in container
// takes state as an args
const mapStateToProps = state => {
    // return js object 
    // map of prop name and slices of state stored in redux
    return {
        // give me value of counter from global state 
        // give it to me in form of property name ctr
        // global state. name your give . property
        ctr: state.cter.counter,
        storedResults: state.res.results
    };
};

// we can also pass second configuration - for sending
const mapDispatchToProps = dispatch => {
    // props name which will hold ref to a func
    // pass payload {}/value - user input
    // which should eventually executed to dispatch an action
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAdd5Counter: () => dispatch({type: actionTypes.ADD5, value:5 }),
        onSubtract5Counter: () => dispatch({type: actionTypes.SUBTRACT5, value: 5}),
        onStoreResult: (result) => dispatch({type:actionTypes.STORE_RESULT, result:result}),
        onDeleteResult: (id) => dispatch({type:actionTypes.DELETE_RESULT, resultElId:id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);