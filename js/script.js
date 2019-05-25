$(document).ready(()=>{

    $('#toggle-btn').on('click', function(){
        $('.nav-links').stop().slideToggle(2000)
    })

// accordion
$('#accordion').accordion()

// magnific popup
$('#current-center').magnificPopup({
    delegate: 'a', /* from https: *///dimsemenov.com/plugins/magnific-popup/documentation.html
    type: 'image',
    gallery: {
        enabled: true
      }
  })

})