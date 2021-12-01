// // const cal = (bill) => {
// //   return bill > 50 && bill > 300 ? bill * 0.15 : bill * 0.2;
// // };
// // const bills = [125, 555, 44];
// // const tips = [cal(bills[0]), cal(bills[1]), cal(bills[2])];
// // const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// // console.log(tips);
// // console.log(total);
// // console.log(cal(100));

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   cal: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   cal: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// mark.cal();
// john.cal();
// console.log(mark.bmi);
// console.log(john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName} bmi is ${mark.bmi}`);
// } else {
//   console.log(`${john.fullName} bmi is ${john.bmi}`);
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const cal = (bill) => {
//   return bill > 50 && bill > 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   const tip = cal(bills[i]);
//   tips.push(tip);
//   const total = cal(tip + bills[i]);
//   totals.push(total);
// }
// console.log(tips);
// console.log(totals);

// //1. transform array to string
// //2. Add to each element "C"
// //3. Find x days : index + 1
// //4. Add ... after and before each element

// const forecast = (arr) => {
//   let d = "";
//   let s = "";
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str = str + `...${arr[i]}C day ${i + 1} `;
//   }
//   return str;
// };

// const data1 = [4, 5, 8, 9, 10];
// console.log(forecast(data1));

//Guess Game:
// document.querySelector(".number").textContent = 50;
// document.querySelector(".score").textContent = 200;
// document.querySelector(".highscore").textContent = 1000;

// document.querySelector(".guess").value = 12;
// console.log(document.querySelector(".guess").value);
const number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = document.querySelector(".score").textContent;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent = "No number inserted yet!!";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "Correct";
    document.querySelector(".number").textContent = guess;
    score++;
    document.querySelector(".score").textContent = score;
    let highscore = document.querySelector(".highscore").textContent;
    highscore++;
    document.querySelector(".highscore").textContent = highscore;
  } else if (guess > number) {
    document.querySelector(".message").textContent = "number is higher";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < number) {
    document.querySelector(".message").textContent = "number is lower";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
