import Vue from 'vue'
import Vuex from 'vuex'

import home from '@/store/modules/home.js'
import user from '@/store/modules/user.js'
import login from '@/store/modules/login.js'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const vuexPersisted = new createPersistedState({
	storage: {
		getItem: key => uni.getStorageSync(key),
		setItem: (key, value) => uni.setStorageSync(key, value),
		removeItem: key => uni.clearStorageSync(key)
	}
})

const store = new Vuex.Store({
	modules: {
		home,
		user,
		login
	},
	plugins: [vuexPersisted]
})

export default store
