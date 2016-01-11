var userModel = Alloy.createCollection('user');   
/**
 * Global Navigation Handler
 */
Alloy.Globals.Navigator = {
	
	/**
	 * Handle to the Navigation Controller
	 */
	navGroup: $.nav,
	
	open: function(controller, payload){
		var win = Alloy.createController(controller, payload || {}).getView();
		
		if(OS_IOS){
			$.nav.openWindow(win);
		}
		else if(OS_MOBILEWEB){
			$.nav.open(win);
		}
		else {
			if(typeof payload != "undefined"){	
				// added this property to the payload to know if the window is a child
				if (payload.displayHomeAsUp){
					
					win.addEventListener('open',function(evt){
						var activity=win.activity;
						activity.actionBar.displayHomeAsUp=payload.displayHomeAsUp;
						activity.actionBar.onHomeIconItemSelected=function(){
							evt.source.close();
						};
					});
				}
			}
			win.open();
		}
	}
};
 
if(OS_IOS){
	$.nav.open();
}else{
	$.index.getView().open();
}

init();
	
function init(){ 
	/**var checker = Alloy.createCollection('updateChecker'); 
	var isUpdate = checker.getCheckerById(1);
	var last_updated =""; 
	**/
	launchPage(); 
}

function launchPage(){
	Alloy.Globals.Navigator.open("home");
	/**
	var session = Ti.App.Properties.getString('session') || "";
	var u_id = Ti.App.Properties.getString('u_id') || "";  
	var user = userModel.getUserById(u_id);
	var e_id = Ti.App.Properties.getString('e_id') || "";
	 
	
	if(session != "" && user != "" && e_id != ""){
		Alloy.Globals.Navigator.open("home");
	}else{
		Alloy.Globals.Navigator.open("login");
	} **/
}

 