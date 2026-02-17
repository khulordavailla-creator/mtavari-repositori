let age = prompt("ramdeni wlis xart");
let piradoba = prompt("piradobagaaqvt? yes/no");

if (age > 18 && piradoba === "yes") {
  const sigareti = prompt("romeli sigaerti gindat");
  prompt("romeli " + sigareti + "gindat");
  alert("es iqneba 6 laris da 80 tetris ");
} else if (age > 18 && piradoba === "no") {
  alert("piradobis gareshe ver mogyidit");
} else if (age < 18 && piradoba === "no") {
  alert("gaajvi aqedan");
}
