import Home from '../components/Common/Home/Home'
import AddProduct from "../components/Product/AddProduct/AddProduct";
import UpdateProduct from "../components/Product/UpdateProduct/UpdateProduct";
import ProductDetail from "../components/Product/ProductDetail/ProductDetail";
import ProductContainer from '../containers/Product/ProductContainer';

export const routes = [
    {
        id: 1,
        path: '/',
        componentName: Home
    },
    {
        id: 2,
        path: '/home',
        componentName: Home
    },
    {
        id: 3,
        path: '/products',
        componentName: ProductContainer
    },
    {
        id: 4,
        path: '/product/add',
        componentName: AddProduct
    },
    {
        id: 5,
        path: '/product/update/:id',
        componentName: UpdateProduct
    },
    {
        id: 6,
        path: '/product/:id',
        componentName: ProductDetail
    }
]