const modalBtn = document.querySelector(".modal-btn");
const modalbackground = document.querySelector(".modal-background");
const modalCloseIcon = document.querySelector(".modal-close-icon")

modalBtn.addEventListener("click", ()=> {
    modalbackground.style.display = "block";
})

modalCloseIcon.addEventListener("click",()=>{
    modalbackground.style.display = "none";
})

window.onclick = function(e) {
    if (e.target == modalbackground) {
      modalbackground.style.display = "none";
    }
  }

