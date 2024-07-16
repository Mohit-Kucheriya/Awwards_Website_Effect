$(document).ready(function () {
    var $scramble = $(".scramble");
    $scramble.scramble(3000, 20, "alphabet", true)
})

var tl = gsap.timeline()

tl.to(".loading", {
    opacity: 0,
    delay: 3.5
})

    .to(".loader", {
        y: "-100%",
        opacity: 0,
        duration: 1.2,
    })