import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkDefaultMiddleware from 'redux-thunk'
import { rootReducer } from './reducers/rootReducer'

const loggerMiddleware = createLogger();

export const productStore = createStore(rootReducer, applyMiddleware(loggerMiddleware, thunkDefaultMiddleware))