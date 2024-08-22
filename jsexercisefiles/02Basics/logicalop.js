// && - AND operator - Both sides need to be true 
// || - OR operation - One side side need to be true

let isVerified = false
let isLoggedin = true
let hasPaymentToken = true
let isGuest = false

if (isVerified && isLoggedin && hasPaymentToken) {
    console.log('Greeting msg to user')
    console.log('Grant acces to the paid courses')

} else if (isVerified || !isGuest) {
    console.log('Allow free')
} else {
    console.log('Please contact admin')
}