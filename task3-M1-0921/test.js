console.log("===================== Question 1 ==========================");
const rant = (message) => console.log(`${message.toUpperCase()} `);
rant("I hate beets");
rant("I hate beets");
rant("I hate beets");

console.log("===================== Question 2 ==========================");
const multiply = (x, y) => x * y;
console.log(multiply(2, 6));
console.log(multiply(9, 9));
console.log(multiply(3, 8));

console.log("===================== Question 3 ==========================");
const isShortsWeather = (temp) => (temp >= 75 ? true : false);
console.log(isShortsWeather(80));
console.log(isShortsWeather(60));
console.log(isShortsWeather(20));
console.log(isShortsWeather(75));

console.log("===================== Question 4 ==========================");
const lastElement = (arr) => (arr.length !== 0 ? arr.at(-1) : null);
console.log(lastElement([3, 5, 7]));
console.log(lastElement([1]));
console.log(lastElement([]));

console.log("===================== Question 5 ==========================");
const capitalize = (str) => str.at(0).toUpperCase().concat(str.slice(1));

console.log(capitalize("eggplant"));
console.log(capitalize("pamplemousse"));
console.log(capitalize("squid"));

console.log("===================== Question 6 ==========================");
const sumArray = (number) => {
  let sum = 0;
  for (num of number) {
    sum += num;
  }
  return sum;
};
console.log(sumArray([1, 2, 3]));
console.log(sumArray([2, 2, 2, 2]));
console.log(sumArray([50, 50, 2]));

console.log("===================== Question 7 ==========================");
const week = [
  "Monday",
  "Tuseday",
  "Wednesday",
  "Thurseday",
  "Friday",
  "Saturday",
  "Sunday",
];
const returnDay = (num) => {
  return num <= 7 && num >= 1 ? week[num - 1] : null;
};
console.log(returnDay(1)); //"Monday"
console.log(returnDay(4)); //"Thursday"
console.log(returnDay(8)); //null

console.log("===================== Question 8 ==========================");
const isSnakeEyes = (x, y) =>
  x === 1 && y === 1 ? `Snake Eyes!` : `Not Snake Eyes!`;

console.log(isSnakeEyes(1, 5)); //Not Snake Eyes!
console.log(isSnakeEyes(6, 3)); //Not Snake Eyes!
console.log(isSnakeEyes(1, 1)); //Snake Eyes!

console.log("===================== Question 9 ==========================");
const calculateDogAge = (popyAge) =>
  `Your doggie is ${popyAge * 7} years old in dog years!`;

console.log(calculateDogAge(1)); //Your doggie is 7 years old in dog years!
console.log(calculateDogAge(0.5)); //Your doggie is 3.5 years old in dog years!
console.log(calculateDogAge(12)); //Your doggie is 84 years old in dog years!

console.log("===================== Question 10 ==========================");
let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const isPangram = (str) => {
  const strArr = str.toLowerCase();
  for (a of alphabet) {
    if (strArr.indexOf(a) < 0) return false;
  }
  return true;
};

console.log(isPangram("abcdefghijklmnopqrstuvwxyz")); //true
console.log(isPangram("the quick brown fox jumps over the lazy dog")); //true
console.log(isPangram("five boxing wizards jump quickly at it")); //false

console.log("===================== Question 11 ==========================");
const even = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};
console.log(even([1, 2, 3, 4, 5, 6, 7, 8]));

console.log("===================== Question 12 ==========================");
const max = (arr) => {
  return arr.reduce((a, b) => (a > b ? a : b), arr[0]);
};
console.log(max([1, 5, 10, 15])); //15
console.log(max([99, 0, -1, 45])); //99
