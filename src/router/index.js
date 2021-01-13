import Vue from 'vue'
import VueRouter from 'vue-router'
import takeOut from "@/views/take-out/index"
import My from "@/views/My/index"
import Search from "@/views/Search/index"

Vue.use(VueRouter)

const routes = [{
    path: '/',//   "/"指src
    redirect: "/takeOut",
  },
  {
    path: '/takeOut',
    component: takeOut,
  },
  {
    path: '/My',
    component: My,
  },
  {
    path: '/Search',
    component: Search,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
