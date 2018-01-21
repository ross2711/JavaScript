var _ = {};

// ARRAYS

// _.first(array, [n])
// Returns an array with the first n elements of an array.
// If n is not provided it returns an array with just the first element.
_.first = function (array, n) {

  if (!(array && array.length)) return [];
  if (!Array.isArray(array)) array = Array.prototype.slice.call(array); // removes functions from arguments object leaving only normal array keys. converts to a normal array
  if (typeof n === 'number' && n > 0) return array.slice(0, n); // returns an array with the first n elements
  return [array[0]];  // returns the first element of the array

};

// _.last(array, [n])
// Returns an array with the last n elements of an array.
// If n is not provided it returns an array with just the last element.
_.last = function (array, n) {
  if (!(array && array.length)) return [];
  if (!Array.isArray(array)) array = Array.prototype.slice.call(array);
  if (typeof n === 'number' && n > 0) return array.slice(-n); // returns an array with the last n elements
  return [array[array.length - 1]]; // returns the last element in the array
};

// _.uniq(array)
// Produces a duplicate-free version of the array, using === to test equality.
// In particular only the first occurence of each value is kept.
_.uniq = function (array) {
  var uniqueArray = [];
  for (var i = 0; i < array.length; i++) {
    var el = array[i];
    if (uniqueArray.indexOf(el) === -1) uniqueArray.push(el);
  }
  return uniqueArray;
};



// OBJECTS

// _.extend(destination, source)
// Copies all the own enumerable properties in the source object over
// to the destination object, and returns it (without using `Object.assign`).
_.extend = function (destination, source) {
  for (var prop in source) {
    if (source.hasOwnProperty(prop)) {
      destination[prop] = source[prop];
    }
  }
  return destination;
};

// _.defaults(destination, source)
// Fills in undefined properties in the destination object
// with own enumerable properties present in the source object,
// and returns the destination object.
_.defaults = function (destination, source) {
  for (var prop in source) {
    if (source.hasOwnProperty(prop) && destination[prop] === undefined) {
      destination[prop] = source[prop];
    }
  }
  return destination;
};

// COLLECTIONS

// _.each(collection, iteratee, [context])
// Iterates over a collection of elements (i.e. array or object),
// yielding each in turn to an iteratee function, that is called with three arguments:
// (element, index|key, collection), and bound to the context if one is passed.
// Returns the collection for chaining.
_.each = function (collection, iteratee, context) {
  if (Array.isArray (collection)) {
    for (var i=0; i < collection.length; i++) {
      iteratee.call(context, collection[i], i, collection);
    }
  }
  else {
    for (i in collection) {
      if (collection.hasOwnProperty(i)) iteratee.call(context, collection[i], i, collection);
    }
  }
  return collection;
};

// _.contains(collection, value)
// Returns an array of indexes / keys where value can be found in the collection.
// TIP: here's a demo of how you can re-use already implemented methods in clever ways.
_.contains = function (collection, value) {
  var res = [];
  _.each(collection, function (el, key) {
    el === value && res.push(key);
  });
  return res;
};

// _.map(collection, iteratee, [context])
// Returns a new array of values by mapping each value in collection through iteratee.
// Each invocation of iteratee is called with three arguments:
// (element, index|key, collection), and bound to the context if one is passed.
_.map = function (collection, iteratee, context) {
  var newArray = [];
  _.each(collection, function (element, index, collection) {
    newArray.push(iteratee.call(context, element, index, collection));
  });

  return newArray;
};

// _.reduce(collection, iteratee, [accumulator], [context])
// Reduce boils down a collection of values into a single value.
// Accumulator is the initial state of the reduction,
// and each successive step of it should be returned by iteratee.
// Iteratee is passed four arguments: (accumulator, element, index|key, collection),
// and bound to the context if one is passed. If no accumulator is passed
// to the initial invocation of reduce, iteratee is not invoked on the first element,
// and the first element is instead passed as accumulator for the next invocation.
_.reduce = function (collection, iteratee, accumulator, context) {
  _.each(collection, function (el, key) {
    if (accumulator === undefined) {
      accumulator = el;
    } else {
      accumulator = iteratee.call(context, accumulator, el, key, collection);
    }
  });
  return accumulator;
};

// _.filter(collection, predicate, [context])
// Looks through each value in the collection, returning an array of all the values
// that pass a truth test (predicate). Predicate is called with three arguments:
// (element, index|key, collection), and bound to the context if one is passed.
_.filter = function (collection, predicate, context) {
  var filtered = [];

  _.each(collection, function (element, key, collection) {
    if (predicate.call(context, element, key, collection)) filtered.push(element); });
  return filtered;
};

// _.reject(collection, predicate, [context])
// Looks through each value in the collection, returning an array of all the values
// that don't pass a truth test (predicate). Predicate is called with three arguments:
// (element, index|key, collection), and bound to the context if one is passed.
// TIP: can you reuse _.filter()?
_.reject = function (collection, predicate, context) {
  var res = [];
  _.filter(collection, function (el, key) {
    if (!predicate.call(context, el, key, collection))
      !el && res.push(el);
  });
  return res;
};

// _.every(collection, [predicate], [context])
// Returns true if all values in the collection pass the predicate truth test.
// Predicate is called with three arguments:
// (element, index|key, collection), and bound to the context if one is passed.
// Short-circuits and stops traversing the list if a false element is found.
// TIP: without the short-circuiting you could reuse _.reduce(). Can you figure how?
// Because of the short-circuiting though, you need to re-implement a modified _.each().
_.every = function (collection, predicate, context) {
  // return _.reduce (collection, function (accumulator, el, key, collection) {
  //   if (accumulator) return
  //   return // next state of accumulator
  // }, true, context);

  var pass = true;
  _.modEach = function (collection, iteratee, context) {
    if (Array.isArray(collection)) {
      var i;
      for (i = 0; i < collection.length; i++) {
        iteratee.call(context, collection[i], i, collection);
        if (pass === false) break;
      }
    } else {
      var property;
      for (property in collection) {
        if (collection.hasOwnProperty(property)) {
          iteratee.call(context, collection[property], property, collection);
          if (pass === false) break;
        }
      }
    }
    return collection;
  };
  _.modEach(collection, function (element, key) {
    if (!predicate.call(context, element, key, collection)) {
      pass = false;
    }
  });
  return pass;
};

// _.some(collection, [predicate], [context])
// Returns true if any value in the collection passes the predicate truth test.
// Predicate is called with three arguments:
// (element, index|key, collection), and bound to the context if one is passed.
// Short-circuits and stops traversing the list if a true element is found.
// TIP: what method that you have already implemented can be reused here?


_.eachModified = function (collection, iteratee, context) {
  if (Array.isArray (collection)) {
    for (var i=0; i < collection.length; i++) {
      if (iteratee.call(context, collection[i], i, collection)) {
        return true;
      }
    }
  }
  else {
    for (i in collection) {
      if (collection.hasOwnProperty(i)) {
        if (iteratee.call(context, collection[i], i, collection)) return true;
      }
    }
  }
  return false;
};

_.some = function (collection, predicate, context) {
  return _.eachModified (collection, predicate, context);
};

// _.invoke(collection, methodName, *arguments)
// Returns an array with the results of calling the method
// indicated by methodName on each value in the collection.
// Any extra arguments passed to invoke will be forwarded on to the method invocation.
_.invoke = function (collection, methodName, ...args) {
  var arrInit = [];
  _.map(collection, function (element) {
    arrInit.push(element[methodName](...args));
  });
  return arrInit;
};

// _.pluck(collection, propertyName)
// A convenient version of what is perhaps the most common use-case for map:
// given an array of objects (collection), iterates over each element
// in the collection, and returns an array with all the values
// corresponding to the property indicated by propertyName.
_.pluck = function (collection, propertyName) {
  return _.map(collection, function (element) {
    return element[propertyName];
  });
};

// FUNCTIONS

// _.once(func)
// Creates a version of the function that can only be called one time.
// Repeated calls to the modified function will have no effect,
// returning the value from the original call. Useful for initialization functions,
// instead of having to set a boolean flag and then check it later.
_.once = function (func) {
  var ogValue;
  var called = false;

  return function () {
    if (!called) {
      ogValue = func(...arguments);
      called = true;
    }
    return ogValue;
  };
};

// _.memoize(func)
// Memoizes a given function by caching the computed result.
// Useful for speeding up slow-running computations.
// You may assume that the memoized function takes only one argument
// and that it is a primitive. Memoize should return a function that when called,
// will check if it has already computed the result for the given argument
// and return that value instead of recomputing it.
_.memoize = function (func) {
  var cache = {};
  return function (x) {
    cache.hasOwnProperty(x) || (cache[x] = func(x));
    return cache[x];
  };
};

// _.delay(function, wait, *arguments)
// Much like setTimeout(), invokes function after waiting milliseconds.
// If you pass the optional arguments, they will be forwarded
// on to the function when it is invoked.
_.delay = function (func, wait, ...args) {
  return setTimeout(function () {
    return func.call(this, ...args);
  }, wait);
};

// _.throttle(function, wait)
// Returns a new, throttled version of the passed function that,
// when invoked repeatedly, will only call the original function
// at most once per every wait milliseconds, and otherwise will
// just return the last computed result. Useful for rate-limiting
// events that occur faster than you can keep up with.
_.throttle = function (func, wait) {
  var result;
  var t1 = 0;
  return function () {
    if (Date.now() - t1 > wait) {
      result = func.apply(this, [...arguments]);
      t1 = Date.now();
    }
    return result;
  };
};

// Allow tests to run on the server (leave at the bottom)
if (typeof window === 'undefined') {
  module.exports = _;
}