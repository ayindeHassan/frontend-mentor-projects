let submitBtn;
let ratingNumber;
let afterRatingHeader;
let numberRating;
let afterRatingDisplay;
let beforeRatingDisplay;
submitBtn = document.querySelector('button');
ratingNumber = document.querySelectorAll('.rating-number li');
afterRatingHeader = document.querySelector('.after-rating-header img');
numberRating = document.querySelector('.number-rating');
afterRatingDisplay = document.querySelector('.after-rating-display');
beforeRatingDisplay = document.querySelector('.before-rating-display');

function enableSubmit(currentRating,previousRatingElement){
    ratingNumber.forEach((number) =>{
        number.addEventListener('click',() =>{
            // Remove the class from the previously selected number
            if(previousRatingElement){
                previousRatingElement.classList.remove('selected');
            }

            number.classList.add('selected');

            // Add the class to the currently clicked number
            currentRating = number.textContent;
            previousRatingElement = number;

    
            if(Number(currentRating) > 0){
                submitBtn.removeAttribute('disabled');
            }
        })
    })

    submitBtn.addEventListener('click',() =>{
        beforeRatingDisplay.style.display = 'none';
        afterRatingDisplay.style.display = 'block';
        numberRating.textContent = currentRating;
    })
}

enableSubmit(0,null);