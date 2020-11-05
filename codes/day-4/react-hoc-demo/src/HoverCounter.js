import React from 'react'
import withCounter from './withCounter';

const HoverCounter = ({ count, handler, y }) => {
    return (
        <div>
            <span>Hover Count:&nbsp;{count} and Y: {y}</span>
            <br />
            <div onMouseOver={handler}>Increase Count by Hovering</div>
        </div>
    )
}
export default withCounter(HoverCounter, 20);
