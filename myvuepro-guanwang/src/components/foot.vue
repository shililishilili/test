<template>
    <footer class="my_footer">
        <div class="footer-center">
            <div class="footer-text1">
                <img src="../assets/logo-2.svg" alt="">
            </div>
            <div class="footer-text2" >
                <ul class="ul">
                    <li class="li"><h5><a class="a" href="">人力资源</a></h5></li>
                    <li class="li"><a class="a" href="">招聘职位</a></li>
                    <li class="li"><a class="a" href="">人才战略</a></li>
                </ul>
            </div>
            <div class="footer-text3" >
                <ul class="ul">
                    <li class="li"><h5><a class="a"  href="">集团概况</a></h5></li>
                    <li class="li"><a  class="a" href="">集团简介</a></li>
                    <li class="li"><a  class="a" href="">管理团队</a></li>
                    <li class="li"><a  class="a" href="">组织架构</a></li>
                    <li class="li"><a  class="a" href="">领导致辞</a></li>
                    <li class="li"><a class="a" href="">发展历程</a></li>
                </ul>
            </div>
            <div class="footer-text4">
                <ul class="ul">
                    <li class="li"><h5><a href="" class="a">新闻动态</a></h5></li>
                    <li class="li"><a href="" class="a">集团新闻</a></li>
                    <li class="li"><a href="" class="a">媒体报道</a></li>
                    <li class="li"><a href="" class="a">集团活动</a></li>
                </ul>
            </div>
            <div class="footer-text5">
                <ul class="ul">
                    <li class="li"><h5><a href="" class="a">合作伙伴</a></h5></li>
                    <li class="li"><a href="" class="a">艾曼动漫</a></li>
                    <li class="li"><a href="" class="a">十二栋文华</a></li>
                    <li class="li"><a href="" class="a">肖十二动漫</a></li>
                    <li class="li"><a href="" class="a">SHISEIDO</a></li>
                </ul>
            </div>
            <div>
                <ul class="ul">
                    <li class="li"><h5><a href="" class="a">友情链接</a></h5></li>
                    <li class="li"><a href="" class="a">中国百协</a></li>
                    <li class="li"><a href="" class="a">搜宝崇文</a></li>
                    <li class="li"><a href="" class="a">大悦城</a></li>
                </ul>
            </div> 
            <div class="image-flex">
                <div  class="footer-text6">
                        <img   class="footer-text6"src="../assets/qrcode-1.jpg" alt="">
                        <h6 class="h6">&nbsp;&nbsp;&nbsp;&nbsp;街果公众号</h6>
                </div>
                <div  class="footer-text7">
                        <img class="footer-text7" src="../assets/qrcode-2.jpg" alt="">
                        <h6 class="h6">&nbsp;&nbsp;&nbsp;&nbsp;呆呆公众号</h6>
                </div>
            </div>
       </div>
       <div class="footer-text8">
       <span>© 2018 逛街购-新零售营销解决方案提供商. All rights reserved. 京ICP证160792号</span>
    </div>
    </footer>
</template>
<script>
    export default {  
    data () {
    return {
     
    }
  }
}
</script>
<style scoped>
     /*底部样式*/
 
    .my_footer{
        background-color:#003;
        width: 100%;
        height: 330px;
    }
    .footer-center{
        background-color:#003;
        width:80%;
        height: 250px;
        margin:0 auto;
        padding-top:25px;
    }
    ul .li{
    list-style:none;
    font-size: 15px;
    color: #003;
    }
    .ul{
        float:left;
        width: 10%;
        height: 200px;
        background-color :#003;
        margin:5px;
    }
    .footer-text1{
        width: 100px;
        height: 113px;
        float: left;
        margin-top:30px;
        margin-left:2%;
        margin-right:2%;
    }
    .footer-text6, .footer-text7{
        width: 95px;
        height: 95px;
        float: left;
        padding-top:px;
        margin: 15px 20px 20px 0px;
    }
    .h6{
        width:100px;
        margin-left: 3px;
        font-size: 12px;
    }
    .footer-text8{
        clear:left;
        text-align:center;

    }
    .a{
    color: aliceblue;
     font-size: 16px;
    }
    .image-flex{
        display:flex;
    }

</style>