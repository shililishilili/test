<template>
    <div>
        <heard></heard>
         <div class="container1">
        <!--导航栏-->
        <div class="tabbar">
                <div class="cont"><a href="">集团简介</a></div>
                <div class="cont"><a href="">领导致辞</a></div>
                <div class="cont"><a href="">组织架构</a></div>
                <div class="cont"><a href="">管理团队</a></div>
                <div class="cont"><a href="">核心团队成员</a></div>
                <div class="cont"><a href="">核心业务标签</a></div>
                <div class="cont"><a href="">发展历程</a></div>   
        </div>
        <div class="big_title">
            <h2 class="title-jt">集团简介</h2>
            <P class="title-jt">Group Profile</P>
        </div>
        <hr/>
        <div class="text1">
        <!--左边的内容-->
            <div class="lefttext">
                <ul>
                    <li>逛街购 —— 以旗下矩阵式企业，形成商业企业和实体店的流量转化工具，提升实体店经营业绩。</li>
                    <li>自2004年起，逛街购的前身就开始了与商业企业的合作，帮助实体店进行互联网化转型，并不断探索实体商业企业在新形势下的转型和发展。</li>
                    <li>2015年，逛街购（北京）网络科技有限公司成立，以互联网思维开启创建新的商业模式。</li>
                    <li>2016年，逛街购（北京）网络科技有限公司完成第一轮2000万元人民币的融资，并设立子公司北京尚诚广汇商业管理有限公司和街果（北京）商贸有限公司。开展以互联网营销工具 + 线下实体店铺的形态，打造线上线下结合且运用多种流量转化工具为实体店赋能。</li>
                    <li>2017年，收购北京呆呆文化传播有限公司，通过IP孵化、IP运营以及整合行业资源，进行IP粉丝的引流与转化。</li>
                    <li>2019年，逛街购充分整合企业矩阵资源，通过产业融合以及发挥流量转化工具的作用，促进商业企业和实体店的转型升级，努力成为实体经济运行和发展的新动能。</li>
                </ul>
            </div>
        <!--右边的内容-->
            <div class="righttext">
                <div  class="right-border">
                    <div class="index-1">
                        <img  v-if="Num==1" src="../assets/1.jpg" style="width:580px;height:390px">
                        <img  v-else-if="Num==2" src="../assets/2.jpg" style="width:580px;height:390px">
                        <img  v-else-if="Num==3" src="../assets/3.jpg" style="width:580px;height:390px">
                        <img  v-else src="../assets/4.jpg" style="width:580px;height:390px">
                        <div class="btn">
                            <p> 背景墙</p>
                            <div class="left-btn" id="btn1"  @click="upImage()"></div>
                            <div class="right-btn" id="btn1" @click="downImage()"></div>
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
    export default {
    data () {
        return {
            Num:1,
        }
    },
    methods:{
        upImage(){
            var num=this.Num;
             var n=num>1?--num:4;
             this.Num=n;
        },
        downImage(){
            var num=this.Num;
            var n=num<4?++num:1;
            this.Num=n;
        }
    },
  components:{
       "heard":heard,
       "f":foot1
    }
}
</script>
<style scoped>
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
            a {
                text-decoration:none;
            } 
            
            /*导航栏*/
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
            /*内容*/
            .text1{
                width:70%;
                display: flex;
                margin: 0 auto;
                padding:50px;
            }
            .lefttext{
                width: 50%;
                text-align: justify;/*两端对齐*/
                
            }
            .righttext{
                width: 50%;
            }
            /*右边的边框*/
            .right-border{
                border: 3px solid #F1B22B;
                width: 580px;
                height: 430px;
                margin-left:80px;
                margin-top:30px;
                position: relative;
            }
            /*按钮*/
            .btn{
                display:flex;
                text-align: justify;
               
            }
            .btn>p{
                margin: 0 50px;
            }
            .left-btn{
                width: 80px;
                height: 24px;
                background-color:dimgrey;
                border-top-left-radius:12px;
                border-bottom-left-radius: 12px;
                margin-left: 200px;
                margin-right: 20px;
            }
            .left-btn:hover{
                background-color:#F1B22B;
            }
            .right-btn:hover{
                background-color:#F1B22B;
            }
            .right-btn{
                width: 80px;
                height: 24px;
                background-color: dimgrey;
                border-top-right-radius:12px;
                border-bottom-right-radius: 12px;
                justify-content:flex-end;
            }
            .index-1{
               position: absolute;
               top:-30px;
               left:-30px;
            }
</style>