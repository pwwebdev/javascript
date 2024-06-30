/*console.log("Prices:");
console.log("Bubblegum: $2");
console.log("Toffee: $0.2");
console.log("Ice Cream: $5");
console.log("Milk chocolate: $4");
console.log("Doughnut: $2.5");
console.log("Pancake: $3.2");*/

const input = require('sync-input');
//Earned amount;
let bubblegumIncome = 202;
let toffeeIncome = 118;
let icecreamIncome = 2250;
let milkchocolateIncome = 1680;
let doughnutIncome = 1075;
let pancakeIncome = 80;


console.log('Income: $5405');

console.log();

//console.log('Earned amount:');
console.log('Bubblegum: $' + bubblegumIncome);
console.log('Toffee: $' + toffeeIncome);
console.log('Ice Cream: $' + icecreamIncome);
console.log('Milk chocolate: $' + milkchocolateIncome);
console.log('Doughnut: $' + doughnutIncome);
console.log('Pancake: $' + pancakeIncome);

console.log();

let totalIncome = bubblegumIncome + toffeeIncome + icecreamIncome + milkchocolateIncome + doughnutIncome + pancakeIncome;
console.log('Earned amount: $' + totalIncome);

console.log();

let staffExpenses = Number(input("Enter Staff expenses: "));
if(isNaN(staffExpenses)) {
    console.log('Error: staffExpenses input is not a number.');
}
let otherExpenses = Number(input("Enter Other expenses: "));
if(isNaN(otherExpenses)) {
    console.log('Error: otherExpenses input is not a number.');
}
let netIncome = totalIncome - staffExpenses - otherExpenses;
console.log('Net income: $' + netIncome);