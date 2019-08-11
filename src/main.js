import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
// Vue继承axios
Vue.prototype.$axios = axios
// 配置基础路径
axios.defaults.baseURL = 'http://localhost:1945';

// 请求拦截：发送token
axios.interceptors.request.use(config=>{
  // 每次利用axios发起的请求，都会进入到这里
  // 添加token
  let token = localStorage.getItem('Authorization');
  if(config.url != '/login'){
    config.headers.Authorization = token;

  }
  return config;
}, error=>{
  // 请求失败进入这个回调
  return Promise.reject(error);
});

// 响应拦截：校验token
axios.interceptors.response.use(res=>{
  // 判断token是否校验成功
  // 校验不成功：过期或被伪造
  if(router.currentRoute.matched.some(item=>item.meta.requiresAuth) && res.data.code == 401){
    router.replace({
      path:'/login',
      query:{
        redirectTo:router.currentRoute.fullPath
      }
    })
  }
  return res;
}, error=>{
    // Do something with response error
    return Promise.reject(error);
});


Vue.config.productionTip = false


//
import {
  Form,
  FormItem,
  Input,
  Button,
  Drawer,
  MessageBox,
  Message,
  Carousel,
  CarouselItem,

}from 'element-ui';
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Drawer);
Vue.use(Carousel);
Vue.use(CarouselItem);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
//获取数据的方法
import qs from 'qs';

Vue.prototype.getData=(f,address,obj)=>{
  return new Promise(async(resolve)=>{
    let msg 
    if(f==="get"){
       msg = await axios.get(address);
    }else if(f==="post"){
       axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
       msg = await axios.post(address,qs.stringify(obj));
    }
    resolve(msg)
  })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
