import React from 'react'

const Name = ({ name, handler }) => {
    console.log('[Name] rendered...')
    return (
        <div>
            Name:&nbsp;
            <input type='text' value={name} onChange={(e) => handler(e.target.value)} />
        </div>
    )
}

export default Name
