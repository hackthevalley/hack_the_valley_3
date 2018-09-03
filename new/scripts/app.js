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

    $('.sponsor-logos .logo-container').tilt({

    })

})();