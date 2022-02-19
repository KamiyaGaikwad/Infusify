let searchLinks = document.querySelector(".search-links");
let search = document.querySelector(".search");

const showSearchLinks = () => {
    searchLinks.classList.remove("hide");
}

search.addEventListener("click",showSearchLinks);
