'use strict';

/* Controllers */
function ListCtrl($scope,$location, Article) {
	  
	  
	  $scope.orderProp = 'id';
	  
	  $scope.addArticle = function() {
		    
		    var a = new Article();
			a.article = $scope.articleText;
			a.latitude = 0.0;
			a.longitude = 0.0
			
			
			  
			if (navigator.geolocation) {
				  var timeoutVal = 10 * 1000 * 1000;
				  navigator.geolocation.getCurrentPosition(
				    savePosition, 
				    theError,
				    { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
				  );
				}
				else {
				  alert("Geolocation is not supported by this browser");
				}

			function savePosition(position) {
			  a.latitude = position.coords.latitude;
			  a.longitude = position.coords.longitude;
			  
			  a.$save(function(data)
			  {
					//$scope.articles.push({article:data.article});
					$scope.articles = Article.query();
				
			   });
	  
			}
		  
			function theError(error) {
			  alert("error" + error);
			}
			 
			  
		    $scope.articleText = '';
		  
		    
	  };
	  
	  $scope.articles = Article.query();
	
}
	 

function EditCtrl($scope, $location, $routeParams, Article) {


	    this.article = Article.get({id:$routeParams.articleId});
	 
	    $scope.article = this.article;
	 
	    $scope.save = function () {
	        if (this.article.id > 0)
	            this.article.$update({id:this.article.id});
	        else
	            this.article.$save();
	        
	        $location.path('/edit/' + this.article.id);
	    }
	 
	    $scope.destroy = function () {
	        this.article.$delete({id:this.article.id}, function() {
	            
	            $location.path('/');
	        });
	    }
}



function MapCtrl($scope,$location, Article) {

	   $scope.centerProperty = {
			   lat: 45,
				lng: -73
		    };
	   $scope.zoomProperty = 4;
	 
	   // These 2 properties will be set when clicking on the map
	   $scope.clickedLatitudeProperty = null;
	   $scope.clickedLongitudeProperty = null;
	   
	   $scope.markersProperty = {latitude : 0,
	   							longitude: 0};
		
	   
		var as = Article.query(function(data) {
			
		var gotcenter = false;
		var centerlat = 0;
		var centerlong = 0;
		var markers = [];
		var i = 0;
		for (i=0; i < data.length; i++)
		{
			
			var a = data[i];
			
			markers.push({latitude: a.latitude,
			    longitude: a.longitude
			});
			
		
		}
		$scope.markersProperty = markers; 
	
	});
			
}
	  
