#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.9,
    GBP: 0.76,
    INR: 75,
    PKR: 280,
};
let useranswer = await inquirer.prompt([
    {
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
        name: "from",
        message: "Enter From Currency",
    },
    {
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
        name: "to",
        message: "Enter TO Currency",
    },
    {
        name: "amount",
        message: "Enter Amount",
        type: "number",
    },
]);
let fromAmount = currency[useranswer.from];
let toAmount = currency[useranswer.to];
let amount = useranswer.amount;
let baseAmount = amount / fromAmount; //usd base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
// console.log(fromAmoun
// console.log(toAmount)
// if(useranswer.To == useranswer.from)  {
//   console.log
// }
