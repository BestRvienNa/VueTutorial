//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../components/pages/About'
import Home  from '../components/pages/Home'
import News from '../components/pages/News'
import Message from '../components/pages/Message'
import Detail from '../components/pages/Detail'
//创建并且创建一个路由器
const router= new VueRouter({
routes:[
    {
        name:'guanyu',
        path:'/about',
        component:About
    },
    {
        name:'zhuye',
        path:'/home',
        component:Home,
        children:[//二级路由,且不用加/，因为底层已经加好
           {   name:'xinwne',
               path:'news',
               component:News
           },
           {
            name:'xiaoxi',
            path:'message',
            component:Message,
            children:[
                {   name:'xiangqing',
                    path:'detail', 
                    component:Detail,
                   props($route){
                       return {id:$route.query.id,title:$route.query.title}
                   }
                }
            ]
        },

        ]
    },
]
})
//全局前置路由守卫--初始化的时候被调用、每次路由切换之前调用
router.beforeEach((to,from,next)=>{
console.log("@")
   if(to.path==='/home/news'||to.path==='/home/message'){//也可以使用to.name
    if(localStorage.getItem('school')==='sdu'){
      next()
   }else{
         alert('学校名不对，无权限查看！')
   }
}else{
    next()
}
})


export default router
