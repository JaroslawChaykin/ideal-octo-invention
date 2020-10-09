let tel = 0;

function f() {
    tel = 0
    button.innerHTML = 0;
}

let button = document.getElementById('block');

button.addEventListener('click', function () {
    tel++;
    button.innerHTML = tel;
    if (tel > 10)
        f();
})

