
// BLOCK 03

// EXERCISE 1
//create a for loop that prints out the numbers from 1 to 100
//expected output 1...100
for (var i = 1; i < 101; i++) {
  console.log(i);
}

// EXERCISE 2
//create a for loop that prints out the numbers from 100 to 0
//expected output 100...0
for (var i = 100; i >= 0; i--) {
  console.log(i);
}

// EXERCISE 3
//create a  while loop  that checks the numbers from 0 to 100
//and for each iteration if the number is not divisible by 2, should print false,
//and if it is it should print true.
//expected output
//true
//false
//true
//false ... and so on to 100
var num = 0;
while(num < 101) {
    console.log('number', num);
    console.log(num % 2 != 0);
    num ++;
}

// EXERCISE 4
//create a forEach loop that goes through an array like this one in the example and prints out the index and the array element in the same console.log.
//next to each element and index add a semantic string, like for example
//'element' for the element and 'idex' for the index
//var arr = ['banana','pinapple','orange']
//expected output
//element banana
//index 0
//element pinapple
//index 1
//element orange
//index 2

var arr = ['banana','pinapple','orange'];

arr.forEach(function(el, index) {
  console.log('Element is ' + el + ' and Index is ' + index);

// EXERCISE 5
//write a forEach loop that loops through this example array and checks if the type of each element is a string,
//if it is it prints true,
//and if it isn't it prints out false,
//at the same time it needs to print out the indexes of all iterations so that we can see which of them returned true!
// var arr = ['banana',['hello'],12,true]
// arr.forEach(function(ele, i) {
//         if (ele.constuctor == String) {
//                 console.log(true, i)
//         } else {
//                 console.log(false, i)
//         }
// })
//expected output
//true 0
//false 1
//false 2
//false 3
var arr = ['banana',['hello'],12,true];

arr.forEach(function(el) {
    console.log(typeof el === 'string');
});

// EXERCISE 6
//write a forEach loop that loops through this example array and prints out the type of each element
//var arr = [{name:'Pedrito'}, ['Banana'],false,34,'hello',null,undefined]
//expected output
//object
//object
//boolean
//number
//string
//object
//undefined

var arr = [{name:'Pedrito'}, ['Banana'],false,34,'hello',null,undefined];

arr.forEach(function(el, index) {
    if (typeof el === 'string') {
    console.log(true, index);
  } else {
    console.log(false, index);
  }
});

// EXERCISE 7
//create a forEach loop  that loops thought the array below and for each iteration if the element is divisible by 2, if it is it should print true, and if it isn't it should print false
//var arr =[1435,656,3234,96747458]
//expected output
//false
//true
//true
//true

var arr =[1435,656,3234,96747458];

arr.forEach(function(el) {
    console.log(el % 2 === 0);
});

// EXERCISE 8
//Write a forOf loop that goes through the given array and prints out each element
//you should also concatenate each element with a sentence...
//example
//if the name is mike it should console.log
//var arr  = ['mike','peter','luke','pedro','george','antonello']
//expected output Hello NAME, how are you today?
//replace NAME with the value from the array

var arr  = ['mike','peter','luke','pedro','george','antonello'];
for (var ele of arr) {
  console.log(`Hello ${ele} how are you today?`);
};

// EXERCISE 9
//write a forOf loop that loops through the following array and sums the numbers up in a variable called sum, once the loop is finished you can console.log the following message:
//"the the sum of the elements in the array is (here the actual sum)"
//var arr = [1,4,55,77,44,66,44,55]
//so if the sum is 200 it should console.log the the sum of the elements in the array is 200

var arr = [1,4,55,77,44,66,44,55];
var sum = 0;

for (var ele of arr) {
    sum = sum + ele;
};
console.log(`the the sum of the elements in the array is ${sum}`);

// EXERCISE 10
//Create a forEach loop that loops through the given array and multiplies each element inside it.
//The result should be assigned to a variable called sum.
// once done please console.log the following:
// the result of multiplying each number of the array is (result goes here!)
//for example
//var arr = [2,4,10]
//should console.log()...
//the result of multyplying each number of the array is 80

var arr = [2,4,10];
var sum = 1;
arr.forEach(function(el) {
  sum = sum * el;
});

console.log(`the result of multyplying each number of the array ${sum}`);

// EXERCISE 11
//write a forEach loop that goes through the array using the method push taking the elements of arr and placing them inside the arr2
//so your starting point is
//var arr =['john','mike','robert','peter','luke']
//var arr2= []
//expected output arr2 =["john", "mike", "robert", "peter", "luke"]

var arr =['john','mike','robert','peter','luke'];
var arr2= [];
arr.forEach(function(el) {
  arr2.push(el);
});

console.log(arr2);

// EXERCISE 12
//Still using the foreach loop and two arrays push the numbers of arr to arr2 and multiply them by two on the way!
//starting point
//var arr = [2,3,65,22]
//var arr2 = []
//expectd output
//arr2
//[4, 6, 130, 44]

var arr = [2,3,65,22];
var arr2 = [];
arr.forEach(function(el) {
  arr2.push(el*2);
});

console.log(arr2);

// EXERCISE 13
//add the elements of arr to arr2 using the concat method
//your starting point is
//var arr = [1,2,3,4,5,65,23,6,'hello']
//var arr2  =[]

//expected output
//arr2
//[1, 2, 3, 4, 5, 65, 23, 6, "hello"]

var arr = [1,2,3,4,5,65,23,6,'hello'];
var arr2  =[];
arr2 = arr.concat();
console.log(arr2);

// EXERCISE 14
// write a foreach loop that compares the numbers of the two arrays with each other and returns true if they are the same and false if they are not.
//it should do a strict check to check that they are also of the same type
//so the below arrays should return
//var arr = [10,20,30, '55']
//var arr2 = [100,20,20, 55]
//EXPECTED OUTPUT
//false
//true
//false
//false

var arr = [10,20,30, '55'];
var arr2 = [100,20,20, 55];

arr.forEach(function(el, i) {
    console.log(el === arr2[i]);
});

// EXERCISE 15
//now do the same exercise only this time ignore the type.
//expected HTMLOutputElement
//false
//true
//false
//true

var arr = [10,20,30, '55'];
var arr2 = [100,20,20, 55];
var arr = [10,20,30, '55'];
var arr2 = [100,20,20, 55];

arr.forEach(function(el, i) {
    console.log(el == arr2[i]);
});

// EXERCISE 16
//Using arr.includes loop through one of the array and check if it contains the element of the other array...
//it should console.log true if it does and false if it doesn't
//var arr = [10,20,30, '55']
//var arr2 = [100,20,20, 55]
//expected output
//false
//true
//true
//false

var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]

arr2.forEach(function(el) {
    console.log(arr.includes(el));
});

// EXERCISE 17
//take the original string which will contain some upper case characters, then create a new variable which needs to contain all the caracter of the original string but all have to be lowercase, once you are done console.log the new variable
//You must use:
//a loop
//push
//join

// original sentence = Antonello LIKEs PlaYing GaMeS
// expected output antonello likes playing games

var origString = 'Antonello LIKEs PlaYing GaMeS';
var lCase = origString.toLowerCase().split(' ');

var final = [];
for (var i = 0; i < lCase.length; i++) {
    final.push(lCase[i]);
}

console.log(final.join(' '));

// EXERCISE 18
// TAKE THE BELOW STRING AND REVERSE THE ORDER OF THE LETTERS SO THAT IT MAKES SENSE;
//CONSOLE.LOG THE REVERSED LONG SENTENCE
//You must use:
//a loop
//push
//join
//var str = 'reeb dloc fo tnip ecin a htiw dna oyam htiw seotatop deirf peed evol I'
//expected output
//I love deep fried potatoes with mayo and with a nice pint of cold beer

var str = 'reeb dloc fo tnip ecin a htiw dna oyam htiw seotatop deirf peed evol I';
var one = str.split('');

var final = [];
for (var i = one.length-1; i >= 0; i--) {
    final.push(one[i]);
}

console.log(final.join(''));

// EXERCISE 19
// you need to convert a name into an abbreviated form (initials), meaning that you take the first letter of the surname, make sure it is capitalized, and add a dot.
//Examples
//Ada Lovelace
//expected output => "Ada L."
//Antonello Sanna
//expected output => Antonello S.

var name = 'Ada Lovelace'
var fullName = name.split(' ');
var firstName = fullName[0];
var secondName = fullName[1][0];
var newName = `${firstName} ${secondName}.`
console.log(newName);


// EXERCISE 20
//You went on vacation to Japan and now you came back and you need to check your finance a bit and in order to do that you need to find out:
//the average expense per day in dollars,
// each element of the array will be  the daily expense in japanese yen
// the conversion rate for yen to dollars is 0.0089
//please console.log the message as shown in the example and make sure you provide us with a round number with no decimals...
//expected output
//you spent an average of 310 per day in you trip to Japan

var arr = [
        //monday
        '10003',
        //tuesday
        '46733',
        //wednesday
        '45833',
        //thursday
        '3534',
        //friday
        '57354',
        //satuy
        '45334',
        //sunday
        '34856'

];

var total = 0;
arr.forEach(function(el) {
    total = ((total + el)*0.0089);
});

var dailyExp = total.toFixed(0);

console.log(`you spent an average of ${dailyExp
} per day in you trip to Japan.`);

