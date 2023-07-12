async function* anotherGenerator(){
    yield await Promise.resolve(705);
    yield await Promise.resolve(80);
    yield await Promise.resolve(7);
}

const other = anotherGenerator();
    other.next().then(response => console.log(response.value));
    other.next().then(response => console.log(response.value));
    other.next().then(response => console.log(response.value));
console.log('hello!');

async function arraysOfNames(array){
    for await (let value of array){
        console.log(value);
    }
}
const names = arraysOfNames(['Carlos','David','John','Julian']);
console.log('After');