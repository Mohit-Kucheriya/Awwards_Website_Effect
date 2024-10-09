// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


let lastScroll = 0;
let timeout;

let boxAll = document.querySelectorAll(".box")

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop
    clearTimeout(timeout)

    if (scrollTop > lastScroll) {
        boxAll.forEach(function (box) {
            box.style.scale = "0.7"
        })
    } else if (scrollTop < lastScroll) {
        boxAll.forEach(function (box) {
            box.style.scale = "1.2"
        })
    }
    lastScroll = scrollTop;
    timeout = setTimeout(() => {
        boxAll.forEach(function (box) {
            box.style.scale = "1"
        })
    }, 100);

})