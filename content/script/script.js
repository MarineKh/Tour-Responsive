window.addEventListener("scroll", function(event) {
    var yOffset = window.pageYOffset;
    var breakpoint = 150;
    if (yOffset > breakpoint) {
        document.getElementById("site-header").style.display = "none"
    } else {
        document.getElementById("site-header").style.display = "block"
    }
});

var $bunnerBtn = $(".banner-btn"),
    $imgTop = $("#img-top"),
    $sec = $("#sec"),
    $minute = $("#minute");

function getImageSizes() {
    $bunnerBtn.css('top', (75 / 100) * $imgTop.height());
    $bunnerBtn.css('right', (8 / 100) * $imgTop.width());

    $("#title").css('top', (94 / 100) * $imgTop.height());
    $('#title_text').customTextPlugin({
        alignVert: false,
        alignHoriz: true
    });
}
$(document).ready(function() {
    getImageSizes();
    $(window).resize(function() {
        getImageSizes();
    });
});

(function($) {
    $.fn.customTextPlugin = function(options) {
        var settings = {
            alignVert: true,
            alignHoriz: true
        };
    };
     $(document).ready(function () {

         var $navUl =  $('header nav ul');
        $('#burger-nav').click(function (event) {
            $navUl.toggleClass('open');
            ($navUl.attr('class') === 'open') ? $imgTop.css('opacity', '.8') : $imgTop.css('opacity', '1');
            event.stopPropagation();
        });

         $(document).click(function() {
             $navUl.removeClass('open');
             ($navUl.attr('class') === 'open') ? $imgTop.css('opacity', '.8') : $imgTop.css('opacity', '1');
         });

         function decrementSec() {
             if($sec.text() === '0') {
                 $sec.text(60);
             }
             $sec.text(parseInt($sec.text()) - 1);
             setTimeout(decrementSec, 1000);
         }
         decrementSec();

         function decrementMinute() {
             if($minute.text() === '0') {
                 return 0;
             }
             $minute.text(parseInt($minute.text()) - 1);
             setTimeout(decrementMinute, 60000);
         }
         decrementMinute();
     });
})(jQuery);