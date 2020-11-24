

class Animal {
    static type = 'ANIMAL'

    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.animalVoice = options.animalVoice
        this.hasTail = options.hasTail
    }

    voice() {
        console.log(this.animalVoice)
    }
}

class Cat extends Animal {
    static type = 'CAT'

    constructor(options) {
        super(options);
        this.color = options.color
    }
}

const boris = new Cat({
    name: 'Boris',
    age: 16,
    hasTail: true,
    animalVoice: 'Meow',
    color: 'Ginger'
})
const dog = new Animal({
    name: 'Dog',
    age: 16,
    hasTail: false,
    animalVoice: 'Gav'
})
