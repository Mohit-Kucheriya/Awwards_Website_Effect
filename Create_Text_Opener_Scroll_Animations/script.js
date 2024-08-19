let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        start: "50% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true,
    }
})

tl.to("#top", {
    top: "-50%"
}, "text")
    .to("#bottom", {
        bottom: "-50%"
    }, "text")

    .to("#top-h", {
        top: "80%"
    }, "text")
    .to("#bottom-h", {
        bottom: "-160%"
    }, "text")