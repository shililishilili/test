$(function(){
    $.ajax({
        url:"footer.html",
        type:"get",
        success:function(html){
            $(html).replaceAll("#footer");
           
        }
    })
})