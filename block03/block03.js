
// BLOCK 03

// EXERCISE 1
for (var i = 1; i < 101; i++) {
  console.log(i);
}

// EXERCISE 2
for (var i = 100; i >= 0; i--) {
  console.log(i);
}

// EXERCISE 3
var num = 0;
while(num < 101) {
    console.log('number', num);
    console.log(num % 2 != 0);
    num ++;
}

// EXERCISE 4
var arr = ['banana','pinapple','orange'];

arr.forEach(function(el, index) {
  console.log('Element is ' + el + ' and Index is ' + index);

// EXERCISE 5
var arr = ['banana',['hello'],12,true];

arr.forEach(function(el) {
    console.log(typeof el === 'string');
});

// EXERCISE 6
var arr = [{name:'Pedrito'}, ['Banana'],false,34,'hello',null,undefined];

arr.forEach(function(el, index) {
    if (typeof el === 'string') {
    console.log(true, index);
  } else {
    console.log(false, index);
  }
});

// EXERCISE 7
var arr =[1435,656,3234,96747458];

arr.forEach(function(el) {
    console.log(el % 2 === 0);
});

// EXERCISE 8
var arr  = ['mike','peter','luke','pedro','george','antonello'];
for (var ele of arr) {
  console.log(`Hello ${ele} how are you today?`);
};

// EXERCISE 9
var arr = [1,4,55,77,44,66,44,55];
var sum = 0;

for (var ele of arr) {
    sum = sum + ele;
};
console.log(`the the sum of the elements in the array is ${sum}`);

// EXERCISE 10
var arr = [2,4,10];
var sum = 1;
arr.forEach(function(el) {
  sum = sum * el;
});

console.log(`the result of multyplying each number of the array ${sum}`);

// EXERCISE 11
var arr =['john','mike','robert','peter','luke'];
var arr2= [];
arr.forEach(function(el) {
  arr2.push(el);
});

console.log(arr2);

// EXERCISE 12
var arr = [2,3,65,22];
var arr2 = [];
arr.forEach(function(el) {
  arr2.push(el*2);
});

console.log(arr2);

// EXERCISE 13
var arr = [1,2,3,4,5,65,23,6,'hello'];
var arr2  =[];
arr2 = arr.concat();
console.log(arr2);

// EXERCISE 14
var arr = [10,20,30, '55'];
var arr2 = [100,20,20, 55];

arr.forEach(function(el, i) {
    console.log(el === arr2[i]);
});

// EXERCISE 15
var arr = [10,20,30, '55'];
var arr2 = [100,20,20, 55];

arr.forEach(function(el, i) {
    console.log(el == arr2[i]);
});

// EXERCISE 16
var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]

arr2.forEach(function(el) {
    console.log(arr.includes(el));
});

// EXERCISE 17
var origString = 'Antonello LIKEs PlaYing GaMeS';
var lCase = origString.toLowerCase().split(' ');

var final = [];
for (var i = 0; i < lCase.length; i++) {
    final.push(lCase[i]);
}

console.log(final.join(' '));

// EXERCISE 18
var str = 'reeb dloc fo tnip ecin a htiw dna oyam htiw seotatop deirf peed evol I';
var one = str.split('');

var final = [];
for (var i = one.length-1; i >= 0; i--) {
    final.push(one[i]);
}

console.log(final.join(''));

// EXERCISE 19
var name = 'Ada Lovelace'
var fullName = name.split(' ');
var firstName = fullName[0];
var secondName = fullName[1][0];
var newName = `${firstName} ${secondName}.`
console.log(newName);


// EXERCISE 20


