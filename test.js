
// const str = 'Слышь соси ты';
//
// const MATDATA = ['блять', 'хуила', 'пидор', 'соси', 'уебок']
//
// for (const mat of MATDATA) {
//     console.log(mat)
// }
//
// let res = MATDATA.map(poh => poh.replace(/[олу]/, 'ц'))
// console.log(res)
//
// function protectMat(a, b) {
//     for (let i = 0;i < a.length; i++) {
//         let detect = b.replace(a[i], '******');
//         if(detect.indexOf('******') > 0) {
//             return detect
//         }
//     }
// }
//
// console.log(protectMat(MATDATA, str));


// function replaceMat(str) {
//     if (str.indexOf('блять')) {
//         let replace = str.split('')
//         for (let i = str.indexOf('блять')-1; i < str.length-3; i++) {
//             replace.splice(i)
//         }
//         return replace.join('') + ' ******'
//     } else {
//         return str
//     }
// }
//
// console.log(mat);
// console.log(replaceMat(mat));

// const person = {
//     name: 'Jaroslaw',
//     age: 12,
//     programmer: true
// }

// const person1 = {
//     name: 'Ivan',
//     age: 62,
//     programmer: false
// }
//
// const logger = {
//     keysAndValues() {
//
//         // for (let key in this) {
//         //     console.log(`${key}: ${this[key]}`)
//         // }
//     },
//     withParams(top = false, between = false, bottom = false) {
//         if(top) {
//             console.log('==========     STARTING      ===========')
//         }
//         Object.keys(this).forEach((key, index, array) => {
//             console.log(`=      ${key}: ${this[key]}`)
//             if(between && index !== array.length-1) {
//                 console.log('========================================')
//             }
//         })
//         if(bottom) {
//             console.log('==========      ENDING       ===========')
//         }
//     }
// }
// logger.withParams.call(person1, true, true, true)

// const interval = setInterval(() => {
//     for (let i = 0; i <= 60; i++) {
//         console.log(i)
//         if (i === 60) {
//             clearInterval(interval)
//         }
//     }
//
// }, 1000)








// // Основной источник строк
// let str = ['. . .', '. . .', 'Предложение создано'];
// // Выводимое сообщение
// let message = '';
// // Номер родителя в массиве, то есть предложение
// let indexParents = 0;
// // Номер ребенка в массиве, то есть слово из предложения
// let indexChild = 0;
// let title = document.querySelector('#title')
// let subTitle = document.querySelector('#subTitle')
// let circle = document.querySelector('#circle')
// function interval() {
//     // Определение детей от родителя
//     let strSplit = str[indexParents].split(' ');
//
//     // Создание сообщения и вывод его на экран
//
//     message = `${message} ${strSplit[indexChild]}`;
//     let writeMessage = document.querySelector('#transform');
//     writeMessage.innerHTML = message;
//
//     // Перех к следующему ребенку
//     indexChild++
//
//     // Проверка посчитал ли он всех детей у родителя
//     if (indexChild === strSplit.length) {
//         // Переход к следующему родителю
//         indexParents++;
//
//         // Обнуление отсчета детей
//         indexChild = 0;
//
//         // Очистка сообщения
//         message = '';
//
//         //Проверка посчитал ли он всех родителей
//         if (indexParents === str.length) {
//             writeMessage.classList.add('to_up');
//             circle.classList.add('more_circle');
//             title.innerHTML = 'Поздавляем, можете вернутся к своим делам'
//             subTitle.innerHTML = 'JAROSLAW EDITION'
//             // Окончание работы
//             clearInterval(interval1)
//         }
//     }
// }
// //
// let interval1 = setInterval(interval, 1000)







// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job} ${this.language || ''}`)
// }
// const arr = [
//     {
//         name: 'Michael',
//         age: 22,
//         job: 'Frontend'
//     },
//     {
//         name: 'Elena',
//         age: 19,
//         job: 'Backend',
//         language: 'Python'
//     }
// ]
// function bind(context, fn) {
//     return function (...args) {
//         fn.apply(context, args)
//     }
// }

// bind(arr[0], logPerson)()
// bind(arr[1], logPerson)()


// const personBoard = [
//     {name: 'Michael',  age: 22, job: 'Frontend', language: '',       requestedWages: 4500},
//     {name: 'Alexandr', age: 19, job: 'Backend',  language: 'Python', requestedWages: 5600},
//     {name: 'Jaroslaw', age: 21, job: 'Backend',  language: 'Node',   requestedWages: 5600},
//     {name: 'Anna',     age: 28, job: 'Frontend', language: 'Vue',    requestedWages: 4500},
//     {name: 'Pavel',    age: 21, job: 'Backend',  language: 'Node',   requestedWages: 5600}
// ]
//
// const personName      = document.getElementById('person-name');
// const personAge       = document.getElementById('person-age');
// const personJob       = document.getElementById('person-job');
// const personLanguage  = document.getElementById('person-language');
// const getPerson       = document.getElementById('get-person');
// const sendGetPerson   = document.getElementById('send-get-person');
// const sendError       = document.getElementById('send-error');
// const beforePerson    = document.getElementById('before-person');
// const afterPerson     = document.getElementById('after-person');
// const allPersonFind   = document.getElementById('all-person-find');
// const currentPerson   = document.getElementById('current-person');
//
// let foundedPerson = [];
// let indexPerson = 0;
// let currentIndex;
// let inc = true;
// let need = true;
//
// function sliderDisabled(paramsB, paramsA) {
//     beforePerson.disabled = paramsB;
//     afterPerson.disabled = paramsA;
// }
//
// function changeParams() {
//     currentIndex = foundedPerson[indexPerson];
//     personName.innerHTML = personBoard[currentIndex].name;
//     personAge.innerHTML = personBoard[currentIndex].age;
//     personJob.innerHTML = personBoard[currentIndex].job;
//     personLanguage.innerHTML = personBoard[currentIndex].language;
//     if (inc) {
//         indexPerson++;
//         console.log(`++ / ${indexPerson} / ${foundedPerson} / ${currentIndex}`)
//     } else {
//         indexPerson--;
//         console.log(`++ / ${indexPerson} / ${foundedPerson} / ${currentIndex}`)
//     }
//     currentPerson.innerHTML = indexPerson;
// }
//
// beforePerson.addEventListener('click', () => {
//     inc = false;
//     changeParams()
// });
//
// afterPerson.addEventListener('click', () => {
//     inc = true;
//     changeParams()
// })
//
// sendGetPerson.addEventListener('click', function () {
//     personName.innerHTML = '';
//     personAge.innerHTML = '';
//     personJob.innerHTML = '';
//     personLanguage.innerHTML = '';
//     sendError.style.display = 'block';
//     foundedPerson = [];
//     indexPerson = 0;
//     allPersonFind.innerHTML = 0
//     for (let i = 0; i < personBoard.length; i++) {
//         if (personBoard[i].requestedWages === +getPerson.value) {
//             foundedPerson.push(i)
//             allPersonFind.innerHTML = foundedPerson.length
//             sendError.style.display = 'none';
//             if (need) {
//                 changeParams()
//                 need = false
//             }
//         }
//     }
// })




// function changeInt(int) {
//
//     let x = String(int).split('')
//
//     if (int >= 1000 && int < 1000000) {
//         return `${x[0]}.${x[1]} тыс`
//     } else if (int >= 1000000 && int < 1000000000) {
//         return `${x[0]}.${x[1]} млн`
//     } else if (int >= 1000000000) {
//         return `${x[0]}.${x[1]} млрд`
//     } else {
//         return int
//     }
//
//
// }
//
// console.log(changeInt(52))

// function double(mas) {
//     for (let i = 0; i < mas.length; i++) {
//
//     }
//
// }
//
// console.log(double([7, 2, 8, 2, 8, 9, 7]))
// let person = {
//     name: "Jaroslaw",
//     age: 21,
//     getHello: function () {
//         return `${this.name} Hello, your age ${this.age}`
//     },
// }
// let person2 = Object.create(person)
//
// person2.name = 'Lena';
// person2.age = 43;
//
//
// console.log(person.getHello())
// console.log(person2.getHello())
// function urlGenerator(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }
//
// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')
//
// console.log(comUrl('google'))

// const a1 = [1, 5, 2, 0, 6];
//
// let b = a1.filter(item => {
//     return item * 3
// })
// let c = a1.map(item => {
//     return item * 3
// })
// console.log(b)
// console.log(c)
// if (~a1.indexOf(5)) {
//     console.log('yes')
// } else {
//     console.log('no')
// }

// let but = document.querySelector('#b1');
// function f1(i) {
//     let a1_res = i.map(item => {
//         return item * 3
//     });
//     console.log(a1)
//     console.log(a1_res)
// }
//
// but.addEventListener(`click`, function () {
//     f1(a1);
// })

const num = document.getElementById('number');
const sendNum = document.getElementById('send-num');
let generatedBox = document.getElementById('generated');

sendNum.addEventListener('click', function () {
    let twoNumber = num.value.split('-');
    for (let i = 0; i < twoNumber[0]; i++) {
        let rowBox = document.createElement('div');
        rowBox.className = 'generated-row';
        rowBox.id = `gen-${i}`;
        generatedBox.append(rowBox)
        for (let j = 0; j < twoNumber[1]; j++) {
            let nowRow = document.getElementById(`gen-${i}`)
            let rowBoxEl = document.createElement('div');
            rowBoxEl.className = 'gen-block';
            nowRow.append(rowBoxEl);
        }
    }
})




