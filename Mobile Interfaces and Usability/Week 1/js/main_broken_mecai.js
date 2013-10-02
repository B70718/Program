// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){

	//getElementById Function
	function $(x){
	var theElement = document.getElementById(x);
	return theElement;
	}
        
        //Create select field element and populate with options.
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
    
    function storeData() {
        var id         = Math.floor(Math.random()*100000001);
        console.log("I am in the storeData funtion");
        //Gather up all our form field values and store in an object.
        //Object properties contain array with the form label and input value.
        var item              ={};
            item.groups       =["Group", $('groups').value];
            item.firstName    =["First Name:", $('firstName').value];
            item.lastName     =["Last Name:", $('lastName').value];
            item.email        =["Email:", $('email').value]; 
            item.favorite     =["favorite;", favoriteValue];
            item.date        =["date:", $('date').value];
            item.note        =["note:", $('note').value];
            item.amount       =["amount:", $('amount').value];
            item.iq           = ["IQ", $('iq').value];
        //Save data to Local Storage: Use stringify to convert our object to a sting.
        localStorage.setItem(id, JSON.stringify(item));
        alert("Your Creature information has been saved!");
    }
	
        
	//Variable defaults
	var creaturePictures = ["--Pick a creature--", "Flutterbie", "Quwertyuiop", "Soannev", "Jigdog", "Diph", "Favi", "Lolt", "Nimaeht"];
	makeCreatures();	
	//Set Link & Submit Click Events
   /*     var displayLink = $('displayLink');
        displayLink.addEventListener("click", getData);
        var clearLink = $('clear');
        clearLink.addEventListener("click", clearLocal);
    */    console.log("I am going to this stop before storeData");
       var save = $('submit');
        save.addEventListener("click", storeData);
        console.log("This is after the store data funtion");
	
});