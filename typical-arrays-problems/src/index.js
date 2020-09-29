const numbers = [2, 4, 9, 2, 0, 16, 24];

function min(array) {
   
   if (array.lenght == 0) {
      return 0
   } else {
      return Math.min(...array)
   }

}

function max(array) {

   if (array.lenght == 0) {
      return 0
   } else {
      return Math.max(...array)
   }

}

function avg(array) {

   let summ = 0;

   if (array.lenght == 0) {
      return 0
   } else {
      array.forEach(el => {
         summ += el;
      });

      summ /= 2;
   }

   return summ

}

console.log(min(numbers))
console.log(max(numbers))
console.log(avg(numbers))