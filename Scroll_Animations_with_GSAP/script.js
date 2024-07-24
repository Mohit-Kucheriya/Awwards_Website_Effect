var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        start: "50% 50%",
        end: "70% 50%",
        scrub: 5,
        // markers: true,
        duration: 1
    }
})

tl.to(".img", {
    width: "100vw",
    height: "100vh",
    borderRadius: "0px"
})