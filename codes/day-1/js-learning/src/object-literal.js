//1. object literal syntax
var joydip = {
    //value properties
    firstName: 'Joydip',
    lastName: 'Mondal',
    location: 'Bangalore',
    //functional property
    getInfo: function () {
        return this.firstName + ', ' + this.lastName + ', ' + this.location;
    }
}

console.log(joydip.firstName)
console.log(joydip['lastName'])

joydip.subject = 'React JS';

var info = joydip.getInfo();
console.log(info)

for (var propertyName in joydip) {
    console.log(propertyName + ':' + joydip[propertyName])
}