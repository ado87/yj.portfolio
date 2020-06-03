$(function(){
    $('.info').css('display', 'none')

    $('.title a').on('click', function(){
        $(cat_name).css('color', 'black')
        var cat_name = $(this).attr('class');
        var i = $(this).index()
        console.log(cat_name , $(this).index())
        $('.info').css('display', 'none')

        $('.info').eq(i).fadeIn(500)
    })
});