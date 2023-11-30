"use strict";

// NEED TO DO DARK MODE
// js for dark mode
function toggleDarkMode() {
    let element = document.body;
    element.classList.toggle("darkMode");
}

// add display
// add all items to item attribute and include the name to display as well as the image and description
let items ={
  strwbrryClip:{
    name: 'Strwbrry Clip',
    image: 'strwbrrydrmz_clothing-01.png',
    details: 'The strwbrry clip is a handmade item from charms and ribbon intended for use in your hair!'
  },
  pearlEarring:{
    name: 'Pearl Earrings',
    image: 'pearlearrings-02.png',
    details: 'The pearl earrings are handmade from pearls and gold hoops with a bow charm attached for a unique girly look.'
  },
  heartEarring:{
    name: 'Heart Earrings',
    image: 'heartearrings-03.png',
    details: 'The heart earrings are handmade from pearls and gold chain with heart charms attached for a more fun look.'
  },
  lpCover:{
    name: 'License Plate Cover',
    image: 'licenseplatecover-04.png',
    details: 'The license plate cover is bedazzled all over with pink jewels and includes two large strwbrry charms to drive in style.'
  },
  tankTop:{
    name: 'Signature Tank Top',
    image: 'tanktop-05.png',
    details: 'The signature tank top is a lacy pink tank top decorated with a bow with the Strwbrry Drmz logo printed on the front.'
  },
  phoneCase:{
    name: 'Strwbrry Phone Case',
    image: 'phonecase-06.png',
    details: 'The strwbrry phone case is a pink phone case for an iphone 13/14 that has strwbrry charms.'
  }
}
// create a function to display each item on the site as they are clicked by the buttons
function showItem(itemId){
  // grabs individual items from declared variable
  let item = items[itemId];
  document.getElementById('itemName').textContent = item.name;
  document.getElementById('itemImage').src = item.image;
  document.getElementById('itemDetails').textContent = item.details;
}
// by default show the first item
showItem('strwbrryClip');


// add game play
// add function to play guessing game
function guessingGame(){
  let userGuess = document.getElementById('random').value;
  // uses random function to generate random number 1-10
  let randomNum = Math.floor(Math.random() * 10) + 1;
// store result as empty
  let result = "";
  // conditional to test if user guess is equal to random generated number and then display text
  if (userGuess == randomNum){
    result = "  Woot Woot! You're a lucky winner! <br>Your number: " + userGuess + ", Generated Number: " + randomNum;
  }else{
    result= "Awh bummer, feel free to try again! <br>Your number: " + userGuess + ", Generated Number: " + randomNum;
  }
  if (userGuess > 10 || userGuess < 1){
    result= "Please input a number between 1 and 10!";
  }
  // displays the result of the conditional
  document.getElementById("reveal").innerHTML = result;

}


// form validation
function validateForm(event){
  event.preventDefault();
// declare and grab variable values from form
  let fullName = document.getElementById("fName");
  let phone = document.getElementById("phone");
  let email = document.getElementById("email");
  let contactPref = document.querySelector('input[name="contact-pref"]:checked').value;
  let message = document.getElementById("message").value;

// variable to tell user that they are submitting what they inputted
  let confirm= document.getElementById("confirm");
// hides results for now
  confirm.classList.add("hidden");
// regular expressions for email,phone and name
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
  let nameRegex = /^[a-z ,.'-]+$/i;
  let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

// hide errors for inputs
  fullName.nextSibling.classList.add("hidden");
  email.nextSibling.classList.add("hidden");
  phone.nextSibling.classList.add("hidden");

  confirm.innerHTML = "";

  let isValid= true;

// conditional if full name is not inputted correctly
  if(!(nameRegex.test(fullName.value))){
    // change our boolean flag because the form is not valid
    isValid = false;
    // add error class to input
    fullName.classList.add("error");
    // display error message for user about this input
    fullName.nextElementSibling.classList.remove("hidden");
  }

  // testing if email inputted correctly and if user checked that box
  if(contactPref === document.getElementById("pref-email").value &&!(emailRegex.test(email.value))){
    // change our boolean flag because the form is not valid
    isValid = false;
    // add error class to input
    email.classList.add("error");
    // display error message for user about this input
    email.nextElementSibling.classList.remove("hidden");
  }
  // testing if phone number is inputted correctly and user checked phone preference
  if(contactPref === document.getElementById("pref-phone").value && !(phoneRegex.test(phone.value))){
    // change our boolean flag because the form is not valid
    isValid = false;
    // add error class to input
    phone.classList.add("error");
    // display error message for user about this input
    phone.nextElementSibling.classList.remove("hidden");
  } 
  if(message === ""){
    isValid= false;
    message.classList.add("error");
    message.nextElementSibling.classList.remove("hidden");
  }
  // results if form is valid
  if (isValid){
  
    confirm.classList.remove("hidden");
// shows user what they inputted
    confirm.innerHTML = "You entered:<br> Full Name: " + fullName.value + "<br>Phone: " + phone.value + "<br>Email: " + email.value + "<br>Message: " + message;

    // resets values for next time
    fullName.value= "";
    phone.value= "";
    email.value= "";
    message= "";
  
    // hides error messages if any
    fullName.nextSibling.classList.add("hidden");
    email.nextSibling.classList.add("hidden");
    phone.nextSibling.classList.add("hidden");
    message.nextSibling.classList.add("hidden");
  }
  
}
document.getElementById("userForm").addEventListener("submit", validateForm);


