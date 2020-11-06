import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './ProductTable.css'
import ProductRow from './ProductRow/ProductRow'

const ProductTable = ({ productList }) => {
    return (
        <>
            <div className='panel panel-heading'>
                <h3> {productList.length} Record(s) found...</h3>
            </div>
            <div className='panel panel-body panelStyle'>
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
            </div>
        </>
    )
}

ProductTable.propTypes = {
    productList: PropTypes.array.isRequired
}

export default ProductTable
