'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var vue_router_1 = require('vue-router')
var HomePage_vue_1 = require('../views/HomePage.vue')
var About_vue_1 = require('../views/About.vue')
var router = (0, vue_router_1.createRouter)({
  history: (0, vue_router_1.createWebHistory)(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage_vue_1.default,
    },
    {
      path: '/about',
      name: 'About',
      component: About_vue_1.default,
    },
  ],
})
exports.default = router
