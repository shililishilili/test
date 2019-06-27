$(function(){
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(html){
            $(html).replaceAll(".my_header");
            
        }
    })
})