////////////////////////////////////////////// PAGE ELEMENTS LOADING //////////////////////////////////////////////

/// NAVLINKS///
const navlink_componentseditor = document.getElementById("navlink_componentseditor");

/// DEVICES SELECTORS ///
const device_iphonese = document.getElementById("device_iphonese");

/// IFRAME ///
const range_reactivity = document.getElementById("range_reactivity");
const iframe = document.getElementById("iframe");

/// LEFT PANEL ///
const leftpanel_edition = document.getElementById("leftpanel_edition");

/// STRUCTS & VARS ///
const devices = {
    "computer":{"w": 1300, "h":750},
    "iphonese":{"w": 375, "h": 667},
    "iphonexr":{"w": 414, "h": 896},
    "iphone12pro":{"w": 390, "h": 844},
    "pixel5":{"w":393, "h": 851},
    "samsunggalaxy8splus": {"w": 360, "h": 740},
    "samsunggalaxys20ultra": {"w": 412, "h": 915},
    "ipadair": {"w": 820, "h": 1180},
    "ipadmini": {"w": 768, "h": 1024},
    "surfacepro7": {"w": 912, "h": 1368},
    "surfaceduo": {"w": 540, "h": 720},
    "galaxyfold": {"w": 280, "h": 653},
    "samsunggalaxya5171": {"w": 412, "h": 914},
    "nesthub": {"w": 1024, "h": 768},
    "nesthubmax": {"w": 1280, "h": 800}
}

iframe.style.width = devices["computer"].w + "px";

/// PREPARE DEVICES SIZES ///
const allDevices = document.querySelectorAll("deviceselector");

document.addEventListener("DOMContentLoaded", ()=>{
    allDevices.forEach(device=>{
        const deviceName = device.getAttribute("name");
        device.addEventListener("click", ()=>{
            iframe.style.width = `${devices[deviceName].w}px`;
            iframe.style.height = `650px`;
            range_reactivity.value = `${devices[deviceName].w}`;
        })
    })
})

/////////////////////////////////////// EVENTS LISTENERS ///////////////////////////////////////

/// NAVLINKS ///
navlink_componentseditor.addEventListener("click", ()=>{
    window.location.href = "../index.html";
})

/// IFRAME ///
range_reactivity.addEventListener("input", ()=>{
    iframe.style.width = `${range_reactivity.value}px`;
})

/// LEFT PANEL ///
window.addEventListener("resize", ()=>{
    if ((window.innerWidth)<iframe.offsetWidth+350){
        console.log("mdr");
    }
})