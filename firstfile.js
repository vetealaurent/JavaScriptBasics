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
