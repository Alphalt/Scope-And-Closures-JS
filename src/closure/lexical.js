const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++); //Se imprime y luego se suma, si queremos los dos al tiempo ponemos ++ antes de count
    }
    return displayCount;
}

const myCount = buildCount(1);
myCount();
myCount();
myCount();