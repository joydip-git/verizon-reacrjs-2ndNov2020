import React, { Component } from 'react'
import Welcome from './Welcome'

//Object.setPrototypeOf(App.prototype,Component.prototype)
/**
 * function Component(properties){
 *   this.state={};
 *   
 * }
 * Component.prototype.render=function(){}
 *   Component.prototype.setState=function(newState){//code}
 */
class App extends Component {
  constructor() {
    //Component.call(this)
    super()
    this.state = {
      messageValue: 'initial message',
      value: 0,
      names: ['anil', 'suresh'],
      person: {
        name: 'joydip',
        age: 20
      }
    }
  }

  changeMessageHandler = (newMessage) => {
    //let newMessage = eventInfo.target.value;
    this.setState({
      messageValue: newMessage
    }, () => {
      console.log(this.state.messageValue)
    })
  }

  changeValueHandler = () => {
    this.setState((currentState) => {
      let newState = {
        value: currentState.value + 1
      }
      return newState;
    }, () => {
      console.log(this.state.value)
    })
  }

  render() {
    //const welcomeElement = Welcome({ message: 'message', data: 10 });
    console.log('[App] rendered....')
    console.log(this.props)
    return (
      <div id='appDiv'>
        {/* <button onClick={this.changeMessageHandler}>Change Message</button> */}
        <br />
        <button onClick={this.changeValueHandler}>Change Value</button>
        <br />
        {/* {welcomeElement} */}
        <Welcome message={this.state.messageValue} data={this.state.value} messageHandler={this.changeMessageHandler} />
      </div>
    )
  }
}
export default App;

/**
 * {
 *   state:{}
 *   props:{name:'joydip'},
 *   refs:{}
 * }
 */

/**
 * {
 *   type:'div',
 *   key:null,
 *   ref:null,
 *   props:{
 *      children:[RE1,RE2,RE3,RE4,....],
 *      name:'joydip',
 *      id:'appDiv'
 *   }
 * }
 */