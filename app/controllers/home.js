var args = arguments[0] || {}; 
var loading = Alloy.createController("loading");
COMMON.construct($); 
var u_id = Ti.App.Properties.getString('u_id') || "";  
var userModel = Alloy.createCollection('user');  
var user;
var spe = ['Anesthesiology','Dermatology','Electrophysiology','Hematology','Neuroradiology'];
init();
 
/* Start - Login Part */ 
var labellogin = Ti.UI.createLabel({
	text: "Login",
	height: 30,
	color: "#7BBC31",
	//width: "30%",
}) ;

var textfieldname = Ti.UI.createTextField({
	height: 30,
	width: Ti.UI.FILL,
	left: 10,
	right: 10,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "Email Address"
});

var textfieldpass = Ti.UI.createTextField({
	height: 30,
	width: Ti.UI.FILL,
	left: 10,
	right: 10,
	top:10,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	passwordMask:true,
	hintText: "Password"
});

var loginbutton = Ti.UI.createButton ({
	height: 30,
	width: "48%",
	title: "OK",
	backgroundColor:"#7BBC31",
	color: "white"
});

loginbutton.addEventListener("click",function (e){
	Alloy.Globals.Navigator.open("MenuOption");
	//do_login();
	$.loginview.opacity = 0.0;
	

});

loginbutton.addEventListener("focus",function (e){
	textfieldname.value = "";
	textfieldpass.value = "";
});


var logincancel = Ti.UI.createButton ({
	height: 30,
	width: '48%',
	right: 10,
	title: "CANCEL",
	backgroundColor:"#7BBC31",
	color: "white"
});

logincancel.addEventListener("click",function (e){
	$.loginview.opacity = 0.0;
});

var view = Ti.UI.createView({
	height: Ti.UI.SIZE,
	width: Ti.UI.FILL,
	left:10,
	right: 10,
	top: 10,
	layout: "horizontal",
});

view.add(logincancel,loginbutton);
$.loginview.add(labellogin,textfieldname,textfieldpass,view);

/* End - Login Part */

/* Start - Sign Up Part */ 
var labelname1 = Ti.UI.createLabel({
	text: "Register",
	height: 30,
}) ;

var patientbutton = Ti.UI.createButton ({
	height: Ti.UI.FILL,
	width: "49%",
	title: "PATIENT",
	backgroundColor:"#7BBC31",
	//right: 10,
	left:3,
	color: "white"
});

patientbutton.addEventListener("click",function (e){
	viewpatientform.opacity = 0.8;
	viewdoctorform.opacity = 0.0;
	
});

var doctorbutton = Ti.UI.createButton ({
	height: Ti.UI.FILL,
	width: "49%",
	title: "DOCTOR",
	backgroundColor:"#7BBC31",
	color: "white"
});

doctorbutton.addEventListener("click",function (e){
	viewpatientform.opacity = 0.0;
	viewdoctorform.opacity = 0.8;
	
});

var viewlinehorz = Ti.UI.createView({
	height: Ti.UI.FILL,
	width: 1,
	backgroundColor: "black",
});

var viewselection = Ti.UI.createView({
	height: 30,
	width: Ti.UI.SIZE,
	top: 10,
	layout: "horizontal"
});

viewselection.add(patientbutton,viewlinehorz,doctorbutton);

/*Patient Form*/
var textfieldname1 = Ti.UI.createTextField({
	height: 30,
	width: Ti.UI.FILL,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "Name"
});

var textfieldemail = Ti.UI.createTextField({
	height: 30,
	width: Ti.UI.FILL,
	top: 10,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "Email Address: eg. abc@gmail.com"
});

var textfieldpass1 = Ti.UI.createTextField({
	height: 30,
	width: Ti.UI.FILL,
	top: 10,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	passwordMask:true,
	hintText: "Enter Password"
});

var textfieldconfpass = Ti.UI.createTextField({
	height: 30,
	width: Ti.UI.FILL,
	top: 10,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	passwordMask:true,
	hintText: "Confirm Password"
});

var viewpatientform = Ti.UI.createView({
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	left:10,
	right: 10,
	top: 10,
	layout: "vertical"
});

viewpatientform.add(textfieldname1,textfieldemail,textfieldpass1,textfieldconfpass);

/*Doctor Form*/

var textfieldname2 = Ti.UI.createTextField({
	height: 30,
	width: Ti.UI.FILL,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "Name"
});

var textfieldemail2 = Ti.UI.createTextField({
	height: 30,
	width: Ti.UI.FILL,
	top: 10,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "Email Address: eg. abc@gmail.com"
});

var textfieldpass2 = Ti.UI.createTextField({
	height: 30,
	width: Ti.UI.FILL,
	top: 10,
	passwordMask:true,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "Enter Password"
});

var textfieldconfpass2 = Ti.UI.createTextField({
	height: 30,
	width: Ti.UI.FILL,
	passwordMask:true,
	top: 10,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "Confirm Password"
});

var spclbutton = Ti.UI.createTextField ({
	height: 30,
	top: 10,
	width: Ti.UI.FILL,
	//enabled: false,
	hintText: "Speciality",
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
});

spclbutton.addEventListener("click",function (e){
 var dialog = Ti.UI.createAlertDialog({
 	title: 'Choose Your Speciality',
    buttonNames: spe,
  });
  
  dialog.addEventListener('click', function(e){
  	var speText = spe[e.index];
    //Ti.API.info('e.index: ' + e.index);
    console.log(speText);
    spclbutton.value = speText;
  });
 	dialog.show();	
});


var viewdoctorform = Ti.UI.createView({
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	left:10,
	right: 10,
	top: 10,
	layout: "vertical",
	opacity: 0
});

viewdoctorform.add(textfieldname2,textfieldemail2,textfieldpass2,textfieldconfpass2,spclbutton);


/*Sign Up and Cancel*/

var signupbutton = Ti.UI.createButton ({
	height: 30,
	width: "48%",
	title: "SIGN UP",
	backgroundColor:"#7BBC31",
	color: "white"
});

var signupcancel = Ti.UI.createButton ({
	height: 30,
	width: "48%",
	title: "CANCEL",
	right: 10,
	backgroundColor:"#7BBC31",
	color: "white"
	
});

signupcancel.addEventListener("click",function (e){
	$.signupview.opacity = 0.0;
});

var view1 = Ti.UI.createView({
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	left:10,
	right: 10,
	top: 10,
	bottom: 10,
	layout: "horizontal"
});

/*For Patient and Doctor Form*/

var viewpntdoc = Ti.UI.createView({
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	left:10,
	right: 10,
	top: 10,
	bottom: 10,
});

viewpntdoc.add(viewpatientform,viewdoctorform);

view1.add(signupcancel,signupbutton);
$.signupview.add(labelname1,viewselection,viewpntdoc,view1);
//$.signupview.add(labelname1,viewselection,textfieldname1,textfieldemail,textfieldpass1,textfieldconfpass,view1);

/* End - Sign Up Part */


function init(){ 
	Alloy.Globals.navWin = $.Win;
	 $.win.add(loading.getView());
}

function doLogin(){
	$.loginview.opacity = 0.8;
	$.signupview.opacity= 0.0;
}

function doSignUp(){
	$.signupview.opacity= 0.8;
	$.loginview.opacity = 0.0;
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
function onload(responseText){
	var result = JSON.parse(responseText); 
	if(result.status == "error"){
		Common.createAlert("Error", result.data[0]);
		loading.finish();
		return false;
	}else{
		loading.finish();
		var userModel = Alloy.createCollection('user'); 
		var arr = result.data;
		userModel.saveArray(arr);
   		Ti.App.Properties.setString('user_id', arr.id);
   		Ti.App.Properties.setString('fullname', arr.fullname);
   		Ti.App.Properties.setString('email', arr.email);
   		Ti.App.Properties.setString('mobile', arr.mobile);
   		Ti.App.Properties.setString('img_path', arr.img_path);
   		Ti.App.Properties.setString('thumb_path', arr.thumb_path);
   		Ti.App.Properties.setString('point', arr.point);
   		
		$.win.close();
		Ti.App.fireEvent("home:refresh");
		Alloy.Globals.Navigator.navGroup.open({navBarHidden: true, fullscreen: false});
	}
}

function do_login(){
	
	var username     = textfieldname.value;
	var password	 = textfieldpass.value;
	if(username ==""){
		Common.createAlert("Fail","Please fill in your username");
		return false;
	}
	if(password =="" ){
		Common.createAlert("Fail","Please fill in your password");
		return false;
	}
	var device_token = Ti.App.Properties.getString('deviceToken');
	console.log(device_token);
	var params = { 
	 	device_token: device_token,
		username: username,  
		password: password
	};
	//API.doLogin(params, $); 
	loading.start();
	API.callByPost({url: "doLoginUrl", params: params}, onload);
}

