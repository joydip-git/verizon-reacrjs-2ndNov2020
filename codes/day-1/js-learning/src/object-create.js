//3. create method
var joydip = Object.create({});
joydip.firstName = 'Joydip'
joydip.lastName = 'Mondal'
joydip.location = 'Bangalore'
joydip.getInfo = function () {
    return this.firstName + ', ' + this.lastName + ', ' + this.location;
}

console.log(joydip.firstName)
console.log(joydip['lastName'])
var info = joydip.getInfo();
console.log(info)

for (var propertyName in joydip) {
    console.log(propertyName + ':' + joydip[propertyName])
}