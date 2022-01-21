window.addEventListener("scroll", function() {
    const parallax = document.querySelector("img");
    let scrollP = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollP * .3 + 'px)';
})