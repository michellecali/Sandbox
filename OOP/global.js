
var dictionary = {
	"893cnur89734": "images/hughes/quote/yesBlank.png"
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
		for (var i = 0; i < optionsToAdd.length; i++) {
			this.fieldOptions.push(optionsToAdd[i]);
		}
		var fromArray = this.fieldOptions.keys();
	}
	// setDefault:function(defaultIndex){		
	// 	this.imageDocID.src = this.fieldOptions[defaultIndex];
	// 	this.fieldDocID.options.selectedIndex = defaultIndex;
	// 	}
}

window.addEventListener("load", function(){
	// var quoteField = document.getElementById('quote');
	var quoteObject = new Field("quote", "quote", "dashQuote");
	quoteObject.addOptions({
		"Yes: Blank": "images/hughes/quote/yesBlank.png",
		"Yes: Prefilled (All Quotes)": "images/hughes/quote/yesAllQuotes.png",
		"Yes: Prefilled (1/2 Verses)": "images/hughes/quote/yesHalf.png",
		"No: 3 Blank Lines": "images/hughes/quote/noLines.png"
	});
debugger;
	
	// quoteObject.setDefault("Yes: Blank");

	
	var quoteImg = document.getElementById('dashQuote');
	quote.addEventListener("change", function(){		
		var i = quote.options[quote.selectedIndex].text;
		if (i === "Yes: Blank") {
			dashQuote.src = "images/hughes/quote/yesBlank.png";
		} else if (i === "Yes: Prefilled (All Quotes)") {
			dashQuote.src = "images/hughes/quote/yesAllQuotes.png";
		} else if (i === "YesHalf") {
			dashQuote.src = "images/hughes/quote/yesHalf.png";
		} else if (i === "NoLines") {
			dashQuote.src = "images/hughes/quote/noLines.png";
		}
	});
});

