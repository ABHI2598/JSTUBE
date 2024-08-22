let sayhello = function(name) {
    console.log("hey welcome user");
    console.log(`hey ${name}`);


}

sayhello('john')

let fullName = function(firstName, lastName) {
    console.log('hi user: ' + `${firstName} ${lastName}`);

}

fullName('john', 'doe')

let adder = function(num1, num2) {
    let sum = num1 + num2
    return sum
}

let result = adder(7, 7)
console.log(result);

let user = function(name = 'Abhi', coursecount = 0, la = 'abrol') {
    return 'hello ' + name + ' and your course count is : ' + coursecount + la
}
console.log(user('Akansha', 2));