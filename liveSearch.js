window.onload = () => {
    let input = document.querySelector('#input');
    let wrong = document.querySelector('.wrong');
    input.oninput = function () {
        let split = input.value.split('');

        split.forEach((elem) => {
            if (!isNaN(elem)) {
                console.log( elem + '++++');
                wrong.classList.add('hide')
            } else {
                console.log(elem + ' --')
                wrong.classList.remove('hide')
            }
        })


    }







    // input.oninput = function () {
    //     let value = this.value.trim();
    //     let list = document.querySelectorAll('.ul li');
    //
    //     if (value) {
    //         list.forEach(elem => {
    //             if (elem.innerText.search(value) === -1) {
    //                 elem.classList.add('hide')
    //             }
    //         })
    //     } else {
    //         list.forEach(elem => {
    //             elem.classList.remove('hide')
    //         })
    //     }
    // }
}