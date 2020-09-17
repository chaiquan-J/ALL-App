import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/start',
		name: 'start',
		component: () => import('../views/start.vue')
	},
	{
		path: '/',
		name: 'guidance',
		component: () => import('../views/guidance.vue')
	},
	{
		path: '/guidancevoice',
		name: 'guidancevoice',
		component: () => import('../views/guidancevoice.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
