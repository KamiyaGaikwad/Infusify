const cardDismiss = document.querySelector(".card-dismiss");
const cardCloseIcon = document.querySelector(".card-close-icon");

const dismissCard = () =>{
    cardDismiss.style.display = "none";
}

cardCloseIcon.addEventListener("click",dismissCard);