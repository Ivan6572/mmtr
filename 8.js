function mutation(arr) {

let first = arr[0].toLowerCase().split('');
let second = arr[1].toLowerCase().split('');
let count = 0;
// Проверяет каждый символ, если индекс найден, добавляет один
for (let s in second){
    if (first.indexOf(second[s]) > -1) {
        count+= 0;
    } else
        count++;
    }
if (count === 0)
    return true;
else
    return false;
}
console.log('mutation(["hello", "hey"]): ', mutation(["hello", "hey"]));
console.log('mutation(["Alien", "line"]): ', mutation(["Alien", "line"]));
