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
	    console.log("Welcome Sarah");
}
else if (procedure === "rosella")
{
        console.log("Welcome Rosella");
}
else if (procedure === daddy)
{
        console.log("Welcome Daddy");
}
else if (procedure === mommy)
{
       console.log ("Welcome Mommy");
}     
}
///////////// Number Argument /////////////////////
           
var rosellaOutside = function (permissionFromParents) {
	var time = 61;   // time and 30 minits
	 var minits = permissionFromParents;
	if (time < 15) {
		console.log(" Rosella says thats not enough time!");
		//code
	}
	if  (time === 30) {
		console.log(" Rosella says. Thanks for the 30 minits but I want to stay out longer!");
		
	}
	if (time >= 60) {
		console.log(" Rosella stayed out for over an hour. She is very tired and falls asleep. It is time to put her to bed");
		
		
	}
	return time;
     }
     
	
	////// Argument Boolean/////
	
var rosellaBoard = function (makeingMess, outSideWithOutPermision)
	{
	        var papersBooks	= makeingMess;   // Rosella gets board and finds papers or books to make a mess and 
	        var unLockDoor = outSideWithOutPermision;
	        if (papersBooks === true)
	{
		
	            console.log(" It is " + papersBooks + " that Rosella is making a mess with papers and books because she is board");
	            console.log(" It is " + unLockDoor + " that Rosella is staying inside to play");
	}
	else
	{
	            console.log(" It is " + papersBooks + " that Rosella is makeing a mess" + " She is inside being good");
	            console.log(" It is " + unLockDoor + " that Rosella is inside." + " She is outside runing around");
	   
	}
	}
	
	////////////// while loop //////////////////
	var a = 1;
	while (a < 5)
	{
	 console.log( " Rosella makes " + a + " messes when she is board.");
	 a ++;
	}



        /////////// Property Boolean /////////////////////////////   
	 
	   var makeingMess = true;
	   var outSideWithOutPermision = true;
	  
	   var putThingsOnFloor = makeingMess;
	   var extraFreedom = outSideWithOutPermision;
	   
	   unLockDoor = true;
            if (putThingsOnFloor && extraFreedom)
        {
	    
             console.log(" Rosella wants to go and play and it is " + putThingsOnFloor  + " that she is making a mess");
             console.log(" Rosella wants to go outside and it is " + extraFreedom + " that she left with out permission");
  
           // If the value parameter is omitted or is 0, -0, null, false, Nan,undefined, or the empty string (""), the object has an initial value of false.
        }
           else (putThingsOnFloor != unLockDoor)
	{
	     console.log(" It is " + putThingsOnFloor+ " that Rosella is makeing a mess or it is " + unLockDoor + " that Rosella unlocked the door");
        }
//////////////////////////  Augument Number        //////////////////////////////////////////////////
          var car = true;  
          var juiceBoxes = 3
          var goingForRide =  function(juiceBoxes, car)
        { 
            
            var x = 1;
            var ride = goingForRide;
            console.log (" We have " + juiceBoxes + " juiceBoxes left and it is " + car + " that we are going for a ride in the car");
          
            while (juiceBoxes >= 1)
        { 
            juiceBoxes = juiceBoxes - 1;
            console.log (" We are down to " + juiceBoxes + " juiceBoxes");  
        }
            if (juiceBoxes === 0)
        {   console.log ("Heading to the store now to buy 50 more juiceBoxes")
               
            juiceBoxes = 2 * 25;
            console.log ("We now have " + juiceBoxes + " In the house")   //code    
        }
            else if (juiceBoxes < 50)
        {   console.log ("We did not buy enough juiceBoxes")     
        }
          return juiceBoxes, car;
	}




   //// Main code/////////    
      familyName(daddy);   // make an array or object put in a for loop and call all four family members.
       
      familyName( mommy);
      
      familyName( sarah );
      
      familyName( rosella );
      
      rosellaOutside( 15 );
      
      rosellaBoard( true , true);
      
       console.log ("The length of the rosellaBoard propertiey is " + rosellaBoard.length)
       
       goingForRide(3, true);
       
       var myTimeValue = rosellaOutside(61);
       
       var time = rosellaOutside("saw the moon");
       
       console.log("Rosella stayed outside for " + myTimeValue + " minits. Now she is very tired");
       
      
 // Constructor , Module Pattern



var familyCar = function (name) {
   // private
    var luggage = [];
    var family = [];
    var luggageOnFamilyCar = function (item) {
        if (item !== "hair dryer") {
        luggage.push(item);
        } else {
            console.log("Not allowed to have a hair dryer because it uses to much energy");
        }
    };
    var luggageOnFamilyCarList = function () {
      for (var n = 0; n < luggage.length; n++) {
        console.log(name + " cargo " + n + " :" +  luggage[n] + ".");
      }
    
    };
    
   var getName = function () { return name; }; 
    return {  // public
    "luggage": luggage,
     "familyCar": faimilyCar,
    "luggageOnFamilyCar": luggageOnFamilyCar, 
    };
};

/////////////////////// Augument String //////////////////////////////////

     var goForRide = function (park , moon){
      var ride = park;
      console.log(park + " went to the park " + moon + " and had a great time!");
      return ride;
     };
     
     
     
 /////////////////// Object Argument ////////////////////////////////// 
    
 
     var car = {
       active: [
		"gadges", 
            "fuel",
            "transmission",
            "fusion reactor",
            "shield generator"
        ],
        makeModle: "Dalorian",
        color: "Blue",
        speicalSystems: [
            "Force shield",
            "Fusion Reactors",
            "Cloaking Device",
            "Interplanentary Navigational System",
            "Auto Pilot Emergency Evasion System" 
        ],
        
       sayHi: function () {
            console.log("Hi"); 
           
        
    }  
 };
 /////////////////////// Arugument Array ///////////////////////////////////////
  var rideInCar;
  var park = function (rideInCar){
  var rideInCar = [true]
  console.log(" It is " + rideInCar + " that we are going for a ride in the car");
  }
  
  
  //////////////////////////////////////////////main ///////////
 
  
  console.log("It is " + rideInCar[0]+ " that we are going for a ride in the car");
 
 console.log( car.active );
 
 console.log("I checked the " + car.active + " before the " + car.makeModle + " was turned on");
 

       car.sayHi();
 
 
      var prepareingForTrip = 20;
      
      var carOnGround = 10;
      
      var a = carOnGround;
      
      
      while (a > prepareingForTrip)
      {
        carOnGround = carOnGround + " The car is on the ground in loop " + carOnGround + " carOnGround ";
       console.log ( a ) + " This is a's value in the loop";
       a++;
      
     console.log (" The car is on the groud now " + a + " This is a's value change  ")              
      }
      
      console.log ( a ) + " caronground number output";
      console.log ( prepareingForTrip ) + " prepareingfortrip output"
      
       console.log ("Please tell me the" + myTimeValue + " Thanks");
       
      goForRide("Rosella", "looked at the moon");
      
    
      
     
      
      
       
     
      
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
     
