let courses = [{
        name: "complete ReactJs Course",
        price: "2.4"
    },
    {
        name: "complete Mern Course",
        price: "2.9"
    },
    {
        name: "complete Angular Course",
        price: "4.4"
    },
    {
        name: "complete c++ Course",
        price: "3.4"
    },
];


function generateList() {
    // first grab class which we want to make list
    let ul = document.querySelector(".list-group");
    ul.innerHTML = "";

    courses.forEach((course) => {
        let li = document.createElement("li");
        li.classList.add("list-group-item");

        let name = document.createTextNode(course.name);
        li.appendChild(name);

        let span = document.createElement("span");
        span.classList.add("float-right");

        let price = document.createTextNode("$ " + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);

    })
}

// generateList();

window.addEventListener("load", generateList);

let button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price);
    // courses.reverse();
    generateList();
})