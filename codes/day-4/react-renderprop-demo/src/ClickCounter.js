import React from 'react'

function ClickCounter({ countValue, handlerFn, x }) {
    return (
        <div>
            <span>Click Count:&nbsp;{countValue} and X:{x}</span>
            <br />
            <button onClick={handlerFn}>Increase Count by Clicking</button>
        </div>
    )
}
export default ClickCounter;
