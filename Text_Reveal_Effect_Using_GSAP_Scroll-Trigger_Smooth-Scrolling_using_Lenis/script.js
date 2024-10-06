function lenisSmoothScroll() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}
lenisSmoothScroll()

function imgAnimation() {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            start: "top 50%",
            end: "100% 70%",
            scrub: 1,
        },
    });

    tl
        .to(
            ".one-img", {
            x: -500,
            rotate: -20,
        }, "a")

        .to(
            ".two-img", {
            x: -500,
            rotate: -20,
            delay: -0.5,
        }, "b")

        .to(
            ".three-img", {
            x: 500,
            rotate: 20,
        }, "a")

        .to(
            ".four-img", {
            x: 500,
            rotate: 20,
            delay: -0.5,
        }, "b")

        .to(".inner-text h2", {
            y: -100,
            opacity: 1,
            delay: -0.4,
        });

}
imgAnimation()
