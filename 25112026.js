//POOR NNETWORK WAHALA 26112026

//QUESTION 1: A function that prints fizzbuzz
function fizzBuzz(number){
    if(number%3==0&&number%5==0){return "FizzBuzz";}
    else if(number%5==0){return "Buzz";}
    else if(number%3==0){return "Fizz";}
    else{return number;}
}

console.log(fizzBuzz(113));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
console.log(fizzBuzz(24));
console.log();

//QUESTION 2: Print true if given number can be expressed as 2^n or number is a multiple of 2
function isPowerOfTwo(number){
    for(let count1=2; count1<=2; count1++){
        let result=0;
        for(let count2=0; result<=number; ++count2){
            result=Math.pow(count1, count2);
        }
        if(number==result/2){
            return true;}
        else{
            return false;}
    }
}

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(6));
console.log(isPowerOfTwo(600));
console.log(isPowerOfTwo(64));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(100));
console.log();

//QUESTION 3: Evaluate square root without using Math.sqrt or operator **
function mySqrt(number){
   let result= Math.pow(number, 0.5);
   if(number%result==0){
       return result;}
   else{
       return Math.floor(result);}
    }
    console.log(mySqrt(8));
    console.log(mySqrt(16));
    console.log(mySqrt(10));
    console.log(mySqrt(20));
    console.log(mySqrt(100));
    console.log(mySqrt(35));
    console.log();
  
//Question 4: Hamming wieght in a binary number
function hammingWeight(number){
let count=1;let countZero=0, countOne=0;    
    while(count>0){
        
        let binaryDigit=number%2;
        let reducedNumber=Math.floor(number/2);
        
        if(binaryDigit==0){
            countZero+=1;}
        else{
            countOne+=1;}
        //console.log(`reduced Number: ${reducedNumber}; binary digit: ${binaryDigit}`)
        number=reducedNumber;
        count=reducedNumber;
    }
    return countOne;
}

console.log(hammingWeight(10));
console.log(hammingWeight(11));
console.log(hammingWeight(75));
console.log(hammingWeight(133));
console.log();

//QUESTION 5: Reversing a number without converting the output to string, including numbers less than 0
function reverseInteger(number){
    let reducedNumber=1, reversedNumber=0, numberSignChecker=number;
    while(reducedNumber>=1){
        if(number<0){
            number= number*(-1);
            reversedNumber = reversedNumber*10 + number%10;
            reducedNumber = Math.floor(number/10);
            number=reducedNumber;
        }
        else{
           reversedNumber = reversedNumber*10 + number%10;
        reducedNumber = Math.floor(number/10);
        number=reducedNumber; 
        }
    }
   if(numberSignChecker<0){
        reversedNumber = reversedNumber * (-1);
        return reversedNumber;
    }
    else{
        return reversedNumber;
    }
}
console.log(reverseInteger(-321));
console.log(reverseInteger(321));
console.log(reverseInteger(-5369));
console.log(reverseInteger(40825));
console.log(reverseInteger(16361));
console.log();


//QUESTION 6: Palindrome numberSignChecker
function isPalindromeNumber(number){
    let reducedNumber=1, reversedNumber=0, palindromeChecker=number;
    while(reducedNumber>=1){
        if(number<0){
            return "Negative numbers are not palindrome"
        }
        else{
            reversedNumber = reversedNumber*10 + number%10;
            reducedNumber = Math.floor(number/10);
            number=reducedNumber; 
        }
    }
    if(palindromeChecker==reversedNumber){
        return true;
    }
    else{
        return false;
    }
}
console.log(isPalindromeNumber(-121));
console.log(isPalindromeNumber(121));
console.log(isPalindromeNumber(-5369));
console.log(isPalindromeNumber(40825));
console.log(isPalindromeNumber(16361));
console.log();

//QUESTION 7: Perfect Number
function perfectNumber(number){
    let sum = 0;
    let result = " ";
    for(let count1=1; count1<number; count1++){
    if (number%count1==0){
    sum += count1; }
       
    if(sum==number){
    return "It is a perfect number";}
    else{
    System.out.println(sum);
    return "It is not a perfect number";}
    }
  
    }

console.log(perectNumber(10));
















































