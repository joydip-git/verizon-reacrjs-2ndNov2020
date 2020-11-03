import React from 'react'
import PropTypes from 'prop-types'

/**propertyObject={
 *   message:'welcome to react js',
 *   data:10
 * }
 */

const Welcome = (propertyObject) => {
    // let design = null;
    // if (propertyObject.data !== undefined) {
    //     design = propertyObject.data
    // } else {
    //     design = 'NA'
    // }
    return (
        <span>
            Message:&nbsp;{propertyObject.message}
            <br />
            Data:&nbsp;
            {/* {design} */}
            {/* {
                propertyObject.data !== undefined && propertyObject.data
            } */}
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