
import Vue from "vue";
import VueRouter from "vue-router";
import Router from './router';

import index from "../view/index/index.vue"; //首页
import login from "../view/login/index.vue"; //登录

Vue.use(VueRouter);

const routes = [
	{
    path:"/index", //首页
    component: index
  },
	{
    path:"/login", //登录
    component: login
  },
  {
    path: '/',   // 重定向
    redirect: '/index'
	},
	// ...Router.routes
]

var router =  new VueRouter({
  routes
})
export default router;