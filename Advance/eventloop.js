const uno = () => {
    console.log("I am one");
}

const dos = () => {
    //in js if any thing is taking time it will execute remaining messgaes in queue which is not on load also called as synchronous func

    setTimeout(() => {
        console.log("WOOHOO Late");
        console.log("I am two");
    }, 5000)
   
}

const tres = () => {
    console.log("I am three");
}


uno();
tres();
dos();
tres();