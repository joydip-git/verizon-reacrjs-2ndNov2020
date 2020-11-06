import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductTable from '../../components/Product/ProductTable/ProductTable'
import { fetchProductsAsyncCallbackCreator } from '../../redux/async-callbacks/productAsyncCallbacks'
import './ProductContainer.css'

class ProductContainer extends Component {

    componentDidMount() {
        this.props.getProducts()
    }

    render() {
        const { loading, errorMessage, products } = this.props;
        let design = null;
        if (loading) {
            design = <span>Loading...</span>
        } else if (errorMessage !== '') {
            design = <span>{errorMessage}</span>
        } else if (products.length === 0) {
            design = <span>No products found</span>
        } else {
            design = (
                <div className='container'>
                    <div className='panel panel-primary'>
                        <ProductTable productList={products} />
                    </div>
                </div>
            );
        }

        return design;
    }
}

const mapStateToProps = (combinedState) => {
    return {
        products: combinedState.getProductsState.products,
        errorMessage: combinedState.getProductsState.error,
        loading: combinedState.getProductsState.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(fetchProductsAsyncCallbackCreator())
    }
}

let connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(ProductContainer)

