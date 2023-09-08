/// PAGE PARAMETERS LOADING ///

/// NAVLINKS///
const navlink_componentseditor = document.getElementById("navlink_componentseditor");

/// DEVICES SELECTORS ///
const device_iphonese = document.getElementById("device_iphonese");

/// IFRAME ///
const iframe = document.getElementById("iframe");

/// STRUCTS & VARS ///
const devices = {
    "iphonese":{"w": 375, "h": 667},
    "iphonexr":{"w": 414, "h": 896},
    "iphone12pro":{"w": 390, "h":844}
}

/// PREPARE DEVICES SIZES ///
const allDevices = document.querySelectorAll("deviceselector");

document.addEventListener("DOMContentLoaded", ()=>{
    allDevices.forEach(device=>{
        const deviceName = device.getAttribute("name");
        device.addEventListener("click", ()=>{
            iframe.style.width = `${devices[deviceName].w}px`;
            iframe.style.height = `${devices[deviceName].h}px`;
            console.log(devices[deviceName].w)
        })
    })
})

/////////////////////////////////////// EVENTS LISTENERS ///////////////////////////////////////

/// NAVLINKS ///
navlink_componentseditor.addEventListener("click", ()=>{
    window.location.href = "../index.html";
})
