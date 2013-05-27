// Project 4
// Willard Roseberry
// Libarys
   
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
     
      }
        
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
       
       // Is the string a URL (Does it start with http:// or https://)?
       
       
        var myUrl = function (UrlString){
            var urlFrontString;
            var urlFrontStringTwo;
          
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
        
        var myhtmlString = myUrl("https://")
        
        
        
      
      
    
     
         //main code
         
         var workingPhoneString = myPhoneString("480-392-3346");

        // Email test   
        myWorkingEmailString = myEmailString;
        myWorkingEmailString("wgrroseberry@gmail.com");
         
       //  myWorking http:// and https://
  
         var myhtmlString = myUrl("https://")
    
    

