const getId = (id) => { return document.getElementById(id) };
let currentIndex = 0;
let lastScrollY = window.scrollY;
let headerText = document.querySelector('.headerText');
let readMore = document.querySelector(".read-more");
let texts = document.querySelectorAll(".text-content");
let debounceTimeout;

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    let scrollThreshold = 200;
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
        if (scrollPosition > lastScrollY + scrollThreshold) {
            if (currentIndex < texts.length - 1) {
                texts[currentIndex].classList.remove("active");
                currentIndex++;
                texts[currentIndex].classList.add("active");
            }
        }
        else if (scrollPosition < lastScrollY - scrollThreshold) {
            if (currentIndex > 0) {
                texts[currentIndex].classList.remove("active");
                currentIndex--;
                texts[currentIndex].classList.add("active");
            }
        }
        lastScrollY = currentIndex;
    }, 100);

    let opacity = 1 - scrollPosition / 500; // Fade speed
    headerText.style.opacity = opacity < 0 ? 0 : opacity;
    readMore.style.opacity = opacity < 0 ? 0 : opacity;
})