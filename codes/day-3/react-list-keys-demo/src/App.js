import React, { Component } from 'react'
import { people, updatePeople } from './data/peopleData';
import Person from './Person';
import PersonUpdate from './PersonUpdate';

// const transform = (number) => {
//   return "Value: " + (number * 5);
// }
// [1, 2, 3, 4].map(transform)
class App extends Component {
  state = {
    people: people,
    selectedPersonId: 0
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
    console.log(people)
    this.setState({
      people: copyOfPeople
    })
  }

  render() {
    return (
      <div>
        List of People:
        <br />
        <br />
        <div style={{ backgroundColor: "azure", borderRadius: "3px" }}>
          {
            this.state.people.map((p) => {
              return <Person personData={p} selectHandler={this.selectPersonHandler} key={p.id} />
            })
          }
        </div>
        <br />
        <br />
        <PersonUpdate personId={this.state.selectedPersonId} updateHandler={this.updatePersonHandler} />
      </div>
    )
  }
}
export default App;