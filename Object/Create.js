const person = Object.create({}, {
    name: {
        value: 'Jaroslaw', // Значение
        enumerable: true, // Видно при перечислении
        writable: true, // Разрешеие Для редактирования
        configurable: true, // Разрешеие Удаление
    },
    birthYear: {
        value: 1999,
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            console.log('Set Age', value)
        }
    }
})