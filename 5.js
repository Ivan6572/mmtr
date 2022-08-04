function titleCase(str) {
  return str.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')

}

console.log(titleCase(" ")); 


/*Здесь мы split используем пробел,
затем мы заставляем каждое слово начинаться с верхнего регистра,
используя map и затем объединяя первый символ в верхний регистр, 
а остальную часть слова в нижний регистр, а затем join массив слов с пробелом*/
