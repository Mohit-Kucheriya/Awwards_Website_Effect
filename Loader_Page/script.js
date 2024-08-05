let tl = gsap.timeline();
tl.to(".text-loader", {
    opacity: 1,
    duration: 0.08,
    stagger: {
        each: 0.16, //0.08 to Show + 0.08 to get Hide
        repeat: 1,
        yoyo: true,
    },
})
    .to(".loader", {
        display: "none",
    })
    .to(
        ".c-text-1",
        {
            onStart: function () {
                $(".c-text-1").scramble(3000, 40, "alphabet", true);
            },
        },
        "text"
    )
    .to(
        ".c-text-2",
        {
            onStart: function () {
                $(".c-text-2").scramble(3000, 40, "alphabet", true);
            },
        },
        "text"
    )
    .to(
        ".info",
        {
            onStart: function () {
                $(".info").scramble(3000, 40, "alphabet", true);
            },
        },
        "text"
    )
    .to(
        ".contact",
        {
            onStart: function () {
                $(".contact").scramble(3000, 40, "alphabet", true);
            },
        },
        "text"
    );