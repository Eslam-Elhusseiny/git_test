"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const displayMovments = function (account) {
  containerMovements.innerHTML = "";
  account.movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}€`;
};

const calcDisplaySummary = function (account) {
  // Income Summary
  const income = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`;

  // Outcome Summary
  const outcome = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  // Interest Summary
  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * account.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accArr) {
  accArr.forEach((account) => {
    account.username = account.owner
      .toLowerCase()
      .split(" ")
      .map((user) => user[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  displayMovments(acc);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Clear Fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginUsername.blur();
    inputLoginPin.blur();
    // Display UI + Welcome
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(" ")[0]
    }`;

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  // Clear Fields
  inputTransferAmount.value = inputTransferTo.value = "";
  inputTransferAmount.blur();
  inputTransferTo.blur();

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance > amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log("done");
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// CODING CHALLENGE #1
/* 
let oldDogsJulia = [3, 5, 2, 12, 7];
let dogsKate = [4, 1, 15, 8, 3];
const dogsJulia = oldDogsJulia.slice(1, 3);

const checkDogs = function (dogsJulia, dogsKate) {
  const dogs = [...dogsJulia, ...dogsKate];
  dogs.forEach(function (dog, i) {
    const dogAge = dog >= 3 ? "an adult" : "still a puppy";
    console.log(`Dog number ${i + 1} is ${dogAge}, and is ${dog} years old`);
  });
};

checkDogs(dogsJulia, dogsKate);
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const movementsUSD = movements.map((mov) => Number(eurToUsd * mov).toFixed());
console.log(movementsUSD);

const withdrawals = movements.filter((mov) => mov < 0);

const withdrawalsFOR = [];
for (const movv of movements) {
  if (movv < 0) withdrawalsFOR.push(movv);
}
console.log(withdrawals);
console.log(withdrawalsFOR);

const movmentsSum = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, 1);
console.log(movmentsSum);

/* let dha = [];
const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map((age, i) => {
    if (age <= 2) {
      dha.push(+`${2 * age}`);
    } else {
      dha.push(+`${16 + age * 4}`);
    }
  });
};

const dogsAges = [5, 2, 4, 1, 15, 8, 3];

const dogsHumanAge = calcAverageHumanAge(dogsAges);
console.log(dha);
const dhaPlus = dha.filter((mov) => mov > 16);
console.log(dhaPlus);
const dhaAverage = dha.reduce((acc, mov) => (acc += mov / dha.length), 0);
console.log(dhaAverage); */

let dha = [];
/* const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAge);
  const plus = humanAge.filter((mov) => mov > 16);
  console.log(plus);
  const average = plus.reduce((acc, mov) => (acc += mov / plus.length), 0);
  console.log(average);
}; */

const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age > 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const dogsAges = [5, 2, 4, 1, 15, 8, 3];

const dogsHumanAge = calcAverageHumanAge(dogsAges);
console.log(dogsHumanAge);
