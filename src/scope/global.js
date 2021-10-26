var hello = 'hello';
let world = 'hello world';
const helloWorld = 'hello world!';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld = () => {
    globalVar = 'Im global'; //Mala práctica
}

helloWorld();
console.log(globalVar);

const anotherFunction1 = () => {
    var localVar = globalVar = 'Im global'; //Mala práctica
}

anotherFunction1();
console.log(globalVar);
