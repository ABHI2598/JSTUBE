var users = ["TIM", "TOM", "TON", "SAM", "SOD", "SOR"];

console.log(users.slice(3, 5)); //start from 3 and go upto 5 and print upto 5 with exclusive 5 .

users.splice(2, 3, "HI"); //Start from 2 and count 3 pos and instead of them write "HI"
console.log(users);