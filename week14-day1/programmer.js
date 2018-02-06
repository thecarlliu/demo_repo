function Programmer(name, position, age, favorite) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.favoriteLanguage = favorite;
    this.printInfo = function() {
        console.log("\nName: "+this.name+"\nPosition: "+this.position+"\nAge: "+this.age+"\nFavorite Language: "+this.favoriteLanguage+"\n");
    };
}

var carl = new Programmer("Carl Liu", "Student", 21, "JavaScript");

//carl.printInfo();
var j = 0;
for (i=2; i<process.argv.length/4 + 1;i++) {
    var programmer = new Programmer(process.argv[i+j], process.argv[i+j+1], process.argv[i+j+2], process.argv[i+j+3]);
    programmer.printInfo();
    j+=4;
}