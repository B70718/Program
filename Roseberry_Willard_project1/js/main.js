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
	function howOften(){
		var formTag = document.getElementByTagName("form"),
		selectLi = $('often'),
		makeSelect = document.createElement('often');
		makeSelect.setAttribute("groups");
	for(var i = 0, j = contactGroups.lengh; i<j; i++){
		var makeOption = document.createElement('option');
		var optText = contactGroups[i];
		makeOption.setAttribute("value", optText);
		makeOption.innerHTML = optText;
		makeSelect.appendChild(makeOption);
		
	}
	selectLi.appendChild(makeSelect);
}
// Variables
var contactGroups = ["--How often--", "Daily", "Weekly", "Monthly", "Ocationaly"];
howOften();

});