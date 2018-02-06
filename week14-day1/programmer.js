function Programmer(name, position, age, favorite) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.favoriteLanguage = favorite;
    this.printInfo = function() {
        console.log("\nName: "+this.name+"\nPosition: "+this.position+"\nAge: "+this.age+"\nFavorite Language: "+this.favoriteLanguage+"\n");
    };
}

var carl = new Programmer("Carl Liu", "Student", "21", "Javascript");

carl.printInfo();