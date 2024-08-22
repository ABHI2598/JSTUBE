const red = document.querySelector(".color red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");


// console.log(window.getComputedStyle(red).backgroundColor);


var getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

var color = getBGColor(orange);

orange.addEventListener('mouseenter', () => {
    center.style.background = color;
})