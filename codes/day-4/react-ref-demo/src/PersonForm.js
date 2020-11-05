import React, { Component, createRef } from 'react'

export default class PersonForm extends Component {
    state = {
        user: {
            userName: '',
            password: ''
        },
        error: ''
    }

    nameInputRef = createRef();
    ageInputRef = createRef();

    updateStateHandler = (propName, propValue) => {
        let userNew = { ...this.state.user };
        userNew[propName] = propValue;
        this.setState({
            user: userNew
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        if (this.nameInputRef.current.value === '') {
            this.setState({
                error: `please enter value in ${this.nameInputRef.current.name} textbox`
            })
        }
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                UserName:&nbsp;
                <input
                    type='text'
                    value={this.state.user.userName}
                    name='userName'
                    onChange={(e) => this.updateStateHandler(e.target.name, e.target.value)}
                    ref={this.nameInputRef}
                />
                {this.state.error !== '' && (<span>{this.state.error}</span>)}
                <br />
                Password:&nbsp;
                <input
                    type='password'
                    value={this.state.user.password}
                    name='password'
                    onChange={(e) => this.updateStateHandler(e.target.name, e.target.value)}
                    ref={this.ageInputRef}
                />
                <br />
                <input type='submit' value='Submit' />
                {/* <button onClick={this.submitHandler}>Submit</button> */}
            </form>
        )
    }
}
