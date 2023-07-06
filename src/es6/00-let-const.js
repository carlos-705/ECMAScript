var lastName = 'David';
lastName = 'Oscar';

console.log(lastName);

let fruit = 'Apple';
fruit =' Kiwi' ; 
console.log(fruit);

const animal = 'Lion';


const fruits = () => {  
    if(true){
        var fruit = 'Banana'; //function scope
        let fruit2 = 'Pinapple'; //block scope
        const fruit3 = 'Orange'; //block scope
    }
    console.log(fruit);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();