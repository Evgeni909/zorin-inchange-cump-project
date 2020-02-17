$(document).ready(function() {
    $(".reviews-container").each(function () { // обрабатываем каждый слайдер
        var obj = $(this);
        $(obj).append("<div class='nav'></div>");
        $(obj).find(".reviews-container-slider-content").each(function () {
            $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
            $(this).addClass("reviews-container"+$(this).index());
        });
        $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
    });
});
function sliderJS (obj, sl) { // slider function
    var ul = $(sl).find(".reviews-container-slider"); // находим блок
    var bl = $(sl).find(".reviews-container-slider-content.reviews-container"+obj); // находим любой из элементов блока
    var step = $(bl).width(); // ширина объекта
    $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
}
$(document).on("click", ".reviews-container .nav span", function() { // slider click navigate
    var sl = $(this).closest(".reviews-container"); // находим, в каком блоке был клик
    $(sl).find("span").removeClass("on"); // убираем активный элемент
    $(this).addClass("on"); // делаем активным текущий
    var obj = $(this).attr("rel"); // узнаем его номер
    sliderJS(obj, sl); // слайдим
    return false;
});
