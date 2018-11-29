import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import restauranteList from './components/RestaurantsList'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
	{path: '/restauranteList', component: restauranteList},
];

const router = new VueRouter({
	routes,
	mode: 'history'
});


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
