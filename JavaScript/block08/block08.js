//ex 1
// create a function called matchThemUp, this function will take two arguments,
// the name of a male and that of a female.
// it will ask both the below questions and if they have at least 50% of answers in
// common it will alert "we have a match" otherwise it will alert "no match found!"

// - all questions must be answered with yes or no.
// - you should use prompt to ask questions unless you feal like building a UI.
// - you should end every question with the name of the person you are asking
// the question to.
// example:
// "do you like going to the movies Mike?"
// questions:
// 1) do you like pets ?
// 2) do you like beer ?
// 3) do you like reading books ?
// 4) do you enjoy riding a bike ?
// 5) do you like mainstream music the most ?

// ADD DATA VALIDATION
function matchThemUp(mName, fName) {

    mCounterYes = 0;
    mCounterNo = 0;
    alert(`${mName} please answer yes or no to the following questions...`);
    var petQuestion = prompt(`do you like pets ${mName}?`);
    if (petQuestion == 'yes') {
      mCounterYes++;
    } else {
      mCounterNo++;
    }
    var beerQuestion = prompt(`do you like beer ${mName}?`);
      if (beerQuestion == 'yes') {
      mCounterYes++;
    } else {
      mCounterNo++;
    }
    var bookQuestion = prompt(`do you like reading books ${mName}?`);
      if (bookQuestion == 'yes') {
      mCounterYes++;
    } else {
      mCounterNo++;
    }
    var bikeQuestion = prompt(`do you enjoy riding a bike ${mName}?`);
      if (bikeQuestion == 'yes') {
      mCounterYes++;
    } else {
      mCounterNo++;
    }
    var musicQuestion = prompt(`do you like mainstream music the most ${mName}?`);
      if (musicQuestion == 'yes') {
      mCounterYes++;
    } else {
      mCounterNo++;
    }


    fCounterYes = 0;
    fCounterNo = 0;
    alert(`${fName} please answer yes or no to the following questions...`);
    var petQuestion = prompt(`do you like pets ${fName}?`);
    if (petQuestion == 'yes') {
      fCounterYes++;
    } else {
      fCounterNo++;
    }
    var beerQuestion = prompt(`do you like beer ${fName}?`);
      if (beerQuestion == 'yes') {
      fCounterYes++;
    } else {
      fCounterNo++;
    }
    var bookQuestion = prompt(`do you like reading books ${fName}?`);
      if (bookQuestion == 'yes') {
      fCounterYes++;
    } else {
      fCounterNo++;
    }
    var bikeQuestion = prompt(`do you enjoy riding a bike ${fName}?`);
      if (bikeQuestion == 'yes') {
      fCounterYes++;
    } else {
      fCounterNo++;
    }
    var musicQuestion = prompt(`do you like mainstream music the most ${fName}?`);
      if (musicQuestion == 'yes') {
      fCounterYes++;
    } else {
      fCounterNo++;
    }


    if ((mCounterYes >= 3 && fCounterYes >=3) || (mCounterNo >= 3 && fCounterNo >=3)) {
      alert('we have a match');
    } else {
      alert('no match found');
    }

}

matchThemUp('Ross', 'Fiona');






// ANOTHER METHOD FOR QUESTION 1

// var questions = ['Do you like pets?', 'Do you like beer?', 'Do you like reading books?', 'Do you enjoy riding a bike?', 'Do you like mainstream music the most?']
// function matchThemUp(male,female){
//   var maleAnswers = []
//   var femaleAnswers = []
//   questions.forEach(function(question){
//     maleAnswer = prompt(`${male},${question}`)
//     femaleAnswer = prompt(`${female},${question}`)
//     maleAnswers.push(maleAnswer)
//     femaleAnswers.push(femaleAnswer)
//   })
//   var counter = 0
//   for (var i in maleAnswers){
//     if (maleAnswers[i] == femaleAnswers[i]){
//       counter++
//     }
//   }
//   if (counter >= maleAnswers.length * 0.5){
//     alert('We have a match!')
//   }else {
//     alert('No match found!')
//   }
// }

// matchThemUp('Antonello','Maria')









// ex2
// Write a function called recursive that loops (using recursion) through an array of
// objects(name : age) and prints them out.
// Example
// var arr =[{name:'mike', age:22},{name:'robert', age:12},{name:'roger', age:44},
// {name:'peter', age:28},{name:'Ralph', age:67}]
//mike 22
//robert 12
//roger 44
//peter 28
//ralph 67


var arr =[{name:'mike', age:22},{name:'robert', age:12},{name:'roger', age:44},{name:'peter', age:28},{name:'Ralph', age:67}]

function recursive(array, i) {
  //console.log('before', i);
  if (i++ < array.length) {
    //console.log(i);
    if (array[i]) {
      // console.log('after', i);
      console.log(`${array[i]['name']} ${array[i]['age']}`);
      return recursive(array, i++);
    }
  }
}
recursive(arr, -1);



// ex3

// Write a function called tally to select all the unique elements of an array and count how many
// times the element has been repeated.
// Then you create an array with 2 elements for each number the first is the number and the second
// is how mnay time it was repeated.

// Example
// tally([2,3,4,5,5,5,5,5,5,5,6,7,,6,7,6,7,5,4,3,4,5,5,6])
// {2: 1, 3: 2, 4: 3, 5: 10, 6: 4, 7: 3}

function tally(arr) {
  var count = {};
  for (let i = 0; i < arr.length; i++) {    // loop through each item in array
    count[arr[i]] = 1 + (count[arr[i]] || 0);   // count[arr[i]] is the count 'key'
  }
return count;
}

tally([2,3,4,5,5,5,5,5,5,5,6,7,6,7,6,7,5,4,3,4,5,5,6]);


// another method for ex3 var tally =[2,3,4,5,5,5,5,5,5,5,6,7,,6,7,6,7,5,4,3,4,5,5,6]
// function check(arr) {
//   var unique = []
//   var final = {}

//     arr.forEach(function(num){
//       if (unique.indexOf(num) == -1) {
//         unique.push(num)
//         final[num] = 1

//       }else {
//         final[num]=final[num] + 1
//                   //it's already there so it has a value
//       }
//     })
//     console.log(final)
// }

// check(tally)





// ex4
// extend tally so that now it can take two arguments, if the second argument is missing
// it will default to obj, if the second item is anything but arr it will default to obj.
// if the second argument is arr then instead of returning an object with the number as key
// and how many times it was in the array as values you should return arrays where the
// first elements is the number and the second is how many times it was in the array.

// example:
tally([2,3,4,5,5,5,5,5,5,5,6,7,6,7,6,7,5,4,3,4,5,5,6], 'arr');
//[2, 1]
//[3, 2]
//[4, 3]
//[5, 10]
//[6, 4]
//[7, 3]
//====================//
tally([2,3,4,5,5,5,5,5,5,5,6,7,6,7,6,7,5,4,3,4,5,5,6], 'obj');
//{2: 1, 3: 2, 4: 3, 5: 10, 6: 4, 7: 3}


function tally(arr, arg) {
  if (!arg || arg != 'arr') {
    arg = 'obj';
  }
  var count = {};
  for (let i = 0; i < arr.length; i++) {    // loop through each item in array
    count[arr[i]] = 1 + (count[arr[i]] || 0);   // count[arr[i]] is the count 'key' , the value is
  }

if (arg == 'arr') {
  console.log('here');
  for (var key in count) {
    var tempArr = [];

    //console.log(Object.keys(key)[0]);
console.log('obj',Object.values(key));
  //console.log(key);
  }
}
return count;
}

tally([2,3,4,5,5,5,5,5,5,5,6,7,6,7,6,7,5,4,3,4,5,5,6], 'arr');







// ex5
// write your own sorting function to sort an array of numbers.
// this function can take up to 2 arguments
// the first is the array that ou wish to sort
// the second is the order of sorting
// if the second argument is not passed it should default to 'ascending'
// if the second argument is passed and is 'descending then it should sort the array in descending order'
// if the second argument is passed but is not ascending nor descending it should return an error message
// alerting the user that he/she passed the wrong data.
// You can't use any built-in methods apart from console.log , alert and document.write
// try splitting this task into smaller inner functions to avoid repetition and a
// gigantic unreadable if statements.


function sorter(arr, order) {
  if (order && (order != 'ascending' && order != 'descending')) {
    return document.write("<h1>please provide us with ascending or descending order instructions!</h1>");
  }
  if (!order) {
    order = 'ascending';
  }
  for (var i = 0; i < arr.length; i++) {
    for (var x = i + 1; x < arr.length + 1; x++) {
      if (order == 'ascending') {
        sortAsc();
      } else {
        sortDec();
      }
    }
  };
  return document.write(`<h1>${arr}</h1>`);

  // ascending
  function sortAsc() {
    if (arr[i] > arr[x]) {
      var temp = arr[i];
      arr[i] = arr[x];
      arr[x] = temp;
    } else {
      arr[i];
    }
  }
  // decending
  function sortDec() {
    if (arr[i] < arr[x]) {
      var temp = arr[i];
      arr[i] = arr[x];
      arr[x] = temp;
    } else {
      arr[i];
    }
  };
}

sorter([11111, 9, 10, 12, 3, 321]);
//(6) [3, 9, 10, 12, 321, 11111]
sorter([11111, 9, 10, 12, 3, 321], 'ascending');
//(6) [3, 9, 10, 12, 321, 11111]
sorter([11111, 9, 10, 12, 3, 321], 'descending');
//(6) [11111, 321, 12, 10, 9, 3]
sorter([11111, 9, 10, 12, 3, 321], 'whatever');
//wrong order provided whatever please provide
//us with ascending or descending order instructions




