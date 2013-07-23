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
  };

}

function toggleMyControls(n) {
	switch(n) {
		case "on":
		
		$('pizzaForm').style.display = "none";
		$('clear').style.display = "inline";
		$('toggle').style.display = "inline";
		$('displayData').style.display = "none";
		
		break;
	        case "off":
		$('pizzaForm').style.display = "block";
		$('clear').style.display = "inline";
		$('toggle').style.display = "block";
		$('displayData').style.display = "block";
		 
		break;
	     default:
		return false;
	}
}


	function storeMyData() {
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
		alert("Your faviate pizza is saved!");
	}
	
	function getMyData() {
		toggleMyControls("on");
		//Write information for the Local Storeage to the brower.
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		// document.body is writeing the user contents to the screen
		// for the user to see.
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for (var i = 0, len =localStorage.length; i<len;i++) {
			var makeli = document.createElement('li');
			var createLinks = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// make from string to an object using json
			var obj = JSON.parse(value);
		        var makeSubLink = document.createElement('ul');
			makeli.appendChild(makeSubLink);
			for (var n in obj) {
				var makeSubli = document.createElement('li');
				makeSubLink.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
				makeSubLink.appendChild(createLinks);
		
			}
			makeEditAndDeleteLinks(localStorage.key(i), createLinks); // create our edit and delete links
		}
	}
	// Link the seperate item to be able to edit and delete seperate for each stored item on the display
	function makeEditAndDeleteLinks(key, createLinks){
	// Create the edit items and delet
	var editSingleItem = document.createElement('a');
	editSingleItem.href = "#";
	editSingleItem.key = key;
	var editMyText = "Edit faviorate pizza";
	editSingleItem.addEventListener("click", editMyPizzaItem);
	editSingleItem.innerHTML= editMyText;
	createLinks.appendChild(editSingleItem);
	
	//add a line break inbetween the dynamic edit and delete links
	var breakMyTag = document.createElement('br');
	createLinks.appendChild(breakMyTag);
	
	
	
	
	  //add a delete a single item link
	  var  deleteMyLink = document.createElement('a');
	  deleteMyLink.href = "#";
	  deleteMyLink.key = key;
	  var deleteMyText = "Delete my faviorate Pizza";
	  // deleteMyLink.addEventListener("click"), deleteMyFavioratePizza);
	  deleteMyLink.innerHTML = deleteMyText;
	  createLinks.appendChild(deleteMyLink); 
	}
	
	function editMyPizzaItem() {
	    // Get information from the faviorate Pizza Storage
	    var value = localStorage.getItem(this.key);
	    var item = JSON.parse(value);
	    
	   //Show the form
	    toggleMyControls("off");
	    
	    //populate the form field with the current localStorage values.
	    $('groups').value = item.group[1];
	    $('fname').value = item.fname[1];
	    $('lname').value = item.lname[1];
	    $('email').value = item.email[1];
	    var checkbox = document.forms[0].Pizzalovers;
	    for (var i=0; i<checkbox.length; i++){
		if (checkbox[i].value == "Pizzalovers" && item.Pizzalovers == "Peperoni"){
                   checkbox[i].setAttribute("checked", "checked");
		}else if (checkbox[i].value == "pizzalovers" && item.Pizzalovers[1] == "pizzalovers") {
			checkbox[i].setAttribute("checked", "checked");
		}
	      }
	      if (item.favorite[1] == "Yes") {
		
		$('Pizzalovers').setAttribute("checked", "checked");
	      }
	      
	 }
	
	
	function clearLocalStorage() {
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
	makePizza();

	//Set link & Clink Events
   
	var triggerMyControls =$('toggle');
	triggerMyControls.addEventListener("click", toggleMyControls);	
	
	var displayLink =$('displayData');
	displayLink.addEventListener("click", getMyData);
	
	
	var clearData =$('clear');
	//var changeData = $()
	clear.addEventListener("click", clearLocalStorage);
	
	 var saveData =$('submit');
	 saveData.addEventListener("click", storeMyData);
	

});

