import React, { Component } from 'react';
import './App.css';

interface Person {
  name: string;
  id: number;
  age: number;
}
const peopleArr: Person[] =
  [
    {
      id: 1,
      age: 20,
      name: 'anil'
    },
    {
      id: 2,
      age: 30,
      name: 'sunil'
    }
  ];
type AppState = {
  count: number,
  people: Person[],
  showOrHide: boolean
}

type AppProps = {
  data: number,
  name?: string
}

class App extends Component<AppProps, AppState> {
  state: AppState = {
    count: 10,
    people: peopleArr,
    showOrHide: true
  }
  render() {
    return (
      <div className="App">
        {
          this.state.people.map(p => {
            return <span></span>
          })
        }
      </div>
    );
  }
}

export default App;

interface IProduct {
  name: string;
  id: number;
  price: number;
}

interface IShape {
  calculateArea(): number;
}
class Circle implements IShape {

  // private _radius: number;
  // constructor(radius: number) {
  //   this._radius = radius;
  // }

  //private static circle: Circle;
  private constructor(private radius: number) {

  }

  // public static Create(): IShape {
  //   IShape
  //   if (this.circle == null) {

  //   }
  // }
  public calculateArea = (): number => {
    return Math.PI * this.radius * this.radius;
  }
}

const add = (a: number, b: number) => (a + b);
const multi = (a: number, b: number, c: number) => (a * b * c);
type fnType = (x: number, y: number) => number;

const invoke = (fn: fnType, ...args: number[]): number => {
  return fn(args[0], args[1])
}
invoke(multi, 10, 20);
