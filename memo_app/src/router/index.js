import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import New from '../views/New.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/new',
  //   name: 'New',
  //   component: New
  // },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      components: {
        default: Home
      },
      props: {
        default: true,
        header: true
      }
    },
    {
      path: "/new",
      components: {
        default: New,
        header: Home
      },
      props: {
        default: true,
        header: true
      }
    }
    // {
    //   path: "/edit/:id",
    //   components: {
    //     default: Edit,
    //     header: Home
    //   },
    //   props: {
    //     default: true,
    //     header: true
    //   }
    // }
  ]
})

export default router
