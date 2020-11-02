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
const add = (a, b) => a + b

export { employee, add }

//module.exports={}
// module.exports = {
//     employeeCls: employee,
//     addFn: add
// }
// module.exports['default'] = employee;
// module.exports.addFn = add;