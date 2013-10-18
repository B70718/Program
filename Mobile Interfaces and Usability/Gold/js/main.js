var parseCreatureForm = function(data){
	// uses form data here;
	console.log(data);
	};




$(document).ready(function(){
	
	var rcform = $('#recordmakeCreature');
	
	rcform.validate( {
		invalidHandler: function(form, validator) {},
		submitHandler: function() {
			var data = rcform.serializeArray();
			parseCreatureForm(data);
			}
		});
	
});
 $('#index_demo_Gold.html').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#index_demo_Gold.html').on('pageinit', function(){

		var rcform = $('#recordmakeCreature');
		    myCreatureErrorLink = $('#mycreatureErrorslink')
		    mcform.validate({
			invalidHandler: function(form, validator) {
				myCreatureErrorLink.click();
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	
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
	 	item.groups        =["How often do you eat here?", gu('groups').value];
		item.iq            =["IQ", gu('iq').value];
		item.fname         =["First Name", gu('fname').value];
		item.lname         =["Last Name", gu('lname').value];
		item.email         =["Email:", gu('email').value];
		item.notes         =["Notes:", gu('notes').value];
		item.favorite      =["Is This your faviate Creature shop?", favoriteCreature];
		item.gender        =["Gender:", genderValue];
	
		// Save information into local storage
		// Use stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		
		
		// save to local storage
		localStorage.setItem(id, JSON.stringify(item));
		alert("Your faviate Creature is saved!");
	
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){
		if(localStorage.length === 0){
			alert("There is no data to clear.")
		}else{
			localStorage.clear();
			alert("All the pizza favorates have been cleared");
			window.location.reload();
			return false;	
		}
	

};


