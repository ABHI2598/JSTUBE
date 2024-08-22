var array = [2, 4, 6, 3, 5, 8, 9, 7];

// console.log(array.fill("a"));
// console.log(array.fill("A", 2));
console.log(array.fill("A", 2, 5));

//FILTER GIVES NEW ARRAY WITH SOME CONDITIONS

const myNum = [23, 24, 53, 89, 78, 64, 12, 34];

const result = myNum.filter((myNum) => myNum > 53);

console.log(result);