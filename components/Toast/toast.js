const toastBtn = document.querySelector(".toast-btn");
const timedToast = document.querySelector(".timed-toast");

toastBtn.addEventListener("click", ()=> {
    timedToast.style.display = "block";
    setTimeout("hideToast();", 3000);
})

function hideToast(){
    timedToast.style.display= "none";
}