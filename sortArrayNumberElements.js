let classNames = ['Hello', 'Hello', "Delay", 'Vlom', 'Vlom', "false", "true", "false", "Delay", "Delay",];
let obj = {};
classNames.forEach((item, i) => {
    let current = classNames[i]
    obj[current] ? obj[current]++ : obj[current] = 1;

    let result = Object.keys(obj).sort((a, b) => obj[b] - obj[a])
    console.log(result)
})