import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import New from '../views/New.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      components: {
        default: Home
      }
    },
    {
      path: "/new",
      components: {
        default: New,
        header: Home
      }
    },
    {
      path: "/edit/:id",
      components: {
        default: Edit,
        header: Home
      }
    }
  ]
})

export default router
