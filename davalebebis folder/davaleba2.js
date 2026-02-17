const products = [
  {
    name: "Headphones",
    price: 120,
    discount: 20,
    inStock: true,
  },
  {
    name: "Keyboard",
    price: 80,
    discount: 10,
    inStock: false,
  },
  {
    name: "Mouse",
    price: 40,
    discount: 5,
    inStock: true,
  },
  {
    name: "Monitor",
    price: 300,
    discount: 50,
    inStock: true,
  },
];

for (let index = 0; index < products.length; index++) {
  if (inStock[index] === true) {
  } else {
    console.log("product is not available");
  }
}
