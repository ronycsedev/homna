(function ($) {
    $(function () {
 
        
        
        // product 
        $('.product-details-tab-triger ul li').click(function(){
            $('.product-details-tab-triger ul li').removeClass('active');
            $(this).addClass('active');
            $('.product-thumb-wrap .product-thumb').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });

        $('.descriptions-tab-triger ul li').click(function(){
            $('.descriptions-tab-triger ul li').removeClass('active');
            $(this).addClass('active');
            $('.descriptions-tab-item-wrap .descriptions-tab-item').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });

        // if ($('.product-details-tab-triger ul').length) {
        //     $('.product-details-tab-triger ul').slick({
        //         arrows: true,
        //         infinite: true,
        //         autoplay: false,
        //         autoplaySpeed: 1500,
        //         speed: 1500,
        //         navigation:false,
        //         slidesToShow: 4,
        //         slidesToScroll: 1,
        //         dots: false,
        //         centerMode: false,
        //         focusOnSelect: true,
        //         fade: true,
                
        //     })
        //     $(window).on('resize', function () {
        //         $('.product-details-tab-triger ul').slick('resize');
        //         });
        // }


    }) // End ready function.
    
    
    
    

})(jQuery)

var mac = 0;
if (navigator.userAgent.indexOf('Mac') > 0) {
    mac = 1;
} else {
    mac = 0;
}
if (1 == mac) {
    $('body').addClass('mac-os');
} else {
    $("body").addClass('win-os');
}

function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}