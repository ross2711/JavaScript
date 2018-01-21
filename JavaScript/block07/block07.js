//Create an array of movies with the following schema:
// var moviesDB =[
//         {
//          genre:'Horror',movies: [
//                     {title:'title goes here', releaseDate:'release goes here' }
//                 ]
//         }
// ]
//add to it the following movies:
//==============thriller==============
//the usual suspects  1995
//the inside man      2006
//seven                                  1995
//shutter island          2010
//inception                          2010
//==============action================
//the dark knight            2008
//the matrix                    1999
//the bourne identity 2002
//mad max fury road   2015
//=============commedy=================
//shaun of the dead   2004
//hot fuzz                           2007
//trading places      1983
//Write a function that takes one argument, the genre and based on it it
//will console.log the following message replacing the VAR with actual values...
//The genre with the highest number of movie is {GENRE WITH HIGHEST NUMBER OF MOVIES}
//There are {HOW MANY MOVIES} movies in the category of {GENRE} and these are:
//                                TITLE           : {TITLE}
//                                year of release : {RELEASE DATE}`
// var thriller = ({
//   quantity: moviesDB[0].movies.length,
//   genre: 'thriller'
// });
// var action = ({
//   quantity: moviesDB[1].movies.length,
//   genre: 'action'
// });
// var comedy = ({
//   quantity: moviesDB[2].movies.length,
//   genre: 'comedy'
// });
// var movie1 = title: {
//     moviesDB[0].movies[0].title
//   },
//   ReleaseDate: {
//     moviesDB[0].movies[0].title.releaseDate
//   }
// };
// var movie2 = moviesDB[0].movies[1].title.releaseDate;
// var movie3 = moviesDB[0].movies[2].title;
// var movie4 = moviesDB[0].movies[3].title;
// var movie5 = moviesDB[0].movies[4].title;
var moviesDB = [{
    genre: 'thriller',
    movies: [{
        title: 'the usual suspects',
        releaseDate: '1995'
      },
      {
        title: 'the inside man',
        releaseDate: '1995'
      },
      {
        title: 'seven',
        releaseDate: '1995'
      },
      {
        title: 'shutter island',
        releaseDate: '2010'
      },
      {
        title: 'inception',
        releaseDate: '2010'
      }
    ]
  },
  {
    genre: 'action',
    movies: [{
        title: 'the dark knight',
        releaseDate: '2008'
      },
      {
        title: 'the matrix',
        releaseDate: '1999'
      },
      {
        title: 'the bourne identity',
        releaseDate: '2002'
      },
      {
        title: 'mad max fury road',
        releaseDate: '2015'
      }
    ]
  },
  {
    genre: 'comedy',
    movies: [{
        title: 'shaun of the dead',
        releaseDate: '2004'
      },
      {
        title: 'hot fuzz ',
        releaseDate: '2007'
      },
      {
        title: 'trading places ',
        releaseDate: '1983'
      }
    ]
  }
];


var temp = 0;
var max = 0;
var genre = '';
var moviesArr = [];

for (var i = 0; i < moviesDB.length; i++) {
  movieObj = moviesDB[i];
  temp = movieObj.movies.length;
  if (temp > max) {
    max = temp;
    genre = movieObj.genre;
    for (var j = 0; j < movieObj.movies.length; j++) {
      moviesArr.push(movieObj.movies[j].title);
    }
  }
}
var m = moviesArr.toString();


console.log(`The genre with the highest number of movies is ${genre}`);
console.log(`There are ${max} movies in the category of ${genre} and these are:`)
console.log(`${m}`);



// Another method
// var moviesDB =[
//         {
//          genre:'thriller',
//          movies: [
//                     {title:'the usual suspects', releaseDate:'1995' },
//                     {title:'the inside man', releaseDate:'2006' },
//                     {title:'seven', releaseDate:'1995' },
//                     {title:'shutter island', releaseDate:'2010' },
//                     {title:'inception', releaseDate:'2010' },
//                 ]
//         },
//         {
//          genre:'action',
//          movies: [
//                     {title:'the dark knight', releaseDate:'2008' },
//                     {title:'the matrix', releaseDate:'1999' },
//                     {title:'the bourne identity', releaseDate:'2002' },
//                     {title:'mad max fury road', releaseDate:'2015' },
//                 ]
//         },
//         {
//          genre:'comedy',
//          movies: [
//                     {title:'shaun of the dead', releaseDate:'2004' },
//                     {title:'thot fuzz', releaseDate:'2007' },
//                     {title:'trading places', releaseDate:'1983' },
//                 ]
//         }
// ]

// function findIt(obj, value) {
//   return Object.keys(obj).find(key => obj[key] === value);
// }

// function movieInfo(genre){
//   var amount = {}
//   var sort = []
//   moviesDB.forEach(function(section){
//     amount[[section['genre']]] = section['movies'].length
//   })
//   sort=Object.values(amount)
//   sort=sort.sort((a,b)=> b - a)
//   console.log(`The genre with the highest number of movie is ${findIt(amount,sort[0])}`)

//     moviesDB.forEach(function(section){
//       var info = {}
//     if(section['genre'] == genre){
//       console.log(`There are ${section['movies'].length} movies in the category of ${genre} and these are: `)
//       section['movies'].forEach(function(movie){
//           info['title'] = movie['title']
//           info['releaseDate'] = movie['releaseDate']
//           console.log(info)
//       })
//     }
//   })
// }

// movieInfo('action')




// ex 02
//WRITE 4 FUNCTIONS

//1) *getTemp* which prompts the user to get the temperature to be converted and the
//current temperature scale.
//)2*toCelcius* which takes the temperature from getTemp and converts it to celsius
//)3*toFar* which takes the temperature from getTemp and converts it to fahrenheit
//)4*tellTemp* which takes the temperature and scale from which ever function was
//called.
//then it writes in the dom the followng message replacing the VAR with actual values.

//example :
//the temperature in {SCALE} is {TEMPERATURE}
//in case the user provides us with an unknown scale we should write in the dom
//the following message 'please provide us a temperature in celsius or fahrenheit'
//in case the temperature passed is not a number we should write to the dom the
//following message "temperature must be a number"


//getTemp* which prompts the user to get the temperature to be converted and the current temperature scale.
function getTemp() {
  var temp = prompt('what is the temperature?');
  var tempScale = prompt('what is current temperature scale? (fahrenheit or celcius)');
  if (tempScale != 'celcius' && tempScale != 'fahrenheit') {
    document.write(`<h1>please provide us a temperature in celsius or fahrenheit</h1>`)
    return;
  }
  tempScale == 'celcius' ? toCelcius(temp, 'Fahrenheit') : toFahr(temp, 'celcius');
}

// toCelcius* which takes the temperature from getTemp and converts it to celsius
function toCelcius(temp, scale) {
  // var scale = 'Celcius';
  var cel = parseInt(temp * 9 / 5 + 32);
  tellTemp(cel, scale);
}

// toFar* which takes the temperature from getTemp and converts it to fahrenheit
function toFahr(temp, scale) {
  // var scale = 'Fahrenheit';
  var far = parseInt((5 / 9) * (temp - 32));
  tellTemp(far, scale);
}

// tellTemp* which takes the temperature and scale from which ever function was called.
function tellTemp(number, scale) {;
  document.write(`<h1>the temperature in ${scale} is ${number}</h1>`);
}
getTemp();



// ex 3
// Write an object, called bankAccount, which has at least
// 3 methods (key value pairs in which the value is a function)
// called withdraw, deposit and balance which allows us to keep
// track of the money flow in the account. None of the methods
// defined withing bankAccount object take more than one argument
// and no other variables should be defined other than the
// bankAccount object.

// Also add method set to be able to set the account's total to
// a given amount and clear to reset the account's balance to 0.

// Example
// bankAccount // {withdraw: function..., deposit: function...,
// balance: function..., anythingElse...}

// Write an object, called bankAccount
var bankAccount = {
  total: 0,
  withdraw: cash => bankAccount.total -= cash,
  deposit: cash => bankAccount.total += cash,
  balance: () => bankAccount.total,
  set: cash => bankAccount.total = cash,
  clear: () => bankAccount.total = 0
};

bankAccount.withdraw(2);
bankAccount.withdraw(5)
bankAccount.deposit(4)
bankAccount.deposit(1)
bankAccount.balance() // -2

bankAccount.clear()
bankAccount.balance() // 0

bankAccount.set(10)
bankAccount.balance() // 10


// another method to do ex3
// var bankAccount = {
//   total : 0 ,
//   set: function(num){
//     this.total = num
//   },
//   clear: function(){
//     this.total = 0
//   },
//   withdraw : function(amount){
//     this.total -= amount
//   },
//   deposit : function(amount){
//     this.total += amount
//   },
//   balance: function(){
//     return this.total
//   }
// }
// bankAccount.withdraw(2)
// bankAccount.withdraw(5)
// bankAccount.deposit(4)
// bankAccount.deposit(1)
// bankAccount.balance()
// bankAccount.clear()
// bankAccount.balance()
// bankAccount.set(10)
// bankAccount.balance()


// EX 04

// Starting from the previous exercise add the possibility to
// initialize the account to a given initial amount.

// var bankAccount = {
//   total: 0,
//   withdraw: cash  =>  {bankAccount.total -= cash},
//   deposit:  cash  =>  {bankAccount.total += cash},
//   balance:   ()   =>  bankAccount.total,
//   set: cash => {bankAccount.total = cash},
//   clear: () => {bankAccount.total = 0}
// };

var bankAccount = function(cash) {
  this.total = cash || 0;
  this.withdraw = function(cash) {
    this.total -= cash;
  };
  this.deposit = function(cash) {
    this.total += cash;
  };
  this.balance = function() {
    return this.total;
  };
  this.set = function(cash) {
    this.total = cash;
  };
  this.clear = function() {
    this.total = 0;
  };
};

var account = new bankAccount(10);
var account = new bankAccount();
account.withdraw(2)
account.withdraw(5)
account.deposit(4)
account.deposit(1)
account.balance() // 8


// Ex 5
// Implement a representation of the universe where matter and energy is conserved. To do so implement one object
// called Universe that contains two objects within: Matter and Energy. If matter is destroyed; that is say we
// call Universe.Matter.destroy(5), then the amount of energy in the universe needs to be increased so
// that if we call Universe.Energy.total() we should obtain a total value of energy that has increased +5 compared
// to the energy value previous to calling Universe.Matter.destroy(5). Of course the total amount of Matter obtained
// by calling Universe.Matter.total()has been reduced by 5 compared to the initial value.
//   -
//   Implement this objects using context -
//   The Matter and Energy objects are defined within an object called Universe -
//   No other variable should be defined out of the Universe object -
//   Also implement the create methods
// for both matter an energy which are opposite to their counterparts

// Example
// Universe.Matter.total() // 0
// Universe.Energy.total() // 0

// Universe.Matter.destroy(5) // 0
// Universe.Matter.total() // -5
// Universe.Energy.total() // 5

// Universe.Energy.destroy(-5) // 0
// Universe.Matter.total() // -10
// Universe.Energy.total() // 10
//   >
//   Notes: Initially make your universe contain 0 matter and energy.Destroying a negative amount of
//   energy of matter is equal to creating a positive amount of each and viceversa
// for creating matter or energy.



var Universe = { // object universe contains 2 objects matter and energy
  matterTotal: 0,
  energyTotal: 0,
  Matter: {
    destroy: function(num) {
      Universe.Matter.create(num);
      Universe.matterTotal -= num;
    },
    create: function(num) {
      Universe.energyTotal += num;
    },
    total: function() {
      return Universe.matterTotal;
    }
  },
  Energy: {
    destroy: function(num) {
      Universe.Energy.create(num);
      Universe.energyTotal -= num;
    },
    create: function(num) {
      Universe.matterTotal += num
    },
    total: function() {
      return Universe.energyTotal;
    }
  }
};

Universe.Matter.total() // 0
Universe.Energy.total() // 0

Universe.Matter.destroy(5) // 0
Universe.Matter.total() // -5
Universe.Energy.total() // 5


Universe.Energy.destroy(-5) // 0
Universe.Matter.total() // -10
Universe.Energy.total() // 10



// ex06
// Implement the previous exercise using a constructor function called Universe.
// In this case we should be able to initialize the initial amount of energy.

// Example
// var protoUniverse = function (initialEnergy) {
// ...
// }

var protoUniverse = function(initialEnergy) {
  this.matterTotal = -initialEnergy,
    this.energyTotal = initialEnergy,

    this.total = function(type) {
      if (type == 'matter') {
        return this.matterTotal;
      } else {
        return this.energyTotal;
      }
    };

  this.destroy = function(type, num) {
    if (type == 'matter') {
      this.matterTotal -= num;
      this.energyTotal += num;
    } else {
      this.matterTotal += num;
      this.energyTotal -= num;
    }
  };
};

Universe = new protoUniverse(10)

Universe.total("matter") // -10
Universe.total("energy") // 10

Universe.destroy("matter", 5)
Universe.total("matter") // -15
Universe.total("energy") // 15

Universe.destroy("matter", 5)
Universe.total("energy") // -20
