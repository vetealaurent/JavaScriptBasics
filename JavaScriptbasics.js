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

//Create a prototype

createPlayer.prototype.country = 'Spain';

let player2 = new createPlayer('David', 'Ferrer', 35, 0);
console.log(player2); // David, Ferrer, 35, 0, Spain (inherited createPlayer.prototype.country = 'Spain';)

let player3 = new createPlayer('Novak', 'Djokovic', 33, 17);
console.log(player3); // Novak, Djokovic, 33, 17, Spain (Novak inherited Spain from the prototype but he is not fron there)
player3.country = 'Serbia'; // Give Novak the country property to override createPlayer.prototype.country = 'Spain';
console.log(player3);// Novak, Djokovic, 33, 17, Serbia

//Arrow functions ES6 Edition

let message = {
    greetings : ['Hello', 'Bonjour', 'Hola', 'Bom dia'],
    name : 'World',
    displayMessage : function(){
        this.greetings.forEach(function(greeting){
            console.log(greeting + ' ' + name);
        });
    }
}
message.displayMessage();// 'Hello World' 'Bonjour World' 'Hola World' Bom dia World'

    // Can also be written with =>

let message = {
    greetings : ['Hello', 'Bonjour', 'Hola', 'Bom dia'],
    name : 'World',
    displayMessage : function() {
        this.greetings.forEach (greeting => {
            console.log(greeting + ' ' + this.name);
        });
    }
}
message.displayMessage();// 'Hello World' 'Bonjour World' 'Hola World' Bom dia World'