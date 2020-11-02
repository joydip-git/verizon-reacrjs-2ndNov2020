function person(fn, ln, loc) {
    this.firstName = fn;
    this.lastName = ln;
    this.location = loc;
}

person.prototype.getInfo = function () {
    return this.firstName + ', ' + this.lastName + ', ' + this.location;
}

function trainer(fn, ln, loc, subjectToTeach) {
    person.call(this, fn, ln, loc);
    this.subjectToTeach = subjectToTeach;
    this.getInfo = function () {
        var partialInfo = this.__proto__.getInfo.apply(this);
        console.log(partialInfo)
        return partialInfo + ", " + this.subjectToTeach;
    }
}


function trainee(fn, ln, loc, subjectToLearn) {
    person.call(this, fn, ln, loc);
    this.subjectToLearn = subjectToLearn;
    this.getInfo = function () {
        var partialInfo = this.__proto__.getInfo.apply(this);
        console.log(partialInfo)
        return partialInfo + ", " + this.subjectToLearn;
    }
}

Object.setPrototypeOf(trainer.prototype, person.prototype)
Object.setPrototypeOf(trainee.prototype, person.prototype)
console.log(trainer.prototype)

var joydip = new trainer('joy', 'mon', 'bng', 'React JS')
var anil = new trainer('anil', 'manoharan', 'chn', 'Angular')
// joydip.__proto__ = person.prototype;
// anil.__proto__ = person.prototype;
console.log(joydip.__proto__)
console.log(joydip.getInfo())
console.log(anil.getInfo())

var sunil = new trainee('sunil', 'mishra', 'mum', 'React')
console.log(sunil.getInfo());