//forEach

//using forEach for arrays
const array = ['USA','EUR','Asia']
array.forEach((arr,i,arrr) => {
  console.log(`${i + 1}: ${arr}`);
  // console.log(arrr);  show the wole array
})

//using forEach for maps
const maps = new Map([['a', 'USA'], ['b', 'EUR'] , ['c', 'Asia']])
maps.forEach((value,key,maps)=>{
console.log(`${key}: ${value}`);
})

//using forEach for sets
const sets = new Set(['USA','EUR','ASIA'])
sets.forEach((value,_,set)=>{
console.log(`${value}`);
})


// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

const checkDogs = (dogsJulia,dogsKate) => {
    const newDogsJulia = dogsJulia.slice(2,dogsJulia.length - 2)
    console.log(newDogsJulia);
    console.log(`---------`);
    const mixedDogs = newDogsJulia.concat(dogsKate);
    mixedDogs.forEach(function(mixedDog,i){
      mixedDog <= 3 ? console.log(`Dog number ${i+1} is still a puppy 🐶`) : console.log(`Dog number ${i+1} is an adult, and is ${mixedDog} years old`);
    })
    console.log(`---------`);
}

checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4]);


// convert pound to USD
const movements = [140, 550, 200, 378, 320]
const movementsUSD = movements.map(mov => mov * 1.1)
console.log(movementsUSD);


//filter

const witdrawal = [1,2,3,4,-1,-2,-3,-4]

const witdrawalNew = witdrawal.filter(wid=>wid>0)
console.log(witdrawalNew);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

// const calcAverageHumanAge = (arr) => {
//     const dogsToHumans = arr.map(each => (each <= 2 ? each * 2 : 16 + each * 4))
//     const filterDogsToHumans = dogsToHumans.filter(each => each >= 18)
//     // return filterDogsToHumans
//     const average = filterDogsToHumans.reduce((acc,each,i,arr) => acc + each / arr.length,0) 
//     return average

// }

const calcAverageHumanAge = (arr) => {
  const average = arr.map(mov => mov <= 2 ? mov * 2 : 16 + mov * 4).filter(mov => mov >= 18)
  .reduce((acc,mov,i,arr) => acc + mov / arr.length,0)
  console.log(average);
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);


// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// for(const acc of accounts){
//    acc.owner === 'Jessica Davis' ? console.log(acc) : '' 
// }

// const accOwner = accounts.find(acc => acc.owner === 'Jessica Davis')
// console.log(accOwner);

// Soting strings
const owners = ['Jonas','Zach','Adam','Marta']
console.log(owners.sort());
console.log(owners);

//Sorting Numbers 
//it sorted as a String

console.log(movements);


//return positive means keep order
//return negative means switch order
movements.sort((a,b) => {
  if(a>b) return 1
  else return -1
})
console.log(movements);

movements.sort((a,b) => a-b) //Ascending
console.log(movements);
movements.sort((a,b) => b-a) //Descending
console.log(movements);

//fill method

const x = new Array(7)
// x.fill(2);
console.log(x);

// fill(n,start,end)
x.fill(1,2,5)


const arr = [1,2,3,4,5,6,7]
arr.fill(23,2,6)
console.log(arr);

//Array.from
const y = Array.from({length: 7}, () => 1)
console.log(y);

const z = Array.from({length:7},(_,i)=> i+1)
console.log(z);

const t = Array.from({length:100},(_,i)=> Math.random(i))
console.log(t);


//get from UI
// const momvementsUI = Array.from(document.querySelector('.movements__value'))
// console.log(momvementsUI);


