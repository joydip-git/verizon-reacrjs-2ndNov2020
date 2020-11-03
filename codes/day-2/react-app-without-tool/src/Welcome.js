import React from 'react'

export const Welcome = () => {
    const message = 'Welcome to React'
    const spanStyle = {
        backgroundColor: 'lime',
        textAlign: 'center',
        fontFamily: 'Arial',
        fontSize: 'medium'
    }

    const welcomeElement = React.createElement(
        'span',
        { id: 'messageSpan', style: spanStyle },
        message
    );
    return welcomeElement;
}