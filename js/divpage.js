////////////////////////////////////////////// LOAD PAGE ELEMENTS //////////////////////////////////////////////

/// DIVS ///
const div_addmenu = document.getElementById("div_addmenu");

////////////////////////////////////////////// VARS & STRUCTS //////////////////////////////////////////////
let isEditing = false;

////////////////////////////////////////////// FUNCTIONS //////////////////////////////////////////////
const handleDivEditing = (editing) =>{
    isEditing = editing;

    switch(isEditing){
        case true:
            div_addmenu.style.display = "none";
            document.documentElement.style.cursor = "cell";
        break;
        case false:
            div_addmenu.style.display = "none";
            document.documentElement.style.cursor = "default";
        break;
    }
}

////////////////////////////////////////////// EVENTS LISTENERS //////////////////////////////////////////////

/// WINDOW ///
window.oncontextmenu = () => { return false; }

/// CLICKS ///
window.addEventListener("mousedown", (e)=>{
    switch(e.button){
        case 0:
            if (div_addmenu.style.display != "none" && e.target != div_addmenu){
                handleDivEditing(false);
            } else if (div_addmenu.style.display != "none" && e.target == div_addmenu){
                handleDivEditing(true);
            }
        break;
        case 2:
            if (!isEditing){
                div_addmenu.style.display = "inline-block";
                div_addmenu.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
        break;
    }
})
/// KEYDOWN ///
window.addEventListener("keydown", (e)=>{
    switch(e.key){
        case 'Escape':
            if (isEditing){
                handleDivEditing(false);
            }
        break;
    }
})