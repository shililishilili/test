import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import heard from '@/components/heard'
import foot from '@/components/foot'
import index1 from '@/components/index1'
import index2 from '@/components/index2'
import index3 from '@/components/index3'
import index4 from '@/components/index4'
import index5 from '@/components/index5'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/heard', name: 'heard', component: heard},
    {path:'/foot', name:'foot',component: foot},
    {path:'/index1',name:'index1',component: index1},
    {path:'/index2',name:'index2',component: index2},
    {path:'/index3',name:'index3',component: index3},
    {path:'/index4',name:'index4',component: index4},
    {path:'/index5',name:'index5',component: index5}
  ]
})
