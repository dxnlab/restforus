import VueRouter from 'vue-router'

import routes from '@/screens/_routes'

export default (function(Vue) {
    Vue.use(VueRouter);
    return new VueRouter({
        routes,
    })
});
