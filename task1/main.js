
var name = prompt("What's your name?");
    var birthYear = prompt("What year were you born?");
    var isStudent = confirm("Are you a student?");

    var currentYear = new Date().getFullYear();
    var age = currentYear - parseInt(birthYear);
 let category = "";
    if(age < 13){
      category = "Kid";
    }else if(age>=13 && age<=17) {
      category = "Teen";
    }else if(age>= 18 && age<= 59) {
      category = "Adult";
    }else{
      category = "Senior";
    }
    let message = `Hello ${name}, you are ${age} years old.\nCategory: ${category.toLowerCase()}.`;  
    message += isStudent ? " You are a student." : " You are not a student."; 
    console.log(message);     
 alert(message);
     document.getElementById("output").innerText = message;

    
    



    