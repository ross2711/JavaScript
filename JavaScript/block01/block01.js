
// EXERCISE 1

//create a variable called apple and assign to it a value of 5
//then create another variable called apple2 and give to it a value of 15.
//and finally create a variable called basket and add to it the value of the two other  variables combined.
//then console.log basket

var apple =5;
var apple2 = 15;
var basket = apple + apple2;
console.log(basket);


// EXERCISE 2

//create 3 variables:
//a , b and c;
//assign 10 to a and 24 to b
//make the third variable (c) and make it be to be the result of  a and b multiplied.
// then console.log c

var a;
var b;
var c;
a = 10;
b = 24;
c = a * b;
console.log(c);


// EXERCISE 3

//Age calculator
//Want to find out how old you'll be? Calculate it!
//Store your birth year in a variable.
//Store a future year in a variable.
//Calculate your 2 possible ages for that year based on the stored values.
//For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.

var birthYear = 1984;

var futureYear = 2020;

var output = futureYear - birthYear;

var output2 = output -1;

console.log("I will be either " + output2 + " or " + output + " in 2020");


// EXERCISE 4

//Ever wondered how much a "lifetime supply of Tea you will need?"
//let's find out!!!
//store  your current age in a variable
//store your estimated end age in a variable
//store how many teas you drink per day on average
//calculate how many you will need until the end!
//then console.log the following sentence replacing NUM with the actual number of Tea-bags you are going to need...

//'I will need at least NUM of tea-bags for this lifetime'

var yourCurrentAge = 27;

var yourEstimatedEndAge = 100;

var amountOfTeaPerDay = 3;

var total = (yourEstimatedEndAge - yourCurrentAge) * 365 * 3;

console.log("I will need at least",total,"of tea-bags for this lifetime");


//EXERCISE 5

//Declare the following variables with the following values:
//a => 10
//b => 22

//c => 43
//d => 54

//e => 65
//f => 34

//g => 10
//h => 10

//then compare them in pairs using the JavaScript Arithmetic Operators
//https://www.w3schools.com/jsref/jsref_operators.asp
//and make sure that the result of your comparison is the following:
//false, false, true, true

//example
//console.log(10 > 5)
//this will return true

//compare  (a,b) (c,d), (e,f), (g,h)

//should console.log false, false, true, true


var a = 10;
var b = 22;

var c = 43;
var d = 54;

var e = 65;
var f = 34;

var g = 10;
var h = 10;

console.log(a > b);

console.log(c > d);

console.log(e > f);

console.log(g <= h);


// EXERCISE 6

//using 'strict equality' check, compare the following variables and console.log true if the are NOT the same and false if they are
//num  =>  10
//num1 => "10"

//num2 =>  33
//num3 =>  44

//num4 =>  21
//num5 =>  21

//num6 =>  0
//num7 =>  0


var num  =  10;
var num1 = "10";

var num2 =  33;
var num3 =  44;

var num4 =  21;
var num5 =  21;

var num6 =  0;
var num7 =  0;

console.log(num !== num1);
console.log(num2 !== num3);
console.log(num4 !== num5);
console.log(num6 !== num7);


// EXERCISE 7

//tell which number is even
//assign each of the below number to a variable, then using the module operator check which of them is even and which is odd, and console.log true if is even and false if is odd

//3,  123 , 545 , 34 , 64 , 6634 , 876

var one = 3;
var two = 123;
var three = 545;
var four = 34;
var five = 64;
var six = 6634;
var seven = 876;

console.log(one % 2 === 0);

console.log(two % 2 === 0);

console.log(three % 2 === 0);

console.log(four % 2 === 0);

console.log(five % 2 === 0);

console.log(six % 2 === 0);

console.log(seven % 2 === 0);


// EXERCISE 8

//knowing that the minimum age for driving a 50cc scooter is 15 ask yourself how old you are with a prompt and return true if you are old enough to drive a scooter and false if you are not

var age = prompt('Enter your age');
document.write(age >= 15);


// EXERCISE 9

//using prompt :
//get the name of the user
//get the year of birth of the user
//alert his name and current age in a sentence like in the example:
//                                                                 ******EXAMPLE******
//Hello Jason you are 34 years old

var userName = prompt('Enter your name');
var age = prompt('Enter your year of birth');
var userAge = 2017 - age;
alert('Hello ' + userName + ' you are ' + userAge + ' years old');


//EXERCISE 10

//get the age from the user with a prompt
//then using document.write you need to output an h1 withe the following message, replacing the word *'DAYS'* with the actual value

// you have lived for *'DAYS'* days already!

var userAge = prompt('Enter your age');
var totalDays = userAge * 365;
document.write('You have lived for ' + totalDays + ' days already!');


// EXERCISE 11

//It's hot out! Let's make a converter based on the steps here.
//- Store a celsius temperature into a variable.
//- Convert it to fahrenheit and output "NN°C is NN°F".
//- Now store a fahrenheit temperature into a variable.
//- Convert it to celsius and output "NN°F is NN°C."

var celsius = 32;
var fahrenheit = (celsius * 9) / 5 + 32;
document.write(celsius + '°C is ' + fahrenheit + '°F');

var fahrenheit = 70;
var celsiusCalc = (fahrenheit - 32) * 5 / 9;
var celsius = celsiusCalc.toFixed(1);
document.write(fahrenheit + '°F is ' + celsius + '°C');


