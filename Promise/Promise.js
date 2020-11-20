// -------- Аргументы Promise
// RESOLVE = успешная операция
// REJECTED = неуспешная операция
// -------- Методы Promise
// THEN = создает цепочку, выполняется после выполнения основного кода
// CATCH = выполняется при ошибке, пишется в конце цепочки
// FINALLY = выполняется при любом исходе, пишется в конце
// ALL = принимает массив промисов, выполняется после прохождения всего массива
// RACE = принимает массив промисов, выполняется после первого из массива

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...');
        const backendData = {
            server: 'aws',
            port: 2000,
            status: "Working"
        }
        resolve(backendData)

    }, 2000)
})

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data)
        }, 2000);
    })
}).then(clientData => {
    clientData.fromPromise = true;
    return clientData
}).then(data => {
    console.log('Modified', data)
}).catch(err => console.error('Error: ', err)).finally(() => console.log('Finally'))

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
};
sleep(2000).then(() => console.log('After 2 sec'))
sleep(3000).then(() => console.log('After 3 sec'))

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promises')
})
Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises')
})