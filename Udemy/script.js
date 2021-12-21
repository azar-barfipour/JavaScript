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