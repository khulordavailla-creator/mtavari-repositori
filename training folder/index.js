// let grade = prompt ("ur greade?");
//let grade1 = grade / 10 ;
//const num = 5;
//const num1=9;
//if (grade >=9) {
// alert ("u passed")};
//  else  if (5>grade1<9) {
//alert (u passed but not that good );}
//else { alert ("u didnt pass" );
//const age=19;
//const haspremium = "yes" ;
//const bool = age >`0 || haspremium === "yes";
//console.log(bool);

let age = prompt("whats ur age");
let parent = prompt("do you have parent with you (yes/no)");
let late = promt("are u late (yes/no)");
if (age >= 18 && haveticket === "yes" && late === "no") {
  alert("you can enter");
} else if (age >= 13 && parent === "yes" && haveticket === "yes") {
  alert("you can watch");
} else if (late === "yes" || haveticket === "no") {
  alert("cant go in");
} else {
  alert("you cant go");
}
