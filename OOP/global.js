
function Field(fieldName) {
	this.fieldName = fieldName;
	this.options = [];
	this.images = [];
	// this.addOptions = function(this.optionsArray, options)
	// this.addOptions = function(options, fieldDocID){
	// 	var fieldDocID = document.getElementById(fieldDocID);
	// 	for (i = 0; i < this.options.length; i++){
	// 		var option = document.createElement("option");
	// 		option.text = i;
	// 		fieldDocId.add(option);
		}
	// }
	// this.images = [].push(images);
	// this.imgDocID = document.getElementById(imgDocID);
	// this.defaultIndex = defaultIndex;
// }
Field.prototype = {
	constructor: Field,
	addOptions:function(optionsToAdd, fieldDocID){
		this.fieldDocID = document.getElementById(fieldDocID);
		for (i = 0; i < optionsToAdd.length; i++) {
			this.options.push(optionsToAdd[i]);
			this.option = document.createElement("option");
			this.option.text = optionsToAdd.key[i];
			this.fieldDocID.add(this.option);
		}
	}
}

window.addEventListener("load", function(){
	// var quoteField = document.getElementById('quote');
	var quoteObject = new Field("quote");
	quoteObject.addOptions([Blue: "Yes: Blank", Red: "Yes: Prefilled (All Quotes)", Purple: "Yes: Prefilled (1/2 Verses)", Orange: "No: 3 Blank Lines"], "quote");
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

