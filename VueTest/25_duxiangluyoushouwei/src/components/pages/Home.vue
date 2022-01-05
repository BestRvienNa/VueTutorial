<template>
   <div>
     <h2>Home组件内容</h2>
              <div>
                <ul class="nav nav-tabs">
                  <li>
                    <router-link class="list-group-item " active-class="active" to="/home/news">News</router-link>
                  </li>
                  <li>
                    <router-link class="list-group-item "  active-class="active" to="/home/message">Message</router-link>
                  </li>
                </ul>
                <!---缓存多个路由<keep-alive include="['News','Message']"> --->
                <keep-alive include="News"><!---缓存路由让不展示的路由保持挂载，include指的是需要缓存的组件名--->
                 <router-view></router-view>
                </keep-alive>               
              </div>
            </div>
</template>

<script>
export default {
 name:'Home',
 
}
</script>

