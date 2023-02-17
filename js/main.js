$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#navMenu').addClass('menu');
        }else{
            $('#navMenu').removeClass('menu');
        }
    });
});