// 引入特定组件及样式
import '../../node_modules/element-plus/theme-chalk/index.css'
import {
    ElButton,
    ElContainer,
    ElHeader,
    ElAside,
    ElMain,
}  from 'element-plus'

//注册特定组件
const components = [
    ElButton,ElContainer,ElHeader,ElMain,ElAside
]

export default (app) => {
    components.forEach(component => {
        app.component(component.name, component)
    })
}
