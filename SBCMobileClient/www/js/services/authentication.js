app.service('authentication', function($http) {
    this.authenticate = function(username, password, response) {
    	$http.post('/rest/rpc/authenticate', 'username='+username+'&'+'password='+password).success(
                function( data, status, headers, config) {

                	response = data;
                    console.log(response.username + ' ' + status + ' ' + headers);

                }).error(function( data, status, headers, config){
                	console.log('authentication error - status code: ' + status);
    			
    			});
            console.log('username ' + username);
        }
 
});