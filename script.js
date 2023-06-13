document.addEventListener('DOMContentLoaded',function(){
    var colorButton= document.querySelector(".color-button");
    //adding click event listener to button
    colorButton.addEventListener('click',function(){
        // Using math.floor and math.random functions to show all RGB Colours within range 0 and 255
        // math.random returns a random number between 0 and 1
        // math.floor rounds the value to nearest decimal point e.g , 3.5 = 3;
        var red= Math.floor(Math.random()* 256 );
        var green = Math.floor(Math.random()* 256);
        var blue= Math.floor(Math.random()*256);
        var color= "rgb("+ red+ ","+ green +","+blue+")";
         //Now changing the background color of body

         document.body.style.backgroundColor= color;


    })
})