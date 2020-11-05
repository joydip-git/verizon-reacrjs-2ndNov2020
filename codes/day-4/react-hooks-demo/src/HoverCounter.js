import React from 'react'
import useCounter from './useCounter'

function HoverCounter() {
    const [count, countHandler] = useCounter(20);
    return (
        <div>
            <span>Count Value:&nbsp;{count}</span>
            <br />
            <div onMouseOver={countHandler}>Hover to increase</div>
        </div>
    )
}

export default HoverCounter
