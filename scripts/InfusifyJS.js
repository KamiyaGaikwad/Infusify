// alert
const alertClose = document.querySelector(".alert-close");
const close = document.querySelector(".alert-close-icon");

//toast
const toastBtn = document.querySelector(".toast-btn");
const timedToast = document.querySelector(".timed-toast");

//input
const btn = document.querySelector(".eye");
const pwd = document.querySelector(".pwd");
const check = document.querySelector(".check");
const errorShow = document.querySelector(".error-show");

//card
const cardDismiss = document.querySelector(".card-dismiss");
const cardCloseIcon = document.querySelector(".card-close-icon");

//Modal
const modalBtn = document.querySelector(".modal-btn");
const modalbackground = document.querySelector(".modal-background");
const modalCloseIcon = document.querySelector(".modal-close-icon")

//Navigation hamburger
const hamIcon = document.querySelector(".ham-icon");
const navOut = document.querySelector(".nav-out");

//alert close function
close.addEventListener("click", ()=> {
    alertClose.style.display = "none";
})

//toast 3 sec function and hide toast
toastBtn.addEventListener("click", ()=> {
    timedToast.style.display = "block";
    setTimeout("hideToast();", 3000);
})

function hideToast(){
    timedToast.style.display= "none";
}

//change type to text or password function and password checker function
const toggleClass = () =>{
    if(pwd.type == "text"){
        pwd.type = "password";
        eye.innerHTML = eye.innerHTML.replace(`<i class="fas fa-eye-slash"></i>`,`<i class="fas fa-eye"></i>`);
    }
    else{
        eye.type = "text"
        btn.innerHTML = eye.innerHTML.replace(`<i class="fas fa-eye"></i>`,`<i class="fas fa-eye-slash"></i>`);
    }
}

const passwordChecker = () =>{
    if(check.value.length <8){
        errorShow.style.color = "var(--dark-red)";
        check.classList.remove("success-input");
        check.classList.add("error-input");
        console.log("cc")
    }
    else{
        errorShow.style.color = "transparent";
        check.classList.remove("error-input");
        check.classList.add("success-input");
    }
}

check.addEventListener("input",passwordChecker);
eye.addEventListener("click",toggleClass);

//card-dismiss function
const dismissCard = () =>{
    cardDismiss.style.display = "none";
}

cardCloseIcon.addEventListener("click",dismissCard);

//Show Modal and hide modal by close button or clicking anywhere on page
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

  //Navigation Hamburger
  function hamClick(){
    if(navOut.style.display === "none"){
        navOut.style.display = "flex"
    }
    else{
        navOut.style.display = "none"
}}

hamIcon.addEventListener("click",hamClick);
