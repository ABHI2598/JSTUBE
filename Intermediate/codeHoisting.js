tipper("80");

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}

var bigTipper = function(a) {
    var bill = parseInt(a);
    console.log(bill + 15);
};

bigTipper("200");

console.log(name); // undefined because variables are scanned and made undefined in global exe context
var name = "hitesh";

function sayName() {
    var name = "MR. H";
    console.log(name);
}
sayName();

console.log(name);