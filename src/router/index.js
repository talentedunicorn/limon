import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import List from '@/pages/List'
import Lemon from '@/pages/Lemon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/lemon/:id',
      name: 'Lemon',
      component: Lemon
    }
  ]
})
