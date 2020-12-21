// function loading() {
//     let num = 0;
//     const load = document.querySelector('.label');
//     const loaded = document.querySelector('.loaded');
//
//     let interval1 = setInterval(() => {
//         num++
//         load.innerHTML = `Loading ${num}%`;
//         loaded.style.width = num + '%';
//         if (num === 101) {
//             loaded.style.width = 0 + '%';
//             load.innerHTML = `Загрузка завершена!`;
//             clearInterval(interval1)
//         }
//     }, 30)
// }
//
// loading()


const shopCart = document.querySelector('.header-row__cart');
const contentOne = document.querySelector('.content');
const contentTwo = document.querySelector('.content-2');
let num = 0;

shopCart.addEventListener('click', () => {
    if (num === 0) {
        contentTwo.style.display = 'block';
        contentOne.style.display = 'none';
        shopCart.innerText = 'Вернутся к товарам';
        num = 1;
    } else if (num === 1) {
        contentTwo.style.display = 'none';
        contentOne.style.display = 'block';
        num = 0;
        shopCart.innerText = 'КОРЗИНА';
    }
})