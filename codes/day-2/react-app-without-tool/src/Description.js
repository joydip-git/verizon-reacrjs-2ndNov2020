import React from 'react'
export const Description = () => {
    const data = 'React is a JavaScript Library'
    const descriptionElement = React.createElement('article', null, data);
    return descriptionElement;
}