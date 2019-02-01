import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex) 

var MY_HIDE = "hideTabbar"
const store = new Vuex.Store({
	state:{
		isShow:true,
		datalist:[],
		title:""
	},

	actions:{

	},


	mutations:{
		[MY_HIDE](state,payload){
			state.isShow = false;
		},

		showTabbar(state,payload){
			state.isShow = true;
		}


	}
})

export default store  