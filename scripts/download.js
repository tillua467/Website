document.addEventListener('DOMContentLoaded', function () {
    // Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    }

    const searchInput = document.getElementById('searchInput');
    const deviceList = document.getElementById('device-list');

    if (searchInput && deviceList) {
        searchInput.addEventListener('input', function () {
            const filter = searchInput.value.toLowerCase();

            // Get devices from the global window object
            const devices = window.deviceData || [];

            // Loop through all devices and apply filter
            Array.from(deviceList.getElementsByClassName('device')).forEach(function (device) {
                const deviceName = device.getAttribute('data-name') || "";
                const searchNames = devices.find(d => d.name === deviceName)?.['search-name'] || [];
                const matchesFilter = searchNames.some(searchTerm => searchTerm.toLowerCase().includes(filter));

                if (matchesFilter) {
                    device.style.display = "";
                } else {
                    device.style.display = "none";
                }
            });
        });
    }
});
