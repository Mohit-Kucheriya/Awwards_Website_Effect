let left = document.querySelector(".left");
let centerOne = document.querySelector(".center-one");
let leftBtn = document.getElementById("left-btn");
let right = document.querySelector(".right");
let centerTwo = document.querySelector(".center-two");
let rightBtn = document.getElementById("right-btn")
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")
let img5 = document.getElementById("img5")
let img6 = document.getElementById("img6")
let img7 = document.getElementById("img7")
let img8 = document.getElementById("img8")

function textHoverAnimation() {
    // Left Effect
    left.addEventListener("mousemove", function () {
        centerOne.style.height = "110vh";
        leftBtn.style.backgroundColor = "#222";
        leftBtn.style.color = "#fff";
        img1.style.width = "25vw";
        img1.style.height = "25vh";
        img1.style.opacity = "1";
        img1.style.filter = "blur(0.5px)";
        img2.style.width = "20vw";
        img2.style.height = "20vh";
        img2.style.opacity = "1";
        img2.style.filter = "blur(0.5px)";
        img3.style.width = "20vw";
        img3.style.height = "20vh";
        img3.style.opacity = "1";
        img3.style.filter = "blur(0.5px)";
        img4.style.width = "15vw";
        img4.style.height = "15vh";
        img4.style.opacity = "1";
        img4.style.filter = "blur(0.5px)";
    })

    left.addEventListener("mouseleave", function () {
        centerOne.style.height = "0vh"
        leftBtn.style.backgroundColor = "initial"
        leftBtn.style.color = "#222";
        img1.style.width = "15vw";
        img1.style.height = "15vh";
        img1.style.opacity = "0";
        img1.style.filter = "blur(15px)";
        img2.style.width = "10vw";
        img2.style.height = "10vh";
        img2.style.opacity = "0";
        img2.style.filter = "blur(10px)";
        img3.style.width = "10vw";
        img3.style.height = "10vh";
        img3.style.opacity = "0";
        img3.style.filter = "blur(15px)";
        img4.style.width = "10vw";
        img4.style.height = "10vh";
        img4.style.opacity = "0";
        img4.style.filter = "blur(15px)";
    })

    // Right Effect
    right.addEventListener("mousemove", function () {
        centerTwo.style.height = "110vh";
        rightBtn.style.backgroundColor = "#222";
        rightBtn.style.color = "#fff";
        img5.style.width = "25vw";
        img5.style.height = "25vh";
        img5.style.opacity = "1";
        img5.style.filter = "blur(0.5px)";
        img6.style.width = "20vw";
        img6.style.height = "20vh";
        img6.style.opacity = "1";
        img6.style.filter = "blur(0.5px)";
        img7.style.width = "20vw";
        img7.style.height = "20vh";
        img7.style.opacity = "1";
        img7.style.filter = "blur(0.5px)";
        img8.style.width = "15vw";
        img8.style.height = "15vh";
        img8.style.opacity = "1";
        img8.style.filter = "blur(0.5px)";
    })

    right.addEventListener("mouseleave", function () {
        centerTwo.style.height = "0vh"
        rightBtn.style.backgroundColor = "initial";
        rightBtn.style.color = "#222";
        img5.style.width = "15vw";
        img5.style.height = "15vh";
        img5.style.opacity = "0";
        img5.style.filter = "blur(15px)";
        img6.style.width = "10vw";
        img6.style.height = "10vh";
        img6.style.opacity = "0";
        img6.style.filter = "blur(10px)";
        img7.style.width = "10vw";
        img7.style.height = "10vh";
        img7.style.opacity = "0";
        img7.style.filter = "blur(15px)";
        img8.style.width = "10vw";
        img8.style.height = "10vh";
        img8.style.opacity = "0";
        img8.style.filter = "blur(15px)";
    })
}

textHoverAnimation();