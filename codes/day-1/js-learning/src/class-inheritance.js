//class, constructor, extends, super
class employee {
    constructor(name, id, basic, da, hra) {
        this.name = name;
        this.id = id;
        this.basicPay = basic;
        this.daPay = da;
        this.hraPay = hra;
    }
    calculateSalary() {
        return this.basicPay + this.daPay + this.hraPay;
    }
}

class developer extends employee {
    constructor(name, id, basic, da, hra, incentive) {
        super(name, id, basic, da, hra);
        this.incentivePay = incentive;
    }
    calculateSalary() {
        return super.calculateSalary() + this.incentivePay;
    }
}

class hr extends employee {
    constructor(name, id, basic, da, hra, gratuity) {
        super(name, id, basic, da, hra);
        this.gratuityPay = gratuity;
    }
    calculateSalary() {
        return super.calculateSalary() + this.gratuityPay;
    }
}

var mahesh = new developer('mahesh', 1, 1000, 2000, 3000, 4000);
var suresh = new hr('suresh', 2, 1500, 2500, 3500, 4500);

console.log('salary of ' + mahesh.name + ' is ' + mahesh.calculateSalary())
console.log('salary of ' + suresh.name + ' is ' + suresh.calculateSalary())