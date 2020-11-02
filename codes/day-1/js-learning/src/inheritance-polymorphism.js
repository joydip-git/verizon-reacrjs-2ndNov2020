function employee(name, id, basic, da, hra) {
    this.name = name;
    this.id = id;
    this.basicPay = basic;
    this.daPay = da;
    this.hraPay = hra;
}

employee.prototype.calculateSalary = function () {
    return this.basicPay + this.daPay + this.hraPay;
}

function developer(name, id, basic, da, hra, incentive) {
    employee.call(this, name, id, basic, da, hra);
    this.incentivePay = incentive;
    this.calculateSalary = function () {
        return this.__proto__.calculateSalary.apply(this) + this.incentivePay;
    }
}
Object.setPrototypeOf(developer.prototype, employee.prototype);

function hr(name, id, basic, da, hra, gratuity) {
    employee.call(this, name, id, basic, da, hra);
    this.gratuityPay = gratuity;
    this.calculateSalary = function () {
        return this.__proto__.calculateSalary.apply(this) + this.gratuityPay;
    }
}

Object.setPrototypeOf(hr.prototype, employee.prototype);

var mahesh = new developer('mahesh', 1, 1000, 2000, 3000, 4000);
var suresh = new hr('suresh', 2, 1500, 2500, 3500, 4500);

console.log('salary of ' + mahesh.name + ' is ' + mahesh.calculateSalary())
console.log('salary of ' + suresh.name + ' is ' + suresh.calculateSalary())


