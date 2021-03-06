/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2022-01-06T13:15:33.035Z",
    "2022-01-05T09:48:16.867Z",
    "2022-01-07T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const displayDate = function (date) {
  const displayDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
  const calcPassDays = (date1, date2) =>
    (x = Math.round(Math.abs((date2 - date1) / (1000 * 24 * 60 * 60))));
  const dayPass = calcPassDays(new Date(), date);
  if (dayPass === 0) return "Today";
  if (dayPass === 1) return "Yesterdey";
  if (dayPass <= 7) return `${dayPass} days ago`;
  else return displayDate;
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const date = new Date(acc.movementsDates[i]);
    const display = displayDate(date);
    const html = `
          <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
           <div class="movements__date">${display}</div>
            <div class="movements__value">${mov}???</div>
          </div>
        `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}???`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}???`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}???`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}???`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc, false);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  const closeAccountIndex = accounts.findIndex(
    (acc) =>
      acc.username === inputCloseUsername.value &&
      acc.pin === Number(inputClosePin.value)
  );
  accounts.splice(closeAccountIndex);
});
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

// Array from
labelBalance.addEventListener("click", function (e) {
  e.preventDefault();
  const momvementsUI = Array.from(
    document.querySelectorAll(".movements__value")
  );
  console.log(
    momvementsUI.map((el) => Number(el.textContent.replace("???", "")))
  );
});

//setTimeout

const time = setTimeout(function () {
  console.log("Azzzar");
}, 1000);
console.log("waitnig.....");
clearTimeout(time); // for clear the function

// setInterval
// const interval = setInterval(() => {
//   console.log(new Date());
// }, 1000);

// if (interval.includes('2022 14:40:50')) clearInterval(interval);

var chicken = 1;
var chicken = 2;
console.log(chicken);

var abc123 = 1;
console.log(abc123);

let message = "Hello JS";

// let age = prompt("Enter your age ");
// let next = age + 1;
// alert("On your next birthday, you'll be "+next);

var sum = function (num1, num2) {
  var add = num1 + num2;
  return add;
};
console.log(sum(5, 5));

var obj = {
  name: "John",
  age: 26,
  job: "instructor",
  myFunc: function () {
    console.log("Hello " + obj.name);
  },
};

obj.myFunc();

// for(var i = 0; i <= 10; i++) { console.log(i);}

var i = 0;
do {
  console.log(i);
  i++;
} while (i > 5);

var i = 0;
do {
  i++;
  console.log(i);
} while (i > 5);

date = new Date();
var day = date.getDay();
console.log(day);

// var arr = ['John', true, 10, { name:'bob', address:{ city: 'NY', street: 'Wall St. 123' }}];

// console.log(arr[3].address.street);

var arr = [
  "Nick",
  27,
  false,
  function () {
    console.log("Hello " + arr[0]);
  },
];

arr[3]();
