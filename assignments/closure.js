// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
let studentStarAwarder = (first, last, pronoun) =>{
  const firstName = first;
  const lastName = last;
  let studentPronoun = pronoun;
  let stars = 0;

  return function(){
    stars++;
    console.log(`${firstName} ${lastName} gets a star... ${studentPronoun} now has ${stars} star(s).`);
  }
}

const joeStarAwarder = studentStarAwarder('Joe', 'John', 'he');

joeStarAwarder();
joeStarAwarder();
joeStarAwarder();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.

  let count = 0;
  
  let counter = function() {
    return ++count;
  }
  return counter;
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

const myCounter = counterMaker();
console.log(' --- standard counter ---');
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
const counterMakerLimited = (limit) =>{
  let count = 0;
  return function(){
    if(count < limit){
      return ++count;
    }
    else{
      count = 0;
      return count;
    }
  }
}

const myLimitedCounter = counterMakerLimited(3);
console.log(' --- limited counter ---');
console.log(myLimitedCounter());
console.log(myLimitedCounter());
console.log(myLimitedCounter());
console.log(myLimitedCounter());
console.log(myLimitedCounter());
console.log(myLimitedCounter());
console.log(myLimitedCounter());


// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  count = 0;

  const advancedCounter = {
    increment: function(){
      return ++count;
    },

    decrement: function(){
      return --count;
    }
  };

  return advancedCounter;
};

const myCounterFactory = counterFactory();
console.log(' --- counter factory ---');
console.log(myCounterFactory.increment());
console.log(myCounterFactory.increment());
console.log(myCounterFactory.increment());
console.log(myCounterFactory.decrement());
console.log(myCounterFactory.decrement());