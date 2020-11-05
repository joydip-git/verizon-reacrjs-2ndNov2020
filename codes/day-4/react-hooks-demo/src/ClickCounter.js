import React from 'react'
import useCounter from './useCounter'

function ClickCounter() {    
    const [count, countHandler] = useCounter(10);
    return (
        <div>
            <span>Count Value:&nbsp;{count}</span>
            <br />
            <button onClick={countHandler}>Increase</button>
        </div>
    )
}

export default ClickCounter
