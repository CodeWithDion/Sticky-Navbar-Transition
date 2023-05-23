const headerEl = document.getElementById("header");
const articleEl = document.getElementById("article");


window.addEventListener("scroll", () => {
    if (window.scrollY > articleEl.offsetTop - headerEl.offsetHeight) {
        headerEl.classList.add("active");
    }
    else {
        headerEl.classList.remove("active");
    }
});