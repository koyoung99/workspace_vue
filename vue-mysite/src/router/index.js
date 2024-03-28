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
import listView from '@/views/board/listView.vue'
import readView from '@/views/board/readView.vue'
import writeForm from '@/views/board/writeFormView.vue'
import galleryView from '@/views/gallery/galleryView.vue'

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
  },{
    path:'/board/list',
    name:'/board/list',
    component:listView
  },{
    path:'/board/read/:no',
    name:'/board/read',
    component:readView
  },{
    path:'/board/writeform',
    name:'/board/writeform',
    component:writeForm
  },{
    path:'/board/modifyform/:no',
    name:'/board/modifyform',
    component:ModifyFormView
  },{
    path:'/gallery/list',
    name:'/gallery/list',
    component:galleryView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
