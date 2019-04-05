import Vue from 'vue'
import Router from 'vue-router'
import Header from './components/header.vue'
import About from './components/about.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'header',
			component: Header,
		},
		{
			path: '/about',
			name: 'about',
			component: About,
		},
		{
			path: '/about/:name',
			name: 'about',
			component: About,
		},
	]
})