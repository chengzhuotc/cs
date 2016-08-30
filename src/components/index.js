import hi from './hi.vue'
import wo from './wo.vue'
import {nx} from './nx.js'
const install= function (Vue, options) {

  Vue.component(hi.name, hi)
  Vue.component(wo.name, wo)
}

module.exports = {
	install,
	nx
}
