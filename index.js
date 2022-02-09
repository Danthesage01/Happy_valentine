let closeModal = document.getElementById("close-modal")
let openModal = document.getElementById("open-modal")
let header = document.getElementById("header")
let dpFirst = document.getElementById("dp-first")




openModal.addEventListener("click", function(){
    let overlay = document.getElementById("overlay")
    overlay.style.display = "block"
})

closeModal.addEventListener("click", function(){
    let overlay = document.getElementById("overlay")
    overlay.style.display = "none"
    dpFirst.style.display = "none"
    header.style.display = "block"
})
