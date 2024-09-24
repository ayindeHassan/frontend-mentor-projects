//line of codes to change the banner image when screen size is above 767px
let bannerImage = document.querySelector('.display-img-container img');

// Function to change the image source based on screen width
function updateImageSource() {
    //const img = document.getElementById('responsiveImage');
    let screenWidth = window.innerWidth;

    if (screenWidth >= 768) {
        bannerImage.src = './images/image-hero-desktop.png'; // Larger image for wider screens
    } else {
        bannerImage.src = './images/image-hero-mobile.png'; // Smaller image for smaller screens
    }
}

// Run the function when the page loads
window.onload = updateImageSource();

// Run the function whenever the window is resized
window.onresize = updateImageSource();


let dropDownBtn = document.querySelectorAll('.dropdown-container p');

let dropDownContent = document.querySelectorAll('.dropdown-content');

let dropdownImg = document.querySelectorAll('.dropdown-container #dropdown-arrow');
console.log(dropdownImg)


dropDownBtn.forEach((btn, index) => {
    btn.addEventListener('click', ()=>{
        dropDownContent[index].classList.toggle('dropdown-content');


        if(dropDownContent[index].classList.contains('dropdown-content')){
            dropdownImg[index].src = './images/icon-arrow-down.svg';
        }
        else{ 
            dropdownImg[index].src = './images/icon-arrow-up.svg';
        }
    })

});


// line of codes to open or close the navigation panel at mobile screen. 

let openNavbar = document.querySelector('.open-navbar');
let closeNavbar = document.querySelector('.close-navbar');
let navbar = document.querySelector('.navigation-section nav');
let body = document.querySelector('body');


openNavbar.addEventListener('click', () => {
    navbar.style.display = "block";
    body.style.backgroundColor = 'hsl(0, 0%, 8%)';
    navbar.classList.add('fade-in');
    navbar.classList.remove('fade-out');
})
closeNavbar.addEventListener('click', () =>{
    navbar.classList.remove('fade-in');
    navbar.classList.add('fade-out');

    // Set a delay to hide the navbar after the fade-out animation finishes
    setTimeout(() => {
        navbar.style.display = 'none';
        body.style.backgroundColor = 'hsl(0, 0%, 98%)';
    }, 500); // Match this to the duration of the fade-out animation (0.5s)
})