

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
        return true;
      }
    
       else
    
        var booll = new Boolean(0);
        return false;
     
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
             var wordArray = capForMe.split(" ");
             var capForMe = [];
	     for(var i = 0; i < wordArray.length; i++){
			   var capLetter = wordArray[i].charAt(0).toUpperCase();
                           capForMe.push(capLetter + wordArray[i].slice(1));
        };                                          
          newOneString = capForMe.join(" ");
          
          return newOneString;
                
        }
        // End of Problem number 4
        // Start of Problem number 5
        
            var myStringSeperater = function (listOfString, seperator, inPlaceOf){
                 var answer = [];
                 var mywords = listOfString.split(" ");
              for (var i = 0; i < mywords.length; i++) {
                var letter = mywords[i]
              //  seperator.push("/");
                answer.push(seperator + mywords[i].slice(1));
            };
                newString = answer.join(" ");      
          //  var n = firstString.length   
            return newString;
            }
            
           
            
        // Start of Problem number 6
        // Find the differents between two dates
        
    var dateFunction = function (one,two) {
		var results = [];
		var difference = (date1 > date2) ? date1 - date2 : date2 - date1;
		results[3] = difference / 1000;
		results[2] = results[3] / 60;
		results[1] = results[2] / 60;
		results[0] = results[1] / 24;
		return results;

    };
            
            
        // Sending a string into the program and return it as a number
        
        var myStringNumber = function (string){
            string = "456";
            
            parseInt("string")
            
            return string;
        }

            
            
            
            
            
            
            
            
        
            
            
            
            
            
            
            
            
        

        

   








                        
                        
   

          
                
                
         
         


    return {
        "myCap": myCap,
        "myPhoneString": myPhoneString,
        "myWorkingEmailString": myWorkingEmailString,
        "myUrl": myUrl,
        "myStringSeperater": myStringSeperater,
        "myStringNumber": myStringNumber
    }   
 } // end myLibrary
        
//main code
var newLib = new myLibrary();

console.log("small and " + newLib.myCap("hope this working. now"));

         // Phone number test
console.log("Phone Number " + newLib.myPhoneString("480-923-3344"));

        // Email test   
console.log("Email test " + newLib.myWorkingEmailString("wgrroseberry@gmail.com"));
       
         
       //  myWorking http:// and https://
  
 console.log("My url "+ newLib.myUrl("https://"));
 
 
		 
	   // Caps the first letter of all the words.
		    
console.log("hello is this working " + newLib.myCap("hello there"));

          // My string seperator
          
console.log("My string seperator " + newLib.myStringSeperater("hello , how , are , you"));

         // My string number

console.log("My string number " + newLib.myStringNumber("456"));
    
    
    
    
    
       
    
    
    
    

