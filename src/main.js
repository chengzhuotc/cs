import Vue from 'vue'
import VueRouter from 'vue-router'
import './style/public.css'

import add from './view/add.vue'
import app from './view/app.vue'


import cz from './components/index.js'
import VueAlert from './components/nx.js'


Vue.use(VueAlert);
Vue.use(VueRouter)
Vue.use(cz)
window.vm=new Vue()

Vue.config.debug = true

const App = Vue.extend({})
const router = new VueRouter()

router.map({
  '/add': {
    name: 'add',
    component: function (resolve) {
      resolve(add)
    }
  },
  '/app': {
    name: 'app',
    component: function (resolve) {
      resolve(app)
    }
  }
})

router.redirect({
  '*': '/app'
})
router.start(App, '#app')
