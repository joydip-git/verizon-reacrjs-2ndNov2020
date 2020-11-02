//class, constructor, extends, super
class employee {
    constructor(name = null, id = 0, basic = 100, da = 100, hra = 100) {
        this.name = name;
        this.id = id;
        this.basicPay = basic;
        this.daPay = da;
        this.hraPay = hra;
        //this.calculateSalary = this.calculateSalary.bind(this);
    }
    static print() {
        console.log('print')
    }
    calculateSalary = () => {
        return this.basicPay + this.daPay + this.hraPay;
    }
}
// employee.prototype.calculateSalary = function () {
//     return this.basicPay + this.daPay + this.hraPay;
// }
console.log(employee.prototype);
var joydip = new employee(name = 'joy', id = 1, basic = 20000);
console.log(joydip.name)
console.log(joydip.hasOwnProperty('calulateSalary'))
console.log(joydip.calculateSalary())

employee.print();

var printSalary = function (salaryFnRef) {
    //window <--this  
    console.log(salaryFnRef())
}
window.printSalary(joydip.calculateSalary)
// joydip.calculateSalary.bind(joydip);
console.log(this)


var add = (x, y) => console.log(x + y);
var subtract = (x, y) => (x - y);
add(10, 20);
console.log(subtract(10, 5));


