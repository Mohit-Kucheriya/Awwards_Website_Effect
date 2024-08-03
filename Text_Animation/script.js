gsap.to(".main-section img", {
    top: "-150%",
    duration: 5,
}, "cloud")

gsap.to(".main-section .overlay", {
    opacity: 0,
    duration: 4,
    delay: 1

}, "cloud")

gsap.to("#mainHeading", {
    fontSize: "10vw",
    duration: 4,
})