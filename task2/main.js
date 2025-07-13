var name =prompt("What is you name");
var age = prompt("Enter age:");
var experience =  parseFloat(prompt("Enter years of experience:"));
var selfRating = parseInt(prompt("Rate yourself (1-10):"));
const baseSalary = 10000;

let category;
if (experience<2) {
  category = "Junior";
}else if(experience<= 5) {
  category = "Mid-Level";
}else if(experience<= 10) {
  category = "Senior";
}else{
  category = "Expert";
}

let performance = "";
switch (true) {
  case (selfRating >= 9):
    performance = "Excellent";
    break;
  case (selfRating >= 7):
    performance = "Good";
    break;
  case (selfRating >= 5):
    performance = "Average";
    break;
  default:
    performance = "Needs Improvement";
}

let bonusPercentage;
if (experience < 3) {
  bonusPercentage = 0.10;
} else if (experience <= 5) {
  bonusPercentage = 0.15;
} else {
  bonusPercentage = 0.20;
}
var bonus = baseSalary * bonusPercentage;
var finalSalary = baseSalary + bonus;

const hour = new Date().getHours();
const shift = (hour >= 9 && hour < 18) ? "Day Shift" : "Night Shift";


let report = `
  Name: ${name}<br>
  Age: ${age}<br>
  Experience: ${experience} years<br>
  Job Category: ${category}<br>
  Performance: ${performance}<br>
  Base Salary: $${baseSalary.toFixed(2)}<br>
  Bonus: $${bonus.toFixed(2)} (${(bonusPercentage * 100)}%)<br>
  Final Salary: $${finalSalary.toFixed(2)}<br>
 Shift: ${shift}
`;

console.log("=== Employee Report ===");
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Experience: ${experience} years`);
console.log(`Job Category: ${category}`);
console.log(`Performance: ${performance}`);
console.log(`Base Salary: $${baseSalary.toFixed(2)}`);
console.log(`Bonus: $${bonus.toFixed(2)} (${(bonusPercentage * 100)}%)`);
console.log(`Final Salary: $${finalSalary.toFixed(2)}`);
console.log(`Shift: ${shift}`);

alert(`Employee ${name} is a ${category} with ${performance} performance.\nFinal Salary: $${finalSalary.toFixed(2)}\nShift: ${shift}`);

document.getElementById("output").innerHTML = report;