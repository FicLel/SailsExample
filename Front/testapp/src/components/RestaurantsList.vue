<template>
	<div>
		<div class="columns">
			<div class="column is-4" v-for="(restaurante,key,index) in restaurantes">
				 <header class="card-header">
			    <p class="card-header-title">
			      
			    </p>
							<a class="boxclose card-header-icon" aria-label="more options""></a>
			  </header>
				<div class="card" >
				  <div class="card-image">
				    <figure class="image is-4by3">
				      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
				    </figure>
				  </div>
				  <div class="card-content">
				    <div class="media">
				      <div class="media-left">
				        <figure class="image is-48x48">
				          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
				        </figure>
				      </div>
				      <div class="media-content">
				        <p class="title is-4">{{restaurante.name}}</p>
				        <p class="subtitle is-6">@johnsmith</p>
				      </div>
				    </div>

				    <div class="content">
				      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
				      <a href="#">#css</a> <a href="#">#responsive</a>
				      <br>
				      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
				    </div>
				  </div>
				</div>
			</div>
		</div>
		
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