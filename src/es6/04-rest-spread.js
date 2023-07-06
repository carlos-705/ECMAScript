//arrays destructuring

let fruits = ['apple', 'orange'];
let [a,b] = fruits;
console.log(a,fruits[1]);

// Object destructuring 

let user = {username: 'Oscar', age:34};
let {username, age} = user;
console.log(username,age);

// spread operator

let person = {name: 'Oscar', age:24};
let country = 'MX';

let data = {id:1 , ...person, country};
console.log(data);    

// rest operations

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[1] ;
}
sum(1,2,3,4,5,6);