var left = document.querySelector(".left")
var floatLeft = document.querySelector(".float-left");
var right = document.querySelector(".right")
var floatRight = document.querySelector(".float-right");
var cardOne = document.querySelector(".cardOne");

function cardHoverEffect() {
    left.addEventListener("mousemove", function () {
        floatLeft.style.left = "40%";
        cardOne.style.left = "30%";
        cardOne.style.transform = "rotateY(-30deg) translate(-50%,0)";
    })
    left.addEventListener("mouseleave", function () {
        floatLeft.style.left = "100%"
        cardOne.style.left = "50%";
        cardOne.style.transform = "rotateY(0deg) translate(-50%,0)";
    })


    right.addEventListener("mousemove", function () {
        floatRight.style.right = "40%";
        cardOne.style.left = "60%";
        cardOne.style.transform = "rotateY(30deg) translate(-50%,0)";
    })
    right.addEventListener("mouseleave", function () {
        floatRight.style.right = "100%"
        cardOne.style.left = "50%";
        cardOne.style.transform = "rotateY(0deg) translate(-50%,0)";
    })
}
cardHoverEffect()