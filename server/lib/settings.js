/**
 * settings.js - contains the server side settings for the server. Ultimately this is where they need to go.
 * 

 *
 */



var settings = module.exports = {
		http : {port: '8080', host: 'http://localhost'}, 
		tunnel : {port : '9966', host: 'ws://localhost'}, //adding the host here for simplicity and cross domain purposes - the nodejs server creates the WS tunnel on the primary http domain
		roots : {file : '.'},
		/*The above should always be set via command line but we can provide a UI or env setting for them as well*/
		
		/*user settings are below - must have a UI and some will be passed in via command line*/
		

		readCommandLine : function()
		{
			
			try
			{
				process.argv.forEach(function(val, index, array) {
					
					var nameValue = val.split('=');
					
					if(nameValue[0] == 'http_port')
					{
						settings.http.port = nameValue[1];
					}
					else if(nameValue[0] == 'fileroot')
					{
						
						settings.roots.file = nameValue[1];
					}
					

				});				
			}
			catch(err)
			{
				console.log("Failed reading command line arguments" + err + " was returned.");

			}
			
			

		}
};




