document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function () {
    menu.classList.toggle('active');
    });

    /* --- Screenshot Slider Functionality --- */
    const screenshotImg = document.getElementById('screenshot');
    // Array of screenshot
    const screenshots = ['ss1.jpg', 'ss2.jpg', 'ss3.jpg'];
    let currentIndex = 0;

    // Function to change to the next screenshot
    function nextScreenshot() {
    currentIndex = (currentIndex + 1) % screenshots.length;
    screenshotImg.src = 'images/' + screenshots[currentIndex];
    }

    // Listen for clicks on the mobile screen area to change the screenshot
    const mobileInner = document.querySelector('.mobile-inner');
    mobileInner.addEventListener('click', nextScreenshot);
});
