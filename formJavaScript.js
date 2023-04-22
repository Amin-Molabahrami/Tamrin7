// This is a JavaScript code snippet that performs client-side form validation.

// It selects the HTML form and input fields using `querySelector` function, and attaches a submit event listener to the form element. When the form is submitted, the event listener executes the event handler function.

// The event handler function prevents the default form submission behavior using `preventDefault` function and then calls three validation functions: `validateEmail`, `validatePassword`, and `validatePhone`.

// If any of the validation functions fail, an error message is displayed in the HTML element with the ID `message` and the function returns. 

// If all validations pass, the form is submitted using the `submit` function.

// The `validateEmail`, `validatePassword`, and `validatePhone` functions use regular expressions to validate the email address, password, and phone number input fields respectively.


// Select the form element using its tag name
let form = document.querySelector('form');

// Select the input elements for email, password, and phone number using their IDs
let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');
let phoneInput = document.querySelector('#phone');

// Select the message element using its ID
let message = document.querySelector('#message');

// Add an event listener to the form that triggers when the submit button is clicked
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Check if the email address entered is valid using the validateEmail function
  if (!validateEmail(emailInput.value)) {
    message.innerHTML = 'Please enter a valid email address.';
    return;
  }

  // Check if the password entered is valid using the validatePassword function
  if (!validatePassword(passwordInput.value)) {
    message.innerHTML = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.';
    return;
  }

  // Check if the phone number entered is valid using the validatePhone function
  if (!validatePhone(phoneInput.value)) {
    message.innerHTML = 'Please enter a valid phone number.';
    return;
  }

  // If all validations pass, submit the form
  form.submit();
});

// Validate email address using regular expression
function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number
function validatePassword(password) {
  let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return re.test(password);
}

// Validate phone number using regular expression
function validatePhone(phone) {
  let re = /^\d{11}$/;
  return re.test(phone);
}