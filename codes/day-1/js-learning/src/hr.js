//const {employeeCls} = require('./employee');
import { employee } from './employee.js'
export default class hr extends employee {
    constructor(name, id, basic, da, hra, gratuity) {
        super(name, id, basic, da, hra);
        this.gratuityPay = gratuity;
    }
    calculateSalary() {
        return super.calculateSalary() + this.gratuityPay;
    }
}

//module.exports = hr;
