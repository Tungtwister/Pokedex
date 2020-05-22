app.factory('pokeapi', ['$http', function($http) { 
  return $http.get('https://pokeapi.co/api/v2/pokemon/1/') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);