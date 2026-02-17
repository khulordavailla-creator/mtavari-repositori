//function cipri(n) {
//const result = n / 2;
//return result;
//}
//const re = cipri(10);
//console.log(re);

const numbers1 = [1, 4, 6, 9, 12, 15];
const numbers2 = [2, 3, 5, 7, 11, 14, 18];

function counteven(numbers) {
  ragac = 0;
  for (let i = 0; i < numbers.lenght; i++) {
    if (numbers[i] % 2 === 0) {
      ragac = ragac + 1;
    }
  }
  return ragac;
}
counteven(numbers1);
counteven(numbers2);
