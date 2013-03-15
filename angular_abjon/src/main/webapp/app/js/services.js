'use strict';

/* Services */


angular.module('abjon.services', ['ngResource']).factory('Article', function($resource){
	 return $resource('/angular_abjon/rest/articles/:id', {},
			 { 
		 		update: {method:'PUT'},
		 		remove: {method:'DELETE'}
		 		
			 }
		); 

});

