import Vue from 'vue'
import App from './App.vue'
// importing here makes the component globally accessible
// would need to put <characters></characters> in App.vue to see it
// import Characters from './Characters.vue'

// Vue.component('characters', Characters)

new Vue({
  el: '#app',
  render: h => h(App)
})
