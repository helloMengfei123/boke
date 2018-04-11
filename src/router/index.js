import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageOne from '@/components/pageOne'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/pageOne',
      name: 'PageOne',
      component: PageOne
    },
  ]
})
router.beforeEach((to, from, next) => {

	/* 获得存储,判断是否登录 */
	let user = sessionStorage.getItem("userName");

	if(!user && to.path != '/') { //当前不是登录页面,并且浏览器没有存储 

		/*跳到登录页面*/
		next({
			path: '/'
		})

	} else {		//登录成功	
			next();
	}
})
export default router
