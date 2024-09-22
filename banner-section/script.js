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

let dropdownImg = document.querySelectorAll('.dropdown-container img');
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