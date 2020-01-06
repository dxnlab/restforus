import Vue from 'vue'
import App from '@/application'

import vuerouter from '@/plugins/vuerouter'
import vuetify from '@/plugins/vuetify'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: vuerouter(Vue),
  vuetify: vuetify(Vue),
}).$mount('#app');
