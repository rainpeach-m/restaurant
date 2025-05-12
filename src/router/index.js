import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
  { path: '/', component: Home },
  // 后续添加更多页面，比如 { path: '/categories', component: Categories }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
