import { Welcome } from './welcome'
import { Description } from './description'
import React from 'react'

const App = () => {

    const welcomeElement = Welcome();
    const desciptionElement = Description();
    /*
        const appElement = React.createElement(
           'div',
            null,
            [
                welcomeElement,
                React.createElement('br', null, null),
                React.createElement('br', null, null),
                desciptionElement
            ]
        );
    */
    const appElement = (
        <div>
            {welcomeElement}
            <br />
            <br />
            {desciptionElement}
        </div>
    )
    return appElement;
}
export default App;