//declara

class User{
    //metodos
    greeting(){
        return 'Hello';
    }
};

const gndx = new User();
console.log(gndx.greeting);
const bebeloper = new User();
console.log(bebeloper.greeting);

//constructor   

class user{
    //contructor 
    constructor(){
        console.log('Nuevo Usuario');
    };
    greeting(){
        return 'Hello';
    };
}
const david = new user();

//this 
class user {
    constructor(name){
        this.name = name;
    };
    speak(){
        return 'Hello';
    };
    greeting(){
        return `${this.speak()} ${this.name}`;
    };
}

const ana = new user('Ana');
console.log(ana.greeting);

//setters and getters

class user {
    //metodo constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    };
    //metodos 
    speak(){
        return 'Hello';
    };
    greeting(){
        return `${this.speak()} ${this.name}`;
    };
    get uAge(){
        return this.age;
    };
    set uAge(n){
        this.age = n;
    };
}

const bebeloper1 = new user('Carlos',15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);
