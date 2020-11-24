

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


class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }
    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector);
        this.$el.style.width = this.$el.style.height = options.size + 'px';
        this.$el.style.background = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'black'
})