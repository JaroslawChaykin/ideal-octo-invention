function b(str) {

    return function (name) {
        return str + " " + name
    }
}
const c = b('hello');


function logPerson() {
    console.log(`Person: ${this.name} Age: ${this.age} `)
}

const person1 = {name: 'Andre', age: 26}
const person2 = {name: 'Andre', age: 26}

function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
}
bind(person1, logPerson)()