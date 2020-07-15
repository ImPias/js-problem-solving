// Maximum between Two
var num1 = 150;
var num2 = 200;
if(num1 > num2){
    console.log("Number 1 is bigger than 2.")
}else if(num1 == num2){
    console.log("Number 1 is equal to 2.")
}else{
    console.log("Number 2 is bigger than 1.")
}

// Maximum among three
var variable1 = 100;
var variable2 = 500;
var variable3 = 300;
if(variable1 > variable2){
    if(variable1 > variable3){
        console.log("Variable 1 is biggest than variable 2 & 3.");
    }else{
        console.log("Variable 3 is biggest than variable 1 & 2.");
    }
}else{
    if(variable2 > variable3){
        console.log("Variable 2 is biggest than variable 1 & 3.");
    }else{
        console.log("Variable 3 is biggest than variable 1 & 2.");
    }
}

// Maximun using function
var number1 = 234;
var number2 = 564;
var number3 = 123;
var max = Math.max(number1, number2, number3);
console.log("Maximun is: ", max);