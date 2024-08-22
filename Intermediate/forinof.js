const names = ["YouTube", "Instagram", "Facebook", "twitter"];


//for of loop is used with arrays mostly

// for (const n of names) {
//     console.log(n);
// }


const symbols = {
    yt: "youtube",
    fb: "facebook",
    Is: "instagram",
    lco: "learncodeOnline"
};

for (const n in symbols) {
    // console.log(n); //gives key of object
    console.log(`Key is: ${n} and value is: ${symbols[n]}`)
}