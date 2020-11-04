import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './Person.css'

const Person = (props) => {
    const spanStyle = {
        backgroundColor: 'lime',
        margin: '5px'
    }
    console.log('[Person] rendered')
    return (
        <span style={spanStyle} onClick={() => props.selectHandler(props.personData.id)}>
            Name:&nbsp;
            <i className='nameStyle'> {props.personData.name}</i>
        </span>
    );
}
Person.propTypes = {
    personData: PropTypes.object.isRequired,
    selectHandler: PropTypes.func.isRequired
}
//HOC 

export default memo(Person);