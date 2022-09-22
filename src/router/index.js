import { createRouter, createWebHistory } from 'vue-router'
import PostView from '@/views/PostsView.vue'
import CurrentPostView from '@/views/CurrentPostView.vue'

const routes = [
  {
    path: '/',
    component: PostView,
  },
  {
    path: '/post/:id',
    component: CurrentPostView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
