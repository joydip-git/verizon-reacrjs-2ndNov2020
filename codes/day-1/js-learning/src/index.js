// const { addFn } = require('./employee') //addFnRef=addFn-->add
// const developerModule = require('./developer')//developerModule={developer:developer}
// const hr = require('./hr')//hr=hr

import { add } from './employee.js'
import { developer } from './developer.js'
import hr from './hr.js'

var mahesh = new developer('mahesh', 1, 1000, 2000, 3000, 4000);
var suresh = new hr('suresh', 2, 1500, 2500, 3500, 4500);

console.log('salary of ' + mahesh.name + ' is ' + mahesh.calculateSalary())
console.log('salary of ' + suresh.name + ' is ' + suresh.calculateSalary())

console.log(add(10, 20))