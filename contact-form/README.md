
# Contact Form Project

## Task

The task is to build out a contact form . Pay particular attention to making this form accessible.

Your users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- The validation message should disappear when any of the form element is on focus after the display of the validation  message
- See hover and focus states for all interactive elements on the page.
- The single web page must be responsive starting from the **screen size 320px**
- The form should refresh when the back arrow of the browser is clicked

## Project Deployment

The project url is:

## Built With

- Semantic HTML5 markup
- CSS custom properties
- Flex box
- JavaScript
- Mobile-first workflow

### Concept Learned

- Css
    . keyframe
    . @import rule
    . media query
- javaScript
    . setTimeout function
    . eventListener
    . forEach loop
    . form submit event

```` javaScript
window.addEventListener('pageshow', function(e) {
    if (e.persisted || (window.performance && window.performance.navigation.type === 2)) {
        // Reset the form when the page is shown after back button is clicked
        location.reload(); // This clears all form values
    }
});
````
