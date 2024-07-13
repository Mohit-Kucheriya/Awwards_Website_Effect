const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "20% 50%",
        end: "100% 50%",
        scrub: 1,
        // markers: true,
    }
})

tl.to(".text-hover h1", {
    width: "100%",

})
tl.to(".text-hover h2", {
    width: "100%",
    delay: -0.4
})
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "20% 50%",
        end: "100% 50%",
        scrub: 1,
        // markers: true,
    }
})


tl2.to(".text-three-hover h1", {
    width: "100%",

})
tl2.to(".text-three-hover h2", {
    width: "100%",
    delay: -0.4
})

