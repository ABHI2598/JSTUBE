// function init() {
//     var firstName = "Abhinav";
//     console.log("I am Init");

//     function sayFirstName() {
//         console.log(firstName);
//     }
//     return sayFirstName;
// }

// var value = init();
// value();

function doAddition(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        };
    };
}

var add5 = doAddition(5)(6);
console.log(add5(7));

console.log(doAddition(5)(5)(9));