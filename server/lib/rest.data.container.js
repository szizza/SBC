/**
 * New node file
 */
var restcontainer = module.exports = {
		restdatamap : {}, 
			
		
		setData : function(datapath, dataObj)
		{
			this.restdatamap[datapath] = dataObj;	
			
		},
			
			
		getJsonData : function(datapath)
		{
			var obj = this.restdatamap[datapath];
			var jsonString = '';
			if(obj != null)
			{
				jsonString = JSON.stringify(obj);
			}
			return jsonString;
		},
		
		getData : function(datapath)
		{
		
			return this.restdatamap[datapath];
			
		},
		removeData : function(datapath)
		{
			delete this.restdatamap[datapath];
		},
		

		
}