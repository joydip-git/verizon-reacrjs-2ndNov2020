import React, { Component } from 'react'
import { getProducts } from '../../services/productService'
import { product } from '../../models/product'

export default class ProductContainer extends Component {

    state = {
        products: [],
        error: ''
    }

    componentDidMount() {
        getProducts()
            .then(resp => {
                let mappedData = resp.data.map(p => {
                    let prod = new product();
                    for (let propName in p) {
                        prod[propName] = p[propName];
                    }
                    return prod;
                })
                // console.log(resp.data)
                // console.log(mappedData)
                this.setState({
                    products: mappedData,
                    error: ''
                })
            })
            .catch(e => {
                this.setState({
                    products: [],
                    error: e.message
                })
            });
    }

    render() {
        return (
            <div>
                {
                    this.state.products.length > 0 ? (
                        this.state.products.map(p => {
                            return <span>{p.productName}</span>
                        })
                    ) : 'No products found'
                }
            </div>
        )
    }
}
