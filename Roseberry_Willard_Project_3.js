
//// Arument Boolean ///////////
    
console.log(" is this working?");

var goingForRide = function (localPark, moon){
           var car = localPark;
           var trip = moon;
    
    {
        if (car === true && moon === false)
        {
            console.log("It is " + car + " that we are going to the car");
        
        }
        else if (car === false && trip === true)
        {
            console.log("It is " + trip + " that we will be heading to the trip for a family trip!");
        }
        
        else if (car === true && trip === true)
        {
            console.log(" We cannot go the both the local park and the trip at the same time.");           
        }
        
        else if (car === false && trip === false) {
            console.log(" I guess we decided not to go to the local park or the trip after all.")
        }
           
           goingForRide(true , false)
           goingForRide(false, true)
           goingForRide(false, false)
           goingForRide(true, true)
        
        goingForRide(true , true);
           
    }
}
        
        
    
    