// Quản lý tất cả Slick Slider trong website
var SliderManager = {
    // Khởi tạo tất cả slider
    init: function () {
        this.pageSlider();
        this.brandSlider();
    },

    // Page Slider (Section One)
    pageSlider: function () {
        if ($('.bg-img-list').length) {
            $('.bg-img-list').slick({
                autoplay: true,
                dots: true,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 2000,
                prevArrow: '<button type="button" class="slick-prev custom-prev"><i class="fa fa-chevron-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next custom-next"><i class="fa fa-chevron-right"></i></button>'
            });
        }
    },
    // Brand Slider (Section Five)
    brandSlider: function () {
        if ($('.sec-five-container').length) {
            $('.sec-five-container').slick({
                slidesToShow: 6, // số logo hiển thị khi desktop
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false, // tắt mũi tên trái/phải
                dots: true, // tắt chấm điều hướng
                infinite: true,
                pauseOnHover: false, // không dừng khi hover
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
                ]
            });
        }

    },






}