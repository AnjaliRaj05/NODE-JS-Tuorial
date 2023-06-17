// let bikes=["hond","apache","bajaj","TVs"];
// let vehicles=cars.concat(bikes);
// //console.log(cars);
// //console.log(bikes);
// console.log(vehicles.length);
// console.log(vehicles.toString());
// console.log(vehicles.sort());
// // object declaration
// let car={name:"Venue",
//          marker:"Hyundai",
//          model:"2023",
//          color:"white",
//          weigth:3456,
//          isAlloyWheel:true,


// };
// console.log(a);
let a = "5";
// console.log(b);
var b = 0;
// console.log(b);
const c = "Adding two Numbers";
// console.log(c);
if (true) {
  var d = 5;
  //   console.log(d);
}
// console.log(d);
var result = 0;
function addTwoNumbers(firstNumber, secondNumber) {
  result = firstNumber + secondNumber;
  //   console.log(result);
}
addTwoNumbers(5, 3);
// console.log(result);

//Loops

//while
while (b < 5) {
  b++;
  //   console.log(b + " Values");
}
//for
for (let index = 0; index <= 5; index++) {
  b--;
  //   console.log(b + " for loop");
}
//do - while
do {
  b += 1;
  //   console.log(b + " In do while loop");
} while (b == -1);

var cars = ["Hyundai", "BMW", "BENZ"];
//Insert the value in the array
cars.push("Suzuki");
cars.unshift("Volkswageon");

console.log(cars);
//Remove the value from the array
cars.pop();
console.log("Value popped");
console.log(cars);
console.log("=============================");
cars.shift();
console.log("Value shifted");
console.log(cars);
console.log("=============================");

let bikes = ["Pulsar", "Dominor", "Duke", "Royal Enfield"];

let vechiles = cars.concat(bikes);
// console.log(cars)
// console.log(bikes)
console.log(vechiles.length);
console.log(vechiles.toString());
console.log(vechiles.sort());

//object
let car = {
  name: "Venue",
  maker: "Hyundai",
  model: 2019,
  color: "black",
  weight: 1233,
  isAlloyWheel: true,
  vechileModel: function () {
    return this.maker + " " + this.name + " " + this.model;
  },
};

console.log(car["name"]);
console.log(car.name);
console.log(car.vechileModel());
//for of -> arrays
for (let vechile of vechiles) {
  console.log(vechile);
}
for (let index = 0; index < vechiles.length; index++) {
  console.log(vechiles[index]);
}
//for in -> objects
for (let property in car) {
  console.log(property, car[property]);
}