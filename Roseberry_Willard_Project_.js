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
         console.log("We Sarah from riding in the car");
        }
         else if (procedure === "rosella")
        {
        console.log("Welcome Rosella from riding in the car");
        }
          else if (procedure === daddy)
       {
        console.log("Welcome Daddy from riding in the car");
       }
          else if (procedure === mommy)
       {
        console.log("Welcome Mommy from riding in the car");
    	//code
        }
          else if (procedure !== " ") 
    console.log("Sorry the wrong user name has been used. The car will not start.");
        }
///////////// Number Argument /////////////////////
           
var rosellaOutside = function (permissionFromParents) {
	var time = 61;   // time and 30 minits

	if (time < 15) {
		console.log(" Rosella says thats not enough time!");
		//code
	}
	if  (time === 30) {
		console.log(" Rosella says. Thanks for the 30 minits but I want to stay out longer!");
		
	}
	if (time >= 60) {
		console.log(" Rosella opened the door and left she stayed out for over an hour. She is very tired and falls asleep. It is time to put her to bed");
		
		
	}
	return time;
}
     
	
	////// Argument Boolean/////
	
var rosellaBoard = function (makeingMess, outSideWithOutPermision)
	{
	        var unLockDoor = outSideWithOutPermision;
	        var papersBooks	= makeingMess;   // Rosella gets board and finds papers or books to make a mess and 
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
		return true;
	    }
	
	////////////// while loop //////////////////
var a = 1;
while (a < 2)
	{
	 console.log( " Rosella makes " + a + " mess when she is board.");
	a ++;
}



        /////////// Property Boolean /////////////////////////////   
	 
var makeingMess = true;
var outSideWithOutPermision = true;
	  
var putThingsOnFloor = makeingMess;
var extraFreedom = outSideWithOutPermision;
	   
var unLockDoor = true;
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
//////////////////////////  Augument Number  goingForRide      //////////////////////////////////////////////////
          var car = true;  
          var juiceBoxes = 3
          var goingForRide =  function(juiceBoxes, car)
        { 
            
            var x = 1;
            var ride = goingForRide;
            console.log (" Rosella has " + juiceBoxes + " juiceBoxes left and it is " + car + " that she wants more to drink");
          
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
///////////////////////////////////  while loop    ///////////////////////////////////////////
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


   
 ///////////////////////////////// Argument Array //////////////////////////////

var rideInCar = [true, false];
var familyCar = function (name) {
   // private
    var luggage = [];
    var family = [];
    var luggageOnFamilyCar = function (item) {
        if (item !== "Teddybear") {
        luggage.push(item);          /// Method Procedure
        } else {
            console.log("Not allowed Rosella wants to hold her Teddybear.");
        }
    };
    var luggageOnFamilyCarList = function () {
      for (var n = 0; n < luggage.length; n++) {
        console.log(name + " cargo " + n + " :" +  luggage[n] + ".");
      }
     return luggage;
    
    };
    //////////////////////////////////// getName //////////////
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
      console.log("Lets pick a number and see who gets to watch Rosella so she will stop making messes.")
	//random number useing math.floor
	var number = Math.floor(Math.random() * 10) + 1;
         console.log("Pick a number 1 to 10 " + "and see how many messes Rosella is going to make." + number);
      
      var cartrip; //////////////////////////////////////////////nested for loop ///////////
  cartrip = "We decided to take Rosella to the RiverParkWay.";
  for (i = 1; i <= 3; i++) {
	cartrip = cartrip + "to stop having so many messes";
	for (j = 1; j <= 3; j++) {
		cartrip = cartrip + "Look out here we go!";
	}
	cartrip = cartrip + "We made it";
	}
       cartrip = cartrip + "That was fun!";
       console.log (cartrip + " ");
  
      return ride;
     };
 
 /////////////////////// Arugument Array ///////////////////////////////////////

 var trip = function() {  
 var goingOnRide = Array.prototype.slice.call(arguments); // makes a variable called goingOnRide
  goingOnRide.unshift('trip');
  goingOnRide.push('I found Rosella');    ///// Method Mutator Function
  console.log( goingOnRide.join(' '));
  ////////////////////////// Accesser method////////////////////
  Array.prototype.myUcase=function()
    {
       for (i=0;i<this.length;i++)   // using .length to measure and create a loop for upper case letters.
    {
        this[i]=this[i].toUpperCase();
    }
    }

        var fruits=["going","on","a","trip"]; 
        fruits.myUcase();
  
  console.log("Ohh no Rosella got out of the car " + fruits + " and she changed these to upper case letters!!")
 } 
  
  
  /////////////////////////////////////////////Arugument Array/////////////////
 
 
  
  
  
  /////////////////// Object Argument ////////////////////////////////// 
    
 
     var car = {
       active: "gadges" [ 
            "fuel",
            "transmission",
            "fusion reator",
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
     };
  //////////////// JASON handleData
/*  
  var car;
  var handleData = function (json){
                                                 // console.log(json);
    for (var i = 0; i < json.car.length; i++) {
        var car = json.car[i];
        console.log("User ID: " + car.uuid + ", Name: " + car.name + ", Age: " +
                    car.age);
    };
    
};

*/
 
 
  
  ////////////////////main   ///////////////////////

 

 
      console.log ("Then she made " + ( a ) + " more messes");
      console.log (" She really go carryed away and made " +( prepareingForTrip ) + " more");
      
        
       var myTimeValue = rosellaOutside(5);
       console.log ("Then Rosella got up at " + myTimeValue + " in the morning");
       
      goForRide("Rosella", "looked at the moon");
      
      trip('going', 'for', 'ride','in','the','car');
      
      console.log(" It is " + rideInCar[0] + " that we are going for a ride in the car");
         
      familyName(daddy);   // make an array or object put in a for loop and call all four family members.
       
      familyName( mommy);
      
      familyName( sarah );
      
      familyName( rosella );
      
      rosellaOutside( 15 );
      
      rosellaBoard( true , true);
      
       console.log ("Rosella wants to know how " + rosellaBoard.length + " stay outside longer");
       
       goingForRide(3, true);
       
       var myTimeValue = rosellaOutside(61);
       
       var time = rosellaOutside("saw the moon");
       
       console.log("Rosella stayed outside for " + myTimeValue + " minits. Now she is very tired");
       
       console.log(" It is " + rideInCar[0] + " that we are going for a ride in the car");
       
      
       
       console.log(outSideWithOutPermision);
       
       console.log ("We decided to go for a ride in a new car. It is a ")
       
       console.log(car.makeModle);
       
       console.log("I turned the key and the " + car.makeModle + " turned on");
       

	
	
       
       
 

       
      
       
      
      
     
      
      
       
     
      
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
     
