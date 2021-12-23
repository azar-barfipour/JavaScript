

// destructuring Arrays

const arr = [1,2,[3,4]];
[i,j,[q,r]] = arr;
console.log(i,j,q,r);

// destructuring Objects

const resturant = {
    name : "Kasba",
    location : "DownTown",
    mainMenu : ["Italian",'persian'],
    hours : {
        thu:{
            open: 1,
            close: 12
        },
        fri:{
            open: 10,
            close: 12
        }
    }
}

const {name : resturantName = [] ,location : resturantLocaton = [],menu=[],hours: resturantHours = []} = resturant

console.log(resturantName,resturantLocaton,menu,resturantHours)

//spread

const ar = [1,2]
const newArr = [...ar,3,4]
console.log(...newArr);


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
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
    orderPitzza: function(mushroom,...rests){
        console.log(`I would like to order from ${this.name} restaurant`)
        console.log(mushroom,rests);
    },
    orderPasta : function(ing1,ing2,ing3){
        console.log(`this is ${ing1},${ing2} and ${ing3}`);
    }
  };

  const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu]
  console.log(menu1)
  restaurant.orderPitzza()



// SPREAD, because on RIGHT side of =
const arr1 = [1, 2, ...[3, 4]];
// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [c, ,...rest] = [1,2,3,4]
console.log(c,rest);

const {thu,...other} = restaurant.openingHours
console.log(thu,other);

const d = {...restaurant, location : "hfgdh"}
console.log(d.name = 'abc');
console.log(restaurant.name);
console.log(d);


const add = (...numbers) => {
 let sum = 0;
 for(let i=0;i< numbers.length;i++) 
 sum += numbers[i];
 console.log(sum);
}

add(1,2,3,4,5,6)

restaurant.orderPitzza('mushroom','onion','peperoni');
const ingridients = [
    'ing1','ing2','ing3'
]
restaurant.orderPasta(...ingridients);

// || and or assignment

const rest1 = {
  name : 'a',
  num : 10
}
const rest2 = {
  name : 'a',
  owner : 'bb'
}

// ||
rest1.num = rest1.num || 20;
rest2.num = rest2.num || 20;

//||=
rest1.num ||= 20;
rest2.num ||= 20;

console.log(rest1);
console.log(rest2);

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
[player1,player2] = game.players;
console.log(player1,player2);


//2
[gk,...fieldPlayers] = player1;
console.log(gk,fieldPlayers);
 
//3
const allPlayers = [...player1,...player2]
console.log(allPlayers);

//4 
const players1Final = [...player1, 'Thiago','Coutinho','Perisic']
console.log(players1Final);

//5
let odds = game.odds;
console.log(odds);
const {team1,x : draw,team2} = odds;
console.log(team1,draw,team2);

const {} = game;

//6
const printGoals = (...playersName) => {
  console.log(`${playersName.length} is here.`);
}

printGoals('Davies', 'Muller', 'Lewandowski' , 'Kimmich')
printGoals(...game.scored , 'azar')

//7
console.log(odds.team2 >  odds.team1 &&  'team two is winner'); 


// for of
for(const [i,item] of restaurant.mainMenu.entries()) console.log(`${i+1} : ${item}`);

// optional chaining
const days = ['mon', 'tue' , 'wed' , 'thu' , 'fri' , 'sat' , 'sun' ]
for(const day of days) {
  console.log(restaurant.openingHours[day]?.open ?? `no exist`);
}

/* challenge 2

Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

console.log(game.scored.entries());

//1
for(const [i,score] of game.scored.entries()) console.log(`Goal ${i+1} : ${score}`);

//2
console.log(game.odds);
let sum=0;
let count = 0;
for(const [key,value] of Object.entries(game.odds)) {
  sum += value;
  count = Object.entries(game.odds).length;
};
console.log(sum);
console.log(count);
console.log(`average : ${sum/count}`);

//3   

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

for(const [key  ,value] of Object.entries(game.odds)) {
const str = key === 'x' ? 'draw' : `victory ${game[key]}`;
console.log(`Odd of ${str} : ${value}`);}


// console.log(`Odd of ${game[key] ?? 'draw'} : ${value}`);

