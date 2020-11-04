import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getPeople } from './data/peopleData'

/**
 * this.props = {personId:0, updateHandler:fn}
 */

class PersonUpdate extends Component {

    constructor() {
        super()
        console.log('[PU] created')
    }
    state = {
        person: null
    }
    static propTypes = {
        personId: PropTypes.number.isRequired,
        updateHandler: PropTypes.func.isRequired
    }

    componentDidMount() {
        console.log('[PU] mounted...')
        let foundPerson = null;
        if (this.props.personId > 0) {
            foundPerson = getPeople().find((p) => p.id === this.props.personId)
        }
        if (foundPerson !== null) {
            this.setState({
                person: foundPerson
            })
        }
    }

    componentWillUnmount() {
        console.log('[PU] unmounted...')
    }
    render() {
        console.log('[PU] rendered')
        let design = null;
        let { person } = this.state;
        if (person !== null) {
            design = (
                <div>
                    Name:&nbsp;
                    <input type='text' value={person.name} onChange={(event) => this.props.updateHandler(person.id, "name", event.target.value)} />
                    <br />
                Age:&nbsp;
                    <input type='text' value={person.age} onChange={(event) => this.props.updateHandler(person.id, "age", parseInt(event.target.value))} />
                </div>
            )
        } else {
            design = <span>Person with id:{this.props.personId} not found...</span>
        }
        return design;

        //return <span>Person Id:&nbsp;{this.props.personId}</span>
    }
}
// PersonUpdate.propTypes = {
//     personId: PropTypes.number.isRequired,
//     updateHandler: PropTypes.func.isRequired
// }
export default PersonUpdate;