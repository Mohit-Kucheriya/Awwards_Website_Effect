let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".part2",
        start: "0% 90%",
        end: "180% 90%",
        scrub: true,
        markers: true,

    }
})

tl.to(".stripe-left", {
    marginLeft: "0%"
}, "text")
tl.to(".stripe-right", {
    marginLeft: "-50%"
}, "text")




