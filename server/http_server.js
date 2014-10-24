/**
 * New node file
 */
/*packages**************************************************************/
var fs = require('fs');
var path = require('path');
var http = require('http');
var url = require('url');
var util = require('util');
var qs = require('querystring');

var settings = require("./lib/settings");
var moduledata = require("./lib/data");

/*websocket for client*/
var WebSocketServer = require('./lib/ws').Server;
var wsss = null;/*websocket tunnel*/
var wss =null;
/*http server*/
var http_server = null;
/*Get the settings*/


var routemgr = require("./lib/route.manager");
var restdata = require("./lib/rest.data.container");


/*set the restful data here. this will initialize the uri with what ever data we chose. can be done at anytime but doing it here
 * simplifies it and locates it all in one place*/

settings.readCommandLine();


try
{
	/*Web content and service*/
	http_server = http.createServer(handler).listen(settings.http.port);
	console.log('Http server started successfully and running at %s on %s', settings.http.host, settings.http.port);
	wss = new WebSocketServer({server: http_server, port: settings.tunnel.port}); //note this uses the current domain but there is a setting in the client specifically for setting the ws
	//address for simplicity and cross domain reasons
	wss.on('connection', webSocketConnected);
	

	
}
catch(err)
{
	console.log("Failed to start the http server" + err + " was returned.");
}

function writeErrorResponse(res)
{
	res.writeHead(404, {'Content-Type': 'text'});
	res.end('404 - not found');	
}

function handleGetDiskFile(uri, res)
{
	var contentType = 'text/html';
	var physicalPath = path.join(settings.roots.file, uri);
	var extname = path.extname(physicalPath);
	
	var handled = false;

	console.log('physical path ' + physicalPath);
	
	switch(extname)
	{
		case '.html':
			contentType = "text/html";
			break;
		case '.htm':
			contentType = "text/html";
			break;
		case '.js':
			contentType = "text/javascript";
			break;
		case '.css':
			contentType = "text/css";
			break;
		case '.jpg':
			contentType = "img/jpg";
			break;
		case '.png':
			contentType = "img/png"; 
			break;
		case '.svg':
			contentType = 'img/svg+xml';
		default:
			contentType = 'text';
			break;
	}
	var fileExists = fs.existsSync(physicalPath);
	var contents = '';
	if(fileExists)
	{
		contents = fs.readFileSync(physicalPath);
		res.writeHead(200, {'Content-Type': contentType});
		res.end(contents, "utf=8");
	    
	    handled = true;
	}
	return handled;
	
}

function handleGetRestData(uri, res)
{
	var contents = restdata.getJsonData(uri);
	var handled = false;
	if(contents != '')
	{
		res.writeHead(200, {'Content-Type': 'text'});
	    res.end(contents, "utf-8");
		handled = true;
	}
	return handled;
}

function handleGet(uri, res)
{
	var handled = handleGetDiskFile(uri, res)
	
	if(!handled)
	{
		var parsedurl = url.parse(uri, true);
		handled  = routemgr.executeRoute(parsedurl.path,null, res);
		
	}
	if(!handled)
	{
		handleGetRestData(uri, res);
	}
	
	return handled;
	
	
}
function handlePost(uri,data, res)
{
	var handled = false;
	console.log('handle post called....');
	if(!handled)
	{
		var parsedurl = url.parse(uri, true);
		handled  = routemgr.executeRoute(parsedurl.path, data, res);
		
	}
	return handled;
	
	
}

function handlePut(uri, res)
{


	var parsedurl = url.parse(uri, true);
	var handled = false;
	var tempstring = parsedurl.search.split('?')[1];
	var objectname = tempstring.split('=')[0];
	var keys = Object.keys(parsedurl.query);
	restdata.setData(parsedurl.pathname + '/' + objectname, JSON.parse(parsedurl.query[keys[0]]) );
	
	res.writeHead(200, {'Content-Type': 'text'});
    res.end('ok');	
    handled = true; 
	    
	return handled;
}
function handler(req, res)
{
	
	console.log("[debug] http request started\r\n");
	var filerequested = '';
	var handled = false;
	

	
	
	if(req.url == '/')
	{
		
		filerequested =  "index.html";
	}
	else
	{
		filerequested = req.url;
	}
		
	if(req.method == 'PUT')
	{
		handled = handlePut(filerequested, res);
	}
	else if(req.method == 'GET')
	{
		handled = handleGet(filerequested,res);
		
	}
	else if(req.method == 'POST')
	{
		var body = "";
		handled = true; //don't let the default handler perform it's actions do it ourselves in the calling funciton.
		req.on('data', function(data){
			
			
			body += data;
			
		});
		req.on('end', function(){
			var variables =  qs.parse(body); //get the parameters
			
			handlePost(filerequested, variables, res);
		});
		
		
	}
	
	if(!handled)
	{
		writeErrorResponse(res);
		
	}
	
	
	console.log('[debug] http request -'  + req.method +  '- finished: url requested: ' + req.url+ ' translated path: ' + filerequested + '\r\n');
   
}



function webSocketConnected(ws)
{
	 wsss = ws;
	 ws.on('message', webSocketMessage);
	 console.log('[debug] web socket connected...\r\n');
	
}

function webSocketMessage(message)
{
    console.log('received: %s', message);

}








