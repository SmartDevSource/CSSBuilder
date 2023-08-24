import { Widgets } from "./widgets.js";

const widgets = new Widgets();

////////////////// PARAMETERS //////////////////
const range_fontsize = document.getElementById("range_fontsize");
const range_padding = document.getElementById("range_padding");
const range_margin = document.getElementById("range_margin");
const range_radius = document.getElementById("range_radius");
const range_radius_topleft = document.getElementById("range_radius_topleft");
const range_radius_topright = document.getElementById("range_radius_topright");
const range_radius_bottomleft = document.getElementById("range_radius_bottomleft");
const range_radius_bottomright = document.getElementById("range_radius_bottomright");

/// RAGE BORDERS ///
const range_borders = document.getElementById("range_borders");
const range_border_left = document.getElementById("range_border_left");
const range_border_top = document.getElementById("range_border_top");
const range_border_right = document.getElementById("range_border_right");
const range_border_bottom = document.getElementById("range_border_bottom");

/// RANGE SHADOW ///
const range_shadow_x = document.getElementById("range_shadow_x");
const range_shadow_y = document.getElementById("range_shadow_y");
const range_shadow_blur = document.getElementById("range_shadow_blur");

/// RANGE TEXT ///
const range_letters_spacing = document.getElementById("range_letters_spacing");
const range_outline_text = document.getElementById("range_outline_text");

/// LINKS ///
const link_radius = document.getElementById("link_radius");
const link_borders = document.getElementById("link_borders");
const link_colors = document.getElementById("link_colors");
const link_shadow = document.getElementById("link_shadow");
const link_remove_shadow = document.getElementById("link_remove_shadow");
const link_text = document.getElementById("link_text");

/// NAVLINKS ///
const navlink_parameters = document.getElementById("navlink_parameters");
const navlink_animations = document.getElementById("navlink_animations");

/// PARAMS ///
const params_radius = document.getElementById("params_radius");
const params_borders = document.getElementById("params_borders");
const params_colors = document.getElementById("params_colors");
const params_shadow = document.getElementById("params_shadow");
const params_text = document.getElementById("params_text");

/// PANELS ///
const panel_parameters = document.getElementById("panel_parameters");
const panel_animations = document.getElementById("panel_animations");

// CHECKBOXS ///
const checkbox_inset = document.getElementById("checkbox_inset");
const checkbox_bold = document.getElementById("checkbox_bold");
const checkbox_italic = document.getElementById("checkbox_italic");
const checkbox_underlined = document.getElementById("checkbox_underlined");
const checkbox_linear_background = document.getElementById("checkbox_linear_background");

const text_widget = document.getElementById("text_widget");
const classname_widget = document.getElementById("classname_widget");

/// MAIN COLORS ///
const color_text = document.getElementById("color_text");
const color_background = document.getElementById("color_background");

/// COLORS BORDERS ///
const color_borders = document.getElementById("color_borders");
const color_border_left = document.getElementById("color_border_left");
const color_border_top = document.getElementById("color_border_top");
const color_border_right = document.getElementById("color_border_right");
const color_border_bottom = document.getElementById("color_border_bottom");

/// COLORS SHADOW ///
const color_shadow = document.getElementById("color_shadow");

/// COLOR TEXT ///
const color_outline_text = document.getElementById("color_outline_text");
const color_gradient_first = document.getElementById("color_gradient_first");
const color_gradient_second = document.getElementById("color_gradient_second");
const span_arrow_linear_gradient = document.getElementById("span_arrow_linear_gradient");

////////////////////////////////// CODE //////////////////////////////////
const code_css = document.getElementById("code_css");
const code_html = document.getElementById("code_html");
const copy_css = document.getElementById("copy_css");
const copy_html = document.getElementById("copy_html");

////////////////////////////////// COMPOSANTS //////////////////////////////////
const button_cstm = document.getElementById("button_cstm");

const currentWidget = {name: "button", widgetCode: widgets.widget};
const widgetsList = {"button": button_cstm};

////////////////////////////////// STRUCTS AND VARS ///////////////////////////
const ignoreList = "0px solid";
let currentArrowLinearGradient = 0;
const arrowsLinearGradient = {0: 180, 1: 270, 2: 0, 3: 90};

////////////////////////////////// FUNCTIONS //////////////////////////////////
const refreshWidget = () =>{
    let cssTextArea = '';
    let cssTextCode = '';

    cssTextArea = currentWidget.widgetCode.classname + '\n';
    for(const property in currentWidget.widgetCode.baseCode){
        if (currentWidget.widgetCode.baseCode[property].includes(ignoreList) && currentWidget.widgetCode.baseCode[property][0] == '0'){
            continue;
        }
        if (currentWidget.widgetCode.baseCode[property] == "0px;" || currentWidget.widgetCode.baseCode[property] == ''){
            continue;
        }
        cssTextArea+= `  ${property} : ${currentWidget.widgetCode.baseCode[property]}\n`;
        cssTextCode+= `${property} : ${currentWidget.widgetCode.baseCode[property]}`;
    }

    cssTextArea += '}';
    code_css.textContent =  cssTextArea;

    widgetsList[currentWidget.name].style.cssText = cssTextCode;

    let htmlTextArea = currentWidget.widgetCode.html;
    code_html.textContent = htmlTextArea;
}

const updateShadow = () =>{
    currentWidget.widgetCode.baseCode["box-shadow"] = `${range_shadow_x.value}px ${range_shadow_y.value}px ${range_shadow_blur.value}px ${color_shadow.value} ${checkbox_inset.checked ? "inset" : ""};`
    widgetsList[currentWidget.name].style.boxShadow = currentWidget.widgetCode.baseCode["box-shadow"];
    refreshWidget();
}

const removeShadow = () =>{
    currentWidget.widgetCode.baseCode["box-shadow"] = '';
    widgetsList[currentWidget.name].style.boxShadow = currentWidget.widgetCode.baseCode["box-shadow"];
    refreshWidget();
}

const rotateLinearGradient = () =>{
    let direction = '';

    switch(currentArrowLinearGradient){
        case 0:
            direction = "to left,";
        break;
        case 1:
            direction = "to top,";
        break;
        case 2:
            direction = "to right,";
        break;
        case 3:
            direction = "to bottom,";
        break;
    }

    if (checkbox_linear_background.checked){
        currentWidget.widgetCode.baseCode["background-color"] = ``;
        widgetsList[currentWidget.name].style.backgroundColor = currentWidget.widgetCode.baseCode["background-color"];
        currentWidget.widgetCode.baseCode["background"] = `linear-gradient(${direction} ${color_gradient_first.value}, ${color_gradient_second.value});`;
        widgetsList[currentWidget.name].style.background = currentWidget.widgetCode.baseCode["background"];
    } else {
        currentWidget.widgetCode.baseCode["background"] = '';
        widgetsList[currentWidget.name].style.background = '';
        currentWidget.widgetCode.baseCode["background-color"] = `${color_background.value};`;
        widgetsList[currentWidget.name].style.backgroundColor = currentWidget.widgetCode.baseCode["background-color"];
    }

    refreshWidget();
}

////////////////////////////////// EVENTS LISTENERS //////////////////////////////////

//// NAVLINKS CLICKS ////

navlink_parameters.addEventListener("click", ()=>{
    panel_parameters.style.display = "block";
    panel_animations.style.display = "none";
})

navlink_animations.addEventListener("click", ()=>{
    panel_parameters.style.display = "none";
    panel_animations.style.display = "block";
})

//// COPY EVENTS /////
copy_css.addEventListener("click", ()=>{
    code_css.select();
    navigator.clipboard.writeText(code_css.textContent);
})

copy_html.addEventListener("click", ()=>{
    code_html.select();
    navigator.clipboard.writeText(code_html.textContent);
})

//// TEXT ////
link_text.addEventListener("click", ()=>{
    params_text.style.display == "flex" ? params_text.style.display = "none" : params_text.style.display = "flex";
})

range_letters_spacing.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["letter-spacing"] = `${range_letters_spacing.value}px;`;
    widgetsList[currentWidget.name].style.letterSpacing = currentWidget.widgetCode.baseCode["letter-spacing"];
    refreshWidget();
})

text_widget.addEventListener("input", ()=>{
    currentWidget.widgetCode.textContent = text_widget.value;
    widgetsList[currentWidget.name].textContent = text_widget.value;
    widgets.updateTextContent(currentWidget.name, text_widget.value);
    widgets.updateHtml();
    refreshWidget();
})

range_outline_text.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["-webkit-text-stroke"] = `${range_outline_text.value}px ${color_outline_text.value};`
    widgetsList[currentWidget.name].style.webkitTextStroke = currentWidget.widgetCode.baseCode["-webkit-text-stroke"];
    if (range_outline_text.value == 0){
        currentWidget.widgetCode.baseCode["-webkit-text-stroke"] = '';
    }
    refreshWidget();
})

checkbox_bold.addEventListener("click", ()=>{
    if (checkbox_bold.checked){
        currentWidget.widgetCode.baseCode["font-weight"] = 'bold;';
        widgetsList[currentWidget.name].style.fontWeight = currentWidget.widgetCode.baseCode["font-weight"];
    } else {
        currentWidget.widgetCode.baseCode["font-weight"] = '';
    }
    refreshWidget();
})

checkbox_italic.addEventListener("click", ()=>{
    if (checkbox_italic.checked){
        currentWidget.widgetCode.baseCode["font-style"] = 'italic;';
        widgetsList[currentWidget.name].style.fontStyle = currentWidget.widgetCode.baseCode["font-style"];
    } else {
        currentWidget.widgetCode.baseCode["font-style"] = '';
    }
    refreshWidget();
})

checkbox_underlined.addEventListener("click", ()=>{
    if (checkbox_underlined.checked){
        currentWidget.widgetCode.baseCode["text-decoration"] = 'underline;';
        widgetsList[currentWidget.name].style.fontStyle = currentWidget.widgetCode.baseCode["text-decoration"];
    } else {
        currentWidget.widgetCode.baseCode["text-decoration"] = '';
    }
    refreshWidget();
})

checkbox_linear_background.addEventListener("click", ()=>{
    rotateLinearGradient();
})

span_arrow_linear_gradient.addEventListener("click", ()=>{
    currentArrowLinearGradient++;
    if (currentArrowLinearGradient>3){
        currentArrowLinearGradient = 0;
    }
    span_arrow_linear_gradient.style.transform = `rotateZ(${arrowsLinearGradient[currentArrowLinearGradient]}deg)`;

    rotateLinearGradient();
})

//// BORDER RADIUS ////
link_radius.addEventListener("click", ()=>{
    params_radius.style.display == "flex" ? params_radius.style.display = "none" : params_radius.style.display = "flex";
})

range_radius.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border-radius"] = `${range_radius.value}px;`;
    widgetsList[currentWidget.name].style.borderRadius = currentWidget.widgetCode.baseCode["border-radius"];
    refreshWidget();
})

range_radius_bottomleft.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border-bottom-left-radius"] = `${range_radius_bottomleft.value}px;`;
    widgetsList[currentWidget.name].style.borderBottomLeftRadius = `${range_radius_bottomleft.value}px;`;
    refreshWidget();
})

range_radius_bottomright.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border-bottom-right-radius"] = `${range_radius_bottomright.value}px;`;
    widgetsList[currentWidget.name].style.borderBottomRightRadius = `${range_radius_bottomright.value}px;`;
    refreshWidget();
})

range_radius_topleft.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border-top-left-radius"] = `${range_radius_topleft.value}px;`;
    widgetsList[currentWidget.name].style.borderBottomLeftRadius = `${range_radius_topleft.value}px;`;
    refreshWidget();
})

range_radius_topright.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border-top-right-radius"] = `${range_radius_topright.value}px;`;
    widgetsList[currentWidget.name].style.borderBottomLeftRadius = `${range_radius_topright.value}px;`;
    refreshWidget();
})

//// COLORS ////
link_colors.addEventListener("click",()=>{
    params_colors.style.display == "flex" ? params_colors.style.display = "none" : params_colors.style.display = "flex";
})

color_text.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["color"] = `${color_text.value};`
    widgetsList[currentWidget.name].style.color = currentWidget.widgetCode.baseCode["color"];
    refreshWidget();
})

color_background.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["background-color"] = `${color_background.value};`
    widgetsList[currentWidget.name].style.backgroundColor = currentWidget.widgetCode.baseCode["background-color"];
    refreshWidget();
})

//// COLOR BORDERS ////
color_borders.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border"] = `${range_borders.value}px solid ${color_borders.value};`;
    widgetsList[currentWidget.name].style.border = currentWidget.widgetCode.baseCode["border"];
    refreshWidget();
})

color_border_left.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border-left"] = `${range_border_left.value}px solid ${color_border_left.value};`
    widgetsList[currentWidget.name].style.borderLeft = currentWidget.widgetCode.baseCode["border-left"];
    refreshWidget();
})

color_border_top.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border-top"] = `${range_border_top.value}px solid ${color_border_top.value};`
    widgetsList[currentWidget.name].style.borderTop = currentWidget.widgetCode.baseCode["border-top"];
    refreshWidget();
})

color_border_right.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border-right"] = `${range_border_right.value}px solid ${color_border_right.value};`
    widgetsList[currentWidget.name].style.borderRight = currentWidget.widgetCode.baseCode["border-right"];
    refreshWidget();
})

color_border_bottom.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border-bottom"] = `${range_border_bottom.value}px solid ${color_border_bottom.value};`
    widgetsList[currentWidget.name].style.borderBottom = currentWidget.widgetCode.baseCode["border-bottom"];
    refreshWidget();
})

//// LINEAR COLORS ////
color_gradient_first.addEventListener("input", ()=>{
    rotateLinearGradient();
})

color_gradient_second.addEventListener("input", ()=>{
    rotateLinearGradient();
})

//// SHADOWS ////
link_shadow.addEventListener("click", ()=>{
    params_shadow.style.display == "flex" ? params_shadow.style.display = "none" : params_shadow.style.display = "flex";
})

link_remove_shadow.addEventListener("click", ()=>{
    removeShadow();
    range_shadow_x.value = 0;
    range_shadow_y.value = 0;
    range_shadow_blur.value = 5;
    checkbox_inset.checked = false;
})

color_shadow.addEventListener("input", ()=>{ updateShadow(); })
checkbox_inset.addEventListener("click", ()=>{ updateShadow(); })
range_shadow_x.addEventListener("input", ()=>{ updateShadow(); })
range_shadow_y.addEventListener("input", ()=>{ updateShadow(); })
range_shadow_blur.addEventListener("input", ()=>{ updateShadow(); })

//// BORDER OUTLINE ////
link_borders.addEventListener("click", ()=>{
    params_borders.style.display == "flex" ? params_borders.style.display = "none" : params_borders.style.display = "flex";
})

range_borders.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border"] = `${range_borders.value}px solid ${color_borders.value};`;
    widgetsList[currentWidget.name].style.border = currentWidget.widgetCode.baseCode["border"];
    refreshWidget();
})

range_border_left.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border-left"] = `${range_border_left.value}px solid ${color_border_left.value};`
    widgetsList[currentWidget.name].style.borderLeft = currentWidget.widgetCode.baseCode["border-left"];
    refreshWidget();
})

range_border_top.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border-top"] = `${range_border_top.value}px solid ${color_border_top.value};`
    widgetsList[currentWidget.name].style.borderTop = currentWidget.widgetCode.baseCode["border-top"];
    refreshWidget();
})

range_border_right.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border-right"] = `${range_border_right.value}px solid ${color_border_right.value};`
    widgetsList[currentWidget.name].style.borderRight = currentWidget.widgetCode.baseCode["border-right"];
    refreshWidget();
})

range_border_bottom.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border-bottom"] = `${range_border_bottom.value}px solid ${color_border_bottom.value};`
    widgetsList[currentWidget.name].style.borderBottom = currentWidget.widgetCode.baseCode["border-bottom"];
    refreshWidget();
})

classname_widget.addEventListener("input", ()=>{
    currentWidget.widgetCode.classname = `.${classname_widget.value}{`;
    widgets.updateHtml();
    refreshWidget();
})

range_fontsize.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["font-size"] = `${range_fontsize.value}px;`;
    widgetsList[currentWidget.name].style.fontSize = range_fontsize.value;
    refreshWidget();
})

range_padding.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["padding"] = `${range_padding.value}px;`;
    widgetsList[currentWidget.name].style.padding = range_padding.value;
    refreshWidget();
})

range_margin.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["margin"] = `${range_margin.value}px;`;
    widgetsList[currentWidget.name].style.margin = range_margin.value;
    refreshWidget();
})

refreshWidget();