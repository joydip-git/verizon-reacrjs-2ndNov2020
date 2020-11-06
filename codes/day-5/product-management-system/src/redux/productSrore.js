const Axios = require('axios')
const { createStore, applyMiddleware, combineReducers } = require('redux')
const { createLogger } = require('redux-logger');
const thunk = require('redux-thunk');
//action type
const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE"
const GET_PRODUCTS_INITIATE = "GET_PRODUCTS_INITIATE"

const GET_PRODUCTBYID_SUCCESS = "GET_PRODUCTBYID_SUCCESS";
const GET_PRODUCTBYID_FAILURE = "GET_PRODUCTBYID_FAILURE"
const GET_PRODUCTBYID_INITIATE = "GET_PRODUCTBYID_INITIATE"

//action creator
const getProductsInitiateActionCreator = () => {
    return {
        type: GET_PRODUCTS_INITIATE
    }
}

const getProductsSuccessActionCreator = (products) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        data: products
    }
}

const getProductsFailureActionCreator = (errorMessage) => {
    return {
        type: GET_PRODUCTS_FAILURE,
        data: errorMessage
    }
}


const getProductByIdInitiateActionCreator = () => {
    return {
        type: GET_PRODUCTBYID_INITIATE
    }
}

const getProductByIdSuccessActionCreator = (product) => {
    return {
        type: GET_PRODUCTBYID_SUCCESS,
        data: product
    }
}

const getProductByIdFailureActionCreator = (errorMessage) => {
    return {
        type: GET_PRODUCTBYID_FAILURE,
        data: errorMessage
    }
}
//state
const initialProducstState = {
    products: [],
    error: '',
    loading: true
}
const initialProductState = {
    product: null,
    error: '',
    loading: true
}

//reducer
const getProductsReducer = (state = initialProducstState, action) => {
    let newState = null;
    switch (action.type) {
        case GET_PRODUCTS_INITIATE:
            newState = {
                ...state,
                products: [],
                error: '',
                loading: true
            }
            break;

        case GET_PRODUCTS_SUCCESS:
            newState = {
                ...state,
                products: action.data,
                error: '',
                loading: false
            }
            break;

        case GET_PRODUCTS_FAILURE:
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

const getProductByIdReducer = (state = initialProductState, action) => {
    let newState = null;
    switch (action.type) {
        case GET_PRODUCTBYID_INITIATE:
            newState = {
                ...state,
                product: null,
                error: '',
                loading: true
            }
            break;

        case GET_PRODUCTBYID_SUCCESS:
            newState = {
                ...state,
                product: action.data,
                error: '',
                loading: false
            }
            break;

        case GET_PRODUCTBYID_FAILURE:
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

const fetchProductsAsyncCallbackCreator = () => {
    const callback = (dispatch) => {

        const initiateAction = getProductsInitiateActionCreator();
        dispatch(initiateAction);

        Axios.get('http://127.0.0.1:8081/productservice')
            .then(resp => {
                const successAction = getProductsSuccessActionCreator(resp.data);
                dispatch(successAction)
            })
            .catch(e => {
                const failAction = getProductsFailureActionCreator(e.message);
                dispatch(failAction)
            })
    }
    return callback;
}

const fetchProductByIdAsyncCallbackCreator = (productId) => {

    const callback = (dispatch) => {

        const initiateAction = getProductByIdInitiateActionCreator();
        dispatch(initiateAction);

        Axios.get('http://127.0.0.1:8081/productservice/' + productId)
            .then(resp => {
                const successAction = getProductByIdSuccessActionCreator(resp.data);
                dispatch(successAction)
            })
            .catch(e => {
                const failAction = getProductByIdFailureActionCreator(e.message);
                dispatch(failAction)
            })
    }
    return callback;
}


const loggerMiddleware = createLogger();
const thunkDefaultMiddleware = thunk.default;
const rootReducer = combineReducers({
    getProductsState: getProductsReducer,
    getProductByIdState: getProductByIdReducer
});
const productStore = createStore(rootReducer, applyMiddleware(loggerMiddleware, thunkDefaultMiddleware))
//fetchProductsAsync(productStore.dispatch);

productStore.dispatch(fetchProductsAsyncCallbackCreator());
productStore.dispatch(fetchProductByIdAsyncCallbackCreator(1))