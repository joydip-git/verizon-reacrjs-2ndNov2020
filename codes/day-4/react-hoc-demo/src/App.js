import React from 'react'
import './App.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
//import Counter from './Counter';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <ClickCounter x={10} />
      <br />
      <br />
      <HoverCounter y={20} />
    </div>
  );
}

export default App;
