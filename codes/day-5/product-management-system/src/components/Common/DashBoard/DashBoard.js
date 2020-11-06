import React from 'react'
import { Link } from 'react-router-dom'

function DashBoard() {
    return (
        <div>
            <h1>Product Management System</h1>
            <nav className='navbar navbar-default'>
                <Link to="/home">
                    Home
                </Link>
                <Link to="/products">
                    Products
                </Link>
                <Link to="/product/add">
                    Add
                </Link>
            </nav>
        </div>
    )
}

export default DashBoard
