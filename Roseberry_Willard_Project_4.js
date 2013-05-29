

/* Willard Roseberry
 * SDI 1304
 * Project 4
 * Library of Functions
 */
 
 var myLibrary = function(){
 
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
        return myPhoneString;
     
       }     //End of Problem number 1./////////////////////////////
       // Beginning of Problem number 2.
        
        // Checks for a valid Email String funtion
         
        var myWorkingEmailString  = function (emailString){
            
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
        return emailString;
       
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
            return UrlString;
        }
            
        else
        {    
            var bool = new Boolean(0);
            var UrlString = bool.toString();
           
        }
        
        }
        
        // End of Problem number 3
	// Start of Problem number 4	
       // First letter on each words gets a capital letter. 
      // Seting local variables               
             var myCap = function (capForMe){
             var capForMe = [];
             var wordArray = name.split(" ");
		      for(var i = 0; i < wordArray.length; i++){
			   var capLetter = wordArray[i].charAt(0).toUpperCase();
                           capForMe.push(capLetter + wordArray[i].slice(1));
        };                                          
          newString = capForMe.join(" ");
          console.log(newString);
          return newString;
                
        }
        // End of Problem number 4
        // Start of Problem number 5
        
            var myStringSeperater = function (ListOfString, seperator, inPlaceOf){
            var firstString = "I, went , to , the, park, and , played, a , game.";
            console.log(firstString);
       
            var n = firstString.replace(/,/g,"/");
            console.log(n);    // can not use .replace
                
                                     
            return firstString;
            }
            
            myStringSeperater();
            
        // Start of Problem number 6
        
           
            
            
            
            
            
            
            
            
            
        

        

   








                        
                        
   

          
                
                
         
         


    return {
        "myCap": myCap,
        "myPhoneString": myPhoneString,
        "myWorkingEmailString": myWorkingEmailString,
        "myUrl": myUrl
    }   
 } // end myLibrary
        
//main code
var newLib = new myLibrary();

console.log("is this a capital letter " + newLib.myCap("hope this workI s"));

console.log("This is the phonenumber " + newLib.myPhoneString("480-392-3346"));

        // Email test   
console.log("Email test " + newLib.myWorkingEmailString("wgrroseberry@gmail.com"));
       
         
       //  myWorking http:// and https://
  
 console.log("My url "+ newLib.myUrl("https://"));
 
  console.log(UrlString);
		 
	   // Caps the first letter of all the words.
		    
console.log("hello is this working " + newLib.myCap("hello there"));
      
      
    
    
    
    
       
    
    
    
    

