var isEven = (element) => {
    // if (element % 2 === 0) {
    //     return true;
    // }
    // return false;
    return element % 2 === 0;
}

console.log(isEven(8));

var result = [2, 3, 6, 8].every(isEven);
console.log(result);


//TODO: Callback FUNCTION: IS FUN WITHOUT NAME and ()=>{}
//TODO: Every fun iterates through every element of an array to check if all is true then combined res true will come

// var result = [2, 4, 6, 8].every((e) => {
//     return e % 2 === 0
// });
// console.log(result);


// TODO: without return 
var result = [2, 4, 6, 8].every((e) => e % 2 === 0);
console.log(result);