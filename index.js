/*
document.querySelector("button").addEventListener("click", handleClick);
function handleClick(){
    alert("hello");
}
*/
/*
document.querySelector("button").addEventListener("click", function (){
    alert("hello");
});
*/
/*for all the button accessing them individually each time using querySelectorAll take a lengthy code
document.querySelectorAll("button")[0]....
document.querySelectorAll("button")[1]....
document.querySelectorAll("button")[2]....
....
....

Here, we can use a for loop
instead of using "button" as an element selector, we use the class of the all 7 buttons
as there may possible to have another button later on


*/

//first store the length of the document.querySelectorAll(".drum")
/*
var numOfDrumButtons=document.querySelectorAll(".drum").length;
for (var i=0; i<numOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        alert("hello");
    });
}
*/

/*Higher Order Function: functions that can take other functions as input
function add(num1, num2) {
return num1 + num2;
}
 
function subtract(num1, num2) {
return num1 - num2;
}
 
function multiply(num1, num2) {
return num1 * num2;
}
 
function divide(num1, num2) {
return num1 / num2;
}
 
function calculator(num1, num2, operator) {
return operator(num1, num2);
}
*/

/* only on mouse click */
/*
var numOfDrumButtons=document.querySelectorAll(".drum").length;
for (var i=0; i<numOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        //var audio=new Audio("sounds/tom-1.mp3");
        //audio.play();
        //console.log(this); 
        //this select the each button element, when we click on one button the output in console
        //=><button class="w drum">w</button>  => for click on w
        //=><button class="s drum">s</button>  => for click on s

        //now
        //console.log(this.innerHTML);
        //output on console while clicking on button
        //w => for click on w
        //s => for click on s

        //let's change the color of element clicking on the button
        //this.style.color="white";  //w leeter turn into white colour
        var buttonInnerHTML=this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                //object tom1 of constructor Audio
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            default:
                console.log(buttonInnerHTML)
        }
    });
}
*/

/*class and object
constructor function => start with capital letter and then follow the camel rule as always

function BellBoy(name, age, hasWorkPermit, languages){
    //properties
    this.name=name;
    this.age=age;
    this.hasWorkPermit=hasWorkPermit;
    this.languages=languages;
    //method
    this.moveSuitcase=function(){
        alert("May I take your suitcase?");
        pickUpSuitcase();
        move();
    }
}

object initialize

var bellBoy1=new BellBoy("Timmy", 19, "true", ["French", "English"]);

//call method
BellBoy.moveSuitcase();

output => access element
console.log(BellBoy.name);  => Timmy
*/


/* on mouse click as well as on key press */
//mouse click
var numOfDrumButtons=document.querySelectorAll(".drum").length;
for (var i=0; i<numOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

/*document => keypress work on whole screen instead of any particular selector like mouse click => document.querySelectorAll(".drum")[i]
=> instead of "click", we use "keypress" => all the event names are in lowercase, 2nd parameter => eventHandler 
*/

/* addEventListener => Higher order function
   function(event) => Callback function => the function is not called by us, it called by the object that experienced the "click"/"keypress"
*/
document.addEventListener("keypress", function(event){  //passing the event to the function that triggered the keypress
    //console.log(event); => print which key have been pressed and all in hashmap and key is a component of hashmap
    makeSound(event.key);    //get the key that have been pressed
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            //object tom1 of constructor Audio
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(buttonInnerHTML)
    
    }
}

//Add animiation to the button for a specific time 
function buttonAnimation(currKey){
    //select the button through initialize class of the button using currKey that is the key pressed in the keyboard
    var activeButton=document.querySelector("."+currKey);   //button selected
    //add new class pressed to add animation to the specific button
    activeButton.classList.add("pressed");
    //remove animation after a particular time
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);    //after 100ms => 0.1s animation will be removed 
}