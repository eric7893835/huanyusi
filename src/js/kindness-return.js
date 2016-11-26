/**
 * Created by Administrator on 2016/11/25.
 */
$(function(){
    var flag = new Array($(".state").length);
    for (var i = 0;i<flag.length;i++){
        flag[i] = true;
    }
    $(".state").on("click",function(){

        var index = $(this).index();
        if(flag[index]){
            flag[index] = !flag[index];
            $(this).prop("src",'images/top.png').parents('p').next().slideDown();
        }else{
            flag[index] = !flag[index];
            $(this).prop("src",'images/down.png').parents('p').next().slideUp();
        }
    });
});