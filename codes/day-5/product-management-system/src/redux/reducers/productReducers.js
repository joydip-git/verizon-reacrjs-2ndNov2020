import *as ActionTypes from '../action-types/productActionTypes'
import * as ProductStates from '../product-states/productStates'

export const getProductsReducer = (state = ProductStates.initialProducstState, action) => {
    let newState = null;
    switch (action.type) {
        case ActionTypes.GET_PRODUCTS_INITIATE:
            newState = {
                ...state,
                products: [],
                error: '',
                loading: true
            }
            break;

        case ActionTypes.GET_PRODUCTS_SUCCESS:
            newState = {
                ...state,
                products: action.data,
                error: '',
                loading: false
            }
            break;

        case ActionTypes.GET_PRODUCTS_FAILURE:
            newState = {
                ...state,
                products: [],
                error: action.data,
                loading: false
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

export const getProductByIdReducer = (state = ProductStates.initialProductState, action) => {
    let newState = null;
    switch (action.type) {
        case ActionTypes.GET_PRODUCTBYID_INITIATE:
            newState = {
                ...state,
                product: null,
                error: '',
                loading: true
            }
            break;

        case ActionTypes.GET_PRODUCTBYID_SUCCESS:
            newState = {
                ...state,
                product: action.data,
                error: '',
                loading: false
            }
            break;

        case ActionTypes.GET_PRODUCTBYID_FAILURE:
            newState = {
                ...state,
                product: null,
                error: action.data,
                loading: false
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