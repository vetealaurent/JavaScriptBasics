// Create a simple person object

let person = {
    firstName : 'Roger',
    lastName : 'Federer',
    age : 39,
    grandSlams : 20,
    status : 'goat',
    message : function(){
        return this.firstName + ' ' + this.lastName + ' is the ' + this.status;
    }
    }
console.log(person.message());

// Add a property to the person object 

person.home = 'Wimbledon';
console.log(person.home);

//Create objects with a constructor for scalability

function createPlayer(firstName, lastName, age, grandSlams){
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.grandSlams = grandSlams; 
}
let player = new createPlayer('Rafa', 'Nadal', 34, 20);
console.log(player.firstName); //Rafa
console.log(player.lastName); //Nadal
console.log(player.age); //34
console.log(player.grandSlams); //20