<template>
    <div >
        <header class="my_header">
        <!--表头的导航栏-->
            <div class="all"> 
                <!--第一行-->  
                    <div class="email">
                        <a href="">企业邮箱</a>&nbsp;&nbsp;|&nbsp;
                        <a href="">招聘岗位</a>&nbsp;&nbsp;|&nbsp;
                            <a href="">网站地图</a>&nbsp;&nbsp;
                    </div>
                    <!--第二行-->
                    <div class="navbar clearfix">
                            <img src="../assets/logo.svg" class="img_logo" alt="">
                        <div class="navbar_title">
                            <a href="javascript:void(0);" @click="jumpToIndex5">网站首页&nbsp;|&nbsp;</a> 
                            <a href="javascript:void(0);" @click="jumpToIndex1">集团概况&nbsp;|&nbsp;</a>
                            <a href="javascript:void(0);" @click="jumpToIndex2">产业格局&nbsp;|&nbsp;</a>  
                            <a href="javascript:void(0);" @click="jumpToIndex3">新闻动态&nbsp;|&nbsp;</a> 
                            <a href="javascript:void(0);" @click="jumpToIndex4">企业文化&nbsp;|&nbsp;</a>
                            <a href="">人力资源&nbsp;|&nbsp;</a>  
                            <a href="">联系我们&nbsp;&nbsp;</a>
                        </div>           
                    </div>
                </div>             
    </header>
        <carousel class="index-carousel" :autoplay="true" :minSwipeDistance="40" :scrollPerPage="true" :speed="5" :perPage="1" :paginationPadding="10" :paginationSize="10" :loop="true" >
            <slide>
            <img src="../assets/swiper/2018-12-0434.jpg" style="width:100%;height:700px"/>
            </slide>
            <slide>
           <img src="../assets/swiper/2018-12-0730.jpg" style="width:100%;height:700px"/>
            </slide>
            <slide>
            <img src="../assets/swiper/2018-12-076.jpg" style="width:100%;height:700px"/>
            </slide>
              <slide>
           <img src="../assets/swiper/2018-12-0792.jpg" style="width:100%;height:700px">
            </slide>
        </carousel>
        


        <div class="container">
        <!--1楼-->
        <div class="part_1">
           <div class="cont_1">
                <img src="../assets/logo.svg" class="img-logo" alt="">
                <p>于2003年率先提出新零售概念</p>
                <p class="cont_style">是中国最早提出新零售概念的公司</p>
                <p>矩阵式企业运营服务提供商</p>
                <p class="circle">无</p>
           </div> 
        </div>
        <!--2楼-->
        <div class="part_2">
          <div class="cont_2">
              <div class="cont-small">
                  <div class="back-img"> 
                    <h4>逛街购科技</h4>
                    <p class="color">互联网软件按开发<br>
                        网路营销推广与全网品牌信息监控<br>
                        企业网络舆情监测与对应<br>
                        大数据采集与分析报告
                    </p>
                  </div>
              </div>
              <div class="cont-small img2">
                <h4>街果商贸</h4>
                <p class="color">主力店铺打造与孵化<br>
                    国际潮流品牌主理与代理<br>
                    商业体代运营<br>
                    渠道支持和供应链管理
                </p>
              </div>
              <div class="cont-small img3">
                <h4>呆呆文化</h4>
                <p class="color">文化产业资源整合<br>
                    IP跨界合作与联合运营<br>
                    IP内容孵化及周边的产出<br>
                    打造客户IP生态圈
                </p>
              </div>
              <div class="cont-small img4">
                <h4>尚城广汇</h4>
                <p class="color">矩阵式全案服务<br>
                    商业空间运营<br>
                    活动内容输出<br>
                    营销推广与危机公关
                </p>
              </div>      
            </div>
        </div>
        <!--3楼-->
        <div class="part_3">
            <!--左边-->
            <div v-if="num==1" class="flex1">
                <div class="title_bar">
                    <div class="news left_cont1">新闻动态</div>
                    <div class="left_cont1">
                        <div class="newstitle">5.1把239元国际潮牌帽子送给你</div>
                        <P class="newsdate">2019-05-09</P>
                        <P class="newscontent">期待已久的五一小长假终于到了！此时此刻的你 现在一定是这样的，90%+的人早已经安排好假期行程，JOY姐掐指一算，你可能还需要一个出游的必备神器</P>
                    </div>
                </div>
                <!--中间-->
                <div>
                    <div class="left_cont2">
                        <img src="../assets/2018-12-208-1.jpg" alt="" >
                        <div class="img-yellow-left" @click="btn1()">
                            <img src="../assets/yellow.png" alt="" >
                        </div>
                        <div class="img-yellow-right"  @click="btn2()">
                            <img src="../assets/yellow-right.png" alt="">
                        </div>
                    </div> 
                </div>
            </div>
            <!--第二个-->
            <div v-else-if="num==2"  class="flex1">
                <div class="title_bar">
                    <div class="news left_cont1">新闻动态</div>
                    <div class="left_cont1">
                        <div class="newstitle">520前夕带你进入嗨嗨人</div>
                        <P class="newsdate">2019-05-09</P>
                        <P class="newscontent">再过两天又到了一年一度的大型甜</P>
                    </div>
                </div>
                <!--中间-->
                <div>
                    <div class="left_cont2">
                    <img src="../assets/2019-05-1545-1.jpg" style="width:358px;height:369px" alt="2" > 
                        <div class="img-yellow-left" @click="btn1()">
                            <img src="../assets/yellow.png" alt="">
                        </div>
                        <div class="img-yellow-right" @click="btn2()">
                            <img src="../assets/yellow-right.png" alt="">
                        </div>
                    </div> 
                </div>
            </div> 
            <!--第三个-->
            <div v-else  class="flex1">
                <div class="title_bar">
                    <div class="news left_cont1">新闻动态</div>
                    <div class="left_cont1">
                        <div class="newstitle">5.1把239元国际潮牌帽子送给你</div>
                        <P class="newsdate">2019-05-09</P>
                        <P class="newscontent">期待已久的五一小长假终于到了！此时此刻的你 </P>
                    </div>
                </div>
                <!--中间-->
                <div>
                    <div class="left_cont2">
                        <!-- <img src="../assets/2018-12-208-1.jpg" alt="" > -->
                       <img src="../assets/2019-05-0932.jpg" style="width:358px;height:369px" alt="3" > 
                        <div class="img-yellow-left" @click="btn1()">
                            <img src="../assets/yellow.png" alt="" >
                        </div>
                        <div class="img-yellow-right" @click="btn2()">
                            <img src="../assets/yellow-right.png" alt="" >
                        </div>
                    </div> 
                </div>
            </div>
             <!--右边-->
            <div class="left_cont3">
                    <ul style="list-style-type:none">
                        <li>
                            <a href=""><span>2019福猪贺新年,街果年终福利放送</span>
                                <span class="date">2015-12-20</span>
                            </a>
                        </li>
                        <hr/>
                        <li><a href=""><span>街果从世界各地淘来的好东西，这次是尼泊尔...</span><span class="date">2015-12-20</span></a></li><hr/>
                        <li><a href=""><span>过年了，选对发色，正月里美翻七大姑八大姨</span><span class="date">2015-12-20</span></a></li><hr/>
                        <li><a href=""><span>距离情人节,我已经把礼物准备好了</span><span class="date">2015-12-20</span></a></li><hr/>
                        <li><a href=""><span>猪年新气象，从一款猪猪单品开始</span><span class="date">2015-12-20</span></a></li><hr/>
                        <li><a href=""><span>恭喜呆呆朵朵荣获2019星耀分享</span><span class="date">2015-12-20</span></a></li><hr/>
                        <li><a href=""><span>达人推荐，今年冬天一定要买的一顶帽子</span><span class="date">2015-12-20</span></a></li><hr/>
                    </ul>
            </div>
        </div>
        <!--4楼-->
        <div class="part_4">
            <!--左边-->
            <div class="part_4_right_cont">
                <div class="part_4_right_text">
                    <p>每一个人的梦想无论大小</p>
                    <p>无论含义<br></p> 
                    <p> 都是公司梦想的一部分，让我们来一起实现。</p>
                </div>
            </div>
            <!--右边-->
            <div class="part_4_left_cont">
                <div class="part_4_left_text">
                    <p>JOIN US</p>
                    <h4 style="color:#F1B22B;">人才招聘</h4>
                    <p>加入逛街购 实现实体经济复兴</p>
                </div>
                <div class="part_4_left_img">
                    <img src="../assets/2018-12-0422.png" alt="" style="height:200px;margin-left:100px;">
                </div>
            </div>
        </div>
        <!--5楼-->
        <div class="part_5">
            <div class="part_5_logo">
                <div><img src="../assets/2018-12-2025.png" alt=""></div>
                <div><img src="../assets/2018-12-2055.png" alt=""></div>
                <div><img src="../assets/2018-12-2042-1.png" alt=""></div>
                <div><img src="../assets/2018-12-2070.png" alt=""></div>
                <div><img src="../assets/2018-12-2050.png" alt=""></div>
                <div><img src="../assets/2018-12-2059.png" alt=""></div>
                <div><img src="../assets/2018-12-2095.png" alt=""></div>
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
         name:"index5",
        data(){
            return{ 
                num:1  
            }
        },
          components:{
            "heard":heard,
            "f":foot1
        },
        methods:{
            jumpToIndex1(){
                //console.log(111)
                this.$router.push("/index1")
            },
            jumpToIndex2(){
                this.$router.push("/index2")
            },
            jumpToIndex3(){
                this.$router.push("/index3")
            },
            jumpToIndex4(){
                this.$router.push("/index4")
            },
            jumpToIndex5(){
                this.$router.push("/index5")
            },
         btn2(){
            var nu=this.num;
             var n=nu>1?--nu:3;
             this.num=n;
        },
             btn1(){
            var nu=this.num;
            var n=nu<3?++nu:1;
            this.num=n;
        }

        }
    }

</script>
<style scoped>
        *{padding:0;margin:0;}
body{
    width:100%;
    height: 100%;
}

/*表头样式*/
  .email{
width:280px;
  float: right;
  margin-top: 30px;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 15px;
  margin-bottom: 10px;
  }
  .img_logo{
      width:120px;
      height:20px;
      float: left;
      line-height:20px;
      padding-left:30px;
  }
  .navbar{
      width:100%;
      height:20px;
      background-color:#fff;
      display: inline-block;
     
      align-items: center;
      line-height:20px;
  }
  .navbar_title{
      float: right;
      line-height: 60px;
      margin-right:30px;
  } 
            .my_header{
                width:100%;
                position: absolute;
                z-index: 99999;
                background:transparent;
            }
       
        .container{
            width:80%;
            margin:0 auto;
        } 
        #demo{
            position: relative;
        }
        .part_1{
            width: 80%;
            height:500px;
            background-image:url(../assets/swiper/2018-12-042.png);
            margin: 0 auto;
        }
        .cont_1{
            width:100%;
            height:500px;
            background-image:url(../assets/swiper/2018-12-042.png);
            text-align: center;
            margin-right: 250px;
            margin-left: 250px;
            margin: 0 auto;
           
        }
        .img-logo{
            width:200px;
            height:200px;
            margin:20px 30px 10px 30px;
            margin-bottom:10px;
        }
        .cont_style{
            color:rebeccapurple;
            font-size:20px;
        }
        .circle{
            width:40px;
            height:40px;
            background-color:#F1B22B;
            border-radius:50%;
            display:inline-block;
            margin-top: 50px;

        }
        /*2楼样式*/
        .part_2{
            width:80%;
            height:250px;
            margin:0 auto;
        }
        .cont_2{
           width:100%;
           height:250px;
           margin: 0 auto;
        }
        .cont-small{
            border:1px solid grey;
            float: left;
            height:180px;
            text-align: center;
            width:21%;
            padding:20px;
            margin-top:50px;
            margin-bottom:50px;
        }
        .cont-small p{
             font-size: 16px;
             padding:20px;
             
        }
        .cont-small h5{
            
            margin:20px;
             
        }
        .color{
            color:grey;
            font-size: 16px;
             margin:10px;
           
        }
        .cont-small:hover{
            color:blue;
        }
        /*.back-img:hover{
            width:70%;
            height:70px;
            color:#000000;
            background:url(../imgs-1/logo.svg) no-repeat center center;
        }*/

            /*三楼样式*/
         .part_3{
                display:flex;
                width:80%; 
                margin:0 auto;    
            }
        .flex1{
            display:flex;
        }
            .title_bar{
                flex-direction:column;
                width:30%;
            }
            .left_cont2{
                width: 20%;
                margin:0px  20px;
                position:relative;
            }
            .left_cont3{
                width:50%;
            }
            .news{
                background-color: #F1B22B;
                width:100px;
                height:50px;
                text-align:center;
                line-height:50px;
            }
            .newstitle{
                margin: 20px 0px;
                font-size: 20px;
            }
            .newsdate{
                font-size: 12px;
                margin:40px 0px;
            }
            .newscontent{
                font-size: 16px;
                text-align:justify;
            }
            .date{
                float:right;
            }
            /*四楼的样式*/
            .part_4{
                width: 80%;
                display:flex;
                margin:0 auto;
            }
            .part_4_right_cont{
                width:40%;
                height:200px;
                background-color: #F1B22B;
            }
            .part_4_right_text{
               text-align: center;
               padding-top:50px; 
            }
            .part_4_left_text{
                margin-left:50px;
                margin-top:50px;

            }
            .part_4_left_cont{
                width:60%;
                background-color: #F3F3F5;
                display:flex;
            }
            /*表头样式*/
            *{
                margin:0; padding:0;
            } 
            .email{
            width:280px;
            float: right;
            margin-top: 30px;
            font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            font-size: 15px;
            margin-bottom: 10px;
            }
            .img_logo{
                width:120px;
                height:40px;
                float:left;
                line-height: 50px;
            }
            .navbar{
                width:100%;
                height:60px;
                background-color:#fff;
                display: inline-block;
                text-align: center;
                padding:15px 15px;

            }
            .navbar_title{
                float: right;
                line-height: 30px;
        }
            a {
                text-decoration:none;
            } 
            /*5楼样式*/
            .part_5{
                width:100%;
                height:150px;
                margin-top:50px;
                margin:0 auto;    
            }
            .part_5_logo{
                display:flex;
            }
            .part_5_logo div{
                border: 1px solid #000000;
                margin: 1px;
                opacity:0.1;
            }
            .part_5_logo div:hover{
                opacity:1;
                transition-duration:1s;
            } 
            /*黄色的按钮*/
            .img-yellow-left{
                position:absolute;
                top:45%;
                left:-60%;
            }
            .img-yellow-right{
                position:absolute;
                top:45%;    
            }
</style>