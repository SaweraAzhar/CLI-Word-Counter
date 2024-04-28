#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"

console.log(chalk.bold.cyanBright("\n \t\t Welcome to 'CodeWithSawera' - Word Counter"));
console.log("=".repeat(60));

let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence:",
    }
]);

// Enter the sentence and splitting it into words based on the 'spaces'
let words = answers.sentence.trim().split(" ");

// Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));