const donatElements = document.querySelector('#donat');

function clearNumbers(list) {
    let sum = 0;
    for (let i = 1; i <= list.childNodes.length; i += 3) {
        sum += Number(list.childNodes[i].data.replace(/\D/gi, ''));
    }
    return sum
}
console.log(clearNumbers(donatElements));