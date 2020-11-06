import React from 'react'
import PropTypes from 'prop-types'
import './ProductRow.css'
import { Link, NavLink } from "react-router-dom";

const ProductRow = ({ product }) => {
    return (
        <tr>
            <td>
                <NavLink to={`/product/${product.productId}`}>
                    <div className='img-responsive'>
                        <img
                            src={product.imageUrl}
                            alt='NA'
                            title={product.productName}
                        />
                    </div>
                </NavLink>
            </td>
            <td>
                <Link to={`/product/update/${product.productId}`}>
                    {product.productName}
                </Link>
            </td>
            <td>{product.productCode}</td>
            <td>{product.price}</td>
            <td>{product.starRating}</td>
            <td>
                <button className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    )
}

ProductRow.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductRow
