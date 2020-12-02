const person = {
    name: 'Oleg',
    age: 21,
    job: 'fullstack'
}
const op = new Proxy(person, {
    get(target, prop) {
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            target.prop = value
        } else {
            throw new Error(`No ${prop}`)
        }
    },
    has(target, prop) {
        return ['age', 'name', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('Deleting...', prop)
        delete target[prop]
    }
})

// Functions

const log = text => `log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('Calling...')

        return target.apply(thisArg, args).toUpperCase()
    }
})

// Class

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const pp = new Proxy(Person, {
    construct(target, args) {
        console.log('Construct')

        return new Proxy(new target(...args), {
            get(t, prop) {
                console.log(`Getting prop "${prop}"`)

                return t[prop]
            }
        })
    }
})

const p = new pp('Jaroslaw', 21)

console.log(p.name)