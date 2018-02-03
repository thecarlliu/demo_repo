var dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise: function() {
        if (dogs.raining === true) {
            console.log(dogs.noise);
        }
    }
};

var cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function() {
        if (cats.raining === true) {
            console.log(cats.noise);
        }
    }
};

//make dog bark
dogs.makeNoise();

//make cat meow
cats.raining = true;
cats.makeNoise();

//takes in both cats and dogs object and prints "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" if both
//raining keys are equal to true
massHysteria();

function massHysteria() {
    if (dogs.raining === true && cats.raining === true) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
}

function Animal (raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function() {
        if (this.raining === true) {
            console.log(this.noise);
        }
    }
}

var fish = new Animal (true, "GLUB GLUB");
fish.makeNoise();