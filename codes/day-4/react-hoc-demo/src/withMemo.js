import React, { Component } from "react";
import ReactDOM from 'react-dom'

const withMemo = (WrappedComponent) => {
    class WithMemo extends Component {
        shouldComponentUpdate(newProps, newState) {
            for (let propName in newProps) {
                if (this.props[propName] !== newProps[propName]) {
                    return true;
                }
            }
            return false;
        }
        render() {            
            return <WrappedComponent />
        }
    }
    return WithMemo;
}


const Some = (props) => {
    return <span>{props.data}</span>;
}
const SomeHOC = withMemo(Some);

ReactDOM.render(<SomeHOC data={1} value={20} />, document.getElementById('root'));