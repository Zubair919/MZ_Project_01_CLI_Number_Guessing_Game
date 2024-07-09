#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) User input for guessing number
// 3) Compare user input with computer generated number and show result - Done.
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Pleaes guess a number between 1-6: ",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations! you guess right number.");
}
else {
    console.log("You guess wrong number");
}
