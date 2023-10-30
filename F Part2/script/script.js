"use strict";

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };
// const retirement = function (birth) {
//   let age = calcAge(birth);
//   let retirementAge = 60 - age;
//   if (age > 60) {
//     console.log(`This Person Has retired ${-retirementAge} years ago`);
//   } else {
//     return retirementAge;
//   }
//   return retirementAge;
// };
// console.log(retirement(1929));

/*
####### FUNCTIONS CHALLENGE ##########
const calcAverage = (a, b, c) => (a + b + c) / 3;
let dolphinsScore = calcAverage(44, 23, 71);
let koalasScore = calcAverage(65, 54, 49);
console.log(dolphinsScore, koalasScore);
function checkWinner(avgDolphins, avgKoalas) {
  if (dolphinsScore >= koalasScore * 2) {
    console.log(`Dolphins Wins ${dolphinsScore} vs ${koalasScore}`);
  } else if (koalasScore >= dolphinsScore * 2) {
    console.log(`Koalas Wins ${koalasScore} vs ${dolphinsScore}`);
  } else {
    console.log(`Draw !!!`);
  }
}
checkWinner(dolphinsScore, koalasScore);
dolphinsScore = calcAverage(85, 54, 41);
koalasScore = calcAverage(23, 34, 27);
console.log(dolphinsScore, koalasScore);
checkWinner(dolphinsScore, koalasScore);
*/

// #### ARRAY ####

// const friends = [`Ross`, `Joey`, `Chandler`, `Monica`, `Rachel`, `Phoebe`];
// console.log(friends);

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };
// const years = [1990, 1995, 2000, 2005];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// const age4 = calcAge(years[3]);

// console.log(age1, age2, age3, age4);
// const ages = [age1, age2, age3, age4];
// console.log(ages);

/*

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    console.log(`15% Tip | Your Tip Is ${bill * 0.15}$`);
  } else {
    console.log(`20% Tip | Your Tip Is ${bill * 0.2}$`);
  }
};
const billOne = 125;
const billTwo = 555;
const billThree = 44;
const bills = [billOne, billTwo, billThree];
console.log(bills);
const tipOne = calcTip(billOne);
const tipTwo = calcTip(billTwo);
const tipThree = calcTip(billThree);


const jonas = {
  firstName: `Jonas`,
  job: "Teacher",
  birthyear: 2000,
  calcAge: function () {
    this.age = 2023 - this.birthyear;
    return this.age;
  },
  hasDriverLicense: true,
  getSummary: function () {
    if (jonas.hasDriverLicense) {
      jonas.hasDriverLicense = "have";
    } else {
      jonas.hasDriverLicense = "Dosent Have";
    }
    console.log(
      `${jonas.firstName} is ${jonas.calcAge()} Years Old ${jonas.job}, He ${
        jonas.hasDriverLicense
      } a Drivers License.`
    );
  },
};
console.log(jonas);
// Jonas is x years old teacher, he have a driver license
jonas.getSummary();
*/

/* const markMiller = {
  firstName: `Mark`,
  lastName: `Miller`,
  mass: `78`,
  height: `1.69`,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const johnSmith = {
  firstName: `John`,
  lastName: `Smith`,
  mass: `92`,
  height: `1.95`,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
markMiller.calcBMI();
johnSmith.calcBMI();
console.log(markMiller.bmi, johnSmith.bmi);
if (markMiller.bmi > johnSmith.bmi) {
  console.log(
    `Mark's BMI (${markMiller.bmi}) Is Higher Than John's BMI (${johnSmith.bmi})`
  );
} else {
  console.log(
    `John's BMI (${johnSmith.bmi}) Is Higher Than Mark's BMI (${markMiller.bmi})`
  );
}
 */

// let dolphinsScore = (99 + 110 + 100) / 3;
// let koalasScore = (109 + 95 + 123) / 3;
// console.log(dolphinsScore, koalasScore);

// if (dolphinsScore >= 100 && koalasScore >= 100) {
//   if (dolphinsScore > koalasScore) {
//     console.log(`Dolphins Wins !`);
//   } else if (koalasScore > dolphinsScore) {
//     console.log(`Koalas Wins !`);
//   } else if (dolphinsScore === koalasScore) {
//     console.log(`Draw !`);
//   }
// } else {
//   console.log(`No one wins`);
// }

// let processor = function (apples, oranges) {
//   let juice = `Juice with ${apples} and ${oranges}`;
//   return juice;
// };
// let applejuice = processor(3, 5);
// console.log(applejuice);

/* let login = prompt(`Whats Ur Name ?`);
let message =
  login == `employee`
    ? `Hello`
    : login == `dir`
    ? `Wow`
    : login == `no oneno`
    ? `no`
    : ``;
console.log(message);
 */

/* let browser = "Chrome";
if (browser === `Edge`) {
  alert("You've got the Edge!");
} else if (
  browser === `Chrome` ||
  browser === `Firefox` ||
  browser === `Safari` ||
  browser === `Opera`
) {
  alert(`Okay we support these too`);
} else {
  alert(`IE is that u ?, Yikes`);
} */

/* 

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }

// function checkAge(age) {
//   return age >= 18 ? true : confirm(`Did Parents Allow You ?`);
//   // return age >= 18 || confirm(`Did Parents Allow You ?`);
// }

// checkAge(18);

 */

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(min(10, 8));

//
//

// function pow(x, n) {
//   x = Number(prompt());
//   n = Number(prompt());
//   let power = x ** n;
//   console.log(power);
// }
// pow();

/* function yearsUntilRetirement(birthYear) {
  let calcAge = (birthYear) => 2023 - birthYear;
  console.log(60 - calcAge(birthYear));
}
yearsUntilRetirement(2000);
 */

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
let calcTips = function () {
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
      tips.push(bills[i] * 0.15);
      totals.push(bills[i] + tips[i]);
    } else {
      tips.push(bills[i] * 0.2);
      totals.push(bills[i] + tips[i]);
    }
  }
  return console.log(tips, totals);
};
calcTips();

let calcAverage = function (arr) {
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    average += arr[i];
  }
  return console.log(average / arr.length);
};
calcAverage(totals);
