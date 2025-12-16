// File chính - Khởi tạo tất cả chức năng
$(document).ready(function () {
    // 1. Khởi tạo Slick Slider
    SliderManager.init();
    // 2. Khởi tạo WOW.js (Animation)
    new WOW().init();
    // 3. Khởi tạo Isotope (Portfolio Filter)
    initIsotope();
    // 4. Smooth scroll
    smoothScroll();

    // 5. Back to top button
    backToTop();

});

// Isotope Portfolio Filter

function initIsotope() {
    if ($('.grid').length) {
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });

        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            // Active button style
            $('.filter-button-group button').removeClass('btn-primary').addClass('btn-outline-primary');
            $(this).removeClass('btn-outline-primary').addClass('btn-primary');
        });

    }

}

// Smooth Scroll cho anchor links
function smoothScroll() {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 96 // trừ height của header fixed
            }, 1000);
        }
    });
}

// Back to Top Button (nếu có)
function backToTop() {
    // Tạo button back to top nếu chưa có
    if (!$('.back-to-top').length) {
        $('body').append('<button class="back-to-top" style="display:none;"><i class="fa fa-arrow-up"></i></button>');
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
}