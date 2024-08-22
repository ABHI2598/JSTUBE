var name = "ABhinav";

console.log("Line number 3 ", name);

function sayName() {
    // var name = "ABHI";
    console.log("Line number 6", name);

    function sayAbhi() {
        // var name = "Abhinav Pandey";
        console.log("Line 10", name);
    }
    sayAbhi();

}
sayName();