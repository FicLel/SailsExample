<template>
  <div id="app">
    <NavBar></NavBar>
    <div>
     <!-- <img alt="Vue logo" src="./assets/logo.png">
      <div class="MenuAbajo">
        <ul>
          <li><router-link to="/restauranteList">Restaurantes</router-link></li>
          <li><router-link to="/addrestaurant">Añadir</router-link></li>
        </ul>
      </div>
      
      <h2>{{msg}}</h2>-->
      <router-view></router-view>
      <!--  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
export default {
  name: 'app',
  data(){
    return{
      msg: 'Estamos probando esta api'
    }
  },
  components: {
    NavBar
    //HelloWorld
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
  margin-top: 0px;
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
