$(document).ready(function () {
    $(".car-1, .car-2, .car-3, .car-4, .car-5, .car-6, .car-7, .car-8, .car-9, .car-10").click(function () {
        $(".car-1, .car-2, .car-3, .car-4, .car-5, .car-6, .car-7, .car-8, .car-9, .car-10").css({
            "filter": "grayscale(100%) brightness(50%)",
            "transform": "scale(1)"
        });

        $(this).css({
            "filter": "grayscale(0%) brightness(100%)",
            "transform": "scale(1.2)"
        });

        // إخفاء جميع العناصر المرتبطة
        $(".car-11, .car-22, .car-33, .car-44, .car-55, .car-66, .car-77, .car-88, .car-99, .car-1010").hide();

        // الحصول على رقم السيارة التي تم النقر عليها
        let carNumber = $(this).attr("class").match(/\d+/)[0]; // استخراج الرقم من الكلاس
        let targetClass = ".car-" + carNumber + carNumber; // تحويله إلى الصيغة المناسبة (مثلاً 2 → 22)

        // إظهار العنصر المرتبط
        $(targetClass).show();
    });
});
