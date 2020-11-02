//Mix-in (mixin)

var calculationOperations = {
    add: (x, y) => (x + y),
    subtract: (a, b) => (a - b)
}

var commonUIFuntionalities = {
    toggle: () => console.log('toggle')
}

class masterUtility {
    constructor() {

    }
}
Object.assign(masterUtility.prototype, calculationOperations, commonUIFuntionalities);
console.log(masterUtility.prototype)

var masterObj = new masterUtility();
masterObj.toggle();
console.log(masterObj.add(10, 20));
console.log(masterObj.subtract(10, 2));