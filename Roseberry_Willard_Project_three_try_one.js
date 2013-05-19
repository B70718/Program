//Willard Roseberry
//Sdi 1605
//5th Month May 18, 2013
//Project 3
  
        
        
        //Willard Roseberry
//Sdi 1605
//5th Month May 18, 2013
//Project 3
  
        
         // Global varables
         var sarah = "sarah";
         var rosella = "rosella";
         var mommy  =   " mommy";
         var daddy   = "daddy";
                      
            
      
 var familyName = function (username)
{
 var procedure = username;
    ///////// Method: Procedure ////////////////////////////////
          
       
if (procedure === "sarah")
{
	console.log ("Welcome Sarah");
}
else if (procedure == "rosella")
{
      console.log ("Welcome Rosella");
}
else if (procedure == daddy)
{
      console.log ("Welcome Daddy");
}
else if (procedure == mommy)
{
       console.log ("Welcome Mommy");
}
else if (procedure == "not defined")
{
    
      console.log(" Please try again the wrong user name has been used");
}     
}  
   //// Main code/////////    
      familyName(daddy);
       
      familyName( mommy);
      
      familyName( sarah );
      
      familyName( rosella );
       
     
      
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // Bottles, Apples and aranges for logic
       /*
        
        var tree = "Apple" +" Orange" + "Banna";
        var Rosella    = 5;
        var juiceBoxes = 5;
        var     apples = true;
        var      pears = true;
        
        var say = function(message){console.log(message);};
        
        ////////// myProcedure ////////////////////////////////////
        
        var myProcedure = function(apples, pears)           
        {
            
        if (apples === pears)
        {
        var answer = (apples + pears);
        say ( answer + " is the amount of "+ apples + " apples" + " and " + pears + " pears.")
      
        say (apples + " apples is the same amount as " + pears + " pears.")
            
        //puting a string together for the procedure
        }
        else if (apples < pears)
        {
            
        say (apples + " apples is less than " + pears + " pears")
        //compareing apples to pears
        }
        else if (apples > pears)
        {
        say (apples + "apples is greater than pears + pears")
                    
        }         
        } 
     	/////	Boolean function	/////////////																			   					                     				
         var chase = function (apples , pears)
        {
            
        if (apples === true && pears === true){
            var fruit = apples + pears;
                      
            apples = true
            pears = true
            Rosella = true
            
            say ("It is equal to " + apples + " that Rosella loves apples " + " and " + pears + " that she loves " + " pears.");
               
        } 
            else if (apples === false && pears === true)
        {  
            apples = false
            pears = false
            Rosella = false
            say ("It is less than " + apples + " that Rosella loves apples " + " and " + pears + " that she loves " + " pears.");
            say ("one of these is true and one is false" + apples + " is " + apples + " pears is " + pears + " ");
        }
        
            else if (apples === true && pears === false)

        {   
            apples = false
            pears = false
            Rosella = false
            say ("It is greater than " + apples + " that Rosella loves apples " + " and " + pears + " that she loves " + " pears."
                  );
            say ("Apples is " + true + " and " + " pears is " + pears);
           
        }
        return;
        }   
        
        //////// funtion oneNUmber ////////////////////////////
        
          var juiceBoxes = 3
          var oneNumber =  function(juiceBoxes)
        { 
            
            var x = 1;
            var answer = oneNumber;
            say (" We have " + juiceBoxes + " juiceBoxes left");
          
            while (juiceBoxes >= 1)
        { 
            juiceBoxes = juiceBoxes - 1;
            say (" We are down to " + juiceBoxes + " juiceBoxes");  
        }
            if (juiceBoxes === 0)
        {   say ("Heading to the store now to buy 50 more juiceBoxes")
               
            juiceBoxes = 2 * 25;
            say ("We now have " + juiceBoxes + " In the house")   //code    
        }
            else if (juiceBoxes < 50)
        {   say ("We did not buy enough juiceBoxes")     
        }
          return juiceBoxes;
        }
             ///// string function  //////////////////////////////////////////   
        
           var juiceBoxes = "juiceboxes";
           var Rosella = "true";
           var myString = function(Rosella, juiceBoxes)  
         {
            
            say ( "Rosella " + "loves " + juiceBoxes + " juiceboxes at the same time.")
           
            say ("It is " + Rosella + " that " + " Rosella loves to drink " + juiceBoxes + " juiceBoxes.")
          return juiceBoxes, Rosella;
          }
          
           /////////// myArray ////////////////////////////////////////////////////////////////////////////////
            var working;
            i = 1;
            juiceBoxes = 5;
            b = 1;
            var ourSmartPhones = "working";
            
            var myArray = function(juiceBoxes , working)
        {
            var ourSmartPhones = ["Note_2" , "Galaxcy one" , "Samsung Galaxcy two" , "Samsung Exhibit"];
        
            console.log (juiceBoxes + " juice boxes with a " + ourSmartPhones[0] + " are really nice together. ")
         
        //  loop for the Array //////////////////
            var a = (b * a);
              
             for (var i = 1, j = ourSmartPhones.length; (i < j); i++)
          {
               
             a = i * 10;  
          
            console.log (ourSmartPhones[1] + " our Smart Phones. ");
            say (i + " is the number " + a +" is 10 times the number "); 
          } console.log (ourSmartPhones[0]);
            console.log ("our smart phones are working " +  (ourSmartPhones[0]) + " is Working ");
            console.log(ourSmartPhones[0] + " hope this works");
            
            console.log("We have " + ourSmartPhones.length + " this many many smart phones.");
            console.log("Ohh no. Rosella just droped a Smartphone and broke it!");
            var Note_2 = ourSmartPhones.shift()
            console.log("Now we are down to " + ourSmartPhones.length + " phones");
            console.log(" Ohh no only");
            console.log(ourSmartPhones.length) 
            console.log("phones now!");
            
            ourSmartPhones.toString();
            console.log ("Ohh no my smartphones changed into a string!");
            console.log(ourSmartPhones);
            return working;
          }
        
           // Main code  /////////////////// Main code  /////////////
      
      myProcedure(apples,pears)
      
      chase(7,7);
      
      oneNumber(5);
       
      myString(Rosella, juiceBoxes);
       
      myArray(5,2);
      
     console.log("Theses are my return values from the funtions");
       
     //console.log("apples from the boolan funtion is " + fruit + " ");
     console.log("My Array return values are "  + juiceBoxes + " juiceBoxes and " + ourSmartPhones + "is working ");
     console.log("My string return values are " + Rosella + " Rosella " + " and " + juiceBoxes + " juiceboxes");
     console.log("My number funtion return values are " + juiceBoxes + " juiceboxes")
     console.log("My boolan funtion return valuse are " + apples + " apples " + pears + " pears");
        
       
       */
       
     
