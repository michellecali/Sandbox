
var dictionary = {
	"foo1": "images/hughes/quote/yesBlank.png",
	"foo2": "images/hughes/quote/yesAllQuotes.png",
	"foo3": "images/hughes/dailyHeaderLeft/bullets.png",
	"foo4": "images/hughes/dailyHeaderLeft/checkboxes.png",
}

function Field(fieldName, fieldDocID, imageDocID) {
	this.fieldName = fieldName;
	this.fieldDocID = document.getElementById(fieldDocID);
	this.fieldOptions = [];
	this.imageDocID = document.getElementById(imageDocID);
	this.imageOptions = [];
}

Field.prototype = {
	constructor: Field,
	addOptions:function(optionsToAdd){	
		this.fieldOptions = (optionsToAdd).keys();
	}
	// setDefault:function(defaultIndex){		
	// 	this.imageDocID.src = this.fieldOptions[defaultIndex];
	// 	this.fieldDocID.options.selectedIndex = defaultIndex;
	// 	}
}

window.addEventListener("load", function(){
	// var quoteField = document.getElementById('quote');
	// var quoteObject = new Field("quote", "quote", "dashQuote");
	// quoteObject.addOptions({
	// 	"Yes: Blank": "images/hughes/quote/yesBlank.png",
	// 	"Yes: Prefilled (All Quotes)": "images/hughes/quote/yesAllQuotes.png",
	// 	"Yes: Prefilled (1/2 Verses)": "images/hughes/quote/yesHalf.png",
	// 	"No: 3 Blank Lines": "images/hughes/quote/noLines.png"
	// });
	var fieldOptions = document.getElementById("consistentID").querySelectorAll("option");
	function getArray(array) {
		var textValueArray = {};
		for (var i = 0; i < array.length; i++) {
			textValueArray[array[i].text] = array[i].value;
			// valuesArray.push(array[i].value);
		}
		return textValueArray;
	};
	var valuesOnly = getArray(fieldOptions);
	debugger;

	var field = document.getElementById("consistentID").children[2];
	// quoteObject.setDefault("Yes: Blank");

	
	var quoteImg = document.getElementById('dashQuote');
	field.addEventListener("change", function(){		
		var i = field.options[field.selectedIndex].value;
		dashQuote.src = dictionary[i];
	});
});

