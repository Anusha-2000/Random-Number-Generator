//Max is exclusive and Min is inclusive
//Add 1 to your max to include it
function getRandomNumber(){
    // Selecting the input element and get its value 
    var min = Number(document.getElementById("min").value);
    var max = Number(document.getElementById("max").value);
    //var randomNum = Math.random();

    if(max < 0 || min < 0 || max < min) {
        alert("Please enter correct values.");
    } else {
        var randomNum = Math.floor((Math.random() * (max - min)) + min);
        
        // Displaying the value
        alert(randomNum);
    }  
    
    
    
}
