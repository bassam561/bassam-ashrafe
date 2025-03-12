const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-btn");

// فتح القائمة عند الضغط على الأيقونة
menuIcon.addEventListener("click", () => {
sidebar.classList.add("active");
});

// إغلاق القائمة عند الضغط على زر الإغلاق
closeBtn.addEventListener("click", () => {
sidebar.classList.remove("active");
});