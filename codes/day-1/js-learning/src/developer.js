//const employeeModule = require('./employee');
//employeeModule = {employeeCls:employee, addFn:add}
import { employee } from './employee.js'
export class developer extends employee {
//class developer extends employeeModule.employeeCls {

    constructor(name, id, basic, da, hra, incentive) {
        super(name, id, basic, da, hra);
        this.incentivePay = incentive;
    }
    calculateSalary() {
        return super.calculateSalary() + this.incentivePay;
    }
}

// module.exports = {
//     // developer: developer
//     developer
// }
