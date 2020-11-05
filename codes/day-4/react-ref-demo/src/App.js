//import { Component } from 'react';
//import { createRef } from 'react';
import './App.css';
import Input from './Input';
import InputFn from './InputFn';

function App() {

  //const inputRefObject = createRef();
  let inputRefObject = null;

  //callback Ref
  const inputRefObjectCallback = (element) => {
    console.log(element)
    inputRefObject = element;
  }

  //const inputRef = createRef();
  let inputRef = null;
  const inputRefCallback = (compObject) => {
    console.log(compObject)
    inputRef = compObject;
  }

  let inputFnRef = null;
  const inputFnRefCallback = (obj) => {
    console.log(obj)
    inputFnRef = obj;
  }

  const validateInputHandler = (e) => {
    console.log(inputRefObject)
    //inputRefObject.current.focus();
    if (inputRefObject !== null)
      inputRefObject.focus();

    //console.log(inputRef.current)
    //inputRef.current.focusInput();
    if (inputRef !== null)
      inputRef.focusInput();

    console.log(inputFnRef)

    if (inputFnRef !== null)
      inputFnRef.focus();

  }

  return (
    <div className="App">
      {/* Data:&nbsp;<input type='text' ref={inputRefObject} /> */}
      Data:&nbsp;<input type='text' ref={inputRefObjectCallback} />
      <br />
      <br />
      {/* <Input ref={inputRef} /> */}
      <Input ref={inputRefCallback} />
      <br />
      <br />
      <InputFn ref={inputFnRefCallback} x={10} />
      <br />
      <br />
      <button onClick={validateInputHandler}>Validate</button>
    </div>
  );

}
/**
 * {
 * x:10
 *
 * }
 */
export default App;
