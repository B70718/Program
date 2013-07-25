/*looping and checkbox example*/

window.addEventListener("DOMContLoaded", function(){
    
    var saveValues = function(){
        var checkboxes = document.forms[0].days;
        var selectedValues = [ ];
        for (i=0) , j=checkboxes.length; i<j; i++){
            if (checkboxes[i].checked) {
                var checkedValue = checkboxes[i].value;
                selectedValues.push(checkedValue);
                
            }
        }
        localStorage.setItem(test", JSON.stringify(selectedValues));
        alert("Item saved!");                     
        
    }
    
    var fillOutMyForm = function(){
        var checkboxes = document.forms[0].days;
        //console.log(checkboxes);
        var key = localStorage.key("test");
        var value = localStorage.getItem(key);
        var mydata = JSON.parse(value);
        
        for (i=0; i<checkboxes.length; i++) {
            //console.log(checkboxes[i].value +"|| "+ mydata);
            if (checkboxes[i].value === mydata){
                checkboxes[i].setAttribute("checked", "checked");
                
            }
            }
            
        }
    }
}