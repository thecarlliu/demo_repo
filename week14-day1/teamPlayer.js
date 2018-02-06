var inquirer = require("inquirer");

var teamScore = 0;
var gamePhase = 0;

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function() {
        var coin = Math.random() * 10;
        if (coin%2 === 0) {
            this.offense++;
        }
        else {
            this.defense++;
        }
    };
    this.badGame = function() {
        var coin = Math.random() * 10;
        if (coin%2 === 0) {
            this.offense--;
        }
        else {
            this.defense--;
        }
    };
    this.printStats = function() {
        console.log("\nName: "+this.name+"\nPosition: "+this.position+"\nOffense: "+this.offense+"\nDefense: "+this.defense+"\n");
    };
}

var numPlayers = 0;
var numStarters = 2;
var startersArray = [];
var subsArray = [];

var askQuestion = function() {
    gamePhase = 1;
    if (numPlayers < 3) {
        console.log("Create a Player");
        if (numPlayers < 2) {
            console.log("Created "+startersArray.length+"/"+numStarters+" Starters");
        }
        else {
            console.log("Creating a Sub");
        }
        inquirer.prompt([
            {
                name: "name",
                message: "What is the player's name?"
            },
            {
                name: "position",
                message: "What is the player's position?"
            },
            {
                name: "offense",
                message: "What is the player's offensive stat?"
            },
            {
                name: "defense",
                message: "What is the player's defensive stat?"
            }
        ]).then(function(answers) {
            if (numPlayers < numStarters) {
                var newStarter = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
                startersArray.push(newStarter);
            }
            else {
                var newSub = new Player(answers.name,
                    answers.position, parseInt(answers.offense), parseInt(answers.defense));
                subsArray.push(newSub);
            }
            numPlayers++;
            askQuestion();
        });
    }
    else {
        for (i=0;i<startersArray.length;i++) {
            startersArray[i].printStats();
        }
        for (i=0;i<subsArray.length;i++) {
            subsArray[i].printStats();
        }
        playGame();
    }
};

askQuestion();

var numGames = 0;

function playGame() {
    if (numGames < 5) {
        var randomOff = Math.floor(Math.random*10 + 1);
        var factorOff = Math.floor(Math.random*10);
        if (factorOff%2 === 0) {
            randomOff += 10;
        }
        var randomDef = Math.floor(Math.random*10 + 1);
        var factorDef = Math.floor(Math.random*10);
        if (factorDef%2 === 0) {
            randomDef += 10;
        }
        var sumOff = 0;
        var sumDef = 0;
        for (i=0;i<startersArray.length;i++) {
            sumOff += startersArray[i].offense;
            sumDef += startersArray[i].defense;
        }
        for (i=0;i<subsArray.length;i++) {
            sumOff += subsArray[i].offense;
            sumDef += subsArray[i].defense;
        }
        if (randomOff < sumOff) {
            teamScore++;
        }
        if (randomDef > sumDef) {
            teamScore--;
        }
        inquirer.prompt([
            {
                name: "choice",
                message: "Would you like to substitute one of your starters? (Yes/No)"
            }
        ]).then(function(answers) {
            if (answers.choice === "Yes") {
                inquirer.prompt([
                    {
                        name: "starter",
                        message: "Type in the name of the starter"
                    },
                    {
                        name: "sub",
                        message: "Type in the name of the sub"
                    }
                ]).then(function(answers) {
                    var found = false;
                    var found2 = false;
                    for (i=0;i<startersArray.length;i++) {
                        if (startersArray[i].name === answers.starter) {
                            found = true;
                            var replace = startersArray[i];
                            startersArray.splice(i,1);
                            subsArray.push(replace);
                            for (i=0;i<subsArray.length;i++) {
                                if (subsArray[i].name === answers.sub) {
                                    found2 = true;
                                    var replace = subsArray[i];
                                    subsArray.splice(i,1);
                                    startersArray.push(replace);
                                }
                            }
                            if (found2 === false) {
                                console.log("Could not find the player");
                            }
                        }
                    }
                    if (found === false) {
                        console.log("Could not find the player.");
                    }
                });
            }
        });
        numGames++;
        playGame();
    }
    else {
        if (teamScore > 0) {
            for (i=0;i<startersArray.length;i++) {
                startersArray[i].goodGame();
                startersArray[i].printStats();
            }
            console.log("Congrats, your team won!");
        }
        else if (teamScore < 0) {
            for (i=0;i<startersArray.length;i++) {
                startersArray[i].badGame();
            }
            console.log("BOO! Your team sucked..");
        }
    }
}