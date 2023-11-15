// Lesson 03.08 - PROG

// Keyboard Events
/*
- The pressing of a key is a <span>keydown</span> event.
- The release of a key is a <span>keyup</span> event.
- As with any event, a keyboard event can call a function.
- Keyboard events are listened for by the document.
- Syntax: document.addEventListener('keyup', getKey)
- The event.key property returns the name of the key
- If the key is the one we are listening for, run some function
*/

// 1. Get the DOM elements: the body, the container, the two boxes in the upper corners for displaying output, and the spaceship 
const bod = document.querySelector('body');
const container = document.querySelector('div'); // 1st div is the container, so no ID is required to target it.
const keyBox = document.querySelector('#key-box');
const pinBox = document.querySelector('#pin-box');
const spaceship = document.getElementById('space-ship');

// 2. Set the left position of the spaceship to equal half the window width, minus half the width of the spaceship. This puts the spaceship is the middle of the screen to start:
let leftPos = window.innerWidth/2 - 128; // 128 is 1/2 ships width.


// set spaceship to middle of screen BUT this means spaceship will NOT appear centered because the ship starts at the middle.
spaceship.style.left = leftPos + 'px';

// 3. Set booleans to keep track of the font and dark mode states, which are toggled by pressing "f" and "d", respectively:
let isSerif = false;
let isDark = false;

// 4. Set the speed of the spaceship. Each time the left or right arrow is pressed, the spaceship
let speed = 20;

// 5. Have the document listen for the keyup event. On keyup, run a function that outputs the key and code to the keyBox. Since the event object is used by the function, pass the event object into the function as its argument. Since the function is so short, write it as an inline anonymous function, as opposed to an external, named function:
document.addEventListener('keyup', function(event) {
  keyBox.innerHTML = `Key: ${event.key}<br>Code: ${event.code}`;
});

// 6. Have document listen for the keydown event. When the event takes place 
document.addEventListener('keydown', onKeyPress) 
//-- which is when ANY key is pressed -- call the onKeyPress function.


// 7. Define the onKeyPress function, passing in the event object:
const hotKeys = ['c', 'd', 'p', 'n', 'f', 'ArrowLeft', 'ArrowRight'];

function onKeyPress(event) {
  // 8. Output the key and code that was pressed:
  // Check if the key is 'c', 'd', 'p', 'n' or the left or right arrow. 
  let k = event.key; 
  keyBox.innerHTML = `Key: ${event.key}<br>Code: ${event.code}`;
  // check if key pressed is NOT one of the keys we want have do something.
  // if(k != 'c' && k != 'd' && k != 'p' && k != 'n' && k != 'ArrowLeft' && k != 'ArrowRight') {
  // better: check if the hotKeys array includes the key that was pressed.
  // return every time a condition is false rather than run an else part.
  if(!hotKeys.includes(k)) { // if hotKeys array NOT includes key
    pinBox.textContent = `${k} is a dud`;
    return; // key pressed was a dud, so end function immediately
  }

  // setting random background color 

  // 9. Check if the key is "c" for "color", or if the spacebar was pressed:
  if(k == 'c') {
    // let R = Math.floor(Math.random()* 256);
    // let G = Math.floor(Math.random()* 256);
    // let B = Math.floor(Math.random()* 256);
    // bod.style.backgroundColor = `rgb(${R},${G},${B})`;
    // generate a rand hex color in two lines:
  
    // 10. Generate three integers in the 0-255 range
    // let r = Math.floor(Math.random() * 256**3).toString(16);
    // let randRGB = r // makes a base 16 (hex string) from the number
    // base10.toString(16) converts base10 number to hexadecimal
    let randHex = '#' +  Math.floor(Math.random() * 256**3).toString(16);
    bod.style.backgroundColor = randHex;
    // 16. Set the pinBox text and color to the random color:
    pinBox.textContent = randHex;
    pinBox.style.color = randHex;
    return;
  }
    
  // toggling between Dark Mode and Light Mode for the container
  if(k == 'd') {  // 17. Check if the key is "d" for "dark":
      if(!isDark) { // 18. If dark boolean is currently false:
        container.classList.remove('light-mode');
        container.classList.add('dark-mode');
        // container.className('container dark-mode'); // or
    } else { // it is currently dark mode
       container.classList.remove('dark-mode');
       container.classList.add('light-mode');
    }
    isDark = !isDark; // flip the boolean
    return;
  }
    

  // 23. Check if the key is "f" for "font":
  if(k == 'f') {  // 17. Check if the key is "d" for "dark":
    if(!isSerif) { // 18. If dark boolean is currently false:
      container.style.fontFamily = 'serif';
    } else {
     container.style.fontFamily = 'sans-serif';
  }
  isSerif = !isSerif; // flip the boolean
  return;
}

  // 29. Check if the key is "p" for "pin" or "n" for "number":
if(k == 'p' || 'n') {
  let randPin = '';
  let r = randPin = Math.floor(Math.random() * 10000); // 0-9999
  if(r == 0) {
    randPin = '0000';
  } else if(r < 10) {
    randPin = '000' + r;
  } else if(r < 100) {
    randPin = '00' + r;
  } else if(r < 1000) {
    randPin = '0' + r;
  } else {
    randPin = '' + r;
  }
  pinBox.textContent = randPin;
  return;
}

if(k == "ArrowLeft") {
  console.log('k:', k, 'leftPos:', leftPos);
  leftPos -= speed; // subtract 20 from the left pos
  spaceship.style.left = leftPos + 'px';
  return;
}
if(k == "ArrowRight") {
  console.log('k:', k, 'leftPos:', leftPos);
  leftPos += speed; // subtract 20 from the left pos
  spaceship.style.left = leftPos + 'px';
  return;
}

    // 30. Generate a random number in the 0-9999 range:
    // let r;

    // All pin numbers need to be four digits, so we need to add leading zero(es) to numbers in the 0-999 range.

    // 31. Declare a variable to store the pin as a string:
    // let pin;    

    // 32. If r is 0, set pin to be four zeroes:
  

    // 33. else if r is less than 10, add three leading zeroes:


    // 34. else if r is less than 100, add two leading zeroes:


    // 35. else if r is less than 1000, add one leading zero:


    // 36. else r is a four-digit number, so use r as the pin:
    

    // 37. Output the pin to the "pin box":

 
  // 38. If the Left Arrow was pressed:
        // OR: event.key == "ArrowLeft"

    // 39. If the spaceship isn't already all the way left:


      // 40. Reduce the leftPos value by the speed (default is 20):


      // 41. Move the spaceship left by the speed value:


  // 42. If the Right Arrow was pressed:
        // OR: event.key == "ArrowRight"

    // 43. If the spaceship isn't already all the way to the right (250px from the right end of the window):
  } // end onKeyPress() function

      // 44. Increase the leftPos value by the speed (default is 20):

      // 45. Move the spaceship right by the speed value:


  // 46. If the key pressed is NOT 'c', 'd', 'p', 'n', left arrow or right arrow


   // 47. Output a message to the pin box, so at least something happens:


/*
* Random Hex Color
- A base 10 number uses the digits 0123456789 only
- A base-16 value uses the digits 0123456789ABCDEF only
- A hexadecimal color is a base 16 value
- toString() method converts a number to a string 
- toString(16) converts a base 10 number to a base 16 string 
- there exist 16,777216 RGB colors (256 x 256 x 256)
- call toString(16) on an int from 0-16777215 to get a hex color
- Put '#' before the number to complete the hex color
*/

// 48. Declare a function that does ONE thing: makes a random hex color:


    // 49. Generate a random 16-digit float from 0-16777215
 
 
    // 50. Make a base-16 hexadecimal color from the random number and return it


    // 51. return the hexadecimal color value



 // Switch to using the getRandHexColor function:

 // 52. Comment out steps 10-13.

 // 53. In step 14, set randHex = getRandHexColor()

 // 54. In steps 15 and 16, set all three values to randHex.
