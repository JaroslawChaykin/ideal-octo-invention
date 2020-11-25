const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// function fetchTodos() {
//     console.log('Fetching...')
//     return delay(0)
//         .then(() => fetch(url))
//         .then(response => response.json())
// }
//
// fetchTodos()
//     .then(data => console.log(data))
//     .catch(e => console.error(e))

// Верхнее равно нижнему

async function fetchAsyncTodos() {
    console.log('Todos');
    try {
        await delay(2000);
        const response = await fetch(url);
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.error(e)
    } finally {
        console.log('Final')
    }
}

fetchAsyncTodos()