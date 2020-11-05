import React from 'react'
import withCounter from './withCounter'

function OriginalClickCounter({ count, handler, x }) {
    return (
        <div>
            <span>Click Count:&nbsp;{count} and X:{x}</span>
            <br />
            <button onClick={handler}>Increase Count by Clicking</button>
        </div>
    )
}
const ClickCounter = withCounter(OriginalClickCounter, 10);
export default ClickCounter;
