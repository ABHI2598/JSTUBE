// let iamGlobal = 'somevalue'

// if (true) {
//     var iamLocal = 'someMoreValue'
//     console.log(iamGlobal)
//     console.log(iamLocal)
// }

// console.log(iamGlobal)
// console.log(iamLocal)

// kings problem 

let king = 'abhi'

if (true) {
    let king = 'adarsh'

    if (true) {
        let king = 'aman'
        console.log(king)
    }
}

if (true) {
    console.log("I am second child of king :" +
        king)
}