import React from 'react'
import './App.css';
import ClickCounter from './ClickCounter';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

function App() {
  // const show = function () {
  //   return 'joydip mondal';
  // }
  return (
    <div className="App">
      <Counter render={
        (stateCount, countHandler) => {
          return <ClickCounter countValue={stateCount} handlerFn={countHandler} x={10} />
        }
      } />
      <br />
      <br />
      <Counter render={(stateCount, countHandler) => {
        return <HoverCounter countData={stateCount} handlerFunction={countHandler} y={20} />
      }} />
    </div>
  );
}

export default App;
