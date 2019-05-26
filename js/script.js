$(document).ready(() => {

    $('#toggle-btn').on('click', function () {
        $('.nav-links').stop().slideToggle(2000)
    })

    // accordion
    $('#accordion').accordion()

    // magnific popup
    $('#current-center').magnificPopup({
        delegate: 'a',
        /* from https: */ //dimsemenov.com/plugins/magnific-popup/documentation.html
        type: 'image',
        gallery: {
            enabled: true
        }
    })

    // progress bars for the prgress HTMLTableSectionElement,
    // plugin from jqueryui
    $('#prog-bar-1').progressbar({
        value: 20
    })
    $('#prog-bar-2').progressbar({
        value: 40
    })
    $('#prog-bar-3').progressbar({
        value:60 
    }) 
    $('#prog-bar-4').progressbar({
        value: 80
    })

    // owlCarousel for the quote section
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        smartSpeed:2000,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })






})