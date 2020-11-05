import React from 'react'

const HoverCounter = ({ countData, handlerFunction, y }) => {
    return (
        <div>
            <span>Hover Count:&nbsp;{countData} and Y: {y}</span>
            <br />
            <div onMouseOver={handlerFunction}>Increase Count by Hovering</div>
        </div>
    )
}
export default HoverCounter;