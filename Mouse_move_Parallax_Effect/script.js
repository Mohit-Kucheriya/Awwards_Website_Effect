function mouseParallaxEffect() {
    document.addEventListener("mousemove", function (details) {
        document.querySelectorAll(".slide").forEach((elm) => {
            const position = elm.getAttribute("value");
            let x = (window.innerWidth - details.clientX * position) / 35;
            elm.style.transform = `translateX(${-x}px)`;
        })
    })
}

mouseParallaxEffect()