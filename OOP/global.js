var hughesQuote = {
	"Yes: Blank": "images/hughes/quote/yesBlank.png",
	"Yes: Quote": "images/hughes/quote/yesAllQuotes.png",
	"Whatever": "images/hughes/dailyHeaderLeft/bullets.png",
	"Ditto": "images/hughes/dailyHeaderLeft/checkboxes.png",
}

function Field(fieldName, fieldDocID, imageDocID) {
	this.fieldName = fieldName;
	this.fieldDocID = document.getElementById(fieldDocID);
	this.fieldOptions = [];
	this.imageDocID = document.getElementById(imageDocID);
	this.imageOptions = [];
}
function getArray(array) {
	var valueTextArray = {};
	for (var i = 0; i < array.length; i++) {
		valueTextArray[array[i].value] = array[i].text.toString();
	}
	return valueTextArray;
}

Field.prototype = {
	constructor: Field,
	addOptions:function(optionsToAdd){	
		this.fieldOptions = (optionsToAdd).keys();
	}
}
window.addEventListener("load", function(){
	var fieldOptions = document.getElementById("consistentID").querySelectorAll("option");
	var valueTextArray = getArray(fieldOptions);
	var field = document.getElementById("consistentID").children[2];	
	var quoteImg = document.getElementById('dashQuote');
	field.addEventListener("change", function(){	
		var i = field.options[field.selectedIndex].value;
		var j = valueTextArray[i];
		dashQuote.src = hughesQuote[j];
	});
});

