import * as Actions from '../actions/productActions'
import * as ProductServices from '../../services/productService'

export const fetchProductsAsyncCallbackCreator = () => {
    const callback = (dispatch) => {

        const initiateAction = Actions.getProductsInitiateActionCreator();
        dispatch(initiateAction);

        ProductServices.getProducts()
            .then(resp => {
                const successAction = Actions.getProductsSuccessActionCreator(resp.data);
                dispatch(successAction)
            })
            .catch(e => {
                const failAction = Actions.getProductsFailureActionCreator(e.message);
                dispatch(failAction)
            })
    }
    return callback;
}

export const fetchProductByIdAsyncCallbackCreator = (productId) => {

    const callback = (dispatch) => {

        const initiateAction = Actions.getProductByIdInitiateActionCreator();
        dispatch(initiateAction);

        ProductServices.getProductById(productId)
            .then(resp => {
                const successAction = Actions.getProductByIdSuccessActionCreator(resp.data);
                dispatch(successAction)
            })
            .catch(e => {
                const failAction = Actions.getProductByIdFailureActionCreator(e.message);
                dispatch(failAction)
            })
    }
    return callback;
}