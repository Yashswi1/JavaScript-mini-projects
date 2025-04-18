var AddFriend = document.querySelector("#add");
var send = document.querySelector("#change");
var accept = 0;

AddFriend.addEventListener("click", function(){
    if(accept == 0){
        send.innerHTML = "Friends"
        send.style.color = "blue"
        AddFriend.innerHTML = "Remove Friend"
        accept = 1
    } else {
        send.innerHTML = "Strangers"
        send.style.color = "red"
        AddFriend.innerHTML  = "AddFriend"
        accept = 0 
    }
})

// remove.addEventListener("click", function(){
    send.innerHTML = "Strangers"
    send.style.color = "red"
// })