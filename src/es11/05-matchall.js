const regex = /\b(Apple)+\b/g;
const fruit = 'Apple. Banana, Orange, Pera, Apple, Lemon';
for(const match of fruit.matchAll(regex)){
    console.log(match);
}