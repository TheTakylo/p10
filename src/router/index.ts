import { createRouter, createWebHashHistory, NavigationGuardWithThis, RouteRecordRaw } from 'vue-router'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Publications from '@/views/Publications/PublicationsList.vue'
import Home from '@/views/Home.vue'
import AuthModule from '@/services/modules/AuthModule'
import Logout from '@/views/Logout.vue'
import ShowPublication from '@/views/Publications/ShowPublication.vue'
import Account from '@/views/Account.vue'

const isAuthenticated: NavigationGuardWithThis<undefined> = (to: any, from: any, next: (arg0: { name: string } | undefined) => void) => {
  if (AuthModule.isAuthenticated()) {
    next(undefined)
  } else {
    next({ name: 'login' })
  }
}

const isNotAuthenticated: NavigationGuardWithThis<undefined> = (to: any, from: any, next: (arg0: { name: string } | undefined) => void) => {
  if (AuthModule.isAuthenticated()) {
    next({ name: 'publications' })
  } else {
    next(undefined)
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: isNotAuthenticated
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: isNotAuthenticated
  },
  {
    path: '/publications',
    name: 'publications',
    component: Publications,
    beforeEnter: isAuthenticated
  },
  {
    path: '/publication/:id',
    name: 'publication',
    component: ShowPublication,
    beforeEnter: isAuthenticated
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
    beforeEnter: isAuthenticated
  },
  {
    path: '/mon-compte',
    name: 'my-account',
    component: Account,
    beforeEnter: isAuthenticated
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
