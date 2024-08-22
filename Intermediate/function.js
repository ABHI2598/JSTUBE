function sayHello(name) {
    console.log("Hey Abhinav");
    console.log("Hey", name);
    console.log(`Hey ${name}. How r yu`);
}

sayHello("abhinav");


function namstey() {
    return "Hello India";
}

namstey(); // no output since fun is returning

var greet = namstey(); // kindaof functional programming

console.log(greet);
console.log(namstey());