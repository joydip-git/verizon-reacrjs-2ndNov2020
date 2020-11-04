import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        errorMessage: ''
    }
    static getDerivedStateFromError(error) {
        return {
            errorMessage: error
        }
    }
    componentDidCatch(error, info) {
        console.log('[EB] caught error')
        console.log(error)
        console.log(info)
        // this.setState({
        //     errorMessage: error
        // })
    }
    render() {
        console.log('[EB] rendered')
        let design = null;
        if (this.state.errorMessage !== '') {
            design = <span>Error occurred</span>
        } else {
            design = this.props.children;
        }
        return design;
    }
}
