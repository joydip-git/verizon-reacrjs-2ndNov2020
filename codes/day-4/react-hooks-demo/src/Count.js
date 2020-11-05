import React from 'react'

const Count = ({ count, handler }) => {
    console.log('[Count] rendered...')
    return (
        <div>
        <span>Count:&nbsp;{count}</span>
        <br/>
        <button onClick={handler}>Increase Count</button>
        </div>
    )
}

export default Count
