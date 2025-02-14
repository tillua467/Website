document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    // Toggle the 'active' class on the menu when the button is clicked
    menuToggle.addEventListener('click', function () {
    menu.classList.toggle('active');
    });
});
