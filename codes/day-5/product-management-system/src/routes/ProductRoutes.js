import React from 'react'
import { routes } from './routes'
import { Route, Switch } from 'react-router-dom'

const ProductRoutes = () => {
    return (
        <Switch>
            {
                routes.map(route => {
                    return <Route path={route.path} component={route.componentName} exact key={route.id} />
                })
            }
        </Switch>
    )
}

export default ProductRoutes
