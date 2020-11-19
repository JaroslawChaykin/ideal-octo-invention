const person = {
    name: 'Pavel',
    age: 21,
    logInfo: function (years) {
        console.group('Person info:')
        console.log(`Name: ${this.name} Age: ${this.age} Job: ${this.job || 'unemployed'} ${years || '0'} years`)
        console.groupEnd()
    }
}
const person2 = {
    name: 'Odin',
    age: 92020,
    job: 'God'
}
const person3 = {
    name: 'Zeus',
    age: 109020,
    job: 'Frontend Dev.'
}
const person4 = {
    name: 'Achilles',
    age: 15008,
    job: 'Frontend Dev.'
}

person.logInfo.bind(person2)()
person.logInfo.call(person3, 21)
person.logInfo.apply(person4, [22])