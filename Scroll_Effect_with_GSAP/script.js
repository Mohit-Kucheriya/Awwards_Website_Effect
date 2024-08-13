let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        pin: true,
        scrub: true,
        start: "50% 50%",
        end: "200% 50%",
    }
})

tl1.to("#img1", {
    top: "-70%"
}, "top1")
tl1.to("#img2", {
    top: "-20%"
}, "top1")
tl1.to("#img4", {
    top: "-90%"
}, "top1")

tl1.to("#img5", {
    top: "30%"
}, "top1")

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        pin: true,
        scrub: true,
        start: "0% 50%",
        end: "50% 50%",
    }
})

tl2.to("#img3", {
    top: "70%"
}, "top1")
tl2.to("#img6", {
    top: "75%"
}, "top1")

