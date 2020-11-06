const { createStore, applyMiddleware } = require('redux')
const { createLogger } = require('redux-logger')

//type of actions
const INCREASE_COUNTER = 'INCREASE_COUNTER';
const DECREASE_COUNTER = 'DECREASE_COUNTER';

//actions/action creator
const increaseActionCreator = (data) => {
    return {
        type: INCREASE_COUNTER,
        data: data
    }
}

const decreaseActionCreator = (data) => {
    return {
        type: DECREASE_COUNTER,
        data: data
    }
}

//state
const initialCountState = {
    count: 0
}

//reducer
const countReducer = (state = initialCountState, action) => {
    let newState = null;

    switch (action.type) {

        case INCREASE_COUNTER:
            newState = {
                ...state,
                count: state.count + action.data
            }
            break;

        case DECREASE_COUNTER:
            newState = {
                ...state,
                count: state.count - action.data
            }
            break;

        default:
            newState = {
                ...state
            }
            break;
    }

    return newState;
}

const loggerMiddleware = createLogger();
const store = createStore(countReducer, applyMiddleware(loggerMiddleware))

//console.warn(store.getState())
store.dispatch(increaseActionCreator(10));
//console.warn(store.getState())
store.dispatch(decreaseActionCreator(5));
//console.warn(store.getState())
store.dispatch(increaseActionCreator(3));
store.dispatch(decreaseActionCreator(2));