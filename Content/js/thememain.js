function slideNavOpen() {
    var body = document.body;
    var slideNavButtons = document.querySelectorAll('a.slide-nav-toggle');

    if (slideNavButtons.length > 0) {
        slideNavButtons.forEach(slideNavButton => {
            slideNavButton.addEventListener('click', slideNavClick)
        });
    }
    function slideNavClick(e) {
        console.log(this)
        e.preventDefault()
        body.classList.toggle('slide-nav-open');
    }
}
slideNavOpen();