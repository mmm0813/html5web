$(function(){

    //移除行動裝置影片
    if( $(window).width() < 769 ){
        $('.top_header video').remove();
    }

    // 滑動至指定位置
    $("nav a").click(function(){
        var btn = $(this).attr('href');
        var pos = $(btn).offset();
        $('html,body').animate({scrollTop:pos.top},1000);
    });

    // 滑動置頂
    $('#gotop').click(function(){
        $('html,body').animate({scrollTop:0},1000);
    });

    //淡出淡入
    $(window).scroll(function(){
        if( $(this).scrollTop() > 200 ){
            $('#gotop').stop().fadeTo('',.7);
        }else{
            $('#gotop').stop().fadeOut();
        }
    });

    // smoove滑入動畫
    $('.smoove').smoove({
        min_width: 0,
        offset:'25%'
    });




});