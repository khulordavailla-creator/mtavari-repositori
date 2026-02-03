let userInput = Number(prompt("Enter the number:"));
while (userInput != 70) {
  if (userInput > 70) {
    alert(" lower");
  } else if (userInput < 70) {
    alert("higher");
  }
  userInput = Number(prompt("Enter the number:"));
}
alert("you guesed right");
