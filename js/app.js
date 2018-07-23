$(window).on("load", function () {
    setTimeout(function () {
        window.sr = ScrollReveal({});
        sr.reveal('.reveal');
        // Add smooth scrolling to all links
        $(".navbar-nav li a").on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
                if($(window).width() < 768){
                    $("#nav-collapse-button").click();
                }
            } // End if
        });

        $(".navbar-brand").on('click', function (event) {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: 0
            }, 800, function () {
                window.location.hash = hash;
            });
            if($(window).width() < 768 && $(".navbar-collapse").hasClass("in")){
                $("#nav-collapse-button").click();
            }
        });

        $(".apply-link").on('click', function(event) {
            event.preventDefault();
            $(".typeform-share").click();
        });
        (function () {
            var qs, js, q, s, d = document, gi = d.getElementById, ce = d.createElement, gt = d.getElementsByTagName,
                id = "typef_orm_share", b = "https://embed.typeform.com/";
            if (!gi.call(d, id)) {
                js = ce.call(d, "script");
                js.id = id;
                js.src = b + "embed.js";
                q = gt.call(d, "script")[0];
                q.parentNode.insertBefore(js, q)
            }
        })()
    }, 2000);
    setTimeout(function () {
        // Processing.reload();
        $("#initial-load-screen").addClass('loaded');
        if(!is.edge() && !is.ie()){
            $("#intro").addClass("play-animation");
        } else {
            $("#intro").addClass("show-final-edge");
        }
        if(is.ie()){
            alert("Internet Explorer is not fully supported, please use Edge instead.")
        }
    }, 1000);
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        $(".navbar-default").addClass("navbar-small");
    } else {
        $(".navbar-default").removeClass("navbar-small");
    }
});

// Make navigation bar collapse once link was clicked.
$(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse('hide');
});

feather.replace();
