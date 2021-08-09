$(document).ready(()=>{
    const buttons = $('.phoneMenu .menuBtn');
    buttons.on('click', function(e){
        e.preventDefault()
        buttons.removeClass('active')
        $(this).addClass('active')
        $('#phoneImg').attr('src','image/' + $(this).data('img'))
    })
})