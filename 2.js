function LongestWord(str) {   
   let array = str.split(/\s+/);
   let wordLength = array.map(function(i) {
     return i.length;                       
   });   
   let largest = Math.max.apply(Math, wordLength);   
   return largest; 
}
console.log(LongestWord(" "))
