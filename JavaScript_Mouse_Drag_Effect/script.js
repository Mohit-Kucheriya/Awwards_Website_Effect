document.querySelector("#main").addEventListener("mousemove",function(dets){
    document.querySelector(".top-img").style.width = dets.clientX + "px"
})