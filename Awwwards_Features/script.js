let slidePhoto = document.querySelector("#slidephoto");
let Photos = document.querySelector(".photos");

window.addEventListener("mousemove", function (dets) {
    slidePhoto.style.top = `${dets.clientY}px`
    slidePhoto.style.left = `${dets.clientX}px`
    slidePhoto.style.transform = `translate(${-dets.clientX * 0.20}px ,${-dets.clientY * 0.60}px)`
})

let Katherine = document.querySelector("#Katherine")
Katherine.addEventListener("mousemove", function () {
    Photos.style.marginTop = "0%";
    Katherine.style.opacity = 0.5
})
Katherine.addEventListener("mouseleave", function () {
    Katherine.style.opacity = 1
})


let Sydney = document.querySelector("#Sydney")
Sydney.addEventListener("mousemove", function () {
    Photos.style.marginTop = "-125%";
    Sydney.style.opacity = 0.5
})
Sydney.addEventListener("mouseleave", function () {
    Sydney.style.opacity = 1
})

let Madison = document.querySelector("#Madison")
Madison.addEventListener("mousemove", function () {
    Photos.style.marginTop = "-250%";
    Madison.style.opacity = 0.5
})
Madison.addEventListener("mouseleave", function () {
    Madison.style.opacity = 1
})

let Josephine = document.querySelector("#Josephine")
Josephine.addEventListener("mousemove", function () {
    Photos.style.marginTop = "-375%";
    Josephine.style.opacity = 0.5
})
Josephine.addEventListener("mouseleave", function () {
    Josephine.style.opacity = 1
})

let elem = document.querySelector(".elem");
elem.addEventListener("mouseenter", function () {
    slidePhoto.style.display = "block";
    slidePhoto.style.opacity = 1

})
elem.addEventListener("mouseleave", function () {
    slidePhoto.style.display = "none";
    slidePhoto.style.opacity = 0

})