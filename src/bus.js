// eslint-disable
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import md5 from 'md5'
/**
 *
 * @type {Vue}
 */
/**
 *
 * @param type ['subscribe','publish','unsubscribe']
 * @return {string}
 */
function getEventId(type, Identifier = 'dmmd34r23fdew') {
  return md5(type + Identifier)
}

const install = function (Vue) {
  const Bus = new Vue({
    methods: {
      emit(event, ...args) {
        this.$emit(getEventId(event), ...args)
      },
      on(event, callback) {
        this.$on(getEventId(event), callback)
      },
      off(event, callback) {
        this.$off(getEventId(event), callback)
      },
    },
  });
  window.Bus=Bus
//注册到给vue对象的原型上添加全局属性
  Vue.prototype.$bus = Bus;
};
export default install;
