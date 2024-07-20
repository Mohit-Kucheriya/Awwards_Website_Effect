document.addEventListener("mousemove", function (dets) {
    document.querySelectorAll(".img").forEach((e) => {
        const position = e.getAttribute("value");
        let x = (window.innerWidth - dets.clientX * position) / 50;
        let y = (window.innerHeight - dets.clientY * position) / 50;

        e.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
})