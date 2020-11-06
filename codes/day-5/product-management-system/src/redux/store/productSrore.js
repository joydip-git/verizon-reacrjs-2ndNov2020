import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkDefaultMiddleware from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

const productStore = createStore(rootReducer, 
    composeWithDevTools(applyMiddleware(loggerMiddleware, thunkDefaultMiddleware)))
export default productStore;
