<template>
	<div>
		<h1>{{texto}}</h1>
		<input type="text" name="nombre" id="nombre" v-model="nombre"/>
		<input type="button" name="insert" id="insertar" @click="setRestaurantes()" value="Insertar">
	</div>	
</template>

<script>
import axios from 'axios';
export default{
  name:'add-restaurant',
  data(){
    return {
    	texto:'Ingrese se restaurante',
      restaurantes:null,
      nombre:null
    }
  },
  methods:{
  	setRestaurantes(){
  		axios.post('http://localhost:1337/restaurants',{
  			name: this.nombre
  		})
  		.then(function(response){
  			alert(response.data.message);
  		})
  		.catch(function(error){
  			console.log(error);
  		});
  	}
  }
}
</script>
<style lang="scss">
	

</style>