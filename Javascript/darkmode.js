/*DARKMODE*/
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if (darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
    /*
    if (darkmode !== "active") {
        enableDarkmode()
    }
    else {
        disableDarkmode()
    }

    ? == if and : == else

    so if darkmode !== "active" is true, do enableDarkmode(), else disableDarkmode()
    */
})

/*SEARCH BAR*/
const searchBarContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () => {
    searchBarContainerEl.classList.toggle("active");
});

/*SLIDES*/
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;
    let index = 0;

    function moveToSlide(i) {
        index = i;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    function showNextSlide() {
        if (index === totalSlides - 1) {
        direction = -1;
        } else if (index === 0) {
        direction = 1;
        }

        index += direction;
        moveToSlide(index);
    }

    moveToSlide(0);
    setInterval(showNextSlide, 5000);