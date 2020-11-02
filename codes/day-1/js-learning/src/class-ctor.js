//4. class, constructor keyword
//ES5 (ECMAScript) --> 2015 ES6
class person {
    constructor(fn, ln, loc) {
        this.firstName = fn;
        this.lastName = ln;
        this.location = loc;
    }

    set FirstName(value) {
        this.firstName = value;
    }

    get FirstName() {
        return this.firstName;
    }

    getInfo() {
        return this.firstName + ', ' + this.lastName + ', ' + this.location;
    }
}

var joydip = new person(null, 'mondal', 'bangalore')
console.log(joydip.hasOwnProperty('getInfo'))
console.log(joydip.__proto__.hasOwnProperty('getInfo'))
joydip.FirstName='joydip';
// console.log(joydip.FirstName)
// console.log(joydip.firstName)
// console.log(joydip['lastName'])

joydip.subject = 'React JS';


for (var propertyName in joydip) {
    console.log(propertyName + ':' + joydip[propertyName])
}

console.log(joydip.__proto__)
console.log(person.prototype)