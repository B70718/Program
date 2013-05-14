//Willard Roseberry
//Sdi
//5th Month May 12, 2013
  
     //Say function for console.log
     var say = function(message)
    { console.log(message);
    }
	
  //Varible funtion
	var inchesOfRain = 2
	var hours = 2
	var milesPerhour = 2
		
  //Procedure funtion
    var howLong = function (h, milesPerhour, inchesOfRain) {
	var long = (h) * (milesPerhour);
	say ("We walked " + h + " hours" + " at " + milesPerhour +"       miles per hour " + "which is a total of " + long + " miles "        + "walked" + " in" + inchesOfRain + " inchesOfRain")
		say ( h ) + "this is the number h";
		
		// h is how many hours walked
		
		if (h ===  1) {
	   say (" We have walked for one " + h + " hour so far " + " in "       +  inchesOfRain + " Inches of rain ")
	  }
	     
		 else if (h < 1){
		say ("We have only walked for " + h + " of a mile in "+        inchesOfRain + " inches of rain")	 }	
		
		else if (h > 1) {
			say ("We have walked for more than " + h + " hours on the RiverParkway.")  		    }
	}
    
// Main Code	
howLong(1 , 10 , 7);

//Boolean Function///////////////Boolean Function////////////////////
     
	 //local varables 
	   walked = false
   stayedHome = true
	  
     var trueOrFalse = function (walked , stayedHome) 
	 {
	 if (walked === stayedHome)
	 {say (" We can not walk on the Riverparkway and stay home at the same time.")
	 }
	 else
	    
	  { (walked === false && stayedHome === true)
	  
	  say ( " We decided to stay home today.")
	
	   }
	   
	   
	 }
	  
	   
	  
	 trueOrFalse(false, true)
	   
	  
	 
		 



    
		
		
		
		
		
		
		
        var tree = "Apple" +" Orange" + "Banna";
        var Rosella    = 5;
        var juiceBoxes = 5;
        var          apples = 5;
        var          pears = 5;
        var ourSmartPhones = new Array();
        ourSmartPhones [0] = "Note 2";
        ourSmartPhones [1] = "Galaxcy one";
        ourSmartPhones [2] = "Samsung Galaxcy two";
        ourSmartPhones [3] = "Samsung Exsibit";
       
        var pi = 3.14159;
		

		
		
		
		
		
		
		
      
        say ( answer + " is the amount of "+ apples + " apples" + " and " + pears + " pears.")
     
        if (apples === pears)
        {   
            say (apples + " apples is the same amount as " + pears + " pears.")
            
            //puting a string together for the procedure
        }
        else if (apples < pears)
        {
            
            say (apples + "apples is less than pears" + pears)
            //compareing apples to pears
        }
            else if (apples > pears)
        {
            say (apples + "apples is greater than pears + pears")
            //If apples greater than pears
        }
           //Boolan funtion
           function chase( apples , pears)
        {
            return apples + pears  
        }
            var answer = chase( apples , pears)
            
            if (apples === pears && Rosella)
        {              
           apples = true
            pears = true
            Rosella = true
            
            say ("It is " + apples + " that Rosella loves apples " + " and " + pears + " that she loves " + " pears.");
            
           //Boolan funtion 
        } 
            else if (apples <= pears && Rosella)
        {  
            apples = false
            pears = false
            Rosella = false
            //Boolan funtion
        }
            else if (apples >= pears && Rosella)
        {   
            apples = false
            pears = false
            Rosella = false
            //Boolan funtion
        }
            var juiceBoxes = 3
        
            function oneNumber(juiceBoxes)
        { 
            return juiceBoxes
            //Number funtion
        }
            var x = 1;
            var answer = oneNumber
            say (" We have " + juiceBoxes + " juiceBoxes left");
          
            while (juiceBoxes >= 1)
        { 
            juiceBoxes = juiceBoxes - 1;
            say (" We are down to " + juiceBoxes + " juiceBoxes");  
        }
            if (juiceBoxes === 0)
        {   say ("Time to buy more juiceBoxes")
               
            juiceBoxes = 2 * 25;
            say ("We now have " + juiceBoxes + " In the house")   //code    
        }
            else if (juiceBoxes < 50)
        {   say ("We did not buy enough juiceBoxes")
                //Checking to see if enough juiceBoxes 
        }
           function string(Rosella, juiceBoxes)  
        {
            say ( Rosella + "and " + juceBoxes + " have a lot in common")
            //string funtion
        
            say ( "It is "+ Rosella + " that Rosella has " + juiceBoxes + " juiceboxes in the house.")
            return (Rosella , juiceBoxes)
        }
            //50 juiceboxes down to zero
           
            say ("It is " + Rosella + " that " + " Rosella loves to drink " + juiceBoxes + " juiceBoxes.")
           
            function array(juiceBoxes, ourSmartPhones)
        {
            say (juiceBoxes + " and " + ourSmartPhones + " are really nice! ")
            //Inside the array funtion
            
            return array()       
        } 
            var a = (2 * 5);
            for (var i = 0;
            i < ourSmartPhones;
               i++)
          
            say (ourSmartPhones + "our Smart Phones. ")
            say (i + " is the number " + a + " is 10 times the number ") 
        {
            say("our smart phones are working " +  ourSmartPhones  + " is Working ")
            //puting a string together for the array   
        
        say (apples + " apples" + pears + " pears " + juiceBoxes + " juiceBoxes" + array + " array" + Rosella + " Rosella")
	  
		}
	 
        
    
     
