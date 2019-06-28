<template>
    <div>
       <heard></heard>
     <div class="container1">
        <!--导航栏-->
        <div class="tabbar">
                <div class="cont"><a href="">集团新闻</a></div>
                <div class="cont"><a href="">媒体报道</a></div>
                <div class="cont"><a href="">集团活动</a></div>
        </div>
        <div class="big_title">
                <h2 class="title-jt">集团简介</h2>
                <P class="title-jt">Group Profile</P>
        </div>
        <hr/>
        <div class="part1">
            <div class="bigbox">
                <div class="box">
                   <div class="text">
                       <img src="../assets/2019-04-1530.jpg" alt="" style="width:320px;height:220px" class="img1">
                       <div>
                            <a href="">JEGORIE联手国际品牌，完美打造街头潮酷标签</a>
                            <p>2019-04-15</p>
                        </div>
                      
                   </div>
                </div>
                <div class="box">
                        <div class="text">
                                <img src="../assets/2019-01-1432.jpg" alt="" style="width:320px;height:220px" class="img1">
                                <div>
                                    <a href="">恭喜呆呆朵朵荣获2019星耀分享·虚拟明星之中国虚拟人物财富榜</a>
                                    <p>2019-04-1</p>
                                </div>
                            </div>
                </div>
                <div class="box">
                        <div class="text">
                                <img src="../assets/2018-12-2740.jpg" alt="" style="width:320px;height:220px" class="img1">
                                <div>
                                    <a href="">国际潮牌FLEXFIT入驻街果，这次街果要放大手笔了！</a>
                                    <p>2019-04-5</p>
                                 </div>
                            </div>
                </div>
            </div>       
        <!--二楼-->     
            <div class="bigbox">
                <div class="box">
                   <div class="text">
                       <img src="../assets/2018-12-2031.jpg" alt="" style="width:320px;height:220px" class="img1">
                       <div>
                            <a href="">逛街购收购网络动漫形象，以集团矩阵模式推进“新零售”落地</a>
                            <p>2019-04-15</p>
                        </div>     
                   </div>
                </div>
                <div class="box">
                        <div class="text">
                                <img src="../assets/2018-12-2077.jpg" alt="" style="width:320px;height:220px" class="img1">
                                <div>
                                    <a href="">逛街购与北控女足的第一次邂逅，就迎来了这场激动人心的胜利</a>
                                    <p>2019-04-1</p>
                                </div>
                            </div>
                </div>
                <div class="box">
                        <div class="text">
                                <img src="../assets/2018-12-2020-2.jpg" alt="" style="width:320px;height:220px" class="img1">
                                <div>
                                    <a href="">这周六，逛街购和你一起为北控女足呐喊助威</a>
                                    <p>2019-04-5</p>
                                 </div>
                            </div>
                </div>
            </div>
        </div>
    </div>    
      <f></f>
    </div>
</template>
<script>
    import heard from "./heard.vue"
    import foot1 from "./foot.vue"
    export default{
        data(){
            return{   
            }
        },
          components:{
            "heard":heard,
            "f":foot1
    }
    }
</script>
<style scoped>
     /*主要内容*/
        .container1{
            width:100%;  
        }
        .tabbar{
            width: 100%;
            height: 50px;
            background-color:#F7F8FA;
            line-height: 50px;
            display:flex;
            padding-left:15%;    
        }
        .cont{
            width:150px;
            height:50px;
            background-color:#F7F8FA;
            text-align: center;
        }
        .cont:hover{
            background-color: #F1B22B;
        }
        .big_title{
            width:100%;
        }
        .title-jt{
            color:#F1B22B;
            text-align: center;
        }
        /*主要内容*/
        .part1{
            width: 100%;
            height: 800px;
        }
        .bigbox{
            width: 80%;
            height: 350px;
            margin-top:50px;
            margin: 0 auto;
            display: flex; 
            margin-bottom: 30px;         
        }
        .box{
            width:33%;
            height:350px;
            background-color:#F7F8FA;
            margin:15px;
            
        }
        .img1{
            margin:20px;
            margin-left:70px;
            transition: all 0.6s;
            margin:0 auto;
            
        }
        .img1:hover{
            transform:scale(1.4);
            -webkit-transform: scale(1.4);
        }
        .text>div{
            width:90%; 
            margin: 0 auto;
        }
        .text>div>a{
            color:black;
        }
        .text>p{
            color:slategrey;
        }
</style>