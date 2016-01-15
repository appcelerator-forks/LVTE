var args = arguments[0] || {};

function navToTreat(){
	Alloy.Globals.Navigator.open("treatment");
}

function doBack(){
	$.win.close();
}