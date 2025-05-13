document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    /* --- Screenshot Slider Functionality --- */
    const screenshotImg = document.getElementById('screenshot');
    const screenshots = ['ss1.jpg', 'ss2.jpg', 'ss3.jpg'];
    let currentIndex = 0;

    function nextScreenshot() {
        currentIndex = (currentIndex + 1) % screenshots.length;
        screenshotImg.src = 'images/' + screenshots[currentIndex];
    }

    const mobileInner = document.querySelector('.mobile-inner');
    mobileInner.addEventListener('click', nextScreenshot);

    /* --- Back-to-Top Button Functionality --- */
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
