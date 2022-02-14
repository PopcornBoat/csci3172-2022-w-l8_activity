// Write the necessary JavaScript code to alter the CSS styles applied on this page based on a given condition
// Specifically, as a user clicks on an input control (e.g., First Name), the border and background colour for 
// that input should change, the styling of the input should revert to its original colours as the user moves
// on to the next input control

// You will also need to extend the CSS code provided in order to provide the CSS stylings to alter the look of the input controls.

// Create a function to add the class name 'active' to the selected input element
function inFocus(temp) {
    temp.classList.add('active');
}

// Create a function to remove the class name 'active' to the non-selected input element
function outFocus(temp) {
    temp.classList.remove('active');
}

// Create some variables to store the HTML elements you want to style
// Use the DOM to select each individual input element 
var firstname = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
// continue adding password and email fields



// Add the event listeners to allow you to specify the event you are listening for
// call the function you want to invoke with the required parameters
// remember that an event listerner always starts as false
firstname.addEventListener('focus', function () { inFocus(firstName) }, false);
lastName.addEventListener('focus', function () { inFocus(lastName) }, false);


firstname.addEventListener('blur', function () { outFocus(firstName) }, false);
lastName.addEventListener('blur', function () { outFocus(lastName) }, false);


// Complete the function validate()
// Create several regular expressions to match the requirement indicated in 
// the index.html file you have been provided, using the regular expressions 
// you created, test each input value.
// If all input values passed the validation test, display an alert message
// that reads "The form is successfully submitted"
// Otherwise, display an alert message that reads "there are some errors in your form submission, please check them again to match the requirement.
// Use the DOM to access the values from each of the input 
// controls on your form and store them in a variable
// Continue store the input control values, for all the input controls on our form, in some variables
// Use the JS test( )method to check whether each input control 
// validates against its RegEx case.
// If it does then show an alert box with the message 'The form 
// is successfully submitted'.
// Otherwise, show an alert box with the message 
// There are some errors in your form submission, please check 
// them again to match the requirement' 
// BONUS: Use the JS preventDefault() function to prevent the form from 
// being submitted unless all fields have been validated

var form = document.getElementById("register");
function noSubmit(e) {
    e.preventDefault();
}
form.addEventListener("submit", noSubmit, false);

function validate() {
    var firstNameRegEx = /^[a-zA-Z]+([a-zA-Z ]+)*$/;
    var lastNameRegEx = /^[a-zA-Z-']+([a-zA-Z-' ]+)*$/;
    var emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
    var pwRegEx = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
    // continue with the other regular expressions

    var firstNameValue = document.getElementById('firstName').value;
    var lastNameValue = document.getElementById('lastName').value;
    var emailValue = document.getElementById('email').value;
    var passwordValue = document.getElementById('password').value;
    //continue with the other input controls

    let flag = true;
    if (!firstNameRegEx.test(firstNameValue)) {
        flag = false;
        form.children.firstName.value = "";
        form.children.firstName.placeholder = "something wrong on first name";
    }
    if (!lastNameRegEx.test(lastNameValue)) {
        flag = false;
        form.children.lastName.value = "";
        form.children.lastName.placeholder = "something wrong on last name";
    }
    if (!emailRegEx.test(emailValue)) {
        flag = false;
        form.children.email.value = "";
        form.children.email.placeholder = "something wrong on email";
    }
    if (!pwRegEx.test(passwordValue)) {
        flag = false;
        form.children.password.value = "";
        form.children.password.placeholder = "something wrong on password";
    }
    if(flag === true) {
        form.removeEventListener("submit", noSubmit, false);
        alert('The form has been submitted successfully');
    }

}




