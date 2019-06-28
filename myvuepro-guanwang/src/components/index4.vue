<template>
    <div>
         <heard></heard>
        <div class="container1">
        <!--导航栏-->
        <div class="tabbar">
                <div class="cont"><a href="">企业文化</a></div>
                <div class="cont"><a href="">社区公益</a></div>
                <div class="cont"><a href="">企业营销案例</a></div>
        </div>
        <div class="big_title">
                <h2 class="title-jt">企业文化</h2>
                <P class="title-jt">Company Culture</P>
        </div>
        <hr/> 
         <!--主要内容-->
        <!--大背景图片-->
        <div class="big_background">
            <div class="company_cont">
                    <div class="part1"   @mouseover="mouseOver1" @mouseleave="mouseLeave1"> 
                            <div   class="part1_cont" v-show="isshow1">
                                <h6>MISSION</h6>
                                <h4>企业使命</h4>
                                <p>以振兴线下实体经济为使命</p>
                            </div>
                    </div>
                <div class="part1" @mouseover="mouseOver2" @mouseleave="mouseLeave2" >
                        <div   v-show="isshow2" class="part1_cont">
                            <h6>VISION</h6>
                        </div>
                </div>
                <div class="part1" @mouseover="mouseOver3" @mouseleave="mouseLeave3">
                    <div   v-show="isshow3" class="part1_cont"  >
                        <h6>CORE VALUES</h6>
                        <h4>核心价值观</h4>
                        <p>共享共赢 追求卓越</p>
                    </div>
                </div>
                <div  class="part1" @mouseover="mouseOver4" @mouseleave="mouseLeave4">
                    <div  v-show="isshow4"  class="part1_cont">
                        <h6>POSITION</h6>
                        <h4>企业定位</h4>
                        <p>矩阵式企业运营服务提供商</p>
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
                isshow1:false,
                isshow2:false,
                isshow3:false,
                isshow4:false
            }   
        },
          components:{
            "heard":heard,
            "f":foot1
    },
            methods:{
                 
            // 移出
                mouseLeave4:function(){     
              // var acps = this.$refs.acp
                //acps.style.display= "none"
                 this.isshow4=false;
                },
                 mouseLeave3:function(){     
              // var acps = this.$refs.acp
                //acps.style.display= "none"
                 this.isshow3=false;
                },
                  mouseLeave2:function(){     
              // var acps = this.$refs.acp
                //acps.style.display= "none"
                 this.isshow2=false;
                },
                  mouseLeave1:function(){     
              // var acps = this.$refs.acp
                //acps.style.display= "none"
                 this.isshow1=false;
                },
                mouseOver1:function(){     
            //操作dom 获取div标签改变其样式
                //var acps = this.$refs.acp
                //acps.style.display= "block"
                this.isshow1=true;
                }, 
                mouseOver2:function(){     
            //操作dom 获取div标签改变其样式
                //var acps = this.$refs.acp
                //acps.style.display= "block"
                this.isshow2=true;
                }, 
                mouseOver3:function(){     
            //操作dom 获取div标签改变其样式
                //var acps = this.$refs.acp
                //acps.style.display= "block"
                this.isshow3=true;
                },
                mouseOver4:function(){     
            //操作dom 获取div标签改变其样式
                //var acps = this.$refs.acp
                //acps.style.display= "block"
                this.isshow4=true;
            }

            }
    }
</script>
<style scoped>
      /*主要内容*/
      *{margin:0;padding:0}
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
        .big_background{
            width: 100%;
            height: 650px;
            background-image:url(../assets/2018-12-0753.jpg) ;
            background-size: 100% 650px;    
           
        }
        .company_cont{
            width: 90%;
            height:550px;
            margin: 0 auto;
            display: flex;
        }
        .part1{
            width: 24%;
            margin: 15px;
            background-image:url(../assets/2018-12-0797.jpg) ;
            background-size: 100% 100%; 
             
        }
        .part1_cont{
            width: 80%;
            height:120px;
            background-color: #F7F8FA;
            text-align: center;
            margin: 0 auto;
            margin-top:360px; 
        }   
        .part1_cont>h6{
            padding-top:15px;
        }
</style>