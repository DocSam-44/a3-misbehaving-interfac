// *I googled how to make a button that avoids the mouse but this was the result and I am not sure to develop something like this using something with basic guides like W3
const button = document.getElementById('runaway-btn');
const triggerDistance = 100; // Radius in pixels where the button starts fleeing

document.addEventListener('mousemove', (event) => {
    // Get the center position of the button
    const btnRect = button.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    // Calculate distance between cursor and button center
    const distX = event.clientX - btnCenterX;
    const distY = event.clientY - btnCenterY;
    const distance = Math.hypot(distX, distY);

    // Trigger dodge if cursor gets too close
    if (distance < triggerDistance) {
        // Safe boundaries to keep the button completely on screen
        const maxTop = window.innerHeight - btnRect.height;
        const maxLeft = window.innerWidth - btnRect.width;

        // Generate coordinates (ensures values stay between 0 and max)
        const newTop = Math.max(0, Math.min(Math.random() * maxTop, maxTop));
        const newLeft = Math.max(0, Math.min(Math.random() * maxLeft, maxLeft));

        // Apply new smooth position
        button.style.top = `${newTop}px`;
        button.style.left = `${newLeft}px`;
    }
});

// *the following was an attempt to make a button that turns to say error after you click it

// function myFunction() {
//   document.getElementById("demo").innerHTML = "Error";
// }

// *this code creates the button that turns into an error after being clicked
const btn = document.getElementById('myButton');

btn.addEventListener('click', function () {
    btn.textContent = 'Error ;p';
});

// !following class instructions
// document.querySelector("p").innerHTML="bob is a minion"
//* this overwrites the first paragraph
// document.querySelector("#p2").innerHTML="bob is a minion"
// *instead of modifying the first <p> element in the doc, modify the element witht he ID of p2
// function myfirstfunction(){
// document.querySelector("#p2").innerHTML="bob likes fred"
// }

// myfirstfunction()
// !components of a function:
// function:tell javascript you are making a new function
// myfirst function:name if function that i gave it
// ():paramenters
// {}:function body. what it does

// document.querySelector("p").addEventListener("click", myfirstfunction)



function mysecondfunction() {
    document.querySelector("#button").innerHTML = "Oh no!"
    document.querySelector("#woohoo").innerHTML = "If it isn't working, please don't hit the button above"
}


// document.querySelector("#woohoo").addEventListener("click", mysecondfunction)


// function myFunction() {
//     document.getElementById("woohoo").innerHTML = "blah blah blah, i do not say blah blah blah";
// }

// function bob(){
// document.querySelector("p").innerHTML="bob likes fred"
// }
// bob()

// document.querySelector("p").addEventListener("click", bob)


// document.querySelector("p").addEventListener("click", bob)

// !functional version
// function mysecondfunction() {
//   document.querySelector("#woohoo").innerHTML = "bob likes fred";
// }

// document
//   .querySelector("#woohoo")
//   .addEventListener("click", mysecondfunction);

// function myFunction() {
//   document.getElementById("woohoo").innerHTML =
//     "blah blah blah, i do not say blah blah blah";
// }

// console.log(4+7-10)


const frog = document.getElementById("jerry");
frog.style.fontSize = "40px";

let count = 0;

setInterval(function() {
    if (count < 10) {
        frog.innerHTML += "ha";
    count++;
} else {
// *this is what cues the code to clear and repeat from the start after ten repeats of "ha"
    frog.innerHTML = "";
        count = 0;
    }
}, 1000);


const slider = document.getElementById("brightness");

slider.addEventListener("input", function () {
    document.body.style.filter =
        `brightness(${slider.value}%)`;
});








// !this works
// const cake = document.getElementById("jerry");

// let size = 20;

// setInterval(function() {
//   cake.innerHTML += "Error";

//   size += 2;
//   cake.style.fontSize = size + "px";
// }, 1000);





// .style.fontSize="15px|initial|inherant";


// ; Source - https://stackoverflow.com/a/22995759
// ; Posted by Patrick Evans, modified by community. See post 'Timeline' for change history
// ; Retrieved 2026-05-19, License - CC BY-SA 3.0

// (function(){
//    var timer = null;
//    $("h1").hover(function(){
//       timer = setInterval(function(){
//          var ele = $("fat");
//          var size = parseInt(ele.css("font-size"));
//          if(size>=255){ 
//             clearInterval(timer); 
//             return;
//          }
//          ele.css("font-size",(size+1)+"pt"):
//       },200);
//    },function(){
//       clearInterval(timer);
//       $("#fat").delay(200).css("font-size","12pt");
//    });
// })();

// let size = 16; // Initial font size in pixels
// const element = document.getElementById("textElement");

// const timer = setInterval(() => {
//     size += 1; // Increase size by 1px
//     element.style.fontSize = size + "px";

//     // Optional: Stop when a certain size is reached
//     if (size >= 50) {
//         clearInterval(timer);
//     }
// }, 100); // Runs every 100 milliseconds