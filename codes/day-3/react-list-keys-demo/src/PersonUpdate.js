import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { people } from './data/peopleData'

class PersonUpdate extends Component {

    constructor() {
        super()
        console.log('[PU] created')
    }
    static propTypes = {
        personId: PropTypes.number.isRequired,
        updateHandler: PropTypes.func.isRequired
    }
    //     let foundPerson = null;
    // if (props.personId > 0) {
    //     foundPerson = people.find((p) => p.id === props.personId)
    // }

    componentDidMount() {
        console.log('[PU] mounted...')
    }

    componentWillUnmount() {
        console.log('[PU] unmounted...')
    }
    render() {
        console.log('[PU] rendered')
        // let design = null;
        // if (foundPerson !== null) {
        //     design = (
        //         <div>
        //             Name:&nbsp;
        //             <input type='text' value={foundPerson.name} onChange={(event) => props.updateHandler(foundPerson.id, "name", event.target.value)} />
        //             <br />
        //         Age:&nbsp;
        //             <input type='text' value={foundPerson.age} onChange={(event) => props.updateHandler(foundPerson.id, "age", parseInt(event.target.value))} />
        //         </div>
        //     )
        // } else {
        //     design = <span>Person with id:{props.personId} not found...</span>
        // }
        // return design;

        return <span>Person Id:&nbsp;{this.props.personId}</span>
    }
}
// PersonUpdate.propTypes = {
//     personId: PropTypes.number.isRequired,
//     updateHandler: PropTypes.func.isRequired
// }
export default PersonUpdate;