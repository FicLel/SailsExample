<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li><router-link to="/restauranteList">Restaurantes</router-link></li>
    </ul>
    <h2>{{msg}}</h2>
    <router-view></router-view>
    <!--  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return{
      msg: 'Estamos probando esta api'
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
