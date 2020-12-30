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

shopCart.addEventListener('click', function () {
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

const product = document.querySelectorAll('.card');
const addToCart = document.querySelectorAll('.button-card');
const productBox = document.querySelector('.product-box');

function creatingLotInCart(name, description, price) {
    let productItem = document.createElement('div');
    let productItemName = document.createElement('div');
    let productItemDescription = document.createElement('div');
    let productItemPrice = document.createElement('div');


    productItemName.classList.add('product-name');
    productItemName.innerHTML = name;

    productItemDescription.classList.add('product-description')
    productItemDescription.innerText = description;

    productItemPrice.classList.add('product-price');
    productItemPrice.innerText = price;

    productItem.appendChild(productItemName)
    productItem.appendChild(productItemDescription)
    productItem.appendChild(productItemPrice)

    productBox.appendChild(productItem)

}


for (let i = 0; i < addToCart.length ; i++) {
    addToCart[i].addEventListener('click', function() {
        let nameProduct = product[i].querySelector('.card-text__label').innerText;
        let descriptionProduct = product[i].querySelector('.card-text__description').innerText;
        let priceProduct = product[i].querySelector('.card-text__price').innerText;
        product[i].remove()
        creatingLotInCart(nameProduct, descriptionProduct, priceProduct);
    })
}

