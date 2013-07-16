// Willard Roseberry
// Visual Frameworks (VFW)
// Mobile Development

// Do not start untill the DOM is ready and runing.
window.addEventListener("DOMContentLoaded", function(){
	
	//getElementById Function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	//Set link & Clink Events
/*	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearData = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save =$('submit');
	save.addEventLister("click", storeData);
	*/
	// Make a select field 
	function makePizza(){
		var formTag = document.getElementsByTagName("form"),
		selectLi = $('select'),
		makeSelect = document.createElement('select');
	 	makeSelect.setAttribute("id", "groups"); 
	    for(var i = 0, j = favioratePizza.length; i<j; i++){
		var makeOption = document.createElement('option');
		var optText = favioratePizza[i];
		makeOption.setAttribute("value", optText);
		makeOption.innerHTML = optText;
		makeSelect.appendChild(makeOption);
		
	}
	selectLi.appendChild(makeSelect);  
}


	function storeData() {
		var id   = Math.floor(Math.random()*1000000001);
		// Geting all the form field values
		// Object will contain a array and input values.
		var item      = {};
		item.group    = ["Group", $('groups').value];
		item.fname    =["First Name", $('fname').value];
		item.lname    =["Last Name", $('lname').value];
		item.email    =["Email:", $('email').value];
		// Save information into local storage
		// Use stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Your Faviorate Pissa is in the Database");
		
	localStorage.setItem("test", "hello");
	alert(localStorage.length);
}
// Variables
var favioratePizza = ["--How often?--", "Daily", "Weekly", "Monthly", "Ocationaly", "Never", "All the time"];
makePizza();
});

