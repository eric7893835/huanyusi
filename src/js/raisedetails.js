/**
 * Created by Administrator on 2016/11/25.
 */
$(function(){
    $(".operation-list").on('click',function(){
        var textValue = $(this).html().substr(0,2);
        if(textValue == "展开"){
            //$(this).parent().parent().addClass('open');
            $(this).html("收起&and;");
            $(".raise-sub-list").slideDown();
        }else{
            //$(this).parent().parent().removeClass('open');
            $(this).html("展开&or;");
            $(".raise-sub-list").slideUp();
        }
    });
});