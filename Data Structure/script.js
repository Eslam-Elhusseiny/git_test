"use strict";

/* 

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
let dish = ["Italian", "Pizzeria", "Vegetarian", "Organic"];

let [pizza, f, g, d] = dish;

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

 */

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const mappa = new Map([
  [1, "Mappa"],
  [2, "MadHouse"],
  [3, "Cloverworks"],
  [4, "Wit"],
  ["Correct", 1],
  [true, "correctttt"],
  [false, "wronggg"],
]);
const answer = +prompt("Ur Answer");
console.log(mappa.get(mappa.get("Correct") === answer));
console.log(mappa);
const settt = new Set(["pizza", "pizza", "rice", "pizza", "apple"]);
settt.delete("pizza");
settt.add("pizza");
console.log(settt);

for (const [team, odd] of Object.entries(game.odds)) {
  console.log(`Odd of victory ${game[team]}`);
}

let averageOdd = 0;
for (const odd of Object.values(game.odds)) {
  averageOdd += odd / 3;
}
console.log(averageOdd);

for (const [key, value] of Object.entries(game.scored)) {
  console.log(`Goal ${+key + 1}: ${value}`);
}

// Challenge 1

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, "a", "b", "c"];
const { team1, x: draw, team2 } = game.odds;

const printGoals = function (...players) {
  console.log(`${players}, Scored ${players.length} Goals`);
};
printGoals(...game.scored);

team1 < team2 && console.log(`Team 1 (${team1}) Is More Likely To Win`);
team2 < team1 && console.log(`Team 2 (${team2}) Is More Likely To Win`);

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
let sumSalaries = 0;
for (const sum of Object.values(salaries)) {
  sumSalaries += sum;
}
console.log(sumSalaries);

/* 
// Challenge 2
const goals = game.scored;
for (const scores of goals.entries()) {
  console.log(`${scores[0] + 1} ${scores[1]}`);
}

const odds = Object.values(game.odds);
console.log(odds);
let averageOdds = 0;
for (const odd of odds) averageOdds += odd;
averageOdds /= odds.length;
console.log(averageOdds);

// Challenge 3

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

let average = 0;
for (const event of [...gameEvents.keys()]) {
  average += event;
}
average /= 90;
console.log(average);

// for (const [key, event] of [...gameEvents]) {
//   if (key < 45) {
//     console.log(`[FIRST HALF] ${key}: ${event}`);
//   } else {
//     console.log(`[SECOND HALF] ${key}: ${event}`);
//   }
// }
 */
