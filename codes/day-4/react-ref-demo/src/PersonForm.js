import React, { Component, createRef } from 'react'

export default class PersonForm extends Component {
    state = {
        userNameInput: {
            value: '',
            error: ''
        },
        passwordInput: {
            value: '',
            error: ''
        }
    }

    userNameInputRef = createRef();
    passwordInputRef = createRef();

    updateStateHandler = (controlName, controlValue) => {
        let input = { ...this.state[controlName] };
        input.value = controlValue
        input.error = ''
        this.setState({
            [controlName]: input
        }, () => console.log(this.state))
    }

    submitHandler = (e) => {
        e.preventDefault();
        if (this.userNameInputRef.current.value === '') {
            let userName = { ...this.state.userNameInput };
            userName.error = `please enter value in ${this.userNameInputRef.current.name} textbox`

            this.setState({
                userNameInput: userName
            })
        } else {
            let userName = { ...this.state.userNameInput };
            userName.error = ''
            this.setState({
                userNameInput: userName
            })
        }
        if (this.passwordInputRef.current.value === '') {
            let password = { ...this.state.passwordInput };
            password.error = `please enter value in ${this.passwordInputRef.current.name} textbox`

            this.setState({
                passwordInput: password
            })
        } else {
            let password = { ...this.state.passwordInput };
            password.error = ''
            this.setState({
                passwordInput: password
            })
        }
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                UserName:&nbsp;
                <input
                    type='text'
                    value={this.state.userNameInput.value}
                    name='userNameInput'
                    onChange={(e) => this.updateStateHandler(e.target.name, e.target.value)}
                    ref={this.userNameInputRef}
                />
                {this.state.userNameInput.error !== '' && (<span>{this.state.userNameInput.error}</span>)}
                <br />
                Password:&nbsp;
                <input
                    type='password'
                    value={this.state.passwordInput.value}
                    name='passwordInput'
                    onChange={(e) => this.updateStateHandler(e.target.name, e.target.value)}
                    ref={this.passwordInputRef}
                />
                {this.state.passwordInput.error !== '' && (<span>{this.state.passwordInput.error}</span>)}
                <br />
                <input type='submit' value='Submit' />
                {/* <button onClick={this.submitHandler}>Submit</button> */}
            </form>
        )
    }
}
