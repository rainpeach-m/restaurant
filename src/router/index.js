import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'
import CategoryPage from '../components/CategoryPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
  { path: '/menu/:type', component: CategoryPage }, // 动态路由
  // 后续添加更多页面，比如 { path: '/categories', component: Categories }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
