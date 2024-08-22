const myStates = [
    "UP",
    "Maharashtra",
    "MP",
    1947,
    "Assam",
    "goa",
    "punjab",
    "delhi"
];

// TODO: We use let in for loop bcz let will be deleted from memory as soon as for loop scope ends.

for (let i = 0; i < myStates.length; i++) {
    if (typeof myStates[i] !== "string") continue;
    console.log(myStates[i]);
}


// let i = 0;
// while (i < myStates.length) {
//     console.log(myStates[i]);
//     i++;
// }


// let i = 0;
// do {
//     console.log(myStates[i]);
//     i++;
// } while (i < myStates.length);