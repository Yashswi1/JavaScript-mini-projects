var elem1 = document.querySelectorAll(".elem")
// var elemImage = document.querySelector("#elem1 img")


//  elem1.addEventListener("mousemove", function(dets){
//     elemImage.style.left = dets.x+"px"
//     elemImage.style.top = dets.y+"px"
// })

// elem1.addEventListener("mouseenter", function(dets){
//     elemImage.style.opacity = 1
// })

// elem1.addEventListener("mouseleave", function(dets){
//     elemImage.style.opacity = 0
// })


elem1.forEach(function(val){

val.addEventListener("mouseenter", function(){
    val.childNodes[3].style.opacity = 1
})
val.addEventListener("mouseleave", function(){
    val.childNodes[3].style.opacity = 0
})
val.addEventListener("mousemove", function(delt){
    val.childNodes[3].style.left = delt.x+"px"
    val.childNodes[3].style.top = delt.y+"px"
})
})
