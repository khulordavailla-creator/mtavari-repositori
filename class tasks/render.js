const movies = [
  { title: "Batman", year: 2022, description: "this is movie about bats" },
  { title: "Avatar", year: 2009, description: "this is movie about blue guys" },
  { title: "Inception", year: 2010, description: "this is deep movie" },
];

const element = document.getElementById("ragaca");

for (let i = 0; i < movies.length; i++) {
  element.innerHTML += `
    <h1>${movies[i].title}</h1>
    <p>${movies[i].year}</p>
    <p>${movies[i].description}</p>
  `;
}
