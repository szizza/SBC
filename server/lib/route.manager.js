/**
 * New node file
 */
var routemanager = module.exports = {
		routemap : {}, 
		setRoute : function(datapath, callback)
		{
			this.routemap[datapath] = callback;	
		},
		getRoute : function(datapath)
		{
			return this.routmap[datapath];
		},
			
		removeRoute : function(datapath)
		{
			delete this.routemap[datapath];
		},
		executeRoute : function(datapath, data, res)
		{
			var obj = this.routemap[datapath];
			if(obj != null)
			{
				obj(datapath, data, res);
				return true;
					
				
			}
			else
			{
				return false;
			}
		},
}