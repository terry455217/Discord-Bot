import { createApp } from 'vue'
import { createPinia } from 'pinia';

//使用 VUE / pinia
export default ( )=>{
    console.log('vue init')
    const vue = createApp({})
    const pinia = createPinia()

    vue.use(pinia)
}