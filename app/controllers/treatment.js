var args = arguments[0] || {};

function doBack(){
	$.win.close();
}

var numberkg = Ti.UI.createLabel({
    color: "black",
    text: 0,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    width: 100,
    height: 60,
    borderWidth: 1,
    top:25
});

var kg = Ti.UI.createLabel({
    color: "black",
    text: "kg",
    width: 40,
    height: 40,
    top:75,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
});

var Dec = Ti.UI.createButton({
    title: "-",
    color: "black",
    left: 40,
    borderWidth: 1,
    borderRadius: 24,
    height:50,
    width:50,
    bottom: 60
});

var Inc = Ti.UI.createButton({
    title: "+",
    color: "black",
    right:40,
    borderWidth: 1,
    borderRadius: 24,
     height:50,
    width:50,
    bottom: 60
});

Dec.addEventListener('touchstart', function (e) {
		touched = true;
		if (touched){
			numberkg.text--;
		}
       
});
    
Inc.addEventListener('click', function (e) {
       inc();
});

function dec() {
    var Dec = numberkg.text;
    Dec--;
    numberkg.text = Dec;
}

function inc() {
    var Inc = numberkg.text;
    Inc++;
    numberkg.text = Inc;
}

$.viewcal.add(numberkg,kg,Dec,Inc);
