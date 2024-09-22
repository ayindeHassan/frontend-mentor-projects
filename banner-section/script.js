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
