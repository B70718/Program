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
	localStorage.setItem("test", "hello");
	alert(localStorage.length);
}
// Variables
var favioratePizza = ["--How often?--", "Daily", "Weekly", "Monthly", "Ocationaly", "Never", "All the time"];
makePizza();
});

