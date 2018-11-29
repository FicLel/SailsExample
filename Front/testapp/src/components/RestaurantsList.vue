<template>
	<div>
		<ul id="restaurantes-list" v-if="restaurantes != null">
			<li v-for="(restaurante,key,index) in restaurantes">
				<strong>{{restaurante.name}}</strong>
				<button class="close" @click="getIdRestaurante(restaurante.id,index)">x</button>

			</li>
		</ul>
		<span v-else>Cargando restaurantes</span>
	</div>	
</template>

<script>
import axios from 'axios';
export default {
  name: 'restaurantes-list',
  mounted(){
  	this.getRestaurantes();
  },
  data () {
    return {
      texto: 'Pagina de restaurantes',
      restaurantes: null
    }
  },
  methods: {
  	getIdRestaurante(ide,index){
  		const url = 'http://localhost:1337/restaurants/'+ide;
  		axios.delete(url)
  		.then(response=>{alert(response.data.message)});
  		this.restaurantes.splice(index,1);
  	},
  	getRestaurantes()
  	{
  		axios.get('http://localhost:1337/restaurants')
  		 .then(respuesta => {this.restaurantes = respuesta.data.data;console.log(respuesta.data.data);});

  	}
   }
}
</script>
<style lang="scss">
	#restaurantes-list{
		padding: 5px;
		li{
			margin-top: 10px;
			width: 30%;
			height: 120px;
			border: 1px solid #ddd;
			background: #eee;
			padding:20px;
			overflow: hidden;
		}
.close{
	height: 20px;
	border-radious: 50%;
	background: red;
	right: 0;
	}
}


</style>