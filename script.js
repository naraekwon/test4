var coll = document.getElementsByClassName("collapsible");
var i;
var fontSize;
var fontColor;
var fontFamily;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}

function loadTheme() {
	var theme = localStorage.getItem('theme');
	applyChange(theme)
}
window.loadTheme = loadTheme;

function applyChange(classname, tagname) {
	if (tagname) {
		var elements = document.querySelectorAll(tagname);
		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			if (element.className === classname) {
				element.className = '';
			} else {
				element.className = classname;
			}
		}
	} else {
		var element = document.body;
		if (element.className === classname) {
			element.className = '';
		} else {
			element.className = classname;
		}
		localStorage.setItem('theme', element.className);
	}
}

function applyStyle() {
	var elements = document.querySelectorAll('textarea');
	for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			element.className = `${fontSize} ${fontFamily} ${fontColor}`
		}
}

// The themes javaScript
function blackFunction() {
	applyChange("dark-mode");
}
window.blackFunction = blackFunction;

function blackFunctionbackground() {
	applyChange("dark-mode-background");
}
window.blackFunctionbackground = blackFunctionbackground;

function pinkFunction() {
	applyChange("pink-mode");
}
window.pinkFunction = pinkFunction;

function pinkFunctionbackground() {
	applyChange("pink-mode-background");
}
window.pinkFunctionbackground = pinkFunctionbackground;

function autumnFunction() {
	applyChange("autumn-mode");
}
window.autumnFunction = autumnFunction;

function autumnFunctionBackground() {
	applyChange("autumn-mode-background");
}
window.autumnFunctionBackground = autumnFunctionBackground;

function purpleFunction() {
	applyChange("purple-mode");
}
window.purpleFunction = purpleFunction;

function purpleFunctionBackground() {
	applyChange("purple-mode-background");
}
window.purpleFunctionBackground = purpleFunctionBackground;

function warmFunction() {
	applyChange("warm-mode");
}
window.warmFunction = warmFunction;

function warmFunctionBackground() {
	applyChange("warm-mode-background");
}
window.warmFunctionBackground = warmFunctionBackground;

function greenFunction() {
	applyChange("green-mode");
}
window.greenFunction = greenFunction;

function greenFunctionBackground() {
	applyChange("green-mode-background");
}
window.greenFunctionBackground = greenFunctionBackground;

function blueFunction() {
	applyChange("blue-mode");
}
window.blueFunction = blueFunction;

function blueFunctionBackground() {
	applyChange("blue-mode-background");
}
window.blueFunctionBackground = blueFunctionBackground;

// Changing font family in Text area
function Helvetica() {
	fontFamily = 'Helvetica-font-family';
	applyStyle();
}
window.Helvetica = Helvetica;

function Futura() {
	applyChange("Futura-font-family", "textarea");
}
window.Futura = Futura;

function Calibri() {
	applyChange("Calibri-font-family", "textarea");
}
window.Calibri = Calibri;

function Garamond() {
	applyChange("Garamond-font-family", "textarea");
}
window.Garamond = Garamond;

function TimesNewRoman() {
	applyChange("Times-New-Roman-font-family", "textarea");
}
window.TimesNewRoman = TimesNewRoman;

function TradeSecrets() {
	applyChange("Trade-Secrets-font-family", "textarea");
}
window.TradeSecrets = TradeSecrets;

function Arial() {
	applyChange("Arial-font-family", "textarea");
}
window.Arial = Arial;

function Cambria() {
	applyChange("Cambria-font-family", "textarea");
}
window.Cambria = Cambria;

function Verdana() {
	applyChange("Verdana-font-family", "textarea");
}
window.Verdana = Verdana;

function Rockwell() {
	applyChange("Rockwell-font-family", "textarea");
}
window.Rockwell = Rockwell;

function FranklinGothic() {
	applyChange("Franklin-Gothic-font-family", "textarea");
}
window.FranklinGothic = FranklinGothic;

// Changing the font sizes in the textarea
function fiveSize() {
	fontSize = 'five-size';
	applyStyle();
}
window.fiveSize = fiveSize;

function tenSize() {
	applyChange("ten-size", "textarea");
}
window.tenSize = tenSize;

function twelveSize() {
	applyChange("twelve-size", "textarea");
}
window.twelveSize = twelveSize;

function fourteenSize() {
	applyChange("fourteen-size", "textarea");
}
window.fourteenSize = fourteenSize;

function sixteenSize() {
	applyChange("sixteen-size", "textarea");
}
window.sixteenSize = sixteenSize;

function eighteenSize() {
	applyChange("eighteen-size", "textarea");
}
window.eighteenSize = eighteenSize;

function twentySize() {
	applyChange("twenty-size", "textarea");
}
window.twentySize = twentySize;

function twentyfiveSize() {
	applyChange("twenty-five-size", "textarea");
}
window.twentyfiveSize = twentyfiveSize;

function thirtySize() {
	applyChange("thirty-size", "textarea");
}
window.thirtySize = thirtySize;

function fourtySize() {
	applyChange("fourty-size", "textarea");
}
window.fourtySize = fourtySize;

// Changing the font colors in the textarea
function blackColor() {
	fontColor = 'black-color';
	applyStyle();
}
window.blackColor = blackColor;

function whiteColor() {
	applyChange("white-color", "textarea");
}
window.whiteColor = whiteColor;

function greyColor() {
	applyChange("grey-color", "textarea");
}
window.greyColor = greyColor;

function blueColor() {
	applyChange("blue-color", "textarea");
}
window.blueColor = blueColor;

function redColor() {
	applyChange("red-color", "textarea");
}
window.redColor = redColor;

function purpleColor() {
	applyChange("purple-color", "textarea");
}
window.purpleColor = purpleColor;

function pinkColor() {
	applyChange("pink-color", "textarea");
}
window.pinkColor = pinkColor;

function greenColor() {
	applyChange("green-color", "textarea");
}
window.greenColor = greenColor;

var selDiv = "";
		
	document.addEventListener("DOMContentLoaded", init, false);
	
	function init() {
		// document.querySelector('#files').addEventListener('change', handleFileSelect, false);
		selDiv = document.querySelector("#selectedFiles");
	}
		
	function handleFileSelect(e) {
		
		if(!e.target.files || !window.FileReader) return;

		selDiv.innerHTML = "";
		
		var files = e.target.files;
		var filesArr = Array.prototype.slice.call(files);
		filesArr.forEach(function(f) {
			var f = files[i];
			if(!f.type.match("image.*")) {
				return;
			}

			var reader = new FileReader();
			reader.onload = function (e) {
				var html = "<img src=\"" + e.target.result + "\">" + f.name + "<br clear=\"left\"/>";
				selDiv.innerHTML += html;				
			}
			reader.readAsDataURL(f); 
		});
		
	}
	
function save(be) {
	// debugger;
	var parent = be.parentElement;
	var textarea = parent.querySelector("textarea");
	console.log(textarea.value);
}
window.save = save;