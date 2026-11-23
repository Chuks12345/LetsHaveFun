// ELOQUENT JAVASCRIPT (Marijn Haverbeke) EXERCISE 2
//Looping a triangle



console.log("Hello JS!");

/*
let counter1, counter2;
for(counter1 = 1; counter1<=7; counter1++){
    let poundSign=" ";
    for(counter2 = 1; counter2<=counter1; counter2++){
        poundSign+="#";}
        console.log(poundSign);}*/
        
//FizzBuzz
/*
let counter;
for(counter=1; counter<=100; counter++){
if(counter%3==0&&counter%5==0){
console.log("FizzBuzz");}
else if(counter%3==0){console.log("Fizz");}
else if(counter%5==0){console.log("Buzz");}
else{console.log(counter);}
} */

//Chessboard

/*
const prompt = require("prompt-sync")();
let boardSize = Number(prompt("Enter your board size: "));
size = boardSize/2;

for(let counter1=1; counter1<=size; counter1++){
    let poundSign1 = " ";
    let poundSign2 = " ";
    for(let counter2=1; counter2<=size; counter2++){
    poundSign1+= " #"}
    console.log(poundSign1);
    for(let counter3=1; counter3<=size; counter3++){
    poundSign2+= "# "}
    console.log(poundSign2);
}*/


//JAVA: HOW TO PROGRAM (Dietel) EXERCISE 2

//Exercise 2.3
/*
const prompt = require("prompt-sync")();
let c = 0,  thisIsAVariable =0, q76354=0, number=0;
console.log(typeof(thisIsAVariable));

let value = Number(prompt("Enter an integer: "));
number = value;
if(number!=7){
console.log("The variable %d is not equal to 7", number);}
console.log("This is a Javascript program");
console.log("%s\n%s","This is a Javascript", "program");*/

//Exercise 2.5 and 2.6
//This program calculates the products of THREE integers

/*
const prompt = require("prompt-sync")();
for(let counter=1; counter<=3; counter++){
let integer = Number(prompt("Enter three integers: "));
if(counter==1){
x = integer;}
else if(counter==2){
y = integer;}
else{z = integer;}
}
let result = x*y*z;
console.log("The product is %d", result);*/

//Exercise 2.14
/*
let numbers = " ";
for(let counter = 1; counter<=4; counter++){
    numbers = numbers + " " + counter;
}
    console.log(numbers);  */
    
//Exercise 2.15
/*
const prompt = require("prompt-sync")();
let firstNumber, secondNumber, firstNumberSquared, secondNumberSquared;
for(let counter=1; counter<=2; counter++){
    let integer = Number(prompt("Enter an integer: "));
    if (counter==1){
    firstNumber = integer;}
    else{
    secondNumber = integer;}
    }
    firstNumberSquared = firstNumber*firstNumber
    secondNumberSquared = secondNumber**2
console.log("Square of the 1st number is %d",firstNumberSquared );
console.log("Square of the 2nd number is %d", secondNumberSquared); */

//Exercise 2.16
/*
const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number: "));

if(number==100&&number**2==100){
    console.log("%d and its squares equal 100", number);}
else{
    if(number>100&&number**2>100){
    console.log("%d and its squares are not equal to 100", number);
    console.log("%d and its squares greater than 100", number);}
    else{
    console.log("%d and its squares are not equal to 100", number);
    console.log("%d and its squares less than 100", number)}
    }  */
    
//Exercise 2.17
/*
const prompt = require("prompt-sync")();
let max=0;
let min=0;
    let integer1 = Number(prompt("Enter the 1st integer: "));
    let integer2 = Number(prompt("Enter the 2nd integer: "));   
    if(integer1>integer2){
        max=integer1;
        min=integer2;}
    else{
        min=integer1;
        max=integer2;}
    let integer3 = Number(prompt("Enter the 3rd integer: "));
     if(integer3>max){
        max=integer3;}
    if(integer3<min){
        min=integer3;}
        
       
         
sum = integer1+integer2+integer3;
average = sum/3;
product = integer1*integer2*integer3;

console.log("Highest number is %d", max);
console.log("Lowest number is %d", min);
console.log("Sum is %d", sum);
console.log("Product is %d", product);
console.log("Average is %f", average);*/


/*const prompt = require("prompt-sync")();
let integer1 = Number(prompt("Enter the 1st integer: "));
let integer2 = Number(prompt("Enter the 2nd integer: "));
let integer3 = Number(prompt("Enter the 3rd integer: "));
let integer4 = Number(prompt("Enter the 4th integer: "));
let integer5 = Number(prompt("Enter the 5th integer: "));

let result1 = Math.max(integer1, integer2, integer3, integer4, integer5 )
let result2 = Math.min(integer1, integer2, integer3, integer4, integer5 )

console.log("Maximum number entered is %d", result1);
console.log("Minimum number entered is %d", result2);*/
    



















































