/**
 * Created by Jo on 2/26/2016.
 */
$(document).ready(function(){

     function checkScreenSize() {
        width = window.innerWidth;
        if ( width > 768 ) {
            $("#first").click(function () {
                $(".section").hide();
                $(".one").fadeIn();
            });
            $("#menu .menu:not(#first)").click(function () {
                $(".section").hide();
                var selector = '.' + $(this).attr("data-id");
                $(selector).slideDown("slow");
            });
            $("#menu a").hover(function () {
                $(this).css({"position": "relative"});
                $(this).animate({top: "+=50px"}, 400);
                $(this).addClass("active");
                $(this).removeClass("active-not");
            }, function () {
                $(this).addClass("active-not");
                $(this).removeClass("active");
                $(this).css({"position": "relative"});
                $(this).animate({top: "-=50px"}, 200);
            });
            $("#icons a img").hover(function () {
                $(this).css({"width": "55px", "height": "48px"}, 1000)
            }, function () {
                $(this).css({"width": "48px"}, 100);
            });
        } else {
            $("#first, #second, #three, #fourth, #fifth").unbind("click");
            $("#menu a").unbind('mouseenter').unbind("mouseleave");
        }
    }

    setInterval(function() {
        checkScreenSize();
    },500);

    $("body").prepend('<a href="#" class="back-to-top">Back to Top</a>');

    var amountScrolled = 500;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $("a.back-to-top").fadeIn("slow");
        } else {
            $("a.back-to-top").fadeOut("slow");
        }
    });

    $("a.back-to-top").click(function() {
        $("body, html").animate({
            scrollTop: 0
        }, 700);
        return false;
    });

    $("a.page-scroll").click(function() {
        var $anchor = $(this);
        $("html, body").animate({
            scrollTop: ($($anchor.attr("href")).offset().top - 50)
        }, 2000);
        return false;
    });

});
