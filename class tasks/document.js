//const demo = document.getElementById("demo");

//demo.innerHTML = "hello world";

//console.log(demo);

const paragraph = document.querySelectorAll("p");

for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].innerHTML = i;
  paragraph[i].style.backgroundColor = "blue";
}

console.log(paragraph);
