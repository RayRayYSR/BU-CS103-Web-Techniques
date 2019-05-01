//Exercise 1: Variables
//
let a = 1;  
let b = 2;  
let c = 3; 
let d = 4;

//Fill in the parentheses to print out 
//the sum of the variables a, b, c, and d, then 
//click Run

console.log(a+b+c+d);
//10

//We can combine strings together in Javascript
//using the + sign. Complete this line of code
//so that it prints out Hello World!

console.log("Hello "+"World"+"!");
//Hello World!

//Order matters in Javascript. We can tell Javascript
//to do something first by placing parentheses around
//some code. Use parentheses to make the output of the 
//following code print
//The sum is 42
    
let a = 11;
let b = 31;

console.log("The sum is " + (a+b));
//42

//Order matters in Javascript. We can tell Javascript
//to do something first by placing parentheses around
//some code. Use parentheses and the appropriate math
//operators to make the output of the 
//following code print
//    
//The value is: 42

let a = 4;
let b = 1;
let c = 4;
let d = 22;

console.log("The value is " + ((a+b)*c+d));
//42

//Time to try some comparisons. 
//Complete this code so that it prints 
//true
//true
//false
//true

let a = 31;
let b = 11;
let c = 42;

console.log(a>b);
console.log((a>b) && (c>b) );
console.log((a<b) || (a>c));
console.log(!(b>a));
//true
//true
//false
//true

//if statements...
//complete the following lines so that all of them 
//print the value 42. You should end up with three 42s.
//You'll need math operators and perhaps a parenthesis 
//or two.

let a = 6;
let b = 7;
let c = 20;

if (c == c) { console.log(42); }

if (a+c == 42) { console.log(21); }
     else { console.log(42); }

if (a*b ==42 ) { console.log(a*b); }
//42
//42
//42

//Loops! (See Chapter 12, posted to 
//Blackboard, for loop syntax)

//Replace the ?? this code so that 
//it prints out the numbers 
//between 1 and 10

for (count = 1; count < 11; count = count + 1) {
     console.log(count);
}
//1
//2
//3
//4
//5
//6
//7
//8
//9
//10

//Big finish!
//Replace the ?? in the following code 
//so that it only prints
//out the even numbers between 1 and 10
// % is the modulo operator - it returns the 
//remainder of a division, ie 7 % 3 = 1 
//since 7/3 is 2 with remainder 1

for (count = 1; count < 11; count = count + 1) {

     if(count % 2 == 0 ) {
         console.log(count) 
     }
}
//2
//4
//6
//8
//10