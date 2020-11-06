import React from 'react'
import PropTypes from 'prop-types'
import './ProductTable.css'
import ProductRow from './ProductRow/ProductRow'

const ProductTable = ({ productList }) => {
    return (
        <div className='table-responsive'>
            <table className='table'>
                <thead>
                    <tr>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Code</td>
                        <td>Price</td>
                        <td>Rating</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map(p => {
                            return <ProductRow key={p.productId} product={p} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

ProductTable.propTypes = {
    productList: PropTypes.array.isRequired
}

export default ProductTable
