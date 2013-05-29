// Project 4
// Willard Roseberry
// Libarys
 
 // Begining of Problem number 1 //  
// Checks for a valid phone number 123-456-7890

        var myPhoneString = function (phoneString){
	
        var splitFrontPhoneString;
        var splitEndPhoneString;
        var lengthPhoneString;
        splitFrontPhoneString = phoneString.charAt(3);
        lengthPhoneString = phoneString.length;
        splitEndPhoneString = phoneString.lastIndexOf("-");
   
        if (splitFrontPhoneString === "-" && splitEndPhoneString === 7 && lengthPhoneString === 12 ) {
         
        var bool = new Boolean(1);
        var myPhoneString = bool.toString();
       
      }
    
       else
    
        var booll = new Boolean(0);
        var myPhoneString = bool.toString();
        console.log(myPhoneString);
     
       }     //End of Problem number 1./////////////////////////////
       // Beginning of Problem number 2.
        
        // Checks for a valid Email String funtion
         
        var myEmailString = function (emailString){
            
            var splitFrontEmailString;
            var splitEndEmailString;
            splitFrontEmailString = emailString.indexOf("@");
            splitEndEmailString = emailString.lastIndexOf("mail.com");
    
        if (splitFrontEmailString  >= 1 && splitEndEmailString >= 1) {
            
            var bool = new Boolean(1);
        var emailString = bool.toString();
          
        }
        
         else
         
        var bool = new Boolean(0);
        var emailString = bool.toString();
        console.log(emailString);
       
        }
       // End of Problem number 2
	   // Start of Problem number 3
       // Is the string a URL (Does it start with http:// or https://)?
       
       
        var myUrl = function (UrlString){
            
          
            urlFrontString = UrlString.lastIndexOf("http://");
            urlFrontStringTwo = UrlString.lastIndexOf("https://");
     
            if (urlFrontString === 0 || urlFrontStringTwo === 0){
        
            var bool = new Boolean(1);
            var UrlString = bool.toString();
            console.log(UrlString);
        }
            
        else
        {    
            var bool = new Boolean(0);
            var UrlString = bool.toString();
            console.log(UrlString);
        }
        
        }
        
        // End of Problem number 3
		// Start of Problem number 4
		
       // First letter on each words gets a capital letter. 
	   // Seting local variables               
             var myCap = function (capForMe){
             var name = "willard roseberry is going to the park";
             var capForMe = " ";
             var wordArray = name.split(",");

		      for(var i=0;i<wordArray.length;i++)
        {
			   capForMe += wordArray[i].replace("willard roseberry is going to the park","Willard Roseberry Is Going To The Park")  
        }
               console.log(capForMe);
                
        }
        // End of Problem number 4
        // Start of Problem number 5
        
            var myStringSeperater = function (ListOfString, seperator, inPlaceOf){
            var firstString = "I, went , to , the, park, and , played, a , game.";
            console.log(firstString);
       
            var n = firstString.replace(/,/g,"/");
            console.log(n);
                
                                     
            return firstString;
            }
            
            myStringSeperater();
            
            
            
            
            
            
            
            
            
            
            
        

        

   








                        
                        
   

          
                
                
         
         


       
        
        
        
        
         //main code
         
         var workingPhoneString = myPhoneString("480-392-3346");

        // Email test   
        myWorkingEmailString = myEmailString;
        myWorkingEmailString("wgrroseberry@gmail.com");
         
       //  myWorking http:// and https://
  
         var myhtmlString = myUrl("https://")
		 
	   // Caps the first letter of the words.
		    myCap();
         
        
    
    
    
    
       
    
    
    
    

