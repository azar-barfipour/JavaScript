//Dummy Data

let gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  },
};

let ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  },
};

let fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  },
};
// 1
const penguins = [gunter, ramon, fred];
console.log(penguins);
//2
const fisrtPenguins = penguins.at(0);
console.log(fisrtPenguins);

//3
const secondPenguin = penguins.at(1);

//4
const lastPenguin = penguins.at(penguins.length - 1).name;
console.log(lastPenguin);

//5
penguins.push(secondPenguin);
console.log(penguins);

//6
console.log(penguins.length);

//7
penguins.at(0).canFly = true;
console.log(penguins);

//8
penguins.at(0).sayHello();

//9
for (each of penguins) {
  console.log(each.name);
}

//10
for (each of penguins) {
  each.sayHello();
}

// BONUS
const reverse = penguins.reverse();
console.log(reverse);
