let searchLinks = document.querySelector(".search-links");
let search = document.querySelector(".search");
// let html = document.querySelector("html");

const showSearchLinks = () => {
    searchLinks.classList.remove("hide");
}

// const hideSearchLinks = (e) => {
//     if(e.target != searchLinks){
//     searchLinks.classList.add("hide");}
//     else{
//         searchLinks.classList.remove("hide");
//     }
// }

// document.addEventListener("click",hideSearchLinks);

search.addEventListener("click",showSearchLinks);
