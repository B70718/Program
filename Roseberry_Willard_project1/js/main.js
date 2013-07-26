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


	function storeMyData(key){
		if (!key) {
		// if there is no key, this mean this is a brand new item and requires a new key
		
		var id = Math.floor(Math.random()*1000000001);
		
		}else{
		// Set the id to the existing key we're editing so that it will save over the data
		// the key is the same key that's been passed along from the editSubmit event handler
		//to the validate function, and then passed here, into the storedata function
		id = key;
		}
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
	// Create the edit items and delete
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
	 deleteMyLink.addEventListener("click", deleteMyFavioratePizza);
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
	    // creating an array to store the boxes the customer has checked with customersCheckedBoxes customersCheckedBoxes
	    var customersCheckedBoxes = [ ];
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
	     // remove the initial listener from the input save contact.
	     saveData.removeEventListener("click", storeMyData);
	     //Change Sumbit Button Value to Edit Button
	    $('submit').value = "Edit Storage";
	     var editSubmit = $('submit');
	     //Save the key value established in this funtion as a property of the edit submit event
	     // so we can use that value when we save the data we edited.
	     editSubmit.addEventListener("click", InformationIsCorrect);
	     editSubmit.key = this.key;
	 }
	 
	 function deleteMyFavioratePizza(){
	  var ask = confirm("Are you sure you want to delete this item?");
	  if (ask){
		localStorage.removeItem(this.key);
		alert("Contact was deleted");
		window.location.reload();
	  }else{
		alert("Contact was Not deleted.")
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
	
	function InformationIsCorrect(eventData) {
		// Define elements we want to check
		var getMyFirstname = $('fname');
		var getMyLastname = $('lname');
		var getMyEmail = $('email');
		
		// Reset Error Messages
		errorMessage.innerHTML = "";
		getMyFirstname.style.border = "2px solid blue";
		getMyLastname.style.border = "2px solid blue";
		getMyEmail.style.border = "2px solid blue";
		
			// Validating first name
		var mymessageAry = [ ];
		console.log("mymesaageAry" + mymessageAry + " in first name ");
		console.log("getMyFirstname" + getMyFirstname + " in first name ");
		//First name Validation
		if (getMyFirstname.value === ""){
			var firstNameErrorMessage = "Please enter you first name in the field below";
			getMyFirstname.style.border = "2px solid red";
			mymessageAry.push(firstNameErrorMessage);
		}
		
		// Validating last name
		var mymessageAry = [ ];
		console.log("mymesaageAry" + mymessageAry + " in last name ");
		//Last name Validation
		if (getMyLastname.value === ""){
			var lastNameErrorMessage = "Please enter you last name";
			getMyLastname.style.border = "2px solid red";
			mymessageAry.push(lastNameErrorMessage);	
		}
		// Validating email
		var regularex = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
		if (!(regularex.exec(getMyEmail.value))){
			var myEmailErrorMessage = "Please enter a valid email address.";
			getMyEmail.style.border = "2px solid red";
			mymessageAry.push(myEmailErrorMessage);
		}
		
	
	//If there is an error display them on the screen.
	if (mymessageAry.length >= 1){
		for(var i=0, j=mymessageAry.length; i < j; i++) {
		  var myTxt = document.createElement('li');
		  myTxt.innerHTML = mymessageAry[i];
		 errorMessage.appendChild(myTxt);
		  
		}
		eventData.preventDefault();
	    return false;
	
	}else{
             //If all the fields are correcet then save the data
	     storeMyData(this.key);
	     // send the key value with came from the edit data funtion.
	    
	  }
	
     }
	
	// Variables
	var     favioratePizza = ["--How often?--", "Daily", "Weekly", "Monthly", "Ocationaly", "Never", "All the time"],
        	favoritepizza = "No"
	        errorMessage = $('errors');
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
	 saveData.addEventListener("click", InformationIsCorrect);
	

});
