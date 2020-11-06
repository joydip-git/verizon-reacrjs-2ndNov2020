import * as Reducers from './productReducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    getProductsState: Reducers.getProductsReducer,
    getProductByIdState: Reducers.getProductByIdReducer
})
export default rootReducer;