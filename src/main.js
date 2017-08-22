import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import home from './component/home.vue'

import about from './component/about.vue'
import summary from './component/about-summary.vue'
import layout from './component/about-layout.vue'
import development from './component/about-development.vue'
import report from './component/about-report.vue'
import honor from './component/about-honor.vue'

import news from './component/news.vue'
import newsaaa from './component/newsaaa.vue'
import newsbbb from './component/newsbbb.vue'
import newsccc from './component/newsccc.vue'
import newsddd from './component/newsddd.vue'
import newseee from './component/newseee.vue'

import advanced from './component/advanced.vue'
import advanced_one from './component/advanced_one.vue'
import advanced_two from './component/advanced_two.vue'

import society from './component/society.vue'
import societyone from './component/society-one.vue'
import societytwo from './component/society-two.vue'

import brand from './component/brand.vue'
import brand_Public from './component/brand_Public.vue'
import brand_skoda from './component/brand_skoda.vue'

import recruit from './component/recruit.vue'


const router=new VueRouter({
	routes:[
		{path:'/home',component:home},
		{path:'/about',component:about,
		children:[
			{path:'/about/about-summary',component:summary},
			{path:'/about/about-layout',component:layout},
			{path:'/about/about-development',component:development},
			{path:'/about/about-report',component:report},
			{path:'/about/about-honor',component:honor},
			{path:'/about',redirect:'/about/about-summary'}
		]},
		{path:'/advanced',component:advanced,
		children:[
		    {path:'/advanced/advanced_one',component:advanced_one},
		    {path:'/advanced/advanced_two',component:advanced_two},
		    {path:'/advanced',redirect:'/advanced/advanced_one'}
		]},
		{path:'/brand',component:brand,
		children:[
		    {path:'/brand/brand_Public',component:brand_Public},
		    {path:'/brand/brand_skoda',component:brand_skoda},
		    {path:'/brand',redirect:'/brand/brand_Public'}
		]},
		{path:'/news',component:news,
		children:[
		    {path:'/news/newsaaa',component:newsaaa},
		    {path:'/news/newsbbb',component:newsbbb},
		    {path:'/news/newsccc',component:newsccc},
		    {path:'/news/newsddd',component:newsddd},
		    {path:'/news/newseee',component:newseee},
		    {path:'/news',redirect:'/news/newsaaa'}
		]},
		{path:'/recruit',component:recruit},
		{path:'/society',component:society,
		children:[
			{path:'/society/society-one',component:societyone},
			{path:'/society/society-two',component:societytwo},
			{path:'/society',redirect:'/society/society-one'}
		]},
		{path:'*',redirect:'/home'}
	]
})
new Vue({
	
	router,
  el: '#app',
  render: h => h(App)
})
