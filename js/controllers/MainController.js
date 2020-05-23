app.controller('MainController', ['$scope', '$http', 'pokeapi',
function($scope, $http, pokeapi) {
	$scope.pokeName;

	$scope.pokeSearch = function() {
		$http.get('https://pokeapi.co/api/v2/pokemon/' + $scope.pokeName.toLowerCase())
	    .success(function(data) { 
		    $scope.pokemon = data;
		    $http.get($scope.pokemon.species.url)
		    .success(function(data) {
		    	$scope.species = data;
		    }) 
  		})
        .error(function(err) { 
	    	alert("Pokemon does not exist!"); 
        });
	};

	pokeapi.success(function(data) { 
	$scope.pokemon = data; 
	}); 
}]); 