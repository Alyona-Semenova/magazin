// Проверка поддерживает ли браузер формат .webp

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
};

testWebP(function (support) {
    document.querySelector('body').classList.add('webp');
});


//MENU BURGER CLEAN JS

// var menuIcon = document.getElementById("menu__icon");
// var menuBody = document.getElementById("menu__body");

// menuIcon.onclick = function () {
//     menuIcon.classList.toggle('_active');
//     menuBody.classList.toggle('_active');
// }

//MENU BURGER JQuery

var $menuIcon = $('#menu__icon'),
    $menuBody = $('#menu__body');

$menuIcon.on('click', function () {
    $(this).toggleClass("_active");
    $menuBody.toggleClass("_active");
});


//BUTTON UP

//BUTTON UP CLEAN JS

// var buttonUp = document.getElementById("up");
// window.addEventListener('scroll', trackScroll);
// buttonUp.addEventListener('click', backToTop);

// function trackScroll() {
//     var scrolled = window.pageYOffset;
//     var coords = document.documentElement.clientHeight;

//     if (scrolled > coords) {
//         buttonUp.classList.add('back_to_top-show');
//     }
//     if (scrolled < coords) {
//         buttonUp.classList.remove('back_to_top-show');
//     }
// }

// function backToTop() {
//     if (window.pageYOffset > 0) {
//         window.scrollBy(0, -80);
//         setTimeout(buttonUp, 0);
//     }
// }


//buttonUP jQuery

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#up').fadeIn();
        } else {
            $('#up').fadeOut();
        }
    });
    $('#up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 700);
    });
});


// удалить
// $(document).ready(function () {
//     $("a[rel=group]").fancybox({
//         'transitionIn': 'none',
//         'transitionOut': 'none',
//         'titlePosition': 'over',
//         'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
//             return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? '   ' + title : '') + '</span>';
//         }
//     });
// });
// удалить

//Настройка fancybox
$(document).ready(function () {
    $("[data-fancybox]").fancybox({
        // protect: true,
        // toolbal: false
    });
});
