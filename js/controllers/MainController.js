app.controller('MainController', function($scope) {
	$scope.search={
		pokeName: "ditto"
	};
});


app.controller('MainController', ['$scope', 'pokeapi', 
function($scope, pokeapi) { 
    pokeapi.success(function(data) { 
    $scope.pokemon = data; 
  }); 
}]); 