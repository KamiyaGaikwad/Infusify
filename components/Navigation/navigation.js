const hamIcon = document.querySelector(".ham-icon");
const navOut = document.querySelector(".nav-out");

function hamClick(){
    if(navOut.style.display === "none"){
        navOut.style.display = "flex"
    }
    else{
        navOut.style.display = "none"
}}

hamIcon.addEventListener("click",hamClick);