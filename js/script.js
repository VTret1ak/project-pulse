$(document).ready(function () {
    $(".carousel__inner").slick({
        speed: 800,
        prevArrow:
            '<button type="button" class="slick-prev"><img src="./icons/left.png" alt="left"></button>',
        nextArrow:
            '<button type="button" class="slick-next"><img src="./icons/right.png" alt="left"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                },
            },
        ],
    });
    $("ul.catalog__tabs").on(
        "click",
        "li:not(.catalog__tab_active)",
        function () {
            $(this)
                .addClass("catalog__tab_active")
                .siblings()
                .removeClass("catalog__tab_active")
                .closest("div.container")
                .find("div.catalog__content")
                .removeClass("catalog__content_active")
                .eq($(this).index())
                .addClass("catalog__content_active");
        }
    );

    $(".catalog-item__link").each(function (i) {
        $(this).on("click", function (e) {
            e.preventDefault();
            $(".catalog-item__content")
                .eq(i)
                .toggleClass("catalog-item__content_active");
            $(".catalog-item__list")
                .eq(i)
                .toggleClass("catalog-item__list_active");
        });
    });
    $(".catalog-item__back").each(function (i) {
        $(this).on("click", function (e) {
            e.preventDefault();
            $(".catalog-item__content")
                .eq(i)
                .toggleClass("catalog-item__content_active");
            $(".catalog-item__list")
                .eq(i)
                .toggleClass("catalog-item__list_active");
        });
    });

    //Modal
    $("[data-modal=consultation]").on("click", function () {
        $(".overlay, #consultation").fadeIn();
    });
    $(".modal__close").on("click", function () {
        $(".overlay, #consultation, #order, #thanks").fadeOut();
    });

    $(".button_mini").on("click", function () {
        $(".overlay, #order").fadeIn();
    });

    $(".button_mini").each(function (i) {
        $(this).on("click", function () {
            $("#order .modal__descr").text(
                $(".catalog-item__subtitle").eq(i).text()
            );
            $(".overlay, #order").fadeIn();
        });
    });
    $("[data-modal=consultation]").on("click", function () {
        $(".overlay, #consultation").fadeIn();
    });

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                phone: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true,
                },
            },
            messages: {
                name: {
                    required: "Поле обязательное",
                    minlength: jQuery.validator.format(
                        "Значение поля должно быть не менее {0} символов"
                    ),
                },
                email: {
                    required: "Поле обязательное",
                    email: "Электронная почта не действительна",
                },
                phone: "Поле обязательное",
            },
        });
    }
    validateForms("#order form");
    validateForms("#consultation-form");
    validateForms("#consultation form");

    $("input[name=phone]").mask("+380 (99) 999-99-99");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1200) {
            $(".pageup").fadeIn();
        } else {
            $(".pageup").fadeOut();
        }
    });
    new WOW().init();
});
