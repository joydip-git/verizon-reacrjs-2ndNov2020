import React, { useEffect } from 'react'
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductByIdAsyncCallbackCreator } from '../../../redux/async-callbacks/productAsyncCallbacks'

// const ProductDetail = ({ history, location, match }) => {
//     console.log(match.params.id)

//     return (
//         <div>
//             Detail
//         </div>
//     )
// }

const ProductDetail = () => {
    const histroy = useHistory();
    const params = useParams();
    const productId = parseInt(params.id);

    const product = useSelector((combinedState) => combinedState.getProductByIdState.product)
    const error = useSelector((combinedState) => combinedState.getProductByIdState.error)
    const loading = useSelector((combinedState) => combinedState.getProductByIdState.loading)

    const dispatch = useDispatch();

    useEffect(() => {
        const callback = fetchProductByIdAsyncCallbackCreator(productId)
        dispatch(callback)
    }, [productId])
    //const location = useLocation();

    let design = null;
    if (loading) {
        design = <span>Loading...</span>
    } else if (error !== '') {
        design = <span>{error}</span>
    } else if (product === null) {
        design = <span>No product found</span>
    } else {
        design = (
            <span>
                {
                    product.productName
                }
            </span>
        );
    }
    return (
        <div>
            {
                design
            }
            <br />
            <button className='btn btn-primary' onClick={() => histroy.push('/products')}>Back</button>
        </div>
    )
}

export default ProductDetail
