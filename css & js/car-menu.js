const logoWrapper = document.querySelector(".car-logo");

let isDragging = false;
let startX, scrollLeft;
let autoScroll;
let userInteracted = false;


logoWrapper.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - logoWrapper.offsetLeft;
    scrollLeft = logoWrapper.scrollLeft;
    logoWrapper.style.cursor = "grabbing";
    stopAutoScroll();
});

logoWrapper.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - logoWrapper.offsetLeft;
    const walk = (x - startX) * 2;
    logoWrapper.scrollLeft = scrollLeft - walk;
});

logoWrapper.addEventListener("mouseup", () => {
    isDragging = false;
    logoWrapper.style.cursor = "pointer";
    restartAutoScroll();
});

logoWrapper.addEventListener("mouseleave", () => {
    isDragging = false;
    logoWrapper.style.cursor = "pointer";
    restartAutoScroll();
});


function startAutoScroll() {
    autoScroll = setInterval(() => {
        logoWrapper.scrollBy({ left: 200, behavior: "smooth" });


        if (logoWrapper.scrollLeft + logoWrapper.clientWidth >= logoWrapper.scrollWidth - 5) {
            logoWrapper.scrollLeft = 0;
        }
    }, 10000);
}


function stopAutoScroll() {
    clearInterval(autoScroll);
    userInteracted = true;
}


function restartAutoScroll() {
    if (userInteracted) {
        setTimeout(() => {
            userInteracted = false;
            startAutoScroll();
        }, 10000);
    }
}


window.addEventListener("load", startAutoScroll);