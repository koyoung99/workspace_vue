import { createRouter, createWebHistory } from 'vue-router'
import listView from '../views/listView.vue'
import writeFormView from '../views/writeFormView.vue'
import modifyFormView from '../views/modifyFormView.vue'

const routes = [
  {
    path: '/list',
    name: '/listView',
    component: listView
  }, {
    path: '/writeform',
    name: '/writeFormView',
    component: writeFormView
  },{
    path: '/modifyform/:no',
    name: '/modifyFormView',
    component: modifyFormView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
