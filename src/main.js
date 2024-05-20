import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { useEcharts } from "@/plugins/echarts";
import './style/reset.scss'
import './style/common.scss'
import './assets/iconfont/iconfont.css'

const app = createApp(App)
import axios from 'axios'
app.config.globalProperties.$axios = axios

app.use(useEcharts).use(ElementPlus, { zhCn }).mount('#app')
