function map(elements, modifier) {
    const resultArray = [];

    for (let i = 0; i < elements.length; i++) {
        resultArray[resultArray.length] = modifier(elements[i]);
    }

    return resultArray;
}

function isEven(number) {
    return number % 5 === 0;
}

console.log(map([5, 8, 10], isEven)); 
