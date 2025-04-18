var arr = [
    {
        dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        story:"https://media.istockphoto.com/id/1445528561/photo/aerial-view-of-man-and-woman-raising-holding-arms-in-mountains-in-norway.webp?a=1&b=1&s=612x612&w=0&k=20&c=pn1qBTXxkNZxGvyCtwkmqtkbRiDW31gpJklKqp-u-e0=",
    },

    {
        dp:"https://media.istockphoto.com/id/2148937766/photo/young-beautiful-hippie-woman-sitting-on-the-ground-in-nature-in-the-fall-in-eco-clothing-in.jpg?s=612x612&w=0&k=20&c=ktY17qa1jmf85VyfIXFLiyN9-vsquYb4phbgVmmLnLI=",
        story:"https://plus.unsplash.com/premium_photo-1688410049290-d7394cc7d5df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXVyb3BlfGVufDB8fDB8fHww",
    },
   
    {
        dp:"https://plus.unsplash.com/premium_photo-1697730373939-3ebcaa9d295e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2Fwb3JlfGVufDB8fDB8fHww",
        story:"https://plus.unsplash.com/premium_photo-1697730373939-3ebcaa9d295e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2Fwb3JlfGVufDB8fDB8fHww",
    },

    {
        dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1lcmljYXxlbnwwfHwwfHx8MA%3D%3D",
    }
]


var stories = document.querySelector("#stories")
var clutter = ""
arr.forEach(function(e, idx){
    clutter += `<div class="story">
                <img id="${idx}" src="${e.dp}" alt="">
                </div>
`
})

document.querySelector("#stories").innerHTML = clutter

stories.addEventListener("click", function(dets){
    var value = arr[dets.target.id].story
    document.querySelector("#full").style.display = "block"
    document.querySelector("#full").style.backgroundImage = `url(${value})`

    setTimeout(function(){
        document.querySelector("#full").style.display = "none"
    },2000)
 })


