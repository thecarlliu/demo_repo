var pet = process.argv[2];
var command = process.argv[3];


function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = false;
    this.age = 0;
    this.feed = function() {
        if (this.hungry === true) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        }
        else {
            console.log("No thanks! I'm full.");
        }
    };
    this.sleep = function() {
        if (this.sleepy === true) {
            console.log("Zzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }
        else {
            console.log("No way! I'm not tired.");
        }
    };
    this.play = function() {
        if (this.bored === true) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        }
        else {
            console.log("Not right now. Later?");
        }
    };
    this.increaseAge = function() {
        this.age++;
        console.log("Happy Birthday to me! I am "+this.age+" Tamagotchi years old!");
    };
}

var Dog = new DigitalPal();
Dog.outside = false;
Dog.bark =  function() {
    console.log("Woof! Woof!");
};
Dog.goOutside =  function() {
    if (this.outside === false) {
        console.log("Yay! I love the outdoors!");
        this.outside = true;
    }
    else {
        console.log("We're already outside though...");
    }
};
Dog.goInside = function() {
    if (this.outside === true) {
        console.log("Do we have to? Fine...");
        this.outside === false;
    }
    else {
        console.log("I'm already inside...");
    }
};


var Cat = new DigitalPal();
Cat.houseCondition = 100
Cat.meow = function() {
    console.log("Meow! Meow!");
};
Cat.destroyFurniture = function() {
    if (this.houseCondition > 0) {
        this.houseCondition -= 10;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
        this.bored = false;
        this.sleepy = true;
    }
};
Cat.buyNewFurniture = function() {
    this.houseCondition += 50;
    console.log("Are you sure about that?");
};

if (pet === "Dog") {
    if (command === "play") {
        Dog.play();
    }
    else if (command === "feed") {
        Dog.feed();
    }
    else if (command === "sleep") {
        Dog.sleep();
    }
    else if (command === "bark") {
        Dog.bark();
    }
    else if (command === "goOutside") {
        Dog.goOutside();
    }
    else if (command === "goInside") {
        Dog.goInside();
    }
}

else if (pet === "Cat") {
    if (command === "play") {
        Cat.play();
    }
    else if (command === "feed") {
        Cat.feed();
    }
    else if (command === "sleep") {
        Cat.sleep();
    }
    else if (command === "meow") {
        Cat.meow();
    }
    else if (command === "destroyFurniture") {
        Cat.destroyFurniture();
    }
    else if (command === "buyNewFurniture") {
        Cat.buyNewFurniture();
    }
}

// function tamagotchiListener(pet, action) {
//     pet = process.argv[2];
//     action = process.argv[3];
//     pet.action();
// }