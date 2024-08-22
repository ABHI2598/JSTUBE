function sumOne(a, b) {
    return a + b;
}

var myA = [8, 9, 9];
console.log(sumOne(...myA)); //spread Operator


//REST OPERATOR
function sumTwo(a, b, ...args) {
    let multi = a * b;
    let sum = 0;
    for (const arg of args) {
        sum += arg;

    }
    return [multi, sum];
}

console.log(sumTwo(4, 4, 4, 4, 5, 5));