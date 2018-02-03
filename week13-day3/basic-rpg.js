function character (name, profession, gender, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.stats = [this.name, this.profession, this.gender, this.age, this.strength, this.hp];
    this.printStats = function () {
        console.log(this.name+"'s stats:\n");
        for (i = 0; i < this.stats.length; i++) {
            console.log(this.stats[i]);
        }
        console.log("\n");
    };
    this.isAlive = function() {
        if (this.hp > 0) {
            console.log(this.name+" is alive!"+"\n");
        }
        else {
            console.log(this.name+" is not alive!"+"\n");
        }
    };
    this.attack = function(enemy) {
        enemy.hp = enemy.hp - this.strength;
        console.log(this.name+" dealt "+this.strength+" damage to "+enemy.name+"\n");
        enemy.checkHP();
    };
    this.levelUp = function() {
        this.age++;
        this.strength += 5;
        this.hp += 25;
        console.log(this.name+" leveled up!\nAge increased by 1\nStrength increased by 5\nHit-points increased by 25")
    };
    this.checkHP = function() {
        console.log(this.name+"'s hit-points left: "+this.hp+"\n");
    };
}

var ch1 = new character("Player1", "Knight", "Male", 30, 100, 400);
var ch2 = new character("Player2", "Mage", "Female", 30, 110, 380);

ch1.printStats();
ch2.printStats();

ch1.attack(ch2);
ch2.attack(ch1);
ch2.attack(ch1);
ch2.attack(ch1);
ch2.attack(ch1);
ch1.isAlive();
ch2.isAlive();
ch2.levelUp();