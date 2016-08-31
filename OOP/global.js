
function Field(fieldName, fieldDocID, optionsToAdd) {
	this.fieldName = fieldName;
	this.fieldDocID = document.getElementById(fieldDocID);
	this.optionsToAdd = optionsToAdd;
	this.addOptions = function(){
		this.optionsToAdd.forEach(function(opt){
			this.option = document.createElement("option");
			this.option.text = opt;
			this.fieldDocID.add(this.option);
		});
	}
}


// Field.prototype = {
// 	constructor: Field,
// 	addOptions:function(optionsToAdd, fieldDocID){
// 		this.fieldDocID = document.getElementById(fieldDocID);
// 		for (i = 0; i < optionsToAdd.length; i++) {
// 			this.option = document.createElement("option");
// 			this.option.text = optionsToAdd[i];
// 			this.fieldDocID.add(this.option);
// 		}
// 	}
// }

window.addEventListener("load", function(){
	// var quoteField = document.getElementById('quote');
	var quoteObject = new Field("quote", "quote", ["Yes: Blank", "Yes: Prefilled (All Quotes)", "Yes: Prefilled (1/2 Verses)", "No: 3 Blank Lines"]);
	// quoteObject.addOptions(["Yes: Blank", "Yes: Prefilled (All Quotes)", "Yes: Prefilled (1/2 Verses)", "No: 3 Blank Lines"], "quote");
	// quoteObject = new Choice(["Yes: Blank", "Yes: Prefilled (All Quotes)", "Yes: Prefilled (1/2 Verses)", "No: 3 Blank Lines"], "quote", ["images/hughes/quote/yesBlank.png", "images/hughes/quote/yesAllQuotes.png", "images/hughes/quote/yesHalf.png", "images/hughes/quote/noLines.png"], "dashQuote", 0);
	debugger;

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

