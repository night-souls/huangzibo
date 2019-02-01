import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/index"
import Crossborder from "../components/crossborder"
import Women from "../components/women"
import Men from "../components/men"
import Cosmetics from "../components/cosmetics"
import Silo from "../components/silo"
import Brand from "../components/brand"
import Productlist from "../components/productlist"
Vue.use(Router) 

const router = new Router({
	mode:'hash',
	routes:[
		{
			path:'/index',
			component:Index
		},
		{
			path:'/silo',
			component:Silo,
			children:[
				{
					path:'crossborder',
					component:Crossborder
				},
				{
					path:'women',
					component:Women
				},
				{
					path:'men',
					component:Men
				},
				{
					path:'cosmetics',
					component:Cosmetics
				 }

			]
		},

		{
			path:'/brand/:id',
			component:Brand
		},
		{
			path:'/productlist/:id',
			component:Productlist
		},
		
		{
			path:'*',
			redirect:'/login/mobile'
		}
	]
})


router.beforeEach((to,from,next)=>{
	next();
})

export default router;