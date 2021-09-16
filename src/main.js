import Vue from 'vue'
import App from './App.vue'
import dgiotStore from '@dgiot/dgiot-mqtt-dashboard/src/store'
import dgiotBus from '@dgiot/dgiot-mqtt-dashboard/src/utils/bus'
import dgiotMixin from '@dgiot/dgiot-mqtt-dashboard/src/mixins/mqtt'
Vue.use(dgiotBus)
Vue.mixin(dgiotMixin)
Vue.config.productionTip = false
new Vue({
  dgiotStore,
  render: h => h(App),
}).$mount('#app')
