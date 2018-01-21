// EXERCISE 0
//Take the following variables and make sure they are NOT:
//undefined
//an empty string
//false
//null
// RUN your check with the following
//var a = ''
//please provide us a valid variable
//var b;
//please provide us a valid variable
//var c = null;
//please provide us a valid variable
//var d = false
//please provide us a valid variable
//var e = 'false;
//thanks!
//var f = "hello"
//thanks!
//var f = "true"
//thanks!
//you can only use one if statement per variable and only one condition!!!
//if they are undefined you should console.log a message as follows:
//please provide us with valid data.
//if the variable is none of the above it should console.log('valid data provided')
//undefined
//an empty string
//false
//null
var a = '';
var b = undefined;
var c = null;
var d = false;
var e = 'false';
var f = "hello";
var g = "true";

var fun = str => {
  if (str) {
    console.log('thanks!')
  } else {
    console.log('please provide us a valid variable')
  }
};

fun(a);
fun(b);
fun(c);
fun(d);
fun(e);
fun(f);
fun(g);


// EXERCISE 1

//using if statements check if you are older than John who is 43
//if you are the oldest it should console.log:

//`I am the oldest! I am "myAge" and John is "JohnAge" years old

// in case John is the oldest it should console.log the following message:

//actually John is older than I! because I am "myAge" and John is "JohnAge" years old`

//in both cases you should replace "myAge" and "JohnAge" with the actual ages

var JohnAge = 43;
var myAge = 32;

if (myAge > JohnAge) {
  console.log(`I am the oldest! I am ${myAge} and John is ${JohnAge} years old`);
} else {
  console.log(`actually John is older than I! because I am ${myAge} and John is ${JohnAge} years old`);
}


// EXERCISE 2

//write a forEach loop that loops through the array below and if the number is even it console.log 'it is even' if the number is odd it console.log it is odd,
//in case the array element is not a number it should console.log 'invalid data provided'
//array
// var arr = [1,5,9,33,65,122,66,['banana']]

//expected output

//it is odd
//it is odd
//it is odd
//it is odd
//it is odd
//it is even
//it is even
//invalid data provided

var arr = [1, 5, 9, 33, 65, 122, 66, ['banana']];

arr.forEach(function(el) {
  if (el % 2 == 0) {
    console.log('it is even');
  } else if (el % 2 == 1) {
    console.log('it is odd');
  } else {
    console.log('invalid data provided');
  }
});


//EXERCISE 3

//write a forEach loop that loops through the given array and check if the typeof the element is a string and if it is it pushes it to the provided empty array.
//once done you should console.log the following message replacing the variables
//(what's in capital letters) with actual data.
//
//there are NUMBER of strings in this new array :ARR2
// var arr2= []
// var arr =
// [
//         'banana',
//         ['banana'],
//         {banana:'banana'},
//         false,
//         true,
//         'cheese',
//         12,
//         -32,
//         'salame'
// ]


var arr2 = [];
var arr = [
  'banana', ['banana'],
  {
    banana: 'banana'
  },
  false,
  true,
  'cheese',
  12, -32,
  'salame'
];

arr.forEach(function(el) {
  if (typeof el === 'string') {
    arr2.push(el);
  }
});
console.log(`there are ${arr2.length} of strings in this new array ${arr2}`);

// EXERCISE 4

// Create a loop that goes through a string and checks how many occurrencies of commas and question marks there are in it.
// then console.log in a sentence like the one below replacing the variables with actual data

// there is COMMAS comma and QUESTION-MARKS question marks in this sentence

// var str = 'hello, how are you today? I am not bad and you?'
// expected output
// there is 1 comma and 2 question marks in this sentence

var str = 'hello, how are you today? I am not bad and you?';
var totalComma = 0;
var totalQuest = 0;

for (var i = 0; i < str.length; i++) {
  if (str[i] === ',') {
    totalComma++;
  } else if (str[i] === '?') {
    totalQuest++;
  }
  continue;
}
console.log(`there is ${totalComma} comma and ${totalQuest} question marks in this sentence`);



//EXERCISE 5

//extends the previous exercise by counting the occurrencies of commas and question marks, only this time your loop should be able to check these 2 sentences and if there is only one occurrency, it should say "there is", and if there are more than one it should say "there are" and also use plural in the end of commas/question marks
//var str = 'hello, how are you today? I am not bad and you?'
//expected output
//there is 1 comma and 2 question marks in this sentence
//var str1 = 'hello, how, are, you today? I am not bad and you?;
//expected output
//there are 3 commas and there are 2 question marks and

var str1 = 'hello, how, are, you today?';


var totalComma = 0;
var totalQuest = 0;
var isAre = 'is';
var commas = '';
var quests = '';

for (var i = 0; i < str1.length; i++) {
  if (str1[i] === ',') {
    totalComma++;
  } else if (str1[i] === '?') {
    totalQuest++;
  }
}

if (totalComma > 1) {
  isAre = 'are';
  commas = 's';
}

if (totalQuest > 1) {
  quests = 's';
}

console.log(`there ${isAre} ${totalComma} comma${commas} and ${totalQuest} question mark${quests} in this sentence`);


// EXERCISE 6

//Count the capitals in the word and console.log them, as well as their count
// var str = 'Antonello Sanna Likes videoGames'
//expected outputvar str = 'Antonello Sanna Likes videoGames'
// A
// S
// L
// G
// there are 4 capitals in this word

var str = 'Antonello Sanna Likes videoGames';
totalCapitals = 0;
for (var i = 0; i < str.length; i++) {

  if (str[i] != ' ' && str[i] === str[i].toUpperCase()) {

    totalCapitals++;
  }
}

console.log(`there are ${totalCapitals} capitals in this word`);

// EXERCISE 7
///with a foreEach loop that goes through the given array, and if the element can be converted to a number then console.log the element converted to a number.
//in case  the element cannot be converted then it should console.log the following message replacing ELE with the actual element
//ELE,` cannot be converted to a number`

// the array
// ['banana','34','68', [12], {number:14},'one','two','14', 54]

var arr = ['banana', '34', '68', [12], {
  number: 14
}, 'one', 'two', '14', 54]

arr.forEach(function(ele) {
  if (Number(ele)) { //check if it can be converted to number
    console.log(Number(ele));
  } else {
    console.log(`${ele} cannot be converted to a number`);
  }
});


// EXERCISE 8
// find the minors and remove them from the club entry list...
// You have a list of ages of people who want to join the opening of your new club, check if they are at least 21 and not older than 65.
//create an array of approved ages  where you place all ages that meets our criteria.
//then console.log the message shown in the expected output.
//You can use a loop of your choice for this one!
// var approved = []
// var ages = [12,33,12,43,99,11,5,21,43]

//expected output
//there are 4 people in the list and the ages are 33,43,21,43

var approved = [];
var ages = [12, 33, 12, 43, 99, 11, 5, 21, 43];

ages.forEach(function(el) {
  if (el >= 21 && el <= 65) {
    approved.push(el);
  }
});

console.log(`There are ${approved.length} people in the list and the ages are: ${approved}`);

// EXERCISE 9
//Create an empty array (arr) and then create a loop that loops through another
//array (numbers), it takes all odd numbers smaller than 30 and pushes them in our arr,
//once done, console.log the message as per expected output.
//var numbers = [12,33,12,43,99,11,5,21,43]

//expected output
//There are 3 odd numbers under 30 in our array  (3) [11, 5, 21]

var numbers = [12, 33, 12, 43, 99, 11, 5, 21, 43];
var arr = [];

numbers.forEach(function(el) {
  if (el % 2 && el < 30) {
    arr.push(el);
  }
})

console.log(`There are ${arr.length} odd numbers under 30 in our array (${arr.length}) [${arr}]`);


// EXERCISE 10
///write a foreach Loop that goes through the array, and checks the lenght of each string in the array and console.log it, please bare in mind that the array contains also non string element, you should count how many
//non-string elements there are.
//After the loop console.log the message as per expected output.
//
//var arr = ['mario','john',34,true,'banana']
//there are NUM non string elements in our array and these are ELEMENTS
//var arr = ['mario','john',34,true,'banana']

//expected output
//the lengths of the strings are 5,4,6, there are 2 non string elements in our array and these are (2) [34, true]

var arr = ['mario', 'john', 34, true, 'banana'];
var newArr = [];
var strings = [];

arr.forEach(function(el) {
  if (typeof el == 'string') {
  strings.push(el.length)
  } else {
    newArr.push(el);
  }
});

console.log(`the lengths of the strings are ${strings} there are ${newArr.length} non string elements in our array and these are ${newArr}.`);


// EXERCISE 11

// create an empty array called bool
// create a variable called maxCapacity
// and assign to it a value of 5
// loop through the provided array and every time you find a boolean push it to our
// bool array until you reach the maxCapacity.
// then console.log a message as per expected output


// we filled up our max capacity of 5 with the following booleans true,false,true,false
// var arr  = ['mike','john',true, false,12,true,false]

// var bool = [1,2,3,false,'false']

var arr = ['mike', 'john', true, false, 12, true, false];
var bool = [];
var maxCapacity = 5;

arr.forEach(function(el) {
  if (bool.length < maxCapacity && typeof el == 'boolean') {
    bool.push(el);
  }
});

console.log(bool);


//EXERCISE 12
//write a forEach loop that goes through the array and looks for duplicates.
//you need one array with the unique numbers
//(also these who were double before removing the duplicates)

//one array only with the removed duplicated

//the original array should be left untouched..

//var arr =
//[
//'mike','jason','peter','robert','mike','jason','jenny','jane'
//]

//expected output
//there are 6 elements in the array of values and these are mike,jason,peter,robert,
// jenny,jane and there are 2 elements in the array of duplicates and these are mike,jason

var arr = ['mike', 'jason', 'peter', 'robert', 'mike', 'jason', 'jenny', 'jane'];
var unique = [];
var removed = [];
var uniqueCounter = 0;
var removeCounter = 0;
arr.forEach(function(el) {
  if (unique.indexOf(el) == -1) { // if search never occurs
    unique.push(el);
  } else {
    removed.push(el);
  }
})

console.log(`there are ${unique.length} elements in
  the array of values and these are ${unique} and there
  are ${removed.length} elements in the array of duplicates and
  these are ${removed}`);



// EXERCISE 13
// extend the previous exercise by making sure to return only the unique elements
// of the array only this time
// all items of the returned array must be numbers bigger than 10.

// Example
// var arr = [
//             10, 44, 55 ,66 , 77 , 55 , 44 ,
//             3 , 3 , 3 , 4 , 5 , 6 , 54 ,
//             "antonello", "33", "£", "66"
// ]
// //expected output :
// //[10, 44, 55, 66, 77, 3, 4, 5, 6, 54, 33]

var arr = [
  10, 44, 55, 66, 77, 55, 44,
  3, 3, 3, 4, 5, 6, 54,
  "antonello", "33", "£", "66"
];


var unique = [];

arr.forEach(function(el) {
  if (typeof el == 'number') {
    if (unique.indexOf(el) == -1 && el > 10) {
      unique.push(el);
    }
  }
});

console.log('unique: ', unique);
// input ...[10, 44, 55, 66, 77, 55, 44, 3, 3, 3, 4, 5, 6, 54, "antonello", "33", "£", "66"]
// output ...[44, 55, 66, 77, 54, "33", "66"]


// EXERCISE 14


//take this wonderful string below and get rid of all numbers elements so that it can finally display a meaningful sentence!
//var str = 'I1L2o34895748957v4e53489573456B7an34534543758349758a9n5434598579357376a958783495743987585'
//expected output
//I Love Banana

var str = 'I1L2o34895748957v4e53489573456B7an34534543758349758a9n5434598579357376a958783495743987585'
var output = [];

for (var i = 0; i < str.length; i++) {
  if (!Number(str[i])) {
    output.push(str[i]);
  }
}

output.splice(1, 0, ' ');
output.splice(6, 0, ' ');

var newOutput = output.join('');

console.log(newOutput);




// EXERCISE 15

function gameStart(argument) {

var guessedCorrectly = false;
var randNum = Math.floor(Math.random() * 100) + 1;
var playerGuess;
var allowedGuesses = 5;
var message = "Guess a number between 1 and 100 ... you only have 5 guesses!";

do {
  playerGuess = parseInt(prompt(message));
  allowedGuesses--;
  if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 100)
    message = "sorry I dont recognise that entry, try again... you have " + allowedGuesses;
  else if (playerGuess > randNum)
    message = "number is too big, you have " + allowedGuesses + " guesses left";
  else if (playerGuess < randNum)
    message = "number is too low, you have " + allowedGuesses + " guesses left";
  else {
    guessedCorrectly = true;
    alert("YOU WIN !! - great guess");
    break;
  }
} while (allowedGuesses > 0);

if (!guessedCorrectly) {
  alert("YOU LOSE !! - sorry, you didn't guess correctly... the correct number was " + randNum);
}

}


// can this
// var randNum=(min, max)=>Math.floor(Math.random()*(max - min + 1))+min;
// var randNum(0,100);



