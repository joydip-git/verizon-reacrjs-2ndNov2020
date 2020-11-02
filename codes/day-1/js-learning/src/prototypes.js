// Object.prototype.print = function () {
//     return 'Hello from joydip'
// }

function person(fn, ln, loc) {
    this.firstName = fn;
    this.lastName = ln;
    this.location = loc;
    this.getInfo = function () {
        return this.firstName + ', ' + this.lastName + ', ' + this.location;
    }
}


var joydip = new person('joydip', 'mondal', 'bangalore')
//1.
console.log(person.prototype)
// person.prototype.print = function () {
//     return 'Hello from joydip'
// }
//2.
console.log(joydip.__proto__)
joydip.print = function () {
    return 'Hello from joydip'
}
console.log(person.prototype.hasOwnProperty('print'))
console.log(joydip.hasOwnProperty('print'))
console.log(joydip.print())
// console.log(person.prototype.print())

// var joydip = {
//     //value properties
//     firstName: 'Joydip',
//     lastName: 'Mondal',
//     location: 'Bangalore',
//     //functional property
//     getInfo: function () {
//         return this.firstName + ', ' + this.lastName + ', ' + this.location;
//     }
// }

// console.log(joydip)

// var joydip = Object.create({});
// console.log(joydip)
