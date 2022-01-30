const btn = document.querySelector(".btn");
const pwd = document.querySelector(".pwd");
const check = document.querySelector(".check");
const errorShow = document.querySelector(".error-show");
const toggleClass = () =>{
    if(pwd.type == "text"){
        pwd.type = "password";
        btn.innerHTML = btn.innerHTML.replace(`<i class="fas fa-eye-slash"></i>`,`<i class="fas fa-eye"></i>`);
    }
    else{
        pwd.type = "text"
        btn.innerHTML = btn.innerHTML.replace(`<i class="fas fa-eye"></i>`,`<i class="fas fa-eye-slash"></i>`);
    }
}

btn.addEventListener("click",toggleClass);

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