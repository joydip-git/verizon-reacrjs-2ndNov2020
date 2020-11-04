import React, { Component } from 'react'
import { getPeople, updatePeople } from './data/peopleData';
import Person from './Person';
import PersonUpdate from './PersonUpdate';

// const transform = (number) => {
//   return "Value: " + (number * 5);
// }
// [1, 2, 3, 4].map(transform)
class App extends Component {
  constructor() {
    super();
    console.log('[App] created')
  }

  state = {
    people: [],
    selectedPersonId: 0,
    showOrHide: true
  }

  selectPersonHandler = (personId) => {
    //console.log(personId)
    this.setState({
      selectedPersonId: personId
    })
  }

  updatePersonHandler = (personId, propertyName, propertyValue) => {
    let found = this.state.people.find(p => p.id === personId);
    let foundIndex = this.state.people.findIndex(p => p.id === personId);

    let copyOfFound = { ...found };
    copyOfFound[propertyName] = propertyValue;
    let copyOfPeople = [...this.state.people]
    copyOfPeople[foundIndex] = copyOfFound

    updatePeople(copyOfPeople)
    //console.log(people)
    this.setState({
      people: copyOfPeople
    })
  }

  updateShowOrHideHandler = () => {
    this.setState((currentState) => {
      return {
        showOrHide: !currentState.showOrHide
      }
    })
  }

  componentDidMount() {
    let people = getPeople()
    if (people !== null && people.length > 0) {
      this.setState({
        people: people
      })
    }
    console.log('[App] mounted')
  }

  componentWillUnmount() {
    console.log('[App] unmounted')
  }
  render() {
    console.log('[App] rendered')
    return (
      <div>
        List of People:
        <br />
        <br />
        <div style={{ backgroundColor: "azure", borderRadius: "3px" }}>
          {
            (this.state.people !== null && this.state.people.length > 0) ?
              this.state.people.map((p) => {
                return <Person personData={p} selectHandler={this.selectPersonHandler} key={p.id} />
              }) :
              (<span>No Records found</span>)
          }
        </div>
        <br />
        <button onClick={this.updateShowOrHideHandler}>{this.state.showOrHide ? 'Hide' : 'Show'}</button>
        <br />
        {
          this.state.showOrHide && (<PersonUpdate personId={this.state.selectedPersonId} updateHandler={this.updatePersonHandler} />)
        }
      </div>
    )
  }
}
export default App;