function backgroundColorChange() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#two",
            markers: true,
            start: "0 0",
            end: "5% 0",
            scrub: 1,
            duration: 1.2,
        },
    });

    tl.to("#main", {
        backgroundColor: "#FFFEA9",
    });

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#two",
            markers: true,
            start: "70% 0",
            end: "75% 0",
            scrub: 1,
            duration: 1.2,
        },
    });
    tl2.to("#main", {
        backgroundColor: "#C6FCED",
    });
}
backgroundColorChange()
