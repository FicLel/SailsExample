/**
 * RestaurantsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  get: function(req, res){
  	Restaurants.find()
  		.then(function(restaurantes){
  			if(!restaurantes || restaurantes.length == 0){
  				return res.send({
  					'sucess': false,
  					'message': 'No hay registros'
  				})
  			}
  			return res.send({
  				'sucess': true,
  				'message': 'Registros mostrados',
  				'data': restaurantes
  			})
  		})
  		.catch(function(err){
  			sails.log.debug(err)
  			return res.send({
  				'sucess' : false,
  				'message' : 'Hubo un problema'
  			})
  		})
  },
  create: function(req, res){
		sails.log.debug(req.allParams())
		Restaurants.create(req.allParams())
		.then(function(restaurantes){
			return res.send({
				'success': true,
				'message': 'Se ha registrado el restaurantes'
			})
		})
		.catch(function(err){
			sails.log.debug(err)
			return res.send({
				'success': false,
				'message': 'Unable to create record'	
			})
		})
	}, 
	update: function(req, res){
		Restaurants.update(req.param('id'), req.allParams())
		.then(function(restaurantes){
			return res.send({
				'success':true,
				'message': 'Se ha actualizado con exito',
				'data': restaurantes
			})
		})
		.catch(function(err){
			sails.log.debu(err)
			return res.send({
				'success': false,
				'message': 'Tuvimos un little problema editando'
			})
		})
	},
	delete: function(req, res){
		Restaurants.update(req.param('id'))
		.then(function(restaurantes){
			return res.send({
				'sucess': true,
				'message': 'Se ha eliminado el registro',
				'data': restaurantes
			})
		})
		.catch(function(err){
			sails.log.debug(err)
			return res.send({
				'sucess': false,
				'message': 'No se pudo eliminar'
			})
		})
	}

};

