import React from 'react'
import PropTypes from 'prop-types'

const Welcome = (propertyObject) => {
    console.log('[welcome] rendered...')
    //propertyObject.data = 20;
    //propertyObject.message = '';
    return (
        <span id='welcomeSpan'>
            Message:&nbsp;
            <input type='text' value={propertyObject.message} onChange={(event) => { propertyObject.messageHandler(event.target.value) }} />
            <br />
            Data:&nbsp;
            {
                propertyObject.data !== undefined ? propertyObject.data : 'NA'
            }
        </span>
    )
}
Welcome.propTypes = {
    message: PropTypes.string.isRequired,
    data: PropTypes.number.isRequired,
    messageHandler: PropTypes.func.isRequired
}
export default Welcome;

/**
 * {
 *   type:'span',
 *   key:null,
 *   ref:null,
 *   props:{
 *      children:[RE1,RE2,RE3,RE4,....],
 *      message:'initial message',
 *      data:0,
 *      id:'welcomeSpan',
 *      style:{}
 *   }
 * }
 */