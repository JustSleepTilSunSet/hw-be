import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UpdateView from '../views/UpdateUserView.vue'
import ListUserView from '../views/ListUserView.vue'
import QueryUserView from '../views/QueryUserView.vue'
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
  },
  {
    path: '/listUser',
    name: 'listUser',
    component: ListUserView
  },
  {
    path: '/queryUser',
    name: 'queryUser',
    component: QueryUserView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
