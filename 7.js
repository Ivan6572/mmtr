function bouncer(arr) {
    return arr.filter(Boolean);
}
const mixedArr = [0, 'blue', '', NaN, 9, true, undefined, 'white', false];
const trueArr = mixedArr.filter(Boolean);

console.log(trueArr); // вернет ["blue", 9, true, "white"]
