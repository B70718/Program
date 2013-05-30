

/* Willard Roseberry
 * SDI 1304
 * Project 4
 * Library of Functions
 */
  // Global Variables
  
         var space = " ";
         var comma = ",";
         var tempestString = "Oh brave new world that has such people in it.";
         var monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
  // End of Global Variables 
    
         
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
	// Start of Problem number 4//	
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
        // End of Problem number 4//
        // Start of Problem number 5//
        
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
            
           
         // End of Problem number 5 //   
        // Start of Problem number 6 //
        // Find the differents between two dates
        
                var dateFunction = function (one,two) {
                   // using an array to store the data from four differnt dates.
		var date1 = new Date("6/17/2000");
                var date2 = new Date("05/29/2013");
                var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
                 return diffDays;

    };
            
         // End of Problem number 6 //
         // Start of Problem number 7 //
        // Sending a string into the program and return it as a number
        
       
        var myStringNumber = function (string){
            string = "456";
            
            parseInt("string")
            
            return string;
        }
        
         // End of Problem number 7 //
         // Start of Problem number 8 //
         
         /* Given a string that is a list of things separated by a given string, as well as another//
         
        string separator, return a string with the first separator changed to the second: “a,b,c” +
          “,” + “/” --> “a/b/c”. */
         var mySplitString = function (stringWithComma, replaceSeparator, tempestString){
               var stringsArray = stringWithComma.split(replaceSeparator);
               
               for (var i = 0; i < stringsArray.length; i++)
                console.log(stringsArray[i] + " /");
               return stringsArray;     
         }
         
         // End of Problem number 8 //
         // Start of Problem number 9//
         
        var smallAndGreat = function(a){
         
         {var t=this,r=Number.POSITIVE_INFINITY,i;
	for (i=0;i<t.length;i++) if (a<t[i] && t[i]<r) r=t[i];
	return r;
                   }

           var arr=[1,6,12,14],n=5;
     
        }
         
         
         
    return {
        "myCap": myCap,
        "myPhoneString": myPhoneString,
        "myWorkingEmailString": myWorkingEmailString,
        "myUrl": myUrl,
        "myStringSeperater": myStringSeperater,
        "myStringNumber": myStringNumber,
        "mySplitString": mySplitString,
        "dateFunction": dateFunction,
        "smallAndGreat": smallAndGreat
    }   
 } // end myLibrary
        
//main code
var newLib = new myLibrary();

console.log("Number 1 Problem small and Large. " + newLib.myCap("we went to the park and had some fun"));

         // Phone number test
console.log("Number 2 Problem Phone Number " + newLib.myPhoneString("480-923-3344"));

        // Email test   
console.log("Problem 3 Email test " + newLib.myWorkingEmailString("wgrroseberry@gmail.com"));
       
         
       //  myWorking http:// and https://
  
 console.log("Problem 4 My url "+ newLib.myUrl("https://"));
  		 
	   // Caps the first letter of all the words.
		    
console.log(" Problem 5 hello is this working " + newLib.myCap("hello there"));

          // My string seperator
          
          
console.log("Problem 6 Differnt days " + newLib.dateFunction());     ///////////////////////////  
          
console.log("Problem 7 My string seperator " + newLib.myStringSeperater("hello" , "how " , " are  you"));

         // My string number

console.log("Problem 8 My string number " + newLib.myStringNumber("456"));
       
        // My split string seperator
            
console.log("Problem 9 My split string seperator " + newLib.mySplitString(tempestString,space, "hello"));
console.log("Problem 9 My split string seperator " + newLib.mySplitString(tempestString));
console.log("Problem 9 My split string seperator " + newLib.mySplitString( monthString,space, "hello"));

// problem 10

console.log("Problem 8 My string number " + newLib.smallAndGreat(12));
console.log(" Here is the number " + newLib.smallAndGreat(arr.smallAndGreat(n)); // give 6 
  
            
             
               
              
              
               
    
    
       
    
    
    
    

