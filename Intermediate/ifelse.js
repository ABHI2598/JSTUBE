var isLoggedIn = true;

var emailverified = true;

var cardInfo = true;

// if (isLoggedIn) {
//     console.log("Login Successfull");
//     if (emailverified) {
//         console.log("email verified");
//     }
//     if (cardInfo) {
//         console.log("Yu can make purchase");
//     }
// } else {
//     console.log("Please login to Purchase");
// }

if (isLoggedIn && cardInfo && emailverified) {
    console.log("Allow user to purchase");
} else {
    console.log("Please LOGIN to purcchase");
}