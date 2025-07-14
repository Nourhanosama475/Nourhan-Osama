var temperature=parseFloat(prompt("Enter the temperature in Celsius:"));
let tem=temperature <0 ? "Freezing cold":
         temperature <=15?  "Cold":
         temperature <=25?  "Mild":
         temperature <=34? "Warm":
         "Hot";
let safe ;
if(temperature < -5 || temperature>40){
safe ="Dangerous temperature";
} else {
  safe = "Safe temperature";
}

let advice = (temperature > 30) ? "Stay hydrated!" :
             (temperature >= 16 && temperature <= 25) ? "Perfect for outdoor activities!" : "";

let output = `tem: ${tem}\nSafe: ${safe}\nAdvice: ${advice}`;

console.log(output);
alert(output);
document.getElementById("result").innerText = output;
