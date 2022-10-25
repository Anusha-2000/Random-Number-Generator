//Max is exclusive and Min is inclusive
//Add 1 to your max to include it
function getRandomNumber(){
    // Selecting the input element and get its value 
    var min = document.getElementById("min").value;
    var max = document.getElementById("max").value;
    var randomNum = Math.random();
    randomNum = Math.floor(randomNum * (max - min) + min);
    
    // Displaying the value
    alert(randomNum);
}
