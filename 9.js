function chunkArrayInGroups(arr,size) {
    let result = [];

    if (size <= 0) {
        return ;
    } else {
        for (let i = 0; i < Math.ceil(arr.length/size); i++) {
            result[i] = arr.slice(i*size,i*size+size);//Поскольку мы используем splice, мы изменяем длину исходного массива
        }
        return result;
    }


}

let arr123 =[9,9,9,9,9,9,9,9];
let num = 2;

console.log(chunkArrayInGroups(arr123,num));
