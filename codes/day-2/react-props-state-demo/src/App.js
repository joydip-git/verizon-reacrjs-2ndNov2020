import './App.css';
import React from 'react'
import Welcome from './Welcome';

const App = () => {
  let messageValue = 'welcome to react js'
  const changeMessageHandler = () => {
    messageValue = 'Welcome to the world of React JS'
  }
  return (
    <div className="App">
      <button onClick={changeMessageHandler}>Change Message</button>
      <br />
      <br />
      <Welcome message={messageValue} data={10} />
    </div>
  );
}

export default App;
