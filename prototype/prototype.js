const person = new Object({
    name: 'John',
    age: 24,
    greet: function () {
        console.log('Greet!')
    },
})

Object.prototype.constructor.sayHello = function decrease() {
    console.log('Hello')
}