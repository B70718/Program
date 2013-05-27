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
        
        
     
            
        
          //  capitalized("i went to the park in the rain");
       
            var firstLetterCap = function (firstLetter){
                        capMe = (firstLetter);
                        var words = "words".split(' ');
                        var results = [ ];
                        for (var i = 0; i < words.length; i++) {
                            var  letter = words[i].charAt(0).toUpperCase();
                            results.push(letter + words[i].slice(1));
                            console.log(words);
                        }
                        
                        return results.join(' ');
                    // how to print out an array and put the first charater to a cap.
                        };
                      
                      //  var capALetter = firstLetterCap;
                     //   firstLetterCap("i sure hope this works i have been tring for a long time.");
                      //  firstLetterCap("hello there");
                       // console.log(results + " Here is the results");
                     //   firstLetterCap( );
                        
                        
                      
                        
    ////////////////////////////////////////////////////                    
   //       var toMatch = "john w. smith";
//var result = toMatch.replace(/(\w)(\w*)/g, function (_, i, r) {
  //    return i.toUpperCase() + (r != null ? r : "");
  //  }
//)              
 ///////////////////////////////////////////////////                       
               
var myCap = function (initials){
var name = "willard roseberry is going to the park";
var initials = " ";
var wordArray = name.split(",");

for(var i=0;i<wordArray.length;i++)
{
 initials += wordArray[i].replace("willard roseberry is going to the park","Willard Roseberry Is Going To The Park")  
}
console.log(initials);
return initials;
}
//myCap("willard roseberry is going to the park");












                        
                        
            //   console.log(firstLetter.toUpperCase());
            //    console.log(newFirstLetter + "....newfirstletter");
                
            //    firstWorking =(firstLetter.charAt(0)).toUpperCase();
                
              //  console.log(firstWorking.charAt(0).toUpperCase());
                
             //   console.log(firstLetter.toUpperCase());
            
              //   firstLetterCap("i want this to work soon");
    /*     var  toUpperCase = function (){
            var words = this.split(' ');
  var results = [];
  for (var i=0; i < words.length; i++) {
      var letter = words[i].charAt(0).toUpperCase();
      results.push(letter + words[i].slice(1));
            
          }
          return results.join(' ');
          };
          
          toUpperCase("willard roseberry");
          
          
        
        var myCapital = function (upperLetter){
            var txt = ("'a,b,c,d,e,f,g'");
            
            var arry = txt.split(',');
            console.log(arry);
            
            
            
            
        }
        
        String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


      "hello world".capitalize();
                        
           function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);

           }
           
          var myfuntion = capitalize("hello there"); 
           
     //  myfuntion("hello there");
       
       console.log(myfuntion);
       
     //  puts 'one TWO three foUR'.split(' ').map(&:capitalize).join(' ')
          
          
                
                
                
        
           
           
            
           function capitalizeMe(obj) {
        val = obj.value;
        newVal = '';
        val = val.split(' ');
        for(var c=0; c < val.length; c++) {
                newVal += val[c].substring(0,1).toUpperCase() +
             val[c].substring(1,val[c].length) + ' ';
        }
        obj.value = newVal;
}
 
            capitalizeMe("it this going to workingPhoneString?");
            console.log(obj);
         
         


        //Iwenttotheparkintherain.
        
        
        
        
         //main code
         
         var workingPhoneString = myPhoneString("480-392-3346");

        // Email test   
        myWorkingEmailString = myEmailString;
        myWorkingEmailString("wgrroseberry@gmail.com");
         
       //  myWorking http:// and https://
  
         var myhtmlString = myUrl("https://")
         
        
    
    */
    
    
       function fixCase(fixThis) {
 
 
    String.prototype.toProperCase = function () {
 
        return this.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
  
    fixThis.toProperCase();
    console.log(fixThis.toProperCase()); // Logs Shannon Plesh in proper case.
}
// problem 5 ends here.

  fixCase("willard roseberry");
    
    
    
    
    

