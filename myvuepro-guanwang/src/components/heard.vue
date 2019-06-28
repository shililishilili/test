<template>
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
                            <router-link to="/index5"><a href="">网站首页&nbsp;|&nbsp;</a></router-link>
                            <router-link to="/index1"><a href="">集团概况&nbsp;|&nbsp;</a></router-link>
                            <router-link to="/index2"><a href="">产业格局&nbsp;|&nbsp;</a> </router-link> 
                            <router-link to="/index3"><a href="">新闻动态&nbsp;|&nbsp;</a> </router-link>
                            <router-link to="/index4"><a href="">企业文化&nbsp;|&nbsp;</a></router-link>
                            <a href="">人力资源&nbsp;|&nbsp;</a>  
                            <a href="">联系我们&nbsp;&nbsp;</a>
                        </div>           
                    </div>
                </div>             
    </header>
</template>
<script>
   export default {
     name: 'heard',
    data () {
    return {
     
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
      height:60px;
      float: left;
      line-height:60px;
      padding-left: 30px;
  }
  .navbar{
      width:100%;
      height:60px;
      background-color:#fff;
      display: inline-block;
      text-align: center;
     
    
  }
  .navbar_title{
      float: right;
      line-height: 60px;
      margin-right:30px;
  }
    
</style>