$(function(){
    $('.shop').hover(function(){
        $('dl').animate({height : '80px'},'1000');
    },function(){
        $('dl').animate({height : '0px'},'1000');
    })
})

$(()=>{
    $('header').load('public.min.html .head-info');
    $('headbox').load('public.min.html .headbox');
    $('nav').load('public.min.html .nav');
    $('footer').load('public.min.html .footer');
    $('bottom').load('public.min.html .foot-bottom');
    $('foot').load('public.min.html .dibu');
})
