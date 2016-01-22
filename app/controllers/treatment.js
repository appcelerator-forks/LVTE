var args = arguments[0] || {};
//var myVar;
//var scrollView;
var numberkg;
//var defaultkg = 18;
//var kgDiff = 1;
//var diff;
//var oriwidth;
//var newwidth;

function doBack(){
	$.win.close();
}

function render_scrollview(){
	/* scrollView = $.UI.create("ScrollView",{
	  layout: 'horizontal',
	  height: 60,
	  width: Ti.UI.FILL,
	  top:45,
	  zIndex:9
	});*/
	
	//for (i=0; i<=100; i++){
			
		var viewlabel = $.UI.create("View",{
			width:Ti.UI.SIZE,
			height:Ti.UI.SIZE,
			//backgroundColor: "black",
			top:50,
			//backgroundImage: "/images/meter_bg.png"
		});
		
		 numberkg = $.UI.create("Label", {
		    color: "red",
		    text: 20,
		    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		    classes: ['h2'],
		    zIndex: 11,
		    
		});
		
		viewlabel.add(numberkg);
		//scrollView.add(viewlabel);
		$.viewcal.add(viewlabel);
	}
	//$.viewcal.add(scrollView);
	
	//console.log((defaultkg * diff));
//}

function render_scale_front(){
	var viewimage = $.UI.create("ImageView",{
		width:Ti.UI.FILL,
		height:Ti.UI.FILL,
		top:10,
		image:"/images/leo-vte-scale-FRONT.png",
		zIndex: 10
	});
	
	viewimage.addEventListener('swipe',function (e){
		
		//left = inc();
		if (e.direction == "left" ){
			inc();
		}else {
			dec();
		}
		
	});
	
	var Dec = $.UI.create("View",{
	   	bottom: 30,
	    left: 25,
	    //borderWidth: 1,
	    //borderRadius: 24,
	    height:60,
	    width:60,
	    //bottom: 30,
	    zIndex: 11,
	    //image: "/images/neg-button.png",
	    backgroundImage: "/images/Button_left.png"
	});
	
	var Inc = $.UI.create("Button",{
	    //title: "+",
	    //color: "black",
	    bottom: 30,
	    right:25,
	    //borderWidth: 1,
	    //borderRadius: 24,
	     height:60,
	    width:60,
	    //bottom: 60,
	    zIndex: 12,
	    backgroundImage: "/images/button_right.png"
	});
	/*Decrease Part*/
	Dec.addEventListener('touchstart', function () {
			myVar = setInterval(dec,100);
			dec();
	});
	
	Dec.addEventListener('touchend', function () {	
			clearInterval(myVar);	 
	});
	
	/*Increase Part*/
	Inc.addEventListener('touchstart', function (e) {
	       myVar = setInterval(inc,100);
	       inc();
	});
	
	Inc.addEventListener('touchend', function (e) {
	       clearInterval(myVar);
	});
	$.viewcal.add(viewimage);
	$.viewcal.add(Dec);
	$.viewcal.add(Inc);
}

function init(){
	//getwidth();
	render_scrollview();
	//defaultplace();
	render_scale_front();
	//Ti.API.info('Ti.Platform.displayCaps.platformWidth: ' + Ti.Platform.displayCaps.platformWidth);
}

function dec() {
    //var Dec = numberkg.text;
    //Dec--;
    if (numberkg.text >= 15){
    numberkg.text--;}
    /*if (defaultkg >= 18){
    defaultkg--;
    scrollView.scrollTo((defaultkg*diff), 0 );}
    console.log((defaultkg+kgDiff)+"kg => " +(defaultkg*diff));*/
}

function inc() {
    //var Inc = numberkg.text;
    //Inc++;
    numberkg.text++;
    /*if (defaultkg <= 97){
    defaultkg++;
    scrollView.scrollTo((defaultkg*diff), 0 );}
    console.log((defaultkg+kgDiff)+"kg => " +(defaultkg*diff));*/
}

/*function defaultplace(){
	setTimeout(function(){
		scrollView.scrollTo((defaultkg * diff),0);
	},1000);	
}*/

/*function getwidth(){
	oriwidth = Ti.Platform.displayCaps.platformWidth;
	newwidth = oriwidth / 2;
	diff = newwidth;
	console.log(newwidth);
	
}*/

init();