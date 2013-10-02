
// Willard Roseberry
// Visual Frameworks (VFW)
// Mobile Development

// Do not start untill the DOM is ready and runing.
window.addEventListener("DOMContentLoaded", function(){
	
	
	
	 function say(){
		 console.log;
		}
		
		//Find value of selected radio
		function getSelectedRadio(){
			var radios = document.forms(0).gender;
			for(var i=0; i<radios.length; i++){
				if(radios[i].checked){
				genderValue = radios[i].value;
			}
		}
	}
	
	function getCheckedboxValue(){
		if($('fav').checked){
			favoriteValue = $('fav').value;
			}else{
				favoriteValue = "No"
			}
	}
	
	//getElementById Function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	     //Create  first select field element and populate with options.
        function makeCreatures() {
            var formTag = document.getElementsByTagName("form"), // form Tag is an arroy of all the form Tags.
            selectLi = $('selectcreatures'),
            makeselectcreatures = document.createElement('select');
            makeselectcreatures.setAttribute("id", "groups");
        for(var i = 0, j=creaturePictures.length; i<j; i++) {
           var makeOption = document.createElement('option');
           var optText = creaturePictures[i];
           makeOption.setAttribute("value", optText);
           makeOption.innerHTML = optText; 
           makeselectcreatures.appendChild(makeOption);
           
           
        }
        selectLi.appendChild(makeselectcreatures);
    }
	        
	// Make a 2nd select field 
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
if ($('favoritepizza').checked){
	favoritepizza = $('favoritepizza').value;
	
	
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
	 	item.groups        =["How often do you eat here?", $('groups').value];
		item.iq            =["IQ", $('iq').value];
		item.fname         =["First Name", $('fname').value];
		item.lname         =["Last Name", $('lname').value];
		item.email         =["Email:", $('email').value];
		item.notes         =["Notes:", $('notes').value];
		item.favorite      =["Is Willard pizza shop your faviorate place to buy pizza?", favoritepizza];
		item.gender        =["Gender:", genderValue];
	
		// Save information into local storage
		// Use stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		
		
		// save to local storage
		localStorage.setItem(id, JSON.stringify(item));
		alert("Your faviate pizza is saved!");
	}
	
	function getMyData() {
		toggleMyControls("on");
		if (localStorage.length === 0) {
			alert("There is no data in Local Storeage. I have loaded default data.");
			getMyDefaultData();
		} 
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
			console.log("localStorge.length ="+ i +"")
			var makeli = document.createElement('li');
			var createLinks = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// make from string to an object using json
			var obj = JSON.parse(value);
		        var makeSubLink = document.createElement('ul');
			makeli.appendChild(makeSubLink);
			// Makeing a sublist image dynamicly for each catagory of the list
			getMyCustomImage(obj.groups[1],makeSubLink);
			console.log("groups")+ groups[1] + makeSubLink + " makesublink here";
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
	//Get the image for the right category that is being displayed
	function getMyCustomImage(pictureName, makeSubLink) {
		var createLinks = document.createElement('li');
		makeSubLink.appendChild(createLinks);
		var newImg = document.createElement('img');
		var setSrc = newImg.setAttribute("src", "images/"+ pictureName + ".png");
		createLinks.appendChild(newImg);
		
		
		
	}
	
	//seperate add image funtion to seperate the defalt information from the rest of the data
	function getMyNewImage() {
		toggleMyControls("on");
		if (localStorage.length === 0) {
			alert("There is no data in Local Storeage. I have loaded default data.");
			getMyDefaultData();
		} 
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
			console.log("localStorge.length ="+ i +"")
			var makeli = document.createElement('li');
			var createLinks = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// make from string to an object using json
			var obj = JSON.parse(value);
		        var makeSubLink = document.createElement('ul');
			makeli.appendChild(makeSubLink);
			// Makeing a sublist image dynamicly for each catagory of the list
			getMyCustomImage(obj.groups[1],makeSubLink);
			console.log("groups")+ groups[1] + makeSubLink + " makesublink here";
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
	//Get the image for the right category that is being displayed
	function getMyCustomImage(pictureName, makeSubLink) {
		var createLinks = document.createElement('li');
		makeSubLink.appendChild(createLinks);
		var newImg = document.createElement('img');
		var setSrc = newImg.setAttribute("src", "images/"+ pictureName + ".png");
		createLinks.appendChild(newImg);
		
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
	    $('groups').value = item.groups[1];
		$('iq').value = item.groups[1];
	    $('fname').value = item.fname[1];
	    $('lname').value = item.lname[1];
	    $('email').value = item.email[1];
		$('notes').value = item.notes[1];
	    var checkbox = document.forms[0].Pizzalovers;
		var radios = document.forms[0].gender;
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
	 
	 //Default Data for local Store to make testing the program easier to test without haveing
	 //To populate the form with information all the time.
	 function getMyDefaultData() {
		//The file is comeing from out jason file that is loaded by our HTML page.
		for (var n in json) {
	            var id = Math.floor(Math.random()*1000000001);
		    localStorage.setItem(id, JSON.stringify(json[n]));
			//code
		}
		
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
	
	//Find the value of the gender radio button.
	function getSelectedRadio(){
		var radios = document.forms[0].gender;
		for (var i=0; i<radios.length; i++){
			if(radios[i].checked){
				genderValue = radios[i].value;
			}			
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
		//First name Validation
		if (getMyFirstname.value === ""){
			var firstNameErrorMessage = "Please enter you first name in the field below";
			getMyFirstname.style.border = "2px solid red";
			mymessageAry.push(firstNameErrorMessage);
		}
		
		// Validating last name
		var mymessageAry = [ ];
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
	 var     favioratePizza = ["--How often?--", "Daily", "Weekly", "Monthly", "Ocaionaly", "Never", "All_the_time"],
        	genderValue = "No"
	        errorMessage = $('errors');
	 ;
	 makePizza();
         
         //Variable defaults
	var creaturePictures = ["--Pick a creature--", "Flutterbie", "Quwertyuiop", "Soannev", "Jigdog", "Diph", "Favi", "Lolt", "Nimaeht"];
	makeCreatures();	


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
	 
	 //Console.log output
		say("hello is this working with a funtion");
		console.log("is this working the real console.log");
	//Set checkbox & Radio Click Events: Attach event listener to each radio & checkobx.
	var checkbox = $('favoritePizza');
//	checkbox.addEventListener("click", getCheckboxes);
//	radios[i].addEventListener("click", getSelectedRadio);
	var radios = document.forms[0].gender;
	for (var i=0; i<radios.length; i++){
		
	}

});

console.log("outside the event lisener");