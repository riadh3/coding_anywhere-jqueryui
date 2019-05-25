$(document).ready(()=>{
    let $grid = $('.pictures-container').isotope()

    $('.filter-button-group').on('click', 'button',function () { 
        let filterValue = $(this).attr('data-filter')
        $grid.isotope({
            filter: filterValue
        })
     })
})