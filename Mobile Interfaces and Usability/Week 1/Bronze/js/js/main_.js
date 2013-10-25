 $('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#index_demo_Gold.html').on('pageinit', function(){

		var mcform = $('#creatureErrors');
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
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


