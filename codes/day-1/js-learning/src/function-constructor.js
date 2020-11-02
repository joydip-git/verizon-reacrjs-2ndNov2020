//2. constructor function
function person(fn, ln, loc) {
    this.firstName = fn;
    this.lastName = ln;
    this.location = loc;
    this.getInfo = function(){
        return this.firstName + ', ' + this.lastName + ', ' + this.location;
    }
}

var joydip = new person('joydip', 'mondal', 'bangalore')
console.log(joydip.firstName)
console.log(joydip['lastName'])

joydip.subject = 'React JS';

var info = joydip.getInfo();
console.log(info)

for (var propertyName in joydip) {
    console.log(propertyName + ':' + joydip[propertyName])
}