const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld();
console.log(hello);

var scope = 'Im global';

const functionScope = () => {
    var scope = 'Im just local';
    const func = () => {
        return scope;
    }
    console.log(func());
};

functionScope();