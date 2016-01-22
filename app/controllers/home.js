var args = arguments[0] || {}; 
var loading = Alloy.createController("loading");
COMMON.construct($); 
var u_id = Ti.App.Properties.getString('u_id') || "";  
var userModel = Alloy.createCollection('user');  
var user;
var spe = ['Anesthesiology','Dermatology','Electrophysiology','Hematology','Neuroradiology'];
init();
 
/* Start - Login Part */ 
var labellogin = $.UI.create("Label",{
	text: "Login",
	height: 30,
	color: "#7BBC31",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
}) ;

var textfieldname = $.UI.create("TextField",{
	hintText: "Email Address",
	hintTextColor:'#c0bfc0',
	color: "black",
	
});

var textfieldpass = $.UI.create("TextField",{
	passwordMask:true,
	hintText: "Password",
	hintTextColor:'#c0bfc0',
	color: "black",
	
});

var loginbutton = $.UI.create("Button",{
	height: 30,
	width: "48%",
	title: "OK",
	backgroundColor:"#7BBC31",
	color: "white"
});

loginbutton.addEventListener("click",function (e){
	Alloy.Globals.Navigator.open("MenuOption");
	$.loginview.hide();
});

loginbutton.addEventListener("focus",function (e){
	textfieldname.value = "";
	textfieldpass.value = "";
});


var logincancel = $.UI.create ("Button",{
	height: 30,
	width: '48%',
	right: 10,
	title: "CANCEL",
	backgroundColor:"#7BBC31",
	color: "white"
});

logincancel.addEventListener("click",function (e){
	$.loginview.hide();
});

var view = $.UI.create("View",{
	height: Ti.UI.SIZE,
	width: Ti.UI.FILL,
	left:10,
	right: 10,
	top: 10,
	layout: "horizontal",
});

	view.add(logincancel);
	view.add(loginbutton);
	$.loginview.add(labellogin);
	$.loginview.add(textfieldname);
	$.loginview.add(textfieldpass);
	$.loginview.add(view);
/* End - Login Part */

/* Start - Sign Up Part */ 
var labelname1 = $.UI.create("Label",{
	text: "Register",
	color: "#7BBC31",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	height: 30,
}) ;

var patientbutton = $.UI.create ("Button",{
	height: Ti.UI.FILL,
	width: "49%",
	title: "PATIENT",
	backgroundColor:"#7BBC31",
	left:3,
	color: "white"
});

patientbutton.addEventListener("click",function (e){
	viewpatientform.show();
	viewdoctorform.hide();
});

var doctorbutton = $.UI.create("Button",{
	height: Ti.UI.FILL,
	width: "49%",
	title: "DOCTOR",
	backgroundColor:"#7BBC31",
	color: "white"
});

doctorbutton.addEventListener("click",function (e){
	viewpatientform.hide();
	viewdoctorform.show();
});

var viewlinehorz = $.UI.create("View",{
	height: Ti.UI.FILL,
	width: 1,
	backgroundColor: "black",
});

var viewselection = $.UI.create("View",{
	height: 30,
	width: Ti.UI.SIZE,
	top: 10,
	layout: "horizontal"
});

viewselection.add(patientbutton);
viewselection.add(viewlinehorz);
viewselection.add(doctorbutton);

/*Patient Form*/
var textfieldname1 = $.UI.create("TextField",{
	hintText: "Name",
	hintTextColor:'#c0bfc0',
	color: "black",
});

var textfieldemail = $.UI.create("TextField",{
	hintText: "Email Address: eg. abc@gmail.com",
	hintTextColor:'#c0bfc0',
	color: "black",
	
});

var textfieldpass1 = $.UI.create("TextField",{
	passwordMask:true,
	hintText: "Enter Password",
	hintTextColor:'#c0bfc0',
	color: "black",
	
});

var textfieldconfpass = $.UI.create("TextField",{
	passwordMask:true,
	hintText: "Confirm Password",
	hintTextColor:'#c0bfc0',
	color: "black",
	
});

var viewpatientform = $.UI.create("View",{
	height: Ti.UI.SIZE,
	width: Ti.UI.FILL,
	layout: "vertical",
});

viewpatientform.add(textfieldname1);
viewpatientform.add(textfieldemail);
viewpatientform.add(textfieldpass1);
viewpatientform.add(textfieldconfpass);


/*Doctor Form*/

var textfieldname2 = $.UI.create("TextField",{
	hintText: "Name",
	hintTextColor:'#c0bfc0',
	color: "black",
	
});

var textfieldemail2 = $.UI.create("TextField",{
	hintText: "Email Address: eg. abc@gmail.com",
	hintTextColor:'#c0bfc0',
	color: "black",
	
});

var textfieldpass2 = $.UI.create("TextField",{
	passwordMask:true,
	hintText: "Enter Password",
	hintTextColor:'#c0bfc0',
	color: "black",
	
});

var textfieldconfpass2 = $.UI.create("TextField",{
	passwordMask:true,
	hintText: "Confirm Password",
	hintTextColor:'#c0bfc0',
	color: "black",
});

var spclbutton = $.UI.create ("TextField",{
	enabled: false,
	hintText: "Speciality",
	hintTextColor:'#c0bfc0',
	color: "black",
	
});

spclbutton.addEventListener("click",function (e){
 var dialog = Ti.UI.createAlertDialog({
 	title: 'Choose Your Speciality',
    buttonNames: spe,
  });
  
  dialog.addEventListener('click', function(e){
  	var speText = spe[e.index];
    console.log(speText);
    spclbutton.value = speText;
  });
 	dialog.show();	
});


var viewdoctorform = $.UI.create("View",{
	height: Ti.UI.SIZE,
	width: Ti.UI.FILL,
	layout: "vertical",
	
});

viewdoctorform.add(textfieldname2);
viewdoctorform.add(textfieldemail2);
viewdoctorform.add(textfieldpass2);
viewdoctorform.add(textfieldconfpass2);
viewdoctorform.add(spclbutton);
viewdoctorform.hide();


/*Sign Up and Cancel*/

var signupbutton = $.UI.create ("Button",{
	height: 30,
	width: "48%",
	title: "SIGN UP",
	backgroundColor:"#7BBC31",
	color: "white"
});

var signupcancel = $.UI.create ("Button",{
	height: 30,
	width: "48%",
	title: "CANCEL",
	right: 10,
	backgroundColor:"#7BBC31",
	color: "white"
	
});

signupcancel.addEventListener("click",function (e){
	$.signupview.hide();
});

var view1 = $.UI.create("View",{
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	left:10,
	right: 10,
	top: 10,
	bottom: 10,
	layout: "horizontal"
});

/*For Patient and Doctor Form*/

var viewpntdoc = $.UI.create("View",{
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
});

viewpntdoc.add(viewpatientform);
viewpntdoc.add(viewdoctorform);
view1.add(signupcancel);
view1.add(signupbutton);
$.signupview.add(labelname1);
$.signupview.add(viewselection);
$.signupview.add(viewpntdoc);
$.signupview.add(view1);

/* End - Sign Up Part */


function init(){ 
	//Alloy.Globals.navWin = $.Win;
	// $.win.add(loading.getView());
	$.loginview.hide();
	$.signupview.hide();
}

function doLogin(){
	$.signupview.hide();
	$.loginview.show();
}

function doSignUp(){
	$.signupview.show();
	$.loginview.hide();
}

function logoutAction(){ 
	var dialog = Ti.UI.createAlertDialog({
	    cancel: 0,
	    buttonNames: ['Cancel','Confirm'],
	    message: 'Would you like to logout?',
	    title: 'Logout Leo VTE'
	});
	dialog.addEventListener('click', function(e){  
		if (e.index === e.source.cancel){
	      //Do nothing
	    }
	    if (e.index === 1){
	    	//Do logout  
			doLogout();
	    }
	});
	dialog.show(); 
}
 

function doLogout(){
	COMMON.showLoading();
	var param = {  
		"session" : Ti.App.Properties.getString('session')
	};
	API.callByPost({url:"doLogoutUrl", params: param}, function(responseText){
		COMMON.hideLoading();
		var res = JSON.parse(responseText);
		 
		if(res.status == "error"){ 
			COMMON.resultPopUp("Error",res.data[0]);
			return false;
		}else{  
			//set session 
			Ti.App.Properties.removeProperty('session');
			$.win.close();
			Alloy.Globals.Navigator.open("login");
			return false; 
		}
		 
	}, function(){
		COMMON.hideLoading();
		COMMON.createAlert("Connection Fail","Something wrong with internet connection interact with server. Please try again later.");
	});
}

function navWindow(e){
	var target = e.source.mod;  
	Alloy.Globals.Navigator.open(target);
}

if(OS_ANDROID){
	$.win.addEventListener('android:back', function (e) {
		logoutAction(); 
	});
}

Ti.App.addEventListener('refreshData', init); 

function navToOption(){
	Alloy.Globals.Navigator.open("MenuOption");
}

/* Testing Login Fucntion*/

