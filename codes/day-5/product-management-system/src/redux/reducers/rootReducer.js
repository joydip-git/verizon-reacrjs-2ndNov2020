import * as Reducers from './productReducers'

import { combineReducers } from 'redux'
export const rootReducer = combineReducers({
    getProductsState: Reducers.getProductsReducer,
    getProductByIdState: Reducers.getProductByIdReducer
});