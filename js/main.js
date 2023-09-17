function downloadCV() {
    const e = Swal.mixin({});
    e.fire({
        title: "Download CV?",
        text: "Which CV Version do you want to download?",
        icon: "question",
        showCancelButton: !0,
        width: 600,
        padding: "3em",
        confirmButtonText: "CV ATS Optimized",
        cancelButtonText: "CV Creative",
        reverseButtons: !0
    }).then(e => {
        e.isConfirmed ? window.open("./New_ATS_Rafli.pdf", "_blank") : e.dismiss === Swal.DismissReason.cancel && window.open("./CV.pdf", "_blank")
    })
}

function sendWA() {
    Swal.fire({
        title: "Masukan Nomor Whatsapp Anda",
        input: "text",
        inputAttributes: {
            autocapitalize: "off"
        },
        showCancelButton: !0,
        confirmButtonText: "Kirim",
        showLoaderOnConfirm: !0,
        preConfirm: e => {
            if (e == "") {
                swal.fire({
                    title: "Gagal!",
                    text: "Harap isi nomor whatsapp anda!",
                    icon: "error",
                    confirmButtonText: "OK"
                })
            }
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = `./sender.html?number=${result.value}`;
        }
    });
}

function sendContact() {
    let e = document.getElementById("contact-name").value,
        o = document.getElementById("contact-phone").value,
        t = document.getElementById("subject").value,
        i = document.getElementById("contact-message").value;
    "" == e || "" == o || "" == t || "" == i ? swal.fire({
        title: "Gagal!",
        text: "Harap isi semua kolom!",
        icon: "error",
        confirmButtonText: "OK"
    }) : window.open(`https://wa.me/628812671057?text=Halo Rafli, saya *${e} (${o})* ingin bertanya tentang *${t}*. ${i}`, "_blank")
}(function (e) {
    "use strict";
    var o = {
        m: function (e) {
            o.d(), o.methods()
        },
        d: function (o) {
            this._window = e(window), this._document = e(document), this._body = e("body"), this._html = e("html")
        },
        methods: function (e) {
            o.featherAtcivation(), o.backToTopInit(), o.mobileMenuActive(), o.vedioActivation(), o.stickyHeader(), o.smothScroll(), o.smothScroll_Two(), o.stickyAdjust(), o.testimonialActivation(), o.contactForm(), o.wowActive(), o.awsActivation(), o.demoActive(), o.activePopupDemo(), o.onePageNav()
        },
        activePopupDemo: function (o) {
            e(".popuptab-area li a.demo-dark").on("click", function (o) {
                e(".demo-modal-area").addClass("dark-version"), e(".demo-modal-area").removeClass("white-version")
            }), e(".popuptab-area li a.demo-light").on("click", function (o) {
                e(".demo-modal-area").removeClass("dark-version"), e(".demo-modal-area").addClass("white-version")
            })
        },
        demoActive: function (o) {
            e(".rn-right-demo").on("click", function (o) {
                e(".demo-modal-area").addClass("open")
            }), e(".demo-close-btn").on("click", function (o) {
                e(".demo-modal-area").removeClass("open")
            })
        },
        contactForm: function () {
            e(".rwt-dynamic-form").on("submit", function (o) {
                o.preventDefault();
                var t = e(this);
                t.closest("input,textarea");
                t.closest("div").find("input,textarea").removeAttr("style"), t.find(".error-msg").remove(), t.closest("div").find('button[type="submit"]').attr("disabled", "disabled");
                var i = e(this).serialize();
                e.ajax({
                    url: "mail.php",
                    type: "post",
                    dataType: "json",
                    data: i,
                    success: function (o) {
                        t.closest("div").find('button[type="submit"]').removeAttr("disabled"), 0 == o.code ? (t.closest("div").find('[name="' + o.field + '"]'), t.find(".rn-btn").after('<div class="error-msg"><p>*' + o.err + "</p></div>")) : (e(".error-msg").hide(), e(".form-group").removeClass("focused"), t.find(".rn-btn").after('<div class="success-msg"><p>' + o.success + "</p></div>"), t.closest("div").find("input,textarea").val(""), setTimeout(function () {
                            e(".success-msg").fadeOut("slow")
                        }, 5e3))
                    }
                })
            })
        },
        wowActive: function () {
            (new WOW).init()
        },
        smothScroll: function () {
            e(document).on("click", ".smoth-animation", function (o) {
                o.preventDefault(), e("html, body").animate({
                    scrollTop: e(e.attr(this, "href")).offset().top - 50
                }, 300)
            })
        },
        smothScroll_Two: function () {
            e(document).on("click", ".smoth-animation-two", function (o) {
                o.preventDefault(), e("html, body").animate({
                    scrollTop: e(e.attr(this, "href")).offset().top - 0
                }, 300)
            })
        },
        stickyAdjust: function (o) {
            e(".rbt-sticky-top-adjust").css({
                top: 120
            }), e(".rbt-sticky-top-adjust-two").css({
                top: 200
            }), e(".rbt-sticky-top-adjust-three").css({
                top: 25
            })
        },
        testimonialActivation: function () {
            e(".testimonial-activation").slick({
                infinite: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0,
                arrows: !0,
                adaptiveHeight: !0,
                cssEase: "linear",
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>'
            }), e(".testimonial-item-one").slick({
                infinite: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0,
                arrows: !0,
                adaptiveHeight: !0,
                cssEase: "linear",
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-chevron-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-chevron-right"></i></button>',
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        arrows: !1
                    }
                }]
            }), e(".portfolio-slick-activation").slick({
                infinite: !0,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: !1,
                arrows: !0,
                cssEase: "linear",
                adaptiveHeight: !0,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [{
                    breakpoint: 1124,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 868,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: !0,
                        arrows: !1
                    }
                }]
            }), e(".blog-slick-activation").slick({
                infinite: !0,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: !1,
                arrows: !0,
                cssEase: "linear",
                adaptiveHeight: !0,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [{
                    breakpoint: 1124,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 868,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: !0,
                        arrows: !1
                    }
                }]
            }), e(".testimonial-activation-item-3").slick({
                arrows: !0,
                dots: !0,
                infinite: !0,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight: !0,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-chevron-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-chevron-right"></i></button>',
                responsive: [{
                    breakpoint: 1124,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: !1
                    }
                }, {
                    breakpoint: 577,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: !1
                    }
                }]
            }), e(".brand-activation-item-5").slick({
                arrows: !0,
                dots: !0,
                infinite: !0,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                adaptiveHeight: !0,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-chevron-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-chevron-right"></i></button>',
                responsive: [{
                    breakpoint: 1124,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 868,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            })
        },
        featherAtcivation: function () {
            feather.replace()
        },
        backToTopInit: function () {
            var o = e(".backto-top");
            e(window).scroll(function () {
                var t = e(this).scrollTop();
                t > 100 ? e(o).css("opacity", "1") : e(o).css("opacity", "0")
            }), e(o).on("click", function () {
                return e("html, body").animate({
                    scrollTop: 0,
                    easingType: "linear"
                }, 500), !1
            })
        },
        stickyHeader: function (o) {
            e(window).scroll(function () {
                e(this).scrollTop() > 250 ? e(".header--sticky").addClass("sticky") : e(".header--sticky").removeClass("sticky")
            })
        },
        vedioActivation: function (o) {
            function t() {
                e(".video-overlay.open").removeClass("open").find("iframe").remove()
            }
            e("#play-video, .play-video").on("click", function (o) {
                o.preventDefault(), e("#video-overlay, .video-overlay").addClass("open"), e("#video-overlay, .video-overlay").append('<iframe width="80%" height="80%" src="https://www.youtube.com/embed/7e90gBu4pas" frameborder="0" allowfullscreen></iframe>')
            }), e(".video-overlay, .video-overlay-close").on("click", function (e) {
                e.preventDefault(), t()
            }), e(document).keyup(function (e) {
                27 === e.keyCode && t()
            })
        },
        mobileMenuActive: function (t) {
            e(".humberger-menu").on("click", function (t) {
                t.preventDefault(), e(".popup-mobile-menu").addClass("menu-open"), o._html.css({
                    overflow: "hidden"
                })
            }), e(".close-menu-activation, .popup-mobile-menu .primary-menu .nav-item a").on("click", function (t) {
                t.preventDefault(), e(".popup-mobile-menu").removeClass("menu-open"), e(".popup-mobile-menu .has-droupdown > a").removeClass("open").siblings(".submenu").removeClass("active").slideUp("400"), o._html.css({
                    overflow: ""
                })
            }), e(".popup-mobile-menu").on("click", function (t) {
                t.target === this && e(".popup-mobile-menu").removeClass("menu-open"), o._html.css({
                    overflow: ""
                })
            }), e(".popup-mobile-menu .has-droupdown > a").on("click", function (t) {
                t.preventDefault(), e(this).siblings(".submenu").toggleClass("active").slideToggle("400"), e(this).toggleClass("open"), o._html.css({
                    overflow: ""
                })
            }), e(".nav-pills .nav-link").on("click", function (t) {
                e(".rn-popup-mobile-menu").removeClass("menu-open"), o._html.css({
                    overflow: ""
                })
            })
        },
        awsActivation: function (e) {
            AOS.init()
        },
        onePageNav: function () {
            e(".onepagenav").onePageNav({
                currentClass: "current",
                changeHash: !0,
                scrollSpeed: 500,
                scrollThreshold: .2,
                filter: ":not(.external)",
                easing: "swing",
                scrollChange: function (e) {
                    console.log(this)
                }
            })
        }
    };
    o.m()
})(jQuery, window);
let config = {
    particles: {
        number: {
            value: 57,
            density: {
                enable: !0,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: .22885281607335908,
            random: !1,
            anim: {
                enable: !1,
                speed: 1,
                opacity_min: .1,
                sync: !1
            }
        },
        size: {
            value: 3,
            random: !0,
            anim: {
                enable: !1,
                speed: 40,
                size_min: .1,
                sync: !1
            }
        },
        line_linked: {
            enable: !0,
            distance: 150,
            color: "#ffffff",
            opacity: .25252724532232723,
            width: 1
        },
        move: {
            enable: !0,
            speed: 2,
            direction: "none",
            random: !1,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: {
                enable: !1,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: !0,
                mode: "repulse"
            },
            onclick: {
                enable: !0,
                mode: "push"
            },
            resize: !0
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: .4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: !0
};
particlesJS("particles-js", config);
var rellax = new Rellax(".rellax");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sent = urlParams.get('sent');
if(sent){
    swal.fire({
        title: "Berhasil!",
        text: "Pesan untuk anda telah terkirim! silahkan cek whatsapp anda!",
        icon: "success",
        confirmButtonText: "OK"
    });
}
console.warn = () => {};