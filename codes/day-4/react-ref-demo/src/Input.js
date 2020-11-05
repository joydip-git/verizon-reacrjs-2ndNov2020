import React, { Component, createRef } from 'react'

export default class Input extends Component {

    childInputRef = createRef();

    focusInput = () => {
        this.childInputRef.current.focus();
    }
    
    render() {
        return (
            <div>
                Child Input:&nbsp;<input type='text' ref={this.childInputRef} />
            </div>
        )
    }
}
