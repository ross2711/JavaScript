// block05
// ex 01
//write a function that takes two arguments, greeting and name.
//inside the function also declare a variable called sentence and give it a value of 'how are you today?'
//it should then console.log them in sequence.
//see expected output...
//expected output//
//greeting name sentence
//example
//Hello Mike how are you today?
function greet(greeting, name) {
  var sentence = 'how are you today?';
  console.log(greeting + ' ' + name + ' ' + sentence);
}

greet('Hello', 'Ross');


// ex 02

//Write a function called divide that takes two arguments,
// and divide the second with the first and console.log the result.
//example 10 / 2 = 5
//divide(10,2)
//5

var divide = function(a, b) {
  var result = a / b;
  console.log(result);
};

divide(10, 2);

// ex03

//write a function called calc that takes 3 arguments the
// first 2 are numbers and the third is an aritmetic operator,
// so is either + , -, *, /
// and it executes the appropriate operation according to the
// provided aritmetic operator.

// make sure you test your function with all 4 aritmetic
// operations

//EXAMPLES//
//calc(10,2,'/')
//5

//calc(10,2,'+')
//12

//calc(10,2,'-')
//8

//calc(10,2,'*')
//20

var calc = function(a, b, sign) {
  if (sign == '+') {
    return a + b;
  } else if (sign == '-') {
    return a - b;
  } else if (sign == '*') {
    return a * b;
  } else if (sign == '/') {
    return a / b;
  }
};
calc(10,2,'/');
calc(10,2,'+');
calc(10,2,'-');
calc(10,2,'*');


// ex04
//extend our awesome calc function by adding some conditions...
//in case the third arguments is  / or * and the second argument is not provided it should default to one.
//in case the third arguments is +  or  - and the second argument is not provided it should default to zero.

//example
//calc(10,"/")  //10
//calc (30,"*") //30
//calc (2,"+")  //2
//calc (3,"-")  //3

var calc = function(a, b, sign) {
  if (b == '/' && (!sign)) {
    sign = b;
    b = 1;
  } else if (b == '*' && (!sign)) {
    sign = b;
    b = 1;
  } else if (b == '+' && (!sign)) {
    sign = b;
    b = 0;
  } else if (b == '-' && (!sign)) {
    sign = b;
    b = 0;
  }
  return calcTwo(a, b, sign);
};

var calcTwo = function(a, b, sign) {
  if (sign == '+') {
    return a + b;
  } else if (sign == '-') {
    return a - b;
  } else if (sign == '*') {
    return a * b;
  } else if (sign == '/') {
    return a / b;
  }
};

calc(10, "/"); //10
calc(30, "*"); //30
calc(2, "+"); //2
calc(3, "-"); //3


// ex 05

//var arr = ['12', 'true', 'false', 'hello', 12, true, undefined, false]
// var arr2 = ["banana", 'true', ['ciao'], 12, 'gennaro olivieri', true]
// var arr3 = [12, 13, 54, true, 'false']

//write a function that loops through the above arrays and check the typeof of each element,
// and counts how many occurrencies of booleans and strings there are, then it console.log their
// number in a sentence like in the below example.
//if the typeof the element is not a string nor a boolena it will be considered unknown.
//examples

//EXAMPLES
// checkTypeOf(arr)
//there are 2 booleans and 4 strings in the array and 2 unknown elements
// checkTypeOf(arr2)
//there are 1 booleans and 3 strings in the array and 1 unknown element
// checkTypeOf(arr3)
//there are 1 booleans and 1 string in the array and 3 unknown elements

var arr = ['12', 'true', 'false', 'hello', 12, true, undefined, false];
var arr2 = ["banana", 'true', ['ciao'], 12, 'gennaro olivieri', true];
var arr3 = [12, 13, 54, true, 'false'];

var boolCounter = 0;
var stringCounter = 0;
var unknown = 0;

function checkTypeOf(arr) {
  arr.forEach(function(ele) {
    if (typeof ele == 'boolean') {
      boolCounter++;
    } else if (typeof ele == 'string') {
      stringCounter++;
    } else {
      unknown++;
    }
  });
  console.log(`there are ${boolCounter} booleans and ${stringCounter} strings in the array and ${unknown} unknown elements`);
  boolCounter = 0;
  stringCounter = 0;
  unknown = 0;
}

checkTypeOf(arr);
//there are 2 booleans and 4 strings in the array and 2 unknown elements
checkTypeOf(arr2);
//there are 1 booleans and 3 strings in the array and 1 unknown element
checkTypeOf(arr3);
//there are 1 booleans and 1 string in the array and 3 unknown elements



// ex 6

//Write a function that takes 2 arguments
// the first will be an array of strings
// the second  a minumun length value
//check if the length of each element in the array is at least as long as
// the value of the second argument passed.(minumun length value)
//in the end console.log how many elements have a length equal or longer
// than the minumun length value and are therefore approved and how many are not.

// var arr  = ['banana','salame','cheese','coke']
// var arr1 = ['george','pane','mortadella','spaghetti','pesto']
// var arr2 = ['bread','butter','peanuts','nutella']

// then call your function as below and you should get the expected output
// checkLength(arr, 5)
//expected output
//there are 3 approved items and 1 rejected items in the provided array
// checkLength(arr1,7)
//expected output
//there are 2 approved items and 3 rejected items in the provided array
// checkLength(arr2,3)
//expected output
//there are 4 approved items and 0 rejected items in the provided array


var arr = ['banana', 'salame', 'cheese', 'coke'];
var arr1 = ['george', 'pane', 'mortadella', 'spaghetti', 'pesto'];
var arr2 = ['bread', 'butter', 'peanuts', 'nutella'];

function checkLength(arr, len) {
  var approved = 0;
  var rejected = 0;
  arr.forEach(function(ele) {
    if (ele.length >= len) {
      approved++;
    } else {
      rejected++;
    }
  });
  console.log(`there are ${approved} approved items and ${rejected} rejected items in the provided array`);
}

// then call your function as below and you should get the expected output
checkLength(arr, 5);
//expected output
//there are 3 approved items and 1 rejected items in the provided array
checkLength(arr1, 7);
//expected output
//there are 2 approved items and 3 rejected items in the provided array
checkLength(arr2, 3);
//expected output
//there are 4 approved items and 0 rejected items in the provided array


// ex7

//write a function that tells you how old you are based on the date of birth passed.
//this function will take 3 arguments day, month and year
// you can use the day of today by simply writing it yourself, or if you feel brave
// enough you may want to use the Date object although we haven't covered that, so this
// would require some self research from your end.

//tellAge(2,8,1982)
//you are 34 years old

//tellAge(2,7,1982)
//you are 35 years old

//tellAge(28,7,1982)
//you are 34 years old


function tellAge(birth_day, birth_month, birth_year) {
  var today_year = 2017;
  var today_month = 10;
  var today_day = 31;
  var age = today_year - birth_year;
  // debugger;
  if (today_month < birth_month) {
    // if today_month is less than birth_month... reduce age by 1
    age--;
  }
  if (birth_month == today_month && today_day < birth_day) {
    // if months are equal and today is equal AND today is less than birth_day
    age--;
  }
  return age;
}

tellAge(27,11,1984);
//you are 32 years old

tellAge(2,11,1982);
//you are 34 years old

tellAge(2,7,1984);
//you are 33 years old

// another method
// function tellAge(day,month,year) {
//   var today = new Date()
//   var dd = today.getDate()
//   var mm = today.getMonth()+1
//   var yy = today.getFullYear()
//   today = (dd,mm,yy)
//   if (month > mm) {
//     var age = yy - year -1
//     return age
//   }if (month < mm) {
//     var age = yy - year
//     return age
//   }if (month == mm) {
//     if (day > dd) {
//       var age = yy - year -1
//       return age
//     }if (day <= dd){
//       var age = yy - year
//       return age
//     }
//   }
// }
// tellAge(14,10,1990)
// tellAge(14,11,1990)
// tellAge(2,8,1982)



// ex8
// write a function called checkAge
// knowing that"
// the age to drive is 16
// the age for drinking is 21
// check the age and output one of the following messages according with
// the age of the person. please replace the numbers with data from your variables.
//EXAMPLES

//checkAge(2,9,1995)
//You are 21 years old therefore old enough to drink and drive

//checkAge(2,9,1999)
//You are 17 years old therefore old enough to drive but not to drink

//checkAge(2,9,2005)
//sorry you are too young to drink or drive!

var minDriveAge = 16;
var minDrinkAge = 21;

function checkAge(birth_day, birth_month, birth_year) {

  var personAge = tellAge(birth_day, birth_month, birth_year);
  if (personAge < minDriveAge) {
    return `sorry you are too young to drink or drive!`;
  }
  if (personAge >= minDriveAge && personAge < minDrinkAge) {
    return `You are ${personAge} years old therefore old enough to drive but not to drink`;
  }
  if (personAge >= minDrinkAge) {
    return `You are ${personAge} years old therefore old enough to drink and drive`;
  }
}

checkAge(10, 11, 1995);
//You are 21 years old therefore old enough to drink and drive
checkAge(10, 11, 1999);
//You are 17 years old therefore old enough to drive but not to drink
checkAge(10, 11, 2005);
//sorry you are too young to drink or drive!


// ex09
//Write a function called  checkAge that checks how many days there are between now and the next birthday.
//if the date of birth is today it should alert
// happy birhtday!
//if the date of birth is passed it should console.log
// Sorry your birthday is passed for this year
//otherwise it should console.log how many months and days there are between now and the next birthday.
//in case there is less than 1 month between now and the next birthday it should ignore the month.
// PLEASE NOTE : please feel free to consider all dayss being of the same length (30 || 31)
//Examples:

//checkAge(2,8,1982)
//your birthday will be in 6 days

//checkAge(2,9,1982)
//your birthday will be in 1 months and 6 days

//checkAge(25,2,1982)
//your birthday is passed for this year


function checkAge(birth_day, birth_month, birth_year) {
  var date = new Date();
  var currentMonth = 10;
  var currentDate = 31;
  var monthDays = 30;


  if (birth_month == currentMonth && birth_day == currentDate) {
    return "Today is your birthday!!!";
  } else if (birth_month < currentMonth) {
    return "Sorry your birthday is passed for this year";
  } else if (birth_month > currentMonth) {

    var months = birth_month - currentMonth - 1;
    var currentMonthDays = monthDays - currentDate;
    var totalDays = currentMonthDays + birth_day;

    if (totalDays > monthDays) {
      months++;
      totalDays = totalDays - monthDays;
    }
    if (months > 0)
      return "Your birthday will be in " + months + " months and " + totalDays + " days";
    else {
      return "Your birthday will be in " + totalDays + " days";
    }
  } else if (birth_month == currentMonth) {
    if (birth_day < currentDate) {
      return "Your birthday already passed for this year";
    } else {
      var daysLeft = birth_day - currentDate;
      return "Your birthday will be in " + daysLeft;
    }
  }
}

checkAge(10, 11, 1984);
checkAge(31, 10, 1984);
checkAge(10, 12, 1984);
checkAge(31, 09, 1984);


// ex 10
//write a function called dollarsConverter which takes 2 arguments
//The amount of cash to be converted
// the currency we want to conver it to.
// let's assume that the conversion for euro and pounds are as follow:
//euro 1.2
//pounds 1.5

//please console.log the converted amount in a sentence as shown in the example below.
// in the case the currency provided is not in the list it should display the following message:
//wrong currency provided!
//if no currency is provided at all it should display the following message:
//currency needed for conversion!
//You should use the built-in method Math.round to round up your result.
//examples
//dollarsConverter(100,'pounds')
//You will receive 67 pounds in exchange for your 100 dollars
//dollarsConverter(100,'euro')
//You will receive 83 euro in exchange for your 100 dollars
//dollarsConverter(100,' Japanese Yen')
//wrong currency provided!

var euroExch = 1.2;
var poundExch = 1.5;
var euro;
var pound;

function dollarsConverter(cash, cur) {
  if (!cur) {
    return `currency needed for conversion!`;
  }
  if (cur != 'euro' && cur != 'pounds') {
    return `wrong currency provided!`;
  }
  if (cash && cur) {
    // debugger
    if (cur == 'euro') {
      var totalEuro = Math.round(cash / euroExch);
      return `You will receive ${totalEuro} euro in exchange for your ${cash} dollars`;
    } else if (cur == 'pounds') {
      var totalPound = Math.round(cash / poundExch);
      return `You will receive ${totalPound} pounds in exchange for your ${cash} dollars`;
    }
  }
}

dollarsConverter(99, 'euro');
dollarsConverter(99, 'pounds');
dollarsConverter(100, ' Japanese Yen');
dollarsConverter(99,);


// ex 11

// Write a function called runOnRange that runs a function through
// a range of numbers and console.log the result of the passed function
// The function takes 2 arguments: the first is a function that can
// take one argument (that must be a number) and a second argument
// which is an object with 3 properties: start, end and an optional step.
// If step is missing the step will be set to 1.

Example
var addOne = function(num) {
  return num + 1
}
runOnRange(addOne, {
  start: 10,
  end: 17,
  step: 3
})
// => 11
// => 14
// => 17

runOnRange(addOne, {
  start: -6,
  end: -4
})
// => -5
// => -4

runOnRange(addOne, {
  start: 12,
  end: 12
})
// nothing should be console.logged in this case!

runOnRange(addOne, {
  start: 23,
  end: 26,
  step: -1
})
// nothing should be console.logged in this case!

runOnRange(addOne, {
  start: 23,
  end: 26,
  step: 0
})
// nothing should be console.logged in this case!


function addOne () {
  return 1;
};

function runOnRange(addOne, obj) {
  var start = obj.start + addOne();
  var end = obj.end;
  var step = obj.step;

  if (start == end) {
    return;
  }
  if (step <= 0) {
    return;
  }
  if (!step) {
    step = 1;
  }

  for (var i = start; i <= end; i += step) {
    console.log(i);
  }
}


// ex12
// Write a function called stringChop that chops a string into
// chunks of a given length. The function takes 2 arguments, the
// first one being the string to chop, and the second one a number
// that will be the size of you chunks.

// Example
// stringChop('w3resource'); //#=> ["w3resource"]
// stringChop('w3resource',2); //#=> ["w3", "re", "so", "ur", "ce"]
// stringChop('w3resource',3); //#=> ["w3r", "eso", "urc", "e"]

function stringChop(str, chunk) {
  var result = [];
  for (var i = 0; i < str.length; i += chunk) {
    result.push(str.substr(i, chunk));
  }
  return result;
}

stringChop('w3resource');
stringChop('w3resource', 2);
stringChop('w3resource', 3);


// ex 13

function playGame(arg) {

  var userChoice = prompt("Do you choose rock, paper or scissors?");

  if (userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors') {
    alert("didnt recognise your input");
    playGame();
  }

  var computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";
  } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  alert("Computer choice is ..." + computerChoice);

  var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
      return "It's a tie!";
    }
    if (choice1 === "rock") {
      if (choice2 === "scissors") {
        // rock wins
        return "You win!";
      } else {
        // paper wins
        return "You lose!";
      }
    }
    if (choice1 === "paper") {
      if (choice2 === "rock") {
        // paper wins
        return "You win!";
      } else {
        // scissors wins
        return "You lose!";
      }
    }
    if (choice1 === "scissors") {
      if (choice2 === "rock") {
        // rock wins
        return "You lose!";
      } else {
        // scissors wins
        return "You win!";
      }
    }
  };
  // compare
  var results = compare(userChoice, computerChoice);
  // Display results
  alert(results);
  // play again?
  playAgain();

  function playAgain() {
    userChoice = prompt("Play again  (yes  or  no)");
    if (userChoice == 'yes') {
      playGame(); // restart game
    } else if (userChoice == 'no') {
      return;
    } else if (userChoice != 'yes' && userChoice != 'no') {
      alert("didnt recognise your input");
      playAgain();
    }
  }
}
playGame();