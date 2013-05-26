// Project 4
// Willard Roseberry
// Libarys



        var myphoneString = function (phoneString){
	
        var splitFrontPhoneString;
        var splitEndPhoneString;
        var lengthPhoneString;
        splitFrontPhoneString = phoneString.charAt(3);
        lengthPhoneString = phoneString.length;
        splitEndPhoneString = phoneString.lastIndexOf("-");
   
        if (splitFrontPhoneString === "-" && splitEndPhoneString === 7 && lengthPhoneString === 12 ) {
         
        var bool = new Boolean(1);
        var myphoneString = bool.toString();
       
      }
    
      else
    
       var bool = new Boolean(0);
       var myPhoneString = bool.toString();
       console.log(myPhoneString);
     
  
    
      }
	 
  

       var workingPhoneString = myphoneString("480-392-3434");
	 
	
  
    
    
    
    
    

