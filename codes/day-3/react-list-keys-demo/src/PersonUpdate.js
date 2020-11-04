import React from 'react'
import PropTypes from 'prop-types'
import { people } from './data/peopleData'

const PersonUpdate = (props) => {
    let foundPerson = null;
    if (props.personId > 0) {
        foundPerson = people.find((p) => p.id === props.personId)
    }

    let design = null;
    if (foundPerson !== null) {
        design = (
            <div>
                Name:&nbsp;
                <input type='text' value={foundPerson.name} onChange={(event) => props.updateHandler(foundPerson.id, "name", event.target.value)} />
                <br />
                Age:&nbsp;
                <input type='text' value={foundPerson.age} onChange={(event) => props.updateHandler(foundPerson.id, "age", parseInt(event.target.value))} />
            </div>
        )
    } else {
        design = <span>Person with id:{props.personId} not found...</span>
    }
    return design;
}
PersonUpdate.propTypes = {
    personId: PropTypes.number.isRequired,
    updateHandler: PropTypes.func.isRequired
}
export default PersonUpdate;