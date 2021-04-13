const num = document.getElementById('input');
const MAT = ['pidor', 'blat', 'hui', 'pizda']
let reg = new RegExp(MAT.join('|'), 'gi')

num.addEventListener('input', () => {
    num.value = num.value.replace(reg, '*MAT*')
})