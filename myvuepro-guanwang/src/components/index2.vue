<template>
    <div>
        <heard></heard>
         <div class="container1">
        <!--标题-->
        <div class="big_title">
            <h2 class="title-jt">产业格局</h2>
            <P class="title-jt">Industrial Pattern</P>
        </div>
        <hr/>
        <div class="main_part">
            <!--第一栏的内容-->
            <div class="part">
                <img src="../assets/2019-01-1432.jpg" alt="" style="width:268px;height:206px">
                <div class="part-text">
                    <p>恭喜呆呆朵朵
                    获2019星耀分享·虚拟明星之中国虚拟人物财富榜</p>
                    <hr>
                    <p>昨日，小编很荣幸去参加了2019星耀分享·虚拟明星时尚盛典。关于盛典详情 戳这里 了解。 恭喜呆呆朵朵入选2019第二届星耀分享·</p>
                </div>
            </div>
             <!--第二栏的内容-->
             <div class="part">
                    <img src="../assets/2018-12-2049.jpg" alt="" style="width:268px;height:206px">
                    <div class="part-text">
                        <p>中国百货业高峰论坛
                                聚焦变革下的百货业如何创新升级</p>
                        <hr>
                        <p>2016年3月30日-31日，第14届中国百货业高峰论坛在北京国际饭店隆重举行，逛街购作为一个互联网时代的创新型公司很荣幸被邀请参会</p>
                    </div>
                </div>
             <!--第三栏的内容-->
             <div class="part">
                    <img src="../assets/2018-12-2082.jpg" alt="" style="width:268px;height:206px">
                    <div class="part-text">
                        <p>石家庄的“夜经济”
                                “夜经济”模式激发消费活力，改商家独舞为多业态狂欢</p>
                        <hr>
                        <p>在刚刚过去的这个周末，2016河北省省会石家庄市“夜经济”大幕再次拉开。活动启动当天小逛身临现场，体会了一下首个“互联网+”时代</p>
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
    export default {
   name:"index1",
    data () {
    return {
        
    }
  },
  components:{
       "heard":heard,
       "f":foot1
    },
   
}
</script>
<style scoped>
        *{padding:0;margin:0;}
          body{
              width:100%;
              height: 100%;
          }
        .my_header{
            width:100%;height: 445px;
            background-image:url(../assets/2018-12-0743.jpg);
            background-size: 100% 445px;
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
                height:40px;
                float: left;
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
            /*.email>a{
                text-decoration:none;
            } */
            /*标题*/
            .container1{
                width:100%;  
            }
            .big_title{
                width:100%;
                margin-top: 50px;
            }
            .title-jt{
                color:#F1B22B;
                text-align: center;
            }
            /*主要内容*/
            .main_part{
                width: 60%;
                margin: 0 auto;
            }
            .part{
                display:flex;
                width: 90%;
                height: 170px;
                margin: 0 auto;
                margin-bottom:50px;
            }
            .part-text{
                width: 532px;
                height: 166px;
                padding:20px;
                background-color:#F7F8FA;
                display:flex;
                flex-direction: column;
                justify-content: center;     
            }
            .part-text>p{
                font-size:14px;
               
            }
</style>