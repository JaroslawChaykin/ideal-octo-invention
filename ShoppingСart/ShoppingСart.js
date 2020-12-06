let num = 0;
const load = document.querySelector('.loading')

function loading() {
    load.innerHTML = `Loading ${num++}%`;
    if (num === 101) {
        load.innerHTML = `Загрузка завершена!`;
        clearInterval(interval1)
    }
}

let interval1 = setInterval(loading, 100)
