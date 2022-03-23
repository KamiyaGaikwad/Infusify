let searchLinks = document.querySelector(".search-links");
let backgroundTransparent = document.querySelector(".background-transparent");
let search = document.querySelector(".search");

const showSearchLinks = () => {
    searchLinks.classList.remove("hide");
    backgroundTransparent.classList.remove("hide");
}


search.addEventListener("click",showSearchLinks);


window.onclick = function(e) {
    if (e.target == backgroundTransparent) {
        backgroundTransparent.classList.add("hide");
        searchLinks.classList.add("hide");
    }
  }
