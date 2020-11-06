import * as ActionTypes from '../action-types/productActionTypes'

export const getProductsInitiateActionCreator = () => {
    return {
        type:  ActionTypes.GET_PRODUCTS_INITIATE
    }
}

export const getProductsSuccessActionCreator = (products) => {
    return {
        type: ActionTypes.GET_PRODUCTS_SUCCESS,
        data: products
    }
}

export const getProductsFailureActionCreator = (errorMessage) => {
    return {
        type: ActionTypes.GET_PRODUCTS_FAILURE,
        data: errorMessage
    }
}


export const getProductByIdInitiateActionCreator = () => {
    return {
        type: ActionTypes.GET_PRODUCTBYID_INITIATE
    }
}

export const getProductByIdSuccessActionCreator = (product) => {
    return {
        type: ActionTypes.GET_PRODUCTBYID_SUCCESS,
        data: product
    }
}

export const getProductByIdFailureActionCreator = (errorMessage) => {
    return {
        type: ActionTypes.GET_PRODUCTBYID_FAILURE,
        data: errorMessage
    }
}