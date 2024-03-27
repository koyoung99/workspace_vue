import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/main/MainView.vue'
import LoginFormView from '@/views/user/LoginFormView.vue'
import ModifyFormView from '@/views/user/ModifyFormView.vue'
import AttachFormView from '@/views/attach/AttachFormView.vue'
import AttachResultView from '@/views/attach/AttachResultView.vue'
import JoinFormView from '@/views/user/JoinFormView.vue'
import JoinOkView from '@/views/user/JoinOkView.vue'
import addListView from '@/views/guestbook/addListView.vue'
import deleteFormView from '@/views/guestbook/deleteFormView.vue'


const routes = [
  {
    path: '/',
    name: '/',
    component: MainView
  }, {
    path: '/user/loginform',
    name: '/user/loginform',
    component: LoginFormView
  },{
    path:'/user/modifyform',
    name:'/user/modifyform',
    component: ModifyFormView
  },{
    path:'/user/joinform',
    name:'/user/joinform',
    component: JoinFormView
  },{
    path:'/attach/form',
    name:'/attach/form',
    component: AttachFormView
  },{
    path:'/attach/result',
    name:'/attach/result',
    component: AttachResultView
  },{
    path:'/user/joinok',
    name:'/user/joinok',
    component: JoinOkView
  },{
    path:'/guest/deleteform/:no',
    name:'/guest/deleteform',
    component: deleteFormView
  },{
    path:'/guest/addList',
    name:'/guest/addList',
    component: addListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
