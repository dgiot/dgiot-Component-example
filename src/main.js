import Vue from 'vue'
import App from './App.vue'
import Bus from './bus'
import store from './store'
import MqttMixin from './mixins/mqtt'
Vue.use(Bus)
Vue.config.productionTip = false
Vue.mixin(MqttMixin)
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
