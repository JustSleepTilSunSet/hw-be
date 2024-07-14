import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UpdateView from '../views/UpdateUserView.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/update',
    name: 'update',
    component: UpdateView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
