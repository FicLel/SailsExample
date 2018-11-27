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
	}

};

