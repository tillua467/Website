async function loadDevices() {
    const container = document.getElementById("device-list");

    try {
        const response = await fetch("datas/devices.json");
        const devices = await response.json();

        // Save the device data globally for search use
        window.deviceData = devices;

        // Loop through devices and add them to the page
        devices.forEach(device => {
            const div = document.createElement("div");
            div.className = "device";
            div.setAttribute("data-name", device.name);

            div.innerHTML = `
                <img src="${device.image}" alt="${device.name}">
                <div class="device-name">${device.name}</div>
                <div class="maintainer">
                    <a href="${device.maintainer.link}" target="_blank">Maintainer: ${device.maintainer.name}</a>
                </div>
                <a href="${device.download}" download>Download</a>
            `;

            container.appendChild(div);
        });

    } catch (error) {
        console.error("Failed to load devices:", error);
        container.innerHTML = `<p>Error loading device list.</p>`;
    }
}

window.addEventListener("DOMContentLoaded", loadDevices);
