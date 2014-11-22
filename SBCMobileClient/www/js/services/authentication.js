app.service('authentication', function($q, $http) {
    this.authenticate = function(username, password) {
    	
    	var defer = $q.defer();
    	
    	$http.post('/rest/rpc/authenticate', 'username='+username+'&'+'password='+password).success(
                function( data, status, headers, config) {
                	
                	defer.resolve(data);
                    console.log(response.username + ' ' + status + ' ' + headers);

                }).error(function( data, status, headers, config){
                	console.log('authentication error - status code: ' + status);
    			
    			});
    		
            console.log('username ' + username);
            return defer.promise; 
        }
    	
 
});