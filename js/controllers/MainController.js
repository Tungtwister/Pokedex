app.controller('MainController', ['$scope', '$http', 'pokeapi',
function($scope, $http, pokeapi) {
	$scope.pokeName;

	$scope.pokeSearch = function() {
		$http.get('https://pokeapi.co/api/v2/pokemon/' + $scope.pokeName)
	    .success(function(data) { 
	    $scope.pokemon = data; 
  		})
        .error(function(err) { 
	    alert("Pokemon does not exist!"); 
            });
	};

	pokeapi.success(function(data) { 
	$scope.pokemon = data; 
	}); 
}]); 