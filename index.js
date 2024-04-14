#! /usr/bin/env-node
import inquirer from "inquirer";
console.log("Welcome to the MZ A-T-M");
let myBalance = 10000;
let myPin = 1111;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "enter pin code:",
    type: "number"
});
if (pinAnswer.pin == myPin) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter the amount you want to withdraw: ",
                type: "number"
            }
        ]);
        if (amountAns.amount < myBalance) {
            myBalance -= amountAns.amount;
        }
        else {
            console.log("ERROR");
        }
        console.log("your remaining balance is:" + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your current balance is: " + myBalance);
    }
}
else {
    console.log("incorrect pin code");
}
console.log("Thank you!");
