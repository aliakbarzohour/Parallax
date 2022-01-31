// ---------------------------------------------------------------
// In this part of JavaScript coding, we should try to slow down 
// the image scrolling rate as the window scrolls.
// ---------------------------------------------------------------

window.addEventListener("scroll", function() {
    // I take the picture
    const parallax = document.querySelector("img");
    // In this section, I tell JavaScript to be sensitive to how 
    // much this image scrolls and tell me how much it scrolls.
    let scrollP = window.pageYOffset;
    // And finally I say slow down the scrolling of the pixels.
    parallax.style.transform = 'translateY(' + scrollP * .3 + 'px)';
})
