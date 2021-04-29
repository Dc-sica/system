/*
 * @Author: Jason_Ma
 * @Date: 2021-01-06 10:59:46
 * @LastEditors: Jason_Ma
 * @LastEditTime: 2021-01-06 17:19:17
 * @FilePath: /hos-logistics-management/src/router.js
 */

import Vue from 'vue'
import Router from 'vue-router'
import routeList from './routeList'
import baseInfo from './config/config'

import menuTree from './utils/menuItems'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routeList
})

let treeToArray = (array, tree) => {
  tree.forEach(item => {
    if (item.path !== '/404' && item.path !== '/' && item.path !== '/login') {
      array.push(item.path)
    }
    if (item.childNodes && item.childNodes.length > 0) {
      treeToArray(array, item.childNodes)
    }
  })
  return array
}

const whiteList = ['/login', '/register', '/404']

router.beforeEach((to, from, next) => {
  document.title = baseInfo.BASE_TITLE + '-' + to.meta.text
  if (localStorage.tokenInfo && localStorage.menuTree && localStorage.userInfo) {
    // let rightList = treeToArray([], JSON.parse(localStorage.menuTree))
    let rightList = treeToArray([], menuTree)
    if (to.path === '/404' || to.path === '/' || to.path === '/login') {
      next()
    } else {
      let index = rightList.findIndex(item => item === to.path)
      if (index === -1) {
        next('/404')
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      localStorage.removeItem('tokenInfo')
      localStorage.removeItem('menuTree')
      localStorage.removeItem('userInfo')
      next('/login')
    }
  }
})

export default router



