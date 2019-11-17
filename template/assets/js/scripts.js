/*
 *   Author: beshleyua
 *   Author URL: http://themeforest.net/user/beshleyua
 */


/*
	Preloader
*/


var preload = $('.preloader');
var lines = $('.lines-grid');
preload.find('.spinner').delay(2000).fadeOut(function() {
    preload.fadeOut();
    lines.addClass('loaded');
});

$(function() {
    'use strict';


    /*
    	Vars
    */

    var width = $(window).width();
    var height = $(window).height();


    /*
    	Typed subtitle
    */

    $('.typed-title').typed({
        stringsElement: $('.typing-title'),
        backDelay: 5000,
        /* Delay in text change */
        typeSpeed: 0,
        /* Typing speed */
        loop: true
    });


    /*
    	Menu Mobile
    */

    $('.header').on('click', '.menu-btn', function() {
        if ($('.header').hasClass('opened')) {
            $('.header').removeClass('opened');
        } else {
            $('.header').addClass('opened');
        }
    });


    /*
    	Header Menu Desktop
    */

    if ($('#home-card').length) {
        $('.top-menu').on('click', 'a', function() {

            /* vars */
            var lines_grid = $('.lines-grid');
            var id = $(this).attr('href');
            var card_items = $('.card-inner');
            var card_item = $(id);
            var menu_items = $('.top-menu li');
            var menu_item = $(this).closest('li');

            if (!menu_item.hasClass('active') & $('#home-card').length) {

                /* close card items */
                menu_items.removeClass('active');
                lines_grid.removeClass('loaded');

                /* open card item */
                menu_item.addClass('active');
                setTimeout(function() {
                    lines_grid.addClass('loaded');
                    $(card_items).removeClass('active');
                    $(card_item).addClass('active');
                }, 1000);
            }

            return false;
        });
    }


    /*
    	Youtube video background
    */

    if ($('#video-bg').length) {
        var myPlayer = $("#video-bg").YTPlayer();
    }


    /*
    	Initialize masonry items
    */

    var $container = $('.grid-items');

    $container.imagesLoaded(function() {
        $container.multipleFilterMasonry({
            itemSelector: '.grid-item',
            filtersGroupSelector: '.filter-button-group',
            percentPosition: true,
            gutter: 0
        });
    });


    /*
    	12. Initialize masonry filter
    */

    $('.filter-button-group').on('change', 'input[type="radio"]', function() {
        if ($(this).is(':checked')) {
            $('.f_btn').removeClass('active');
            $(this).closest('.f_btn').addClass('active');
        }
        /* popup image */
        $('.has-popup-image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'popup-box',
            image: {
                verticalFit: true
            }
        });

        /* popup video */
        $('.has-popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            mainClass: 'popup-box'
        });

        /* popup music */
        $('.has-popup-music').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            mainClass: 'popup-box'
        });

        /* popup media */
        $('.has-popup-media').magnificPopup({
            type: 'inline',
            overflowY: 'auto',
            closeBtnInside: true,
            mainClass: 'popup-box-inline'
        });
    });


    /*
    	Popups
    */

    /* popup image */
    $('.has-popup-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'popup-box',
        image: {
            verticalFit: true
        }
    });

    /* popup video */
    $('.has-popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        mainClass: 'popup-box'
    });

    /* popup music */
    $('.has-popup-music').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        mainClass: 'popup-box'
    });

    /* popup media */
    $('.has-popup-media').magnificPopup({
        type: 'inline',
        overflowY: 'auto',
        closeBtnInside: true,
        mainClass: 'popup-box-inline',
        callbacks: {
            open: function() {
                $('.popup-box-inline .popup-box').slimScroll({
                    height: height + 'px'
                });
            }
        }
    });


    /*
    	Validate Contact Form
    */

    $("#cform").validate({
        ignore: ".ignore",
        rules: {
            name: {
                required: true
            },
            message: {
                required: true
            },
            no_hp: {
                required: true,
                number: true
            },
            hiddenRecaptcha: {
                required: function() {
                    if (grecaptcha.getResponse() == '') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        },
        success: "valid",
        submitHandler: function() {
            var url = $('#url').val();
            $.ajax({
                url: url + 'home/sendmail',
                type: 'post',
                data: 'name=' + $("#cform").find('input[name="name"]').val() + '&no_hp=' + $("#cform").find('input[name="no_hp"]').val() + '&message=' + $("#cform").find('textarea[name="message"]').val(),

                beforeSend: function() {
                    console.log("sending")
                    $('#href').css("pointer-events", "none");
                    $("#text").html('<span class="text">Sending Message...</span>').css("pointer-events", "none");
                    $("#icon").html('<span class="icon"><i class="la la-arrow-right"></i></span>').css("pointer-events", "none");
                },
                success: function(data) {
                    console.log("ok")
                    $('#href').css("pointer-events", "none");
                    $("#text").html('<span class="text">Success...</span>').css("pointer-events", "none");
                    $("#icon").html('<span class="icon"><i class="la  la-check-circle"></i></span>').css("pointer-events", "none");
                }
            });
        }
    });


    /*
    	Validate Commect Form
    */

    $("#comment_form").validate({
        rules: {
            name: {
                required: true
            },
            message: {
                required: true
            }
        },
        success: "valid",
        submitHandler: function() {}
    });


    /*
    	Google Maps
    */

    if ($('#map').length) {
        initMap();
    }


    /*
    	NEW SCRIPTS
    */

    if (($('.blogs-content').height() > $('.blogs-sidebar').height()) && (width > 1023)) {
        $('.blogs-sidebar').css({ 'min-height': $('.blogs-content').height() });
    }
    if (($('.blogs-content').height() < $('.blogs-sidebar').height()) && (width > 1023)) {
        $('.blogs-content').css({ 'min-height': $('.blogs-sidebar').height() });
    }

    $(window).resize(function() {
        var width = $(window).width();

        if (($('.blogs-content').height() > $('.blogs-sidebar').height()) && (width > 1023)) {
            $('.blogs-sidebar').css({ 'min-height': $('.blogs-content').height() });
        }
        if (($('.blogs-content').height() < $('.blogs-sidebar').height()) && (width > 1023)) {
            $('.blogs-content').css({ 'min-height': $('.blogs-sidebar').height() });
        }
    });

    /* Header Menu Inner Page */
    $('.top-menu').on('click', 'a', function() {

        if (!$('#home-card').length) {
            location.href = '/' + $(this).attr('href');
        }

        return false;
    });

    var url_hash = location.hash;
    var sectionElem = $(url_hash);
    if (url_hash.indexOf('#') == 0 && url_hash.indexOf('-card') != -1 && sectionElem.length) {
        $('.top-menu li').removeClass('active');
        $('.top-menu a[href="' + url_hash + '"]').parent().addClass('active');

        $('.lines-grid').removeClass('loaded');
        $('.card-inner').removeClass('active');

        $(url_hash).addClass('active');
    }

});


/*
	Google Map Options
*/

function initMap() {
    var myLatlng = new google.maps.LatLng(48.859003, 2.345275); // <- Your latitude and longitude
    var styles = [{
            "stylers": [{
                    "hue": "#ff1a00"
                },
                {
                    "invert_lightness": true
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 33
                },
                {
                    "gamma": 0.5
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#2D333C"
            }]
        }
    ]

    var mapOptions = {
        zoom: 16,
        center: myLatlng,
        mapTypeControl: false,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        styles: styles
    }

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'We are here!'
    });
}