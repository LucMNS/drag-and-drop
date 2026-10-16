const lists = document.querySelectorAll(".list");
const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");
const boxes = [leftBox, rightBox];

let selected = null;

Array.from(lists).forEach((list) => {
    list.addEventListener("dragstart", (event) => {
        selected = event.currentTarget;
    });
});

boxes.forEach((box) => {
    box.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    box.addEventListener("drop", (event) => {
        event.preventDefault();

        if (selected) {
            box.appendChild(selected);
            selected = null;
        }
    });
});