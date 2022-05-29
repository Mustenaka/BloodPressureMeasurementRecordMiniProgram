import App from './App'
import http from '@/common/js/request.js'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
// Vue.config.globalProperties.$http = http;
Vue.prototype.$http = http;
Vue.prototype.$hello = 'Hello World';

App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif


// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.config.globalProperties.$http = http;
	app.config.globalProperties.$hello = 'Hello World';
	return {
		app
	}
}
// #endif
