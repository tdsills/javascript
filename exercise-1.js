// ***For all the exercises, be sure to log the output of the function to the console.***

/************************************************************************************/
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...
// 
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("TEK");
  } if (i % 5 === 0) {
    console.log("camp");
  } if (i % 3 === 0 && i % 5 === 0) {
    console.log("TEKcamp");
  } else {
    console.log(i);
  }
}

/************************************************************************************/
//Write a function that converts the current temperature from Fahrenheit to Celsius.

//your code...
function fahrenheitCelsius(fTemp) {
  let cTemp;
  cTemp = (fTemp - 32) * (5 / 9);
  return cTemp;
}

console.log(fahrenheitCelsius(14));

/************************************************************************************/
//Write a function that converts the Celsius temperature back to Fahrenheit.

//your code...
function celsiusFahrenheit(cTemp) {
  let fTemp;
  fTemp = cTemp * 1.8 + 32;
  return fTemp;
}
console.log(celsiusFahrenheit(14));
//   console.log(celsiusFahrenheit(20)); = 68
/************************************************************************************/
// Write a function to determine if someone is old enough to vote.  The function should return a boolean of true or false.

//your code...
function canVote(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}
console.log(canVote(17));

/************************************************************************************/
// Write a function that converts a string to an array. It should return an array.

//your code...
// function strToArr() {
//   return [];
// }
let str = "love, hate, pride";
let arr = str.split(",");
console.log(arr);

/************************************************************************************/
// Write a function that reverses your telephone number.  It should return the reversed telephone number.

//your code...
function reversePhone(number) {
  number = number + "";
  return number.split("").reverse().join("");
}
console.log(reversePhone(5554735996));

/************************************************************************************/
// Write a function that returns a car object using some given info about your car. Required inputs are the make, model, year, and color.

//your code...
let myCar = {
    make: "Buick",
    model: "Regal",
    year: 2011,
    color: "grey",
  };
  
  console.log(myCar["make"]);



/************************************************************************************/
// Write a function that accepts a list of numbers.  The function should identify each number as being even or odd.  The function should output a set of key value pairs, with the key being the number, and the value being the string "even" or "odd".

//example : [10,23,3,4] => function() => {10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'}

//your code...
let arr = [3, 15, 24, 36];
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i] + " , even");
  } else {
    console.log(arr[i] + " , odd");
  }
}


/************************************************************************************/
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Write a "for" loop that console.log()'s the first value in the  array, and every 3rd number, i.e. 0, 3, 6, 9: the zeroth, third, sixth, and ninth values.

//your code...
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 0; i < nums.length; i += 3) {
  if (i % 3 === 0) {
    console.log(i);
  }
}



/************************************************************************************/
const foodArray = [
    "potatoes",
    "tamales",
    "lemon",
    "strawberries",
    "chocolate",
    "pudding",
    { program: "TEKcamp" },
  ];
  let school = foodArray[foodArray.length - 1].program;
  // console.log(school);

//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

const adjectiveArray = [
  "salty",
  "spicy",
  "sour",
  "sweet",
  "rich",
  "creamy",
  "amazing",
];
function arr(foodArray, adjectiveArray) {
for (let i = 0; i < foodArray.length; i++) {
    let endsWithS = foodArray[i];
    if (i == 6) {
      console.log(foodArray[i].program + ' is ' + adjectiveArray[i]);
    } 
    else if (foodArray[i].endsWith('s')) { 
      console.log(foodArray[i] + ' are ' + adjectiveArray[i]);
    } 
      else { console.log(foodArray[i] + ' is ' + adjectiveArray[i]);
    }
  }
}
  arr(foodArray,adjectiveArray);

    // if (endsWithS.charAt(endsWithS.length-1).includes('s')) {

// Using both the foodArray and the adjectiveArray, write "for" loop that console.log()'s a sentence for each corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  i.e. "Potatoes are salty", "Lemon is sour".

/************************************************************* */
// Refactor the for() loop to be a while loop.

for (let i = 0; i < 10; i++) {
  // console.log(" the value of i in the loop is : " + i);
}

//your code...
let i = 0;

while (i < 10) {
    print i;
    i++;
}
console.log("the value of i in the loop is: " + i);
/************************************************************* */
//Multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code...
let par = 0;
let exp = 0;
let multi = 0;
let divs = 0;
function step1() {
  par = 30 + 2;
  console.log("The result of the first operation is " + par + ".");
}
function step2() {
  exp = 10 ** 2;
  console.log("The result of the second operation is " + exp + ".");
}
function step3() {
    multi = par * 20;
    console.log("The result of the third operation is " + multi + ".");
}
function step4() {
      divs = multi / exp;
      console.log("The result of the fourth operation is " + divs + ".");   
}
step1();
step2();
step3();
step4();

// let x = 30 + 2;
// let y = x * 20;
// let z = y / Math.pow(10, 2);

// console.log(z);

// (30 + 2) * 20 / 10^2
/************************************************************* */
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation values :

// ex : 3 is truthy, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.
console.log((!!20 ? "truthy" : "falsy") + " it's a number."); -
console.log((!!0 ? "truthy" : "falsy") + " because the number 0 is one of the 5 falsy values.");
console.log((!!"zero" ? "truthy" : "falsy") + " string isn't empty.");
const zero = 20;
console.log((!!zero ? "truthy" : " falsy") + " the variable is defined.");
console.log((!!null ? "truthy" : "falsy") + " is one of the 5 falsy values.");
console.log((!!"0" ? "truthy" : "falsy") + " the string isn't empty.");
console.log((!!!"" ? "truthy" : "falsy") + " the empty brackets aren't alone.");
console.log((!!{} ? "truthy" : "falsy") + " because of empty brackets.");
console.log((!!`() => {console.log("hello TEKcamp!")` ? "truthy" : "falsy") + " functions are truthy.");
console.log((!!125 ? "truthy" : "falsy") + " it's a number.");
console.log((!!undefined ? "truthy" : "falsy") + " because it is one of the 5 falsy value.");
console.log((!!"" ? "truthy" : "falsy") + " because an empty string is one of the 5 falsy values.");


/************************************************************* */
// Refactor the following code using a switch statement:

function ifToSwitch(day) {
    let text = "";
    switch (day) {
      case "monday":
        text = "we got a long week ahead of us...";
        break;
      case "tuesday":
        text =
          "tuesday's are still beterr than mondays, but LONG way to go still";
        break;
      case "wednesday":
        text = "We are smack dab in the middle of the week";
        break;
      case "thursay":
        text = "Thursday night... the mood is right";
        break;
      case "friday":
        text = "TGIF.  Friday truly is the best day of the week!";
        break;
      default:
        text = "It's a weekend!";
    }
    return text;
  }
  console.log(ifToSwitch("friday"));
/************************************************************* */
// Refactor the following statements to use ternary expressions:

// if (age > 21) console.log("adult");
// else {
//   console.log("minor");
// }
const age = 10;
const legal = (age >= 21) ? "adult" : "minor";
console.log(legal);

// if (age > 13 && age < 19) console.log("teen");
// else {
//   console.log("not a teenager");
// }

const kid = age > 13 && age < 19 ? "teen" : "not a teenager";
console.log(kid);

// if (age > 65) console.log("retired");
// else {
//   console.log("still working...");


  const old = age > 65 ? "retired" : "still working...";
  console.log(old);

/************************************************************* */
//Create an object literal representing yourself.  Set it equal to a variable that appropriately describes the object.  Include the following properties:
/*
        -name
        -age
        -gender
        -healthy ? (yes or no)
        -hobbies
        -profession
        -education

        -add a method on your object, entitled 'learn'.  The learn method should print out the message : "[your name] is learning JavaScript".  The learn method should print the value of the name property using the 'this' keyword.

        -add another method on your object of any action you want to perform, using some property that exists on your object.  Make sure to reference any properties on your objedct using the 'this' keyword.
        */

//your code...
let tSills = {
    fullName: "Taylor Sills",
    age: 27,
    gender: "female",
    goodHealth: "yes",
    hobbies: ["cooking", "anime", "crocheting"],
    profession: "Work in Progress",
    education: "Masters",
    learn: function () {
      console.log(this.fullName + " is learning Javacript.");
    },
    celebrate: function () {
      console.log(
        this.fullName + " will no longer be " + this.age + " come February 1st."
      );
    },
  };
  console.log(tSills.celebrate());
/************************************************************* */


  const year = 2021;
  const nums = [1, 2, 3, 4, 5];
  let sum = 0;
  let i = 0;
  const doubled = [];

  //Refactor the following statements into expressions

  // 1.
  // let year = 2021;


  // if (year > 2000 && year < 2100) { 
  //   console.log("welcome to the 21st century");  
  

  let year = 1999;
  let output = (year > 2000 && year < 2100) ? "welcome to the 21st century" : "you must be a time-traveler";
console.log("It's " + year + ", " + output + "!");

  // 2.
 let nums = [1, 2, 3, 4, 5];
 let sum = 0;
let numsTotal = nums.reduce(function (acc, val) {
    return acc + val
  }, 0)
  console.log(numsTotal);

  // 3.
  const nums = [1, 2, 3, 4, 5];
  const doubled = nums.map(i => i * 2);
  console.log(doubled);

    
/************************************************************* */
// Use array methods to solve the following problems.

let nums = [1, 2, 3, 4, 5];
// Square every number in the array.  Store the squares in a new array.
let squareEvery = nums.map(x => x ** 2);
console.log(squareEvery);




//Remove all numbers that are less than 5.  Store the results in a new array.
const fivePlus = [
  1,3,5, 7, 9, 1, 3, 5, 2, 3, 1, 23, 4, 232, 3, 4, 1, 2, 2, 2, 3, 4, 4, 1, 12, 11, 23, 3, 4, 5];
const newFive = fivePlus.filter(i => i > 5);
console.log(newFive);

// Create an array of 20 randomly generated integers.  Calculate the sum of the elements in the array.
const emptyArr = Array.from({length: 20}, () => Math.floor(Math.random() * 20));
console.log(emptyArr);

const sum = (acc, curVal) => acc + curVal;
console.log(emptyArr.reduce(sum));

//your code...

let showNums = [12, 22, 33, 44, 55, 66, 77, 88, 99, 101];
let divNums = showNums.map(function(nums) {
  return nums/2;
});
console.log(divNums);

//Print out the value of each number divided by 2.  There is no need to store the output in an array.

/************************************************************* */
/* Chess pieces have point values associated with them.  

        Pawn = 1, Rook = 5, Bishop = 3, Knight = 3, Queen = 9, King = N/A 

        Write a function that calculates the total point value of any given input list of Chess pieces.  
        ex : ['king','queen','pawn','pawn','pawn','bishop'] => chessCalc() => 15

        If there are invalid chess pieces, discard those elements.
        ex : ['iPhone','queen','pawn'] => chessCalc() => 10
        ['android'] => chessCalc() => null

        */
  // pawn = 1,
  // rook = 5,
  // bishop = 3,
  // knight = 3,
  // queen = 9,
  // king = null,
// let randChess = [
//   {piece: "pawn",
//   pieceVal: 1},
//   {piece: "rook",
//   pieceVal: 5},
//   {piece: "bishop",
//   pieceVal: 3},
//   {piece: "knight",
//   pieceVal: 3},
//   {piece: "queen",
//   pieceVal: 9},
//   {piece: "king",
//   pieceVal: null},
// ];




// function chessCalc(pieces, randChess) {
//   let pieceCal = [];
//   for (let i = 0; i < pieces.length; i++) {
//     let cal = randChess.pieces[i];
//   }
//   chessCalc(pieces, randChess);
//   let pieces = ["pawn", "rook", "bishop", "knight", "queen", "king"];
  // pieces.forEach(piece => {
  //   if (piece == chessCalc.pawn)
  //   return

//Couldn't figure this one out.
/************************************************************* */

const ones = [
  1,
  11,
  111,
  1111,
  11111,
  111111,
  1111111,
  11111111,
  111111111,
  1111111111,
];
ones.reverse();
console.log(ones);
//reverse the array, without modifying / `mutating` the ones array.

/************************************************************* */
//create a function called performer(cb) that takes in a callback function and runs that callback function.  The function should return the output of the callback function.

// function intro(callMe) {
//  return 'Hey! Call me ' + callMe;
// }
function cb(){
console.log("Taylor finally used a callback.");
}

function performer(cb) {
  cb();
}
performer(cb);


/************************************************************* */
// For the given list of developers :
const devs = [
  {
    name: "Cameron",
    age: 23,
    gender: "m",
    tech_stack: ["html", "css", "js", "React"],
  },
  {
    name: "Liz",
    age: 20,
    gender: "f",
    tech_stack: ["java", "spring-boot", "MySql"],
  },
  {
    name: "Chris",
    age: 102,
    gender: "m",
    tech_stack: ["react", "express", "python"],
  },
  {
    name: "Rashid",
    age: 27,
    gender: "m",
    tech_stack: ["thymeleaf", "postgres", "js", "Angular"],
  },
  {
    name: "Annie",
    age: 30,
    gender: "F",
    tech_stack: ["html", "scss", "less", "DynamoDB", "GraphQL"],
  },
  {
    name: "Dr. Patel",
    age: 52,
    gender: "M",
    tech_stack: null,
  },
  {
    name: "Isaiah",
    age: 48,
    gender: "M",
    tech_stack: ["Java", "", "less", "DynamoDB", "GraphQL"],
  },
  {
    name: "Saima",
    age: 33,
    gender: "F",
    tech_stack: ["MongoDB", "Route53", "Jenkins", "Terraform", "Kubernetes"],
  },
  {
    name: "Omar",
    age: 33,
    gender: "m",
    tech_stack: ["c++"],
  },
  {
    name: "Mariam",
    age: 32,
    gender: "f",
    tech_stack: null,
  },
];


/************************** */
// Find all devs older than 24
// let old = devs.filter(x => x.age > 24);
// console.log(old);

/************************** */
// Remove all people who are not developers (i.e. no tech stack)

// let noCode = devs.filter(x => x.tech_stack == null);
// console.log(noCode);

/************************** */
// Calculate the total age of all the devs
// let totalAge = devs.filter(x => x.age += x.age);
// console.log(totalAge);


/************************** */
// Find all female devs

// let femaleDevs = devs.filter(x => x.gender === "f" || x.gender === "F");
// console.log(femaleDevs);

/************************** */
// lowercase the genders of every dev

// let lowGen = devs.filter(x => x.gender = x.gender.toLowerCase());
// console.log(lowGen);

/************************** */
// Sort the developers by name

// let sortDevs = devs.sort((a, b) => a.name - b.name ? 1 : -1)
// let finSort = sortDevs.forEach((e) => e);
// console.log(finSort);


/************************** */
// Sort the devs by age in descending order

// let lowAge = devs.sort((a,b) => b.age - a.age);
// console.log(lowAge);

/************************** */
// Sort the male coders by age

// let maleAge = devs.filter(({gender})=> gender == "m" || gender == "M").sort((a,b) => b.age - a.age);
// console.log(maleAge);

/************************** */
// For the list of devs, print out sentences including the name and tech stack of each dev, leaving out other information.  Example output is provided below :

/*
        Liz specializes in Java, Spring Boot, and MySql.
        Chris specializes in React, Express, and Python.
        Dr. Patel is not a developer.
        */

let devSpec;
devs.forEach(dev => {
 devSpec = dev.name ;
 if (dev['tech_stack']) {
 devSpec += ' specializes in ' + dev['tech_stack'].join(', ') + '.'
}
  else devSpec += ' is not a developer.'
    console.log (devSpec);
       });

/************************************************************* */
// Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.
const numbersMixed = [
  2,
  23,
  1,
  2,
  1,
  1,
  1,
  2,
  2.5,
  20,
  200,
  2000,
  ,
  { k: "val" },
  20000,
  19999,
  1878,
  140,
  23,
  4,
  "sk",
  true,
  true,
  "true-dat",
  "nice",
  "one",
  "two",
  "three",
  "3",
  "tea",
  [],
];


// 
// let theNumbers = numbers.forEach((nums) => {
//   if (typeof numbers === number) {
//   console.log(nums);}
// }
// )
// }function sortNums(numbers, desc = false) {

//After the numbers array has been cleaned up to only have numbers in it, Write a function that sorts the modified numbers array.  Allow the function to sort the array in descending order as well.
// let string = ("one", "two", "three", "3")
function maxNumber(numbersMixed) {
  numbersMixed = numbersMixed.filter((i) => [
    return (typeof i == '')
  ])
  //your code...
  if (parseInt(numbersMixed) == "one") {
    return 1;
  } else if (parseInt(numbersMixed) == "two") {
      return 2;
  } else (parseInt(numbersMixed) == "three" ||  (parseInt(numbersMixed) == "3")); {
    return 3;
  } 
}
console.log(numbersMixed);
/************************************************************* */
//Research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.
var min = 2; //var is how variables used to be called.
var sec = 60;
var time = function(min, sec) {
  return min * sec;
}
console.log(time);
//


// ES6
const min2 = 3; // const & let are the new ways. const is immutable so it helps when keeping a varibale constant.
const sec2 = 60;
const time2 = (min2, sec2) => min2 * sec2; // an arrow function takes away extra steps with coding and produces the same answer as before.
console.log(time2)

/************************************************************* */
//Add an example of the 5 primary JavaScript data types to the given mapObj.  The key is an example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

// const mapObj = new Map();
// const mapObj1 = { company: "TEKsystems" } //"object"
// ;
// mapObj.set(numEmployees = 300); //Number
// mapObj.set(3 === "3"); //Boolean: false
// mapObj.set(['happy', 'sad', 'angry']); //Array & Strings


// console.log(mapObj.has({ company: "TEKsystems" }));

//

//The above console.log() statement returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code `mapObj.set()`, so the code : `mapObj.has() returns true.  The goal is to successfully check and see if {company : "TEKsystems"} exists in the mapObj.

//console.log(({company: "TEKsystems" } in mapObj1));
//I'm not sure on this one. 

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']
// mapObj.forEach(i => console.log(typeof i));

/************************************************************* */
//Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly selects one of the mathematical operations whenever it is invoked.  The doMath() function should print to the console the mathetmatical function that was carried out.  The doMath() function should return the computed value of any operation performed.

// ex : 2,3 => doMath(2,3) => adding : 5
const operations = [
  'x+y', 'x-y', 'x*y', 'x/y'
];
function doMath(x, y) {

operations.forEach(Math.floor(Math.random(doMath)));
}
/************************************************************* */
//- Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that accepts another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.


// const multiThree = y*3;
// function multiple(x) {
//   function fn(y) {
//    return function fn(); 
//    y = y * x;
//   }
// }
// console.log(multiThree)
//Couldn't get the code to work properly.

//- Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.


// function stockGain(basis) {
//   let message = ' is how much the stock has increased';
//   function stocks(yrs) {
//     let r = .05
//   }
// }
// console.log(stockGain(2));

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.


// let futureValue = ((function stockGain(500) {}, (function stocks(2){});
// stockGain(500);
// stocks(2)
// console.log(futureValue);

// DO NOT DELETE THIS EXPORT
module.exports = {
  tekCamp,
  canVote,
};

//*************************************** */
