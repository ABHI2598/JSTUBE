var mapmy = new Map();

mapmy.set(0, "one");
mapmy.set(1, "two");
mapmy.set(2, "three");
mapmy.set(3, "four");

// console.log(mapmy);

for (keys of mapmy.keys()) {
    console.log(`keys are ${keys}`);
}

for (values of mapmy.values()) {
    console.log(`values  are ${values}`);
}

for ([key, value] of mapmy) {
    console.log(`keys are ${key} and values are ${value}`);
}

mapmy.forEach((value, key) => console.log(`Values are ${value} and Keys are ${key}`));



// console.log(mapmy.size);