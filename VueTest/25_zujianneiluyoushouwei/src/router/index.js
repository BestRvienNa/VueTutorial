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
mode:'history',//hash模式简洁，没有那种网络请求问题。history模式比较繁琐
routes:[
    {   name:'guanyu',
        path:'/about',
        component:About,
        meta:{isAuth:true,title:'关于'}
    },
    {
        name:'zhuye',
        path:'/home',
        component:Home,
        meta:{title:'主页'},
        children:[//二级路由,且不用加/，因为底层已经加好
           {   name:'xinwne',
               path:'news',
               component:News,
               meta:{isAuth:true,title:'新闻'},//是否需要授权,meta里面可以放一些自定义的标志
           },
           {
            name:'xiaoxi',
            path:'message',
            component:Message,
            meta:{isAuth:true,title:'消息'},//是否需要授权
            children:[
                {   name:'xiangqing',
                    path:'detail', 
                    component:Detail,
                    meta:{isAuth:true,title:'详情'},//是否需要授权
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
export default router
