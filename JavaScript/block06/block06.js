// ex 01


var obj = {
        name:"antonello",
        lastname:"sanna"
};
console.log(obj);


// ex 02
//define an empty object called obj
//take the values from the below array and assign them as 2 separate propreties to the object
//these two propreties should be "name" and "lastname"
//do that using square brackets notation
//then console.log the object propreties using . notation

//array
var names = ['jason', 'bourne'];
//expected output
//
var names = ['jason', 'bourne'];
var obj = {name:names[0], lastname:names[1]};

console.log(obj.name, obj.lastname);



// ex 03

//Write a function called modifyObject that takes 3 arguments.
// the first argument is a key to be added
// the second argument is the value to be associated with the key
//
//Example
//var obj = {a: 1, b: 2}//original object
// modifyObject(obj, 'c', 3)
//expected output
//{a: 1, b: 2, c: 3}

var obj = {a: 1, b: 2};

function modifyObject(obj, key, value) {
  obj[key] = value;
}

modifyObject(obj, 'c', 3);
console.log(obj);


// ex 04

//Write a function called addToList that takes one argument, an array of movie titles.
//then create a new empty array called movieList.
//loop through the array of movie titles and push them inside the movieList array as objects.
//this object will have two key value pair:
//id has to be an unique number of your choice (idelaly the index)
//then title which will be the title of the movie.
//in the end console.log the movieList array.

var movies = ['matrix','the dark knight','a beautiful mind','american pie'];

//EXAMPLE
//addToList(movies)
//{title: "matrix", id: 0}
//{title: "the dark knight", id: 1}
//{title: "a beautiful mind", id: 2}
//{title: "american pie", id: 3}

var movies = ['matrix','the dark knight','a beautiful mind','american pie'];
var movieList = [];
function addToList(arr) {
  for (var i=0; i<arr.length; i++) {
    movieList.push({ title: arr[i], id: i });
  }
}
console.log(movieList);

addToList(movies);


// ex 05

//write a for in loop that goes through the below object.
// and prints out its elements next to a string that describes what the element is.
//see example:

var person = {
        name:'Antonello',
        surname:'Sanna',
        age:34,
        gender:'male'
};

for(var key in person){
  var value = person[key];
  console.log(`key ${key} value ${value}`);
}


// ex 06

// Write a function called swap that takes one argument,
// an object, and returns another object where the
// key/value pairs have been swapped.
// The original object should not be modified.
//
// Example

//var obj = {a: 1, b: 2}
//var newObject = swap(obj)
//newObject // {1: 'a', 2: 'b'}


var obj = {a: 1, b: 2};

function newObject(obj) {
  var newObj = {};
  for (var key in obj) {
  newObj[obj[key]] = key;
  }
  return newObj;
}

newObject(obj);


// ex 07

// Write a function called last that takes one argument,
// an object, and returns an object containing only the
// last key/value pair and does not modify the original
// object.

// Example

var obj = {a: 1, b: 2}
var newObje = last(obj)
newObje // {b: 2}
obj // {a: 1, b: 2}


var obj = {a: 1, b: 2};
function last(obj) {

for(key in obj) {
  var newObj= {};
  newObj[key]= obj[key];
}
return newObj;
}
last(obj);



// ex 08

// Write a function called sumAll that takes one
// argument, an object, and sums all it's values.
// If no object is provided or if the object is
// empty sumAll should return 0.
// Example

var obj = {a: 1, b: 2, c: 2}
sumAll(obj) // 5
sumAll({}) // 0
sumAll() // 0



var obj = {a: 1, b: 2, c: 2};
var sum = 0;

function sumAll(obj) {
  if (!(obj) || null) {
    return 0;
  };
  for (var key in obj) {
    sum += obj[key];
  }
  return sum;
}

sumAll(obj) // 5
//sumAll({}) // 0 // !(obj)
//sumAll() // 0 // null


// ex 09

// Create a function called model. The model function allows you to
// control how you interact with a collection of objects that we call
// collection that are stored in the DB. Model imposes conditions on the
// properties of the collection, for example which keys are allowed.

// In this exercise create a model function. This model uses the
// definitions of a predefined object called schema (you don't need to
// define it) to assert the keys that each object in a collection that
// are allowed. The model function can take 2 arguments: the first is the
// type of the operation we want to execute on the db and the second is
// the data we need to execute it. For now we only define an operation
// called 'add'.

// Example

// schema = ["id", "name", "age"]
// DB = []

//model("add", {id: 1, name: "Joe", age: 32, address: "Muntaner 262, Barcelona"})
//DB // [{id: 1, name: "Joe", age: 32}] => Address was not added because not allowed by the schema
//model("add", {id: 1, age: 32, address: "Muntaner 262, Barcelona"})
//DB // [{id: 1, age: 32}] => Address was not added because not allowed by the schema

schema = ["id", "name", "age"]
DB = [];

function model(add, obj) {
  var newObj = {};
  for (var key in obj) {
    schema.forEach(function(el){
      if (el == key) {
        newObj[key]= obj[key];
      }
    });
  }
  DB.push(newObj);
}

console.log(DB);

model("add", {id: 1, age: 32, address: "Muntaner 262, Barcelona"})
model("add", {id: 1, name: "Joe", age: 32, address: "Muntaner 262, Barcelona"})

// ANOTHER METHOD FOR EX. 9
// var DB = []
// var schema = ["id", "name", "age"]
// var model = (add, input)=>{
// var obj ={}
//   for(var key in input){
//     if(schema.indexOf(key) != -1){
//     obj[key]=input[key]
//     }
//   }DB.push(obj)
//     return DB;
//   }


//ex 10
// Continuing the previous exercise, add the posibility to force the type of the
// value that can be set on a given property. In this case schema is an object and
// no longer an array. The allowed values are only "string", "number" and "boolean".
// If the value of a given property does not have the appropriate type, then the
// property will not be added to the new object in the db.
// // Example
// schema = {id: "number", name: "string", age: "number", married: "boolean"}
// DB = []
// model("add", {id: 1, name: "Joe", age: "32", address: "Muntaner 262, Barcelona", married: "to Mary"})
// DB // [{id: 1, name: "Joe"}] => married and age not added because of the wrong type (why?)
schema = {
  id: "number",
  name: "string",
  age: "number",
  married: "boolean"
}
DB = [];

function model(add, obj) {
  if (add) { // if add should evaluate to true
    var newObj = {};
    for (var key in obj) {
      if (key in schema && typeof obj[key] == schema[key]) {
        newObj[key] = obj[key];
      }
    }
    DB.push(newObj);
  } else {
    return;
  }
}
model("add", {
  id: 1,
  name: "Joe",
  age: "32",
  address: "Muntaner 262, Barcelona",
  married: "to Mary"
});


// ex 11
// Schema force with Default
// We will now make sure that missing values are defaulted to a certain value.
// From now on, the value of a given property of the schema object will be formed by an object
// with keys "type" and "default". The type-setting system of the previous exercise should work
// in the same way; with the exeption of the new syntax. If no default key is added then the given
// property will not be added if missing. If an input is not present or breaking an other of the schema rules,
// the value will be set to the default.
// Example:
// schema = {
// name: {type: "string", default: "NoBody"},
// age: {type: "number"},
// married: {type: "boolean", default: false}
// };
// DB = [];
// model("add", {id: 1, name: "pedro", age: "32", address: "Muntaner, Barcelona, Spain"};
// DB // [{name: "Pedro", married: false}] => married set to default even if missing
// model("add", {name: 43, married: "asdfasdf"});
// DB /* [
// {name: "Pedro", married: false},
// {name: "NoBody", married: false}] => married and name set to default even wrong type */
// model("add", {name: "43", married: true, age: 20});
// DB /* [
// {name: "Pedro", married: false},
// {name: "NoBody", married: false},
// {name: "43", married: true, age: 20}] => married and name set to default even wrong type */


schema = {
  name: {
    type: "string",
    default: "NoBody"
  },
  age: {
    type: "number"
  },
  married: {
    type: "boolean",
    default: false
  }
};

DB = [];

function model(add, obj) {
  var newObj = {};
  for (var key in obj) {
    if (key in schema && (typeof obj[key] == schema[key].type)) {
      // if key in schema and typeof value is equal to schema value
      console.log('if');
      newObj[key] = obj[key];
      // assign object value to key
    } else if (key in schema && ((typeof obj[key] != schema[key].type) && (schema[key].default != null))) {
      newObj[key] = schema[key].default;
      // assign schema value to key
    }
  }
  DB.push(newObj);
}

model("add", {
  id: 1,
  name: "pedro",
  age: "32",
  address: "Muntaner 262, Barcelona, Spain",
  married: 'maybe'
});


// ANOTHER METHOD
// var DB =[]
// schema = {
//     name: {type: "string", default: "NoBody"},
//     age: {type: "number"},
//     married: {type: "boolean", default: false}
//     }
// var model = (add, input)=>{
// var obj ={}
//   for(var key in input){
//     if(key in schema){
//       if(schema[key].type != typeof input[key]){
//         input[key]=schema[key].default
//       }
//       if((schema[key].type) == typeof (input[key])){
//         obj[key]=input[key]
//       }
//     }
//   }
//   for(key in schema){
//     if(!obj[key] && schema[key].default != undefined){
//       obj[key]=schema[key].default
//     }
//   }
//      DB.push(obj)
//     return DB;
//   }
// model("add", {id: 1, name: "pedro", age: "32", address: "Rue de la Science 23, Brussels"})


// ex 12
// Write 4 functions called
// bankAccount, withdraw, deposit and balance.
// They keep track of the amount added and removed from a
// bank account when called bankAccount function.
// The bankAccount and balance functions takes no argument
// and withdraw and deposit only take one argument.
// Example
// bankAccount()
// withdraw(2)
// withdraw(5)
// deposit(4)
// deposit(1)
// balance() // -2
var balance = 0;

function bankAccount() {

  withdraw = function(amount) {
    balance -= amount;
  },
  deposit = function(amount) {
    balance += amount;
  },
  balance = function() {
    return balance;
  }
};

deposit(100);
balance();
withdraw(45);
balance();


// ex 13
// Write a function called Splice Which extrapolates properties from an
// object and uses them for a newly created object. this function can take
// 3 arguments: the first is an object, the second and third are numbers.
// The second argument indicates the position of the key/value pair we
// want to start taking properties from (splicing) and the third one
// indicates how many you are remaining.
// So for instance splice(0,2) refers to the positions 0 and 1 of the object
// having the following object: var obj = {a: 1, b: 2, c: 2} and calling the
// function splice with the arguments obj, 0, 2 should return {a: 1, b: 2}
// Example:
// splice(obj, 0,2) returns : {a: 1, b: 2}
// We assume that, as it is common in computer science, the first element of an object is 0 and not 1.
// If the third argument is not passed it should default to 1.
// Example
var obj = {
  a: 1,
  b: 2,
  c: 2
};

var newObje = splice(obj, 0, 2);
// newObje => {a: 1, b: 2}
var newObje = splice(obj, 2, 2);
// newObje => {c:2}
var newObje = splice(obj, 5, 2);
// newObje => {}
var newObje = splice(obj, 0);
// newObje => {a:1}
var newObje = splice(obj, 0, 0);
// newObje => {}


var obj = {
  a: 1,
  b: 2,
  c: 2,
  d: 3,
  e: 4
};

function splice(obj, pos, remain = 1) {

  var newObj = {};
  // convert obj to array

  var arr = []; // empty array
  for (var p in obj) { // go through the key/value
    var o = {}; //create local object for each key/value pair
    o.value = obj[p];
    o.key = p;
    arr.push(o); // pushing each object to array as key/value
  }
  // check the pos is not negative,
  // check the pos is not more than the length-1
  // check if the total to be sliced is not more than the array length
  if (pos >= 0 && pos < arr.length && (pos + remain) <= arr.length) {
    arr = arr.slice(pos, (pos + remain));
    //
    arr.forEach(function(item) {
      newObj[item.key] = item.value; // pushing to resulting object. newObj[item.key] creates object key.item.value is the value
    });
    return newObj;
  } else {
    return "please check pos and remain value!";
  }
}

var newObj = splice(obj, 0, 2);
console.log(newObj);

var newObj = splice(obj, 2, 2);
// newObj => {c:2}
var newObj = splice(obj, 5, 2);
// newObj => {}
var newObj = splice(obj, 0);
// newObj => {a:1}
var newObj = splice(obj, 0, 0);



// var obj = {a: 1, b: 2, c: 2,d:3,e:4};

// function splice(obj, pos, remain) {
//   if (arguments.length ==2) {
//     remain = 1;
//   }

//   var newObj={};

//   var count=0;

//   for (var p in obj) {
//     if( (count >= pos  && count<remain) || (pos !=0 && pos == remain && pos == count) )
//     newObj[p] = obj[p];
//     count++;
//   }
//  return newObj;
// }






// ex 14
// Write a function called sort that sorts the values of an object,
// which should all be numbers, from the smallest to the biggest.
// The function will return a new object of which the keys are the indexes
// going from 0 to n; where n is the number of properties of the object minus 1.
// Example
// obj = {
//   a: 1,
//   b: 20,
//   c: 3,
//   d: 4,
//   e: 1,
//   f: 4
// };

// sort(obj); // {0: 1, 1: 1, 2: 3, 3: 4, 4: 4, 5: 20}


obj = {
  a: 1,
  b: 20,
  c: 3,
  d: 4,
  e: 1,
  f: 4
};

sort(obj); // {0: 1, 1: 1, 2: 3, 3: 4, 4: 4, 5: 20}

function sort(obj) {

  var sortable = [];
  for (var key in obj) {
    sortable.push([key, obj[key]]);
  }
  sortable.sort(function(a, b) {
    return a[1] - b[1]; // sorted values
  });

  var sortedObj = {};
  var counter = 0;
  for (var k in sortable) {
    sortedObj[counter] = sortable[k][1];
    counter++;
  }
  return sortedObj;
}

var returnedObj = sort(obj);
console.log(returnedObj);



// ex 15
// Extend the functionality of the previous function Sort to include the possibility
// of having different types of sorting according to the arguments we pass. we need to
// be able to decide if sorting by keys or by value and if in ascending or descending order.
// please also note that the keys are letters and the values are numbers so should the
// sorting be by key it needs to sort alphabetically.

// Example
var obj = {a: 1, b: 20, c: 3, d: 4, e: 1, f: 4};
sort(obj,'keys','ascending');
//Object {0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f"}
sort(obj,'keys','descending');
//Object {0: "f", 1: "e", 2: "d", 3: "c", 4: "b", 5: "a"}
sort(obj,'values','ascending');
//Object {0: 1, 1: 1, 2: 3, 3: 4, 4: 4, 5: 20}
sort(obj,'values','descending');
//Object {0: 20, 1: 4, 2: 4, 3: 3, 4: 1, 5: 1}

Note: should the second or the third argument be missing the function should console.log
     the folllowing message:"missing argument here!".

var obj = {
  a: 1,
  b: 20,
  c: 3,
  d: 4,
  e: 1,
  f: 4
};

function sort(obj, KeyOrVal, AscOrDsc) {

  if (!KeyOrVal || !AscOrDsc) {
    return 'missing argument here!';
  }
  var sortable = [];

  for (var key in obj) {
    sortable.push([key, obj[key]]);
  }

  if (KeyOrVal == "keys") {
    sortable.sort(function(a, b) {
      if (AscOrDsc == "ascending") {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
      } else {
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
      }
      return 0;
    });


  } else {
    sortable.sort(function(a, b) {
      if (AscOrDsc == "ascending") {
        return a[1] - b[1]; // sorted keys
      } else {
        return b[1] - a[1];
      }
      return 0;
    });
  }

  var sortedObj = {};

  var counter = 0;
  for (var k in sortable) {
    sortedObj[sortable[k][0]] = sortable[k][1];
    counter++;
  }
  return sortedObj;
}
var returnedObj = sort(obj, 'keys', 'descending');
console.log(returnedObj);




//obj = {a: 1, b: 20, c: 3, d: 4, e: 1, f: 4};
// sort(obj); // {0: 1, 1: 1, 2: 3, 3: 4, 4: 4, 5: 20}

// obj = {a: 1, b: 20, c: 3, d: 4, e: 1, f: 4};

// function sort(obj, keyVal, ascDes) {

//   var sortable = [];
//   for(var key in obj) {
//     // console.log(key);
//     sortable.push([key, obj[key]]);
//   }
//   sortable.sort(function(a,b){
//     return a[1] - b[1]; // sorted values
//   });

//   console.log('here',sortable);

//   var sortedObj = {};
//   var counter = 0;
//   for(var k in sortable){
//     //console.log(sortable[k][0]);
//   sortedObj[sortable[k][0]] = sortable[k][1];
//   counter++;
//   }
//  return sortedObj;
// }

// var returnedObj = sort(obj);
// console.log(returnedObj);



// another method for ex 15....
// var obj = {a: 1, b: 20, c: 3, d: 4, e: 1, f: 4}

// function findIt(obj, value) {
//   return Object.keys(obj).find(key => obj[key] === value);
// }

// function sort(obj, type, order) {
//   var arr = Object.keys(obj)
//   var arr2 = Object.values(obj)
//   var newObj = {}
//   if(type == 'keys'){
//     if(order == 'ascending'){
//       arr = arr.sort()
//       arr.forEach(function(key){
//         newObj[key] = obj[key]
//       })
//     }else if (order == 'descending'){
//       arr = arr.sort().reverse()
//       arr.forEach(function(key){
//         newObj[key] = obj[key]
//       })
//     }
//   }else if (type == 'values'){
//     if(order == 'ascending'){
//       arr2 = arr2.sort((a, b)=> a - b)
//       arr2.forEach(function(value){
//                 newObj[findIt(obj,value)] = value
//       })
//     }else if (order == 'descending'){
//       arr2 = arr2.sort((a, b)=> b - a)
//       arr2.forEach(function(value){
//                 newObj[findIt(obj,value)] = value
//       })
//     }
//   }
//     return newObj
// }
// sort(obj,'values','ascending')






