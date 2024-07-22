Draggable.create(".drag", {
    type: "x",
    bounds: ".container"
})

function checkOverlap() {
    var circle = document.querySelector(".circle");
    var drag = document.querySelector(".drag");

    var rect1 = circle.getBoundingClientRect();
    var rect2 = drag.getBoundingClientRect();
    if (rect1.left < rect2.right) {
        document.querySelector("#video1").style.opacity = 0
    }
    else {
        document.querySelector("#video1").style.opacity = 1
    }
}

document.addEventListener("mousemove", checkOverlap)