function largestOf(arr) {
  let max;
  let largestArray = [];

  for (let i = 0; i < arr.length; i++) { // длина arr - это количество подмассивов
    max = -Infinity; // max должен быть повторно инициализирован до наименьшего числа в каждом цикле
    for (let j = 0; j < arr[i].length; j++) { // длина - это количество элементов в подмассиве
      if (arr[i][j] > max) { // просто обновляет max до большего числа
        max = arr[i][j];
      }
    }
    
    largestArray.push(max); // нажмите max после завершения внутреннего цикла, и max известен
  }

  return largestArray; // возвращает самый большой массив
}

let result = largestOf([[4, 5, 1, 13], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log(result);
