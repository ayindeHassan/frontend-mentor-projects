//selecting the form element
let contactForm = document.querySelector('#Contact-form');
let submitButton = document.querySelector('#submit-btn');

//selecting the error message elements
let firstNameError = document.querySelector('#first-name-error');
let lastNameError = document.querySelector('#last-name-error');
let emailError = document.querySelector('#email-error');
let radioBtnError = document.querySelector('#radio-btn-error');
let textAreaError = document.querySelector('#textarea-error');
let checkBoxError = document.querySelector('#checkbox-error');

//selecting input elements
let firstNameInput = document.querySelector("#first-name-input");
let lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.getElementById('email-input');
const radioBtnInput = document.querySelectorAll('.radio-btn-input');
const textareaInput = document.getElementById('textarea-input');
const checkboxInput = document.getElementById('checkbox-input');

const submitMsg = document.querySelector('.submit-msg');


// Add event listener to the form submission
contactForm.addEventListener('submit', function (e) {
    let noError = true;

    //validate the first name input
    if (firstNameInput.value === '') {
        noError = false;
        firstNameError.classList.add('show-error-message');
        firstNameInput.style.outline = '1px solid red';
    }

    //validate the last name input
    if (lastNameInput.value === '') {
        noError = false;
        lastNameError.classList.add('show-error-message');
        lastNameInput.style.outline = '1px solid hsl(0, 66%, 54%)';
    }

    //validate the email input
    if(emailInput.value === '' || !/^\S+@\S+\.\S+$/.test(emailInput.value)){
        noError = false;
        emailError.classList.add('show-error-message');
        emailInput.style.outline = '1px solid hsl(0, 66%, 54%)';
    }
    
    //validate if any radio button input is selected
    let isRadioChecked = false;
    radioBtnInput.forEach(function(radioButton) {
        if (radioButton.checked) {
            isRadioChecked = true;
        }
    });
    if (!isRadioChecked) {
        noError = false;
        radioBtnError.classList.add('show-error-message');  // Show error message
        // radioBtnInput.style.outline = '1px solid hsl(0, 66%, 54%)';
    } else {
        radioBtnError.style.display = 'none';  // Hide error message if valid
    }

    //validate the textarea input
    if(textareaInput.value == ""){
        noError == false;
        textAreaError.classList.add('show-error-message');
        textareaInput.style.outline = '1px solid hsl(0, 66%, 54%)';
    }

    //validate the checkbox input(must be checked)
    isBoxChecked = false;
    if(checkboxInput.checked == isBoxChecked){
        noError = false;
        checkBoxError.classList.add('show-error-message');
        isBoxChecked = true;
    }

    // If there are no errors, submit the form
    if(noError){
        e.preventDefault();
        submitMsg.classList.add('animation'); // Add the animation class to show the message

        setTimeout(function(){
            submitMsg.classList.remove('animation'); // Remove animation class after it's done
            contactForm.submit(); // Submit the form
        }, 2000);
    }
    else{
        e.preventDefault();
    }
});

//remove error message when first name input is focused
firstNameInput.addEventListener('focus', () => {
    firstNameError.classList.remove('show-error-message');
    firstNameInput.style.outline = '1px solid hsl(169, 82%, 27%)'
});

//remove error message when last name input is focused
lastNameInput.addEventListener('focus', () => {
    lastNameError.classList.remove('show-error-message');
    lastNameInput.style.outline = '1px solid hsl(169, 82%, 27%)';
});

//remove error message when email input is focused
emailInput.addEventListener('focus', () => {
    emailError.classList.remove('show-error-message');
    emailInput.style.outline = '1px solid hsl(169, 82%, 27%)';
})


//remove error message when radio button is selected
radioBtnInput.forEach(function(radioButton) {
    radioButton.addEventListener('change', () =>{
    radioBtnError.style.display = 'none';
    })
});

//remove error message when textarea is focused
textareaInput.addEventListener('focus',() => {
    textAreaError.classList.remove('show-error-message');
    textareaInput.style.outline = '1px solid hsl(169, 82%, 27%)';
})

// Hide error message when checkbox is checked
checkboxInput.addEventListener('change', () =>{
    checkBoxError.style.display = 'none';    
})

//Event listener to reset the from if the page is loaded from cache(Back button)
window.addEventListener('pageshow', function(e) {
    if (e.persisted || (window.performance && window.performance.navigation.type === 2)) {
        // Reset the form when the page is shown after back button is clicked
        location.reload(); // This clears all form values
    }
});