import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/start',
		name: 'Start',
		component: () => import('../views/start.vue')
	},
	{
		path: '/',
		name: 'Guidance',
		component: () => import('../views/guidance.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
