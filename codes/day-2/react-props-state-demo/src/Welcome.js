import React from 'react'
import PropTypes from 'prop-types'

const Welcome = (propertyObject) => {
    return (
        <span>
            Message:&nbsp;{propertyObject.message}
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
    data: PropTypes.number.isRequired
}
export default Welcome;