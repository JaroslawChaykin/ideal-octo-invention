const person = new Object({
    name: 'John',
    age: 24,
    greet: function () {
        console.log('Greet!')
    },
})

Object.prototype.sayHello = function decrease() {
    console.log(this.greet())
}