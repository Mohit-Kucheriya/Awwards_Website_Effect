function smoothScroll() {
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

smoothScroll();

var tl = gsap.timeline()
tl.from(".one h1", {
    x: 200,
    opacity: 0,
    duration: 1,

    ease: Power3
}, "h1")
    .from(".one h2", {
        x: -200,
        opacity: 0,
        duration:1,
    }, "h1")
function skillEffect() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.two',
            pin: true,
            start: '50% 50%',
            end: '300% 50%',
            // markers: true,
            scrub: 2,

        }
    });

    tl.to("#webd", {
        opacity: 1,
        filter: "blur(0px)"
    })
        .to("#data", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3
        })
        .to("#html", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3


        })
        .to("#react", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3

        })
        .to("#css", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3

        })
        .to("#express", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3

        })
        .to("#animation", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3

        })
        .to("#gsap", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3

        })
        .to("#node", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3

        })
        .to("#js", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3

        })
        .to("#mern", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3

        })
        .to("#c", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3

        })
        .to("#seo", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3

        })
        .to("#java", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3

        })
        .to("#data", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3

        })
        .to("#mongodb", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3

        })
        .to("#algo", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3

        })

}

skillEffect()