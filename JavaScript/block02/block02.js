// EXERCISE 1
// take the value car from the below array and assign it to a new array called arr2 as its first element.
// Then console.log arr2.
// var arr = ['milk','cheese','car','lime']

var arr = ['milk','cheese','car','lime'];
var arr2 = [arr[2]];

console.log(arr2);


//EXERCISE 2

var arr = ["milk", "cheese", "car", "lime"];
var newArr = arr.reverse();
console.log(newArr);


// EXERCISE 3

var arr  =  ['banana','apple','orange'];
var arr2 =  ['tv','dvd-player','playstation'];

var temp = arr[1];

var temp2 = arr2[1];

arr[1] = temp2;

arr2[1] = temp;

console.log(arr);

console.log(arr2);


// EXERCISE 4

var arr = ['cheese','salame','bread','water','pizza'];

arr.splice(2, 1);

console.log(arr);


// EXERCISE 5

var arr = ['car','soap','banana','tv','toothbrush'];

arr.splice(0,1);

arr.splice(-1);

// arr.splice(arr.indexOf('toothbrush') , 1);

console.log(arr);


// EXERCISE 6

var arr = [1,2,3,4,5,6,7,8,9,0,3,4,523,44,3454];

arr.splice(0);

console.log(arr);

// EXERCISE 7

var arr = ["one","two","three","four"];
var newArr = [];

newArr.push(arr[0]);

newArr.push(arr[1]);

newArr.push(arr[2]);

newArr.push(arr[3]);

console.log(newArr);

// EXERCISE 8

var arr = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office'];

var arr2 = [];

arr2.push(arr[2], arr[4]);

console.log(arr2);

// EXERCISE 9

var arr = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']

var arr2 = arr.concat();

arr2.splice(-1);

console.log(arr2);

// EXERCISE 10

var arr = ['banana','kiwi','orange','apple','banana'];

var arr2 = arr.concat();

arr2.splice(0,2);

arr2.splice(2,1);

// arr2 = arr2.concat(arr[], arr[]);

console.log(arr2);

console.log(arr);

// EXERCISE 11

var arr = ['glass','car','watch','sofa','macbook'];

console.log(arr.indexOf('car'));

console.log(arr.indexOf('watch'));

//EXERCISE 12

var arr = ['green','red','black','blue','brown','yellow','purple'];

console.log(arr.indexOf('green') !== -1);
console.log(arr.indexOf('red') !== -1);
console.log(arr.indexOf('pink') !== -1);

// EXERCISE 13

var arr = ['green','red','black','blue','brown','yellow','purple'];

console.log(!arr.includes('green'));
console.log(!arr.includes('red'));
console.log(!arr.includes('pink'));

// EXERCISE 14

var str = 'I,Really,Like,Pizza';

var newString = str.split(',').join(' ');

console.log(newString);

// EXERCISE 15

var word = 'ba_*!*_na_*!*_na';

word = word.split('_*!*_').join('');

console.log(word);

// EXERCISE 16

var one   = {name:'Ross'};
var two   = ['name', 'Ross'];
var three = [[],[],{},"Ross",3,function(){}];

console.log(Array.isArray(one));
console.log(Array.isArray(two));
console.log(Array.isArray(three));


