
let str = ['Каждый текст', 'текст будет', 'будет исчезать', 'исчезать Каждый',];
let message = '';
let indexParents = 0;
let indexChild = 0;
function interval() {
    let strSplit = str[indexParents].split(' ');
    message = `${message} ${strSplit[indexChild]}`;
    let writeMessage = document.querySelector('#transform');
    writeMessage.innerHTML = message;
    indexChild++
    if (indexChild === strSplit.length) {
        indexParents++;
        indexChild = 0;
        message = '';
        if (indexParents === str.length) {
            clearInterval(interval1)
        }
    }
}

let interval1 = setInterval(interval, 1000)