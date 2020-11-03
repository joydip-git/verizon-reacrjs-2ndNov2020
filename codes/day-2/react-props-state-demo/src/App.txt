import './App.css';
import React from 'react'
import Welcome from './Welcome';

const App = () => {
  const messageValue = 'welcome to react js'
  // const ele = Welcome({ message: '', data: 10 })
  return (
    <div className="App">
      <Welcome message={messageValue} data={10} />
    </div>
  );
}

export default App;
/**
 * {
 *   message:'welcome to react js',
 *   data:10
 * }
 */
