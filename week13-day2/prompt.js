// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
    .prompt([
        // Here we create a basic text prompt.
        {
            type: "input",
            message: "What is the meaning of Life?",
            name: "meaning"
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        },
        // Here we create a basic password-protected text prompt.
        {
            type: "password",
            message: "What is the secret password?",
            name: "secret"
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        },
        // Here we give the user a list to choose from.
        {
            type: "list",
            message: "A Zombie Apocalypse has taken over the world. You can only bring one thing with you. Which do you choose? ",
            choices: ["significant other", "chainsaw", "pet"],
            name: "choice"
        },
        // Here we ask the user to confirm.
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        }
    ])
    .then(function(inquirerResponse) {
        // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        if (inquirerResponse.confirm) {
            console.log("\nFor you, life means: " + inquirerResponse.username);
            if (inquirerResponse.secret === "password") {
                console.log("You got the password right!");
            }
            else {
                console.log("WRONG password");
            }
            console.log("Poor choice, your " + inquirerResponse.choice + " won't help you for long.\n");
        }
        else {
            console.log("\n " + inquirerResponse.username + ", come again when you are more sure.\n");
        }
    });