// JS Data Structures
// Author: Willard Roseberry
// control File

var handleData = function (json){
                              // console.log(json);
    for (var i = 0; i < json.car.length; i++) {
        var car = json.car[i];
        console.log("User ID: " + car.uuid + ",Name; " + car.name + ", Age: " +
                    car.age);
    };
    
};

handleData(car);