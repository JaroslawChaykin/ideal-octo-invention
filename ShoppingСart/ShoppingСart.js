function loading() {
    let num = 0;
    const load = document.querySelector('.label');
    const loaded = document.querySelector('.loaded');

    let interval1 = setInterval(() => {
        num++
        load.innerHTML = `Loading ${num}%`;
        loaded.style.width = num + '%';
        if (num === 101) {
            load.innerHTML = `Загрузка завершена!`;
            clearInterval(interval1)
        }
    }, 100)
}

loading()