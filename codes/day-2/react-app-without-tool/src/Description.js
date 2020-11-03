import React from 'react'
export const Description = () => {
    const data = 'React is a JavaScript Library'
    // const descriptionElement = React.createElement('article', null, data);
    const descriptionElement = (
        <article>
            {data}
        </article>
    )
    return descriptionElement;
}