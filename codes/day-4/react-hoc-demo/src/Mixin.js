const utility = {
    sayHi: () => console.log('Hi..'),
    sayBye: () => console.log('Bye..')
}

class A {

}
Object.assign(A.prototype, utility);
console.log(A.prototype)