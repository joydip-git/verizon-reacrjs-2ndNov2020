import React, { Component, memo, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getPeople } from './data/peopleData'

/**
 * this.props = {personId:0, updateHandler:fn}
 */
/*
class PersonUpdate extends PureComponent {

    constructor() {
        super()
        console.log('[PU] created')
        console.log(this.props)
    }
    state = {
        person: null,
        x_pos: 50,
        y_pos: 50
    }
    static propTypes = {
        personId: PropTypes.number.isRequired,
        updateHandler: PropTypes.func.isRequired
    }
    getData = () => {
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
    static getDerivedStateFromProps(newProps, newState) {
        console.log('[PU] getDerivedStateFromProps')
        // console.log(this.props)
        console.log(newProps)
        return null;
    }
  
    // shouldComponentUpdate(newProps, newState) {
    //     console.log('[PU] should component update')
    //     console.log(newProps)
    //     console.log(this.props)
    //     if (this.state.person !== null && (this.state.person.id === this.props.personId && this.props.personId === newProps.personId)) {
    //         return false;
    //     }
    //     else
    //         return true;
    // }
   
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
    getSnapshotBeforeUpdate(oldProps, currentState) {
        console.log('[PU] getSnapshotBeforeUpdate')
        return 'hello...'
    }

    componentDidUpdate(oldProps, oldState, snapshot) {
        console.log('[PU] updated')
        console.log(snapshot)
        console.log(oldProps)
        console.log(this.props)
        if (oldProps.personId !== this.props.personId)
            this.getData();
    }
    componentDidMount() {
        console.log('[PU] mounted...')
        this.getData();
    }
    componentWillUnmount() {
        console.log('[PU] unmounted...')
    }
}
// PersonUpdate.propTypes = {
//     personId: PropTypes.number.isRequired,
//     updateHandler: PropTypes.func.isRequired
// }
*/
const PersonUpdate = (props) => {
    console.log('[PU] rendered')
    let { personId, updateHandler } = props;

    let person = null;
    if (personId > 0) {
        person = getPeople().find((p) => p.id === personId)
    }
    let design = null;
    if (person !== null) {
        design = (
            <div>
                Name:&nbsp;
                <input type='text' value={person.name} onChange={(event) => updateHandler(person.id, "name", event.target.value)} />
                <br />
            Age:&nbsp;
                <input type='text' value={person.age} onChange={(event) => updateHandler(person.id, "age", parseInt(event.target.value))} />
            </div>
        )
    } else {
        design = <span>Person with id:{personId} not found...</span>
    }
    return design;
}
PersonUpdate.propTypes = {
    personId: PropTypes.number.isRequired,
    updateHandler: PropTypes.func.isRequired
}
export default memo(PersonUpdate);