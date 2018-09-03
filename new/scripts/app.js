$.fn.isInViewport = function() {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();
    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

(function(){
    setTimeout(function(){
        $("#initial-load-screen").fadeOut();
    }, 1000);

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 20) {
            $(".main-nav").addClass("scrolled");
        } else {
            $(".main-nav").removeClass("scrolled");
        }
    }

    $('.sponsor-logos .logo-container').tilt({});

    $(window).on('resize scroll', function() {
        $(".nav-link").removeClass("active");
        if($("#top").isInViewport()) {
            $("#top-nav-link").addClass("active");
        } else if($("#about").isInViewport()){
            $("#about-nav-link").addClass("active");
        } else if($("#faqs").isInViewport()){
            $("#faqs-nav-link").addClass("active");
        } else if($("#sponsors").isInViewport()){
            $("#sponsors-nav-link").addClass("active");
        }
    });
    let scroll = new SmoothScroll('a[href*="#"]');

})();