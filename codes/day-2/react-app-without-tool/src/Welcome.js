import React from 'react'

export const Welcome = () => {
    let message = 'Welcome to React'
    const spanStyle = {
        backgroundColor: 'lime',
        textAlign: 'center',
        fontFamily: 'Arial',
        fontSize: 'medium'
    }
    const changeMessage = () => {
        message = 'Welcome to React JS World'
    }
    const welcomeElement = (
        <div>
            <span id='spanMessage' style={spanStyle}>
                {message}
            </span>
            <br />
            <button onClick={changeMessage}>Change</button>
        </div>
    );
    return welcomeElement;
}