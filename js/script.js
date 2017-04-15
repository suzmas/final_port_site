$("#bs-example-navbar-collapse-1 li a").on("click", function() {
    if ($("#hamburger-toggle").attr("aria-expanded") === "true") {
        $("#hamburger-toggle").trigger("click");
    }
});
$(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    dotsEach: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
$(document).ready(function() {
    $("html").niceScroll({cursorcolor: "#ba9a9a", scrollspeed: "100", cursorborder: "1px solid #ba9a9a", horizrailenabled: "false", cursorborderradius: "0px"});
});
new WOW().init();
$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow': 'visible'});
})
