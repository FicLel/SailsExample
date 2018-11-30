import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import restauranteList from './components/RestaurantsList'
import addRestaurante from './components/AddRestaurant'

require('./assets/styles/main.scss');

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
	{path: '/restauranteList', component: restauranteList},
	{path: '/addrestaurant', component: addRestaurante},
];

const router = new VueRouter({
	routes,
	mode: 'history'
});


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
