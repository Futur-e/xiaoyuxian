import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router";
import Layout from "@/views/layout";
import Home from "@/views/home";

const routes = [
    // {path: '/', redirect: '/Layout'},
    {
        path: '/',
        component: Layout,
        children:[
            {path:'/',component:Home}
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router

