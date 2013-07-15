// JavaScript Document/*
	function fastPizza(){
		var formTag = document.getElementsByTagName("form"),
		selectLi = $('bestpizza'),
		makeSelect = document.createElement('select');
		makeSelect.setAttribute("id", "groups");
	for (var i = 0, j= bestPizza.length; i<j; i++){
		var makeOption = document.createElement('option');
		var optText = bestPizza[i];
		makeOption.setAttribute("value", optText);
		makeSelect.appendChild(makeOption);
	    
	}
		
	selectLi.appendChild(makeSelect);
	
	}
var bestPizza = ["--Faviorate-Pizza--", "Cheese-Lovers", "Peperoni-Lovers", "Meat-Lovers", "Supreme-Meat-Lovers-Speicial"];
fastPizza();

	// Display link
        var displayLink = $('DisplayData'); 
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);
*/

