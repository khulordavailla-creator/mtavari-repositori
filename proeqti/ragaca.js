const numbers = [1, 2, 3, 4];
const newarray = numbers.map((number) => number * 2);
console.log(newarray);

function displayname(name) {
  const result = name(10, 100, 20);
  console.log(result);
}
displayname((a, b, c) => a + b + c);
