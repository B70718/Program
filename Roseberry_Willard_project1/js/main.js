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

// find value of the checkboxes
function getCheckboxes() {
if ($('Pizzalovers').checked){
	favoritepizza = $('Pizzalovers').value;
	
	
  }else{
	favoritepizza = "No"
  }

}

function toggleControls(n) {
	switch(n) {
		case "on":
	//	$('contactForm').style.display = "none";
		$('clear').style.display = "inline";
	//	$('displayLink').style.display = "none";
		$('addNew').style.display = "inline";
		break;
	        case "off":
		$('contactForm').style.display = "block";
		$('clear').style.display = "inline";
		$('displayLink').style.display = "inline";
		$('addNew').style.display = "none";
		$('items').style.display = "none";
			
		break;
	     default:
		return false;
	}
}


	function storeData() {
		var id   = Math.floor(Math.random()*1000000001);
		// Geting all the form field values
		// Object will contain a array and input values.
		getCheckboxes();
		var item           = {};
	 	item.group         = ["Group", $('groups').value];
		item.fname         =["First Name", $('fname').value];
		item.lname         =["Last Name", $('lname').value];
		item.email         =["Email:", $('email').value];
		item.favorite      =["Is a favorite:", favoritepizza];
		// Save information into local storage
		// Use stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		
		
		// save to local storage
		localStorage.setItem(id, JSON.stringify(item));
		alert("Your favioate pizza is saved!");
	}
	
	function getData() {
		toggleControls("on");
		//Write information for the Local Storeage to the brower.
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		// document.body is writeing the user contents to the screen
		// for the use to see.
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for (var i = 0, len =localStorage.length; i<len;i++) {
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// make from string to an object using json
			var obj = JSON.parse(value);
		        var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for (var n in obj) {
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText; 
		
			}
		}
	}
	
	function clearLocal() {
		if(localStorage.length === 0){
			alert("There is no data to clear.")
		}else{
			localStorage.clear();
			alert("All the pizza favorates have been cleared");
			window.location.reload();
			return false;
		
		}
	}
// Variables
var favioratePizza = ["--How often?--", "Daily", "Weekly", "Monthly", "Ocationaly", "Never", "All the time"],
     favoritepizza = "No"
     ;


//Set link & Clink Events
	var displayLink = $('displayData');
	displayData.addEventListener("click", getData);
	var clearData = $('clear');
	clear.addEventListener("click", clearLocal); 
	var save =$('submit');
	 save.addEventListener("click", storeData);
makePizza();

});

