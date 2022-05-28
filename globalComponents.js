//引入组件
import qiun-data-charts from "@/components/qiun-data-charts/qiun-data-charts/qiun-data-charts.vue"
//定义函数
function plugin (Vue) {
	//注册组件
	Vue.component('qiun-data-charts',qiun-data-charts)
}

// 导出函数
export default plugin