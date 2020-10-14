let blocks = document.querySelector('.container');


function startGame(id) {
    let randomBlock = Math.ceil(Math.random() * 9)
    console.log(`${randomBlock} ${id}`)
}

blocks.onclick = function(e) {
    let elem = e ? e.target : window.event.srcElement;

    while(!(elem.id || (elem === blocks))) {
        elem = elem.parentNode;
    }
    if (!elem.id) {
        return;
    } else {
        id = elem.id;
    }
    startGame(id)
}