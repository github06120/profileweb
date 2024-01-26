$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= 50){
            $('#scrollNav').addClass('scroll_nav');
            $('#scrollBody').addClass('scroll_body');
        }else{
            $('#scrollNav').removeClass('scroll_nav');
            $('#scrollBody').removeClass('scroll_body');
        }
    });
});