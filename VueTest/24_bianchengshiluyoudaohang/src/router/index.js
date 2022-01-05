//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../components/pages/About'
import Home  from '../components/pages/Home'
import News from '../components/pages/News'
import Message from '../components/pages/Message'
import Detail from '../components/pages/Detail'
//创建并且创建一个路由器
export default new VueRouter({
routes:[
    {
        name:'guanyu',
        path:'/about',
        component:About
    },
    {
        path:'/home',
        component:Home,
        children:[//二级路由,且不用加/，因为底层已经加好
           {
               path:'news',
               component:News
           },
           {
            name:'xiaoxi',
            path:'message',
            component:Message,
            children:[
                {   name:'xiangqing',
                    path:'detail', //使用params用中占位符/:id/:title
                    component:Detail,
                    //props的第一种写法,该对象中的所有key -value都以props传给detail组件
                   // props:{a:1,b:'hello'}
                    //props的第二种写法，值为布尔值，若布尔值为真，就会把路由组件收到的所有params参数，以props的形式传给detail组件
                   // props:true
                   //props的第三种写法,函数,服务于query
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
