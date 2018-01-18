import Vue from 'vue'
import App from './App.vue'
import Example from './Example.vue'

Vue.component('example', Example);

new Vue({
  el: '#app',
  render: h => h(App)
});
