window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".lazy_lodaing");
    for (let i = 0; i < sections.length; i++) {
        let window_hight = window.innerHeight;
        let sections_top = sections[i].getBoundingClientRect().top;
        let sections_point = 1;
        if (sections_top < window_hight - sections_point && !sections[i].classList.contains("active")) {
            sections[i].classList.add("active");
        }
    }
});