const cars = [
 { number: '988', name: 'Lada', age: 2 },
 { number: '989', name: 'Kia', age: 3 },
 { number: '990', name: 'Honda', age: 3 },
 { number: '991', name: 'Mitsubishi', age: 1 },
 { number: '992', name: 'BMW', age: 1},
 { number: '993', name: 'Audi', age: 4 },
]

// что вы хотите получить
[988, 989, 990, 991, 992, 993]
// Так
const number = [];
for (let i = 0; i < cars.length; i++) {
  number.push(cars[i].number);
}
const number= cars.map(function(cars {
  return cars.number;
});

// то же самое со стрелочной функцией
const number = cars.map(cars => cars.number);
