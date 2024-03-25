import { createRouter, createWebHistory } from 'vue-router'
import listView from '../views/listView.vue'
import writeFormView from '../views/writeFormView.vue'
import modifyFormView from '@/views/modifyFormView.vue'
const routes = [
  {
    path: '/list',
    name: '/list',
    component: listView
  },
  {
    path: '/write',
    name: '/writeform',
    component: writeFormView
  },
  {
    path: '/modify/:no',
    name: '/modifyform',
    component: modifyFormView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
