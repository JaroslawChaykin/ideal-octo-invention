const donatElements = document.querySelector('#donat');

function clearNumbers(list) {
    let result = [];
    for (let i = 1; i <= list.childNodes.length; i += 3) {
        result.push(list.childNodes[i])
    }
    return result
}

function getNumbers(list) {
    let result = [];

    list.forEach(item => {
        let a = item.data.replace(/\D   /gi, '')
        result.push(a)
    })

    return result
}

function sumNumbers(list) {
    let result = 0;

    list.forEach(item => {
        let number = Number(item)
        if (!isNaN(number)) {
            result += number
        } else {
            console.log(item);
        }
    })

    return result
}

console.log(sumNumbers(getNumbers(clearNumbers(donatElements))));