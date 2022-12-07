import { createApp } from 'vue'
import App from './App.vue'


import router from "@/router";
import vuex from "vue-persistedstate/src/vuex";
import 'normalize.css'
import '@/assets/styles/common.less'
import store from "@/store";
import ui from './components/library'
import installElementPlus from '@/plubs/element'
const  app = createApp(App)
app.use(vuex)
installElementPlus(app)
app.use(store).use(router).use(ui).mount('#app')
