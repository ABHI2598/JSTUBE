var users = {
    firstName: "Abhinav",
    lastName: "Pandey",
    role: "admin",
    loginCount: 43,
    isLoggedIn: true
};

console.log(users.firstName);
console.log(users["lastName"]);

console.table(users); //makes tale for key value pairs

users.loginCount = 70;
console.log(users.loginCount);