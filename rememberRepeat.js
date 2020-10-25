let blocks = document.querySelector('.container');


function startGame(id) {
    let j = 0;
    let blockGenerated = [];
    for (let i = 0; i <= j; i++) {
        let randomBlock = Math.ceil(Math.random() * 9);
        let styleToBlock = document.getElementById(`${randomBlock}`);
        console.log(`${randomBlock} ${id}`);
        styleToBlock.style.background = 'black';
    }
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
    if (id === 'v') {
        startGame(id)
    }
}
