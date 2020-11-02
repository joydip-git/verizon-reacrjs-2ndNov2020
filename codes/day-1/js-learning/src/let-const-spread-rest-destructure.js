let x = 10;
console.log(this)
for (let i = 0; i < 2; i++) {
    console.log(this)
    let x = 20;
    console.log(x)
}
console.log(x)

const a = 10
//a = 20;
console.log(a)

//const numbers = new Array(1, 2, 3, 4);
const numbers = [1, 2, 3, 4]
numbers[0] = 10;
console.log(numbers)
//numbers = new Array();

const joydip = {
    name: 'joydip',
    id: 1,
    salary: 1000
}
joydip.info = () => console.log(this.name)
joydip.info();

//old style of copying
const copyOfJoydip = Object.create(joydip);
console.log(copyOfJoydip)

//ES6 style of copying--spread operator
//const copyAgain = { name:joydip.name, id:joydip.id, salary:joydip.salary }
const copyAgain = { ...joydip }


//object destructuring
// const nameValue = joydip.name;
// const idValue = joydip.id;
// const salaryValue = joydip.salary;

const { name, id, salary } = joydip;
console.log(name, id, salary)

const add = (a, b, c) => (a + b + c);
const multiply = (a, b) => (a * b);

//rest parameters
const invoke = (fnRef, ...args) => {
    console.log(fnRef(args[0], args[1], args[2]))
}

invoke(add, 10, 20, 30);
invoke(multiply, 10, 20)


const numbers1 = [1, 2, 3, 4];
const numbers2 = [10, 20, 30, 40];
const finalNumbers = [...numbers1, 100, 200, 300, ...numbers2]
//const finalNumbers = new Array(...numbers1, 100,200,300 ...numbers2)
console.log(finalNumbers)
