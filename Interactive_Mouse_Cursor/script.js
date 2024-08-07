let ball = document.querySelector("#ball")
let loader = document.querySelector(".loader")

document.querySelector("body").addEventListener("mousemove", function (dets) {
    function load() {
        ball.style.top = `${dets.clientY}px`
        ball.style.left = `${dets.clientX}px`
    }
    window.requestAnimationFrame(load)
})

loader.addEventListener("click", function () {
    document.querySelector(".loader h1").style.marginLeft = "-140%";
    document.querySelector(".loader p").style.marginLeft = "-140%";
    document.querySelector(".loader h1").style.opacity = 0;
    document.querySelector(".loader p").style.opacity = 0;
    ball.style.scale = 0
})
loader.addEventListener("dblclick", function () {
    document.querySelector(".loader h1").style.marginLeft = "initial";
    document.querySelector(".loader p").style.marginLeft = "initial";
    document.querySelector(".loader h1").style.opacity = 1;
    document.querySelector(".loader p").style.opacity = 1;
    ball.style.scale = 1.5
})

