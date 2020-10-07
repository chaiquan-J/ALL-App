import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/start',
		name: 'start',
		component: () => import('../views/start.vue')
	},
	{
		path: '/guidance',
		name: 'guidance',
		component: () => import('../views/guidance.vue')
	},
	{
		path: '/guidancevoice',
		name: 'guidancevoice',
		component: () => import('../views/guidancevoice.vue')
	},
	{
		path: '/word',
		name: 'word',
		component: () => import('../views/word.vue')
	},
	{
		path: '/course',
		name: 'course',
		component: () => import('../views/course.vue')
	},
	{
		path: '/',
		name: 'discover',
		component: () => import('../views/discover.vue')
	},
	{
		path: '/my',
		name: 'my',
		component: () => import('../views/my.vue')
	},
	{
		path: '/growup',
		name: 'growup',
		component: () => import('../views/growup.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
