// Project 4
// Willard Roseberry
// Libarys


/// Golbal varables
var splitFrontPhoneString;
var splitEndPhoneString;
var lengthPhoneString;

var phoneString = "123-346-7934";



 splitFrontPhoneString = phoneString.charAt(3);
 lengthPhoneString = phoneString.length;
 splitEndPhoneString = phoneString.lastIndexOf("-");
 
     
    if (splitFrontPhoneString  === "-"){
    console.log(" the string is " + splitFrontPhoneString + " number and is working correctly");
    }
   else
   
   console.log("This is not working");
   
   if   (splitEndPhoneString === 7) {
    console.log("The string is meeting the required pattern");
    
   }
   else if (splitEndPhoneString  ==! 7) {
        
        console.log("The string has failed the pattern");
        //code
    }
    
    if (splitFrontPhoneString === "-" && splitEndPhoneString === 7 && lengthPhoneString === 12) {
         
        console.log("Both sides of the sting are correct and true");
    }
    
    else
    
    console.log("The string does not meet the pattern specified");
    
   
    
   
   
   
    
    
    
   
 