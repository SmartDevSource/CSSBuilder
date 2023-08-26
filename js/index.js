import { Widgets } from "./widgets.js";

const widgets = new Widgets();

////////////////// PARAMETERS //////////////////

/// RANGE FONTSIZE ///
const range_fontsize = document.getElementById("range_fontsize");
const range_fontsize_hover = document.getElementById("range_fontsize_hover");

/// RANGE PADDING & MARGIN ///
const range_padding = document.getElementById("range_padding");
const range_margin = document.getElementById("range_margin");

/// RANGE RADIUS ///
const range_radius = document.getElementById("range_radius");
const range_radius_hover = document.getElementById("range_radius_hover");
const range_radius_topleft = document.getElementById("range_radius_topleft");
const range_radius_topleft_hover = document.getElementById("range_radius_topleft_hover");
const range_radius_topright = document.getElementById("range_radius_topright");
const range_radius_topright_hover = document.getElementById("range_radius_topright_hover");
const range_radius_bottomleft = document.getElementById("range_radius_bottomleft");
const range_radius_bottomleft_hover = document.getElementById("range_radius_bottomleft_hover");
const range_radius_bottomright = document.getElementById("range_radius_bottomright");
const range_radius_bottomright_hover = document.getElementById("range_radius_bottomright_hover");

/// RANGE TRANSITION ///
const range_transition_hover_begin = document.getElementById("range_transition_hover_begin");
const range_transition_hover_end = document.getElementById("range_transition_hover_end");

/// RANGE BLUR ///
const range_blur = document.getElementById("range_blur");
const range_blur_hover = document.getElementById("range_blur_hover");

/// RANGE DIMENSIONS ///
const range_size_x = document.getElementById("range_size_x");
const range_size_x_hover = document.getElementById("range_size_x_hover");
const range_size_y = document.getElementById("range_size_y");
const range_size_y_hover = document.getElementById("range_size_y_hover");

/// RANGE BORDERS ///
const range_borders = document.getElementById("range_borders");
const range_borders_hover = document.getElementById("range_borders_hover");
const range_border_left = document.getElementById("range_border_left");
const range_border_left_hover = document.getElementById("range_border_left_hover");
const range_border_top = document.getElementById("range_border_top");
const range_border_top_hover = document.getElementById("range_border_top_hover");
const range_border_right = document.getElementById("range_border_right");
const range_border_right_hover = document.getElementById("range_border_right_hover");
const range_border_bottom = document.getElementById("range_border_bottom");
const range_border_bottom_hover = document.getElementById("range_border_bottom_hover");

/// RANGE SHADOW ///
const range_shadow_x = document.getElementById("range_shadow_x");
const range_shadow_y = document.getElementById("range_shadow_y");
const range_shadow_blur = document.getElementById("range_shadow_blur");
const range_shadow_x_hover = document.getElementById("range_shadow_x_hover");
const range_shadow_y_hover  = document.getElementById("range_shadow_y_hover");
const range_shadow_blur_hover  = document.getElementById("range_shadow_blur_hover");

/// RANGE TEXT ///
const range_letters_spacing = document.getElementById("range_letters_spacing");
const range_letters_spacing_hover = document.getElementById("range_letters_spacing_hover");
const range_outline_text = document.getElementById("range_outline_text");
const range_outline_text_hover = document.getElementById("range_outline_text_hover");

/// SHOWS ///
const show_hover_params = document.getElementById("show_hover_params");
const show_adjust_size = document.getElementById("show_adjust_size");
const show_adjust_size_hover = document.getElementById("show_adjust_size_hover");

/// LINKS ///
const link_dimensions = document.getElementById("link_dimensions");
const link_dimensions_hover = document.getElementById("link_dimensions_hover");
const link_radius = document.getElementById("link_radius");
const link_radius_hover = document.getElementById("link_radius_hover");
const link_borders = document.getElementById("link_borders");
const link_borders_hover = document.getElementById("link_borders_hover");
const link_colors = document.getElementById("link_colors");
const link_colors_hover = document.getElementById("link_colors_hover");
const link_shadow = document.getElementById("link_shadow");
const link_shadow_hover = document.getElementById("link_shadow_hover");
const link_remove_shadow = document.getElementById("link_remove_shadow");
const link_remove_shadow_hover = document.getElementById("link_remove_shadow_hover");
const link_text = document.getElementById("link_text");
const link_text_hover = document.getElementById("link_text_hover");
const link_cursor = document.getElementById("link_cursor");

/// NAVLINKS ///
const navlink_parameters = document.getElementById("navlink_parameters");
const navlink_animations = document.getElementById("navlink_animations");

/// PARAMS ///
const params_radius = document.getElementById("params_radius");
const params_radius_hover = document.getElementById("params_radius_hover");
const params_borders = document.getElementById("params_borders");
const params_borders_hover = document.getElementById("params_borders_hover");
const params_colors = document.getElementById("params_colors");
const params_colors_hover = document.getElementById("params_colors_hover");
const params_shadow = document.getElementById("params_shadow");
const params_shadow_hover = document.getElementById("params_shadow_hover");
const params_text = document.getElementById("params_text");
const params_text_hover = document.getElementById("params_text_hover");
const params_cursor = document.getElementById("params_cursor");
const params_dimensions = document.getElementById("params_dimensions");
const params_dimensions_hover = document.getElementById("params_dimensions_hover");

/// PANELS ///
const panel_parameters = document.getElementById("panel_parameters");
const panel_animations = document.getElementById("panel_animations");

/// CHECKBOXS ///
const checkbox_inset = document.getElementById("checkbox_inset");
const checkbox_inset_hover = document.getElementById("checkbox_inset_hover");
const checkbox_bold = document.getElementById("checkbox_bold");
const checkbox_bold_hover = document.getElementById("checkbox_bold_hover");
const checkbox_italic = document.getElementById("checkbox_italic");
const checkbox_italic_hover = document.getElementById("checkbox_italic_hover");
const checkbox_underlined = document.getElementById("checkbox_underlined");
const checkbox_underlined_hover = document.getElementById("checkbox_underlined_hover");
const checkbox_linear_background = document.getElementById("checkbox_linear_background");
const checkbox_linear_background_hover = document.getElementById("checkbox_linear_background_hover");
const checkbox_activate_hover = document.getElementById("checkbox_activate_hover");
const checkbox_adjust_size = document.getElementById("checkbox_adjust_size");
const checkbox_adjust_size_hover = document.getElementById("checkbox_adjust_size_hover");

const text_widget = document.getElementById("text_widget");
const text_widget_hover = document.getElementById("text_widget_hover");
const classname_widget = document.getElementById("classname_widget");

/// MAIN COLORS ///
const color_text = document.getElementById("color_text");
const color_text_hover = document.getElementById("color_text_hover");
const color_background = document.getElementById("color_background");
const color_background_hover = document.getElementById("color_background_hover");

/// COLORS BORDERS ///
const color_borders = document.getElementById("color_borders");
const color_border_left = document.getElementById("color_border_left");
const color_border_top = document.getElementById("color_border_top");
const color_border_right = document.getElementById("color_border_right");
const color_border_bottom = document.getElementById("color_border_bottom");
const color_borders_hover = document.getElementById("color_borders_hover");
const color_border_left_hover = document.getElementById("color_border_left_hover");
const color_border_top_hover = document.getElementById("color_border_top_hover");
const color_border_right_hover = document.getElementById("color_border_right_hover");
const color_border_bottom_hover = document.getElementById("color_border_bottom_hover");

/// COLORS SHADOW ///
const color_shadow = document.getElementById("color_shadow");
const color_shadow_hover = document.getElementById("color_shadow_hover");

/// COLOR TEXT ///
const color_outline_text = document.getElementById("color_outline_text");
const color_outline_text_hover = document.getElementById("color_outline_text_hover");
const color_gradient_first = document.getElementById("color_gradient_first");
const color_gradient_first_hover = document.getElementById("color_gradient_first_hover");
const color_gradient_second = document.getElementById("color_gradient_second");
const color_gradient_second_hover = document.getElementById("color_gradient_second_hover");
const span_arrow_linear_gradient = document.getElementById("span_arrow_linear_gradient");
const span_arrow_linear_gradient_hover = document.getElementById("span_arrow_linear_gradient_hover");

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
let changeTextOnHover = false;
let currentArrowLinearGradient = 0;
const arrowsLinearGradient = {0: 180, 1: 270, 2: 0, 3: 90};
const tmpStyle = document.createElement("style");
document.head.appendChild(tmpStyle);

////////////////////////////////// FUNCTIONS //////////////////////////////////
const refreshWidget = () =>{
    let cssTextArea = '';
    let cssTextCode = '';

    cssTextArea = '.'+ currentWidget.widgetCode.classname + '{\n';

    for(const property in currentWidget.widgetCode.baseCode){
        if (currentWidget.widgetCode.baseCode[property] == ''){
            continue;
        }
        cssTextArea+= `  ${property} : ${currentWidget.widgetCode.baseCode[property]}\n`;
        cssTextCode+= `${property} : ${currentWidget.widgetCode.baseCode[property]}`;
    }
    cssTextCode += '}'
    cssTextArea += '}\n\n';

    if (checkbox_activate_hover.checked){

        cssTextArea += '.'+currentWidget.widgetCode.classname+':hover{\n';

        for(const property in currentWidget.widgetCode.hoverCode){
            if (currentWidget.widgetCode.hoverCode[property] == ''){
                continue;
            }

            cssTextArea+= `  ${property} : ${currentWidget.widgetCode.hoverCode[property]}\n`;
        }
        cssTextArea += '}';

        if (changeTextOnHover){
            cssTextArea += '\n\n.'+currentWidget.widgetCode.classname+':hover span{\n';
            cssTextArea += '  display:none;';
            cssTextArea += '\n}';

            cssTextArea += '\n\n.'+currentWidget.widgetCode.classname+':hover::after{\n';
            cssTextArea += `  content: "${text_widget_hover.value}";`;
            cssTextArea += '\n}';
        }
    }

    code_css.textContent = cssTextArea;
    tmpStyle.textContent = cssTextArea;
    
    let htmlTextArea = currentWidget.widgetCode.html;
    code_html.textContent = htmlTextArea;
}

const updateShadow = () =>{
    currentWidget.widgetCode.baseCode["box-shadow"] = `${range_shadow_x.value}px ${range_shadow_y.value}px ${range_shadow_blur.value}px ${color_shadow.value} ${checkbox_inset.checked ? "inset" : ""};`
    refreshWidget();
}

const updateShadowHover = () =>{
    currentWidget.widgetCode.hoverCode["box-shadow"] = `${range_shadow_x_hover.value}px ${range_shadow_y_hover.value}px ${range_shadow_blur_hover.value}px ${color_shadow_hover.value} ${checkbox_inset_hover.checked ? "inset" : ""};`
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
        currentWidget.widgetCode.baseCode["background"] = `linear-gradient(${direction} ${color_gradient_first.value}, ${color_gradient_second.value});`;
    } else {
        currentWidget.widgetCode.baseCode["background"] = '';
        currentWidget.widgetCode.baseCode["background-color"] = `${color_background.value};`;
    }

    if (checkbox_linear_background_hover.checked){
        currentWidget.widgetCode.hoverCode["background-color"] = ``;
        currentWidget.widgetCode.hoverCode["background"] = `linear-gradient(${direction} ${color_gradient_first_hover.value}, ${color_gradient_second_hover.value});`;
    } else {
        currentWidget.widgetCode.hoverCode["background"] = '';
        currentWidget.widgetCode.hoverCode["background-color"] = '';
    }

    refreshWidget();
}

////////////////////////////////// EVENTS LISTENERS //////////////////////////////////

/// TRANSITION ///
range_transition_hover_begin.addEventListener("input",()=>{
    currentWidget.widgetCode.baseCode["transition"] = `${range_transition_hover_begin.value}s;`;
    if (range_transition_hover_begin.value==0){
        currentWidget.widgetCode.baseCode["transition"] = '';
    }
    refreshWidget();
})

range_transition_hover_end.addEventListener("input",()=>{
    currentWidget.widgetCode.hoverCode["transition"] = `${range_transition_hover_end.value}s;`;
    if (range_transition_hover_end.value==0){
        currentWidget.widgetCode.hoverCode["transition"] = '';
    }
    refreshWidget();
})

/// BLUR ///
range_blur.addEventListener("input",()=>{
    currentWidget.widgetCode.baseCode["filter"] = `blur(${range_blur.value}px);`;
    if (range_blur.value==0){
        currentWidget.widgetCode.baseCode["filter"] = '';
    }
    refreshWidget();
})

range_blur_hover.addEventListener("input",()=>{
    currentWidget.widgetCode.hoverCode["filter"] = `blur(${range_blur_hover.value}px);`;
    if (range_blur_hover.value==0){
        currentWidget.widgetCode.hoverCode["filter"] = '';
    }
    refreshWidget();
})

/// DIMENSIONS ///
link_dimensions.addEventListener("click", ()=>{
    params_dimensions.style.display = params_dimensions.style.display == "none" ? "flex" : "none";
})

link_dimensions_hover.addEventListener("click", ()=>{
    params_dimensions_hover.style.display = params_dimensions_hover.style.display == "none" ? "flex" : "none";
})

checkbox_adjust_size.addEventListener("click", ()=>{
    if (checkbox_adjust_size.checked){
        show_adjust_size.style.display = "none";
        currentWidget.widgetCode.baseCode["width"] = ''
        currentWidget.widgetCode.baseCode["height"] = '';
    } else {
        show_adjust_size.style.display = "contents";
        currentWidget.widgetCode.baseCode["width"] = `${range_size_x.value}px;`;
        currentWidget.widgetCode.baseCode["height"] = `${range_size_y.value}px;`;
    }
    refreshWidget();
})

checkbox_adjust_size_hover.addEventListener("click", ()=>{
    if (checkbox_adjust_size_hover.checked){
        show_adjust_size_hover.style.display = "none";
        currentWidget.widgetCode.hoverCode["width"] = ''
        currentWidget.widgetCode.hoverCode["height"] = '';
        currentWidget.widgetCode.baseCode["width"] = '';
        currentWidget.widgetCode.baseCode["height"] = '';
    } else {
        show_adjust_size_hover.style.display = "contents";
        currentWidget.widgetCode.baseCode["width"] = `${widgetsList[currentWidget.name].offsetWidth}px;`;
        currentWidget.widgetCode.baseCode["height"] = `${widgetsList[currentWidget.name].offsetHeight}px;`;
        currentWidget.widgetCode.hoverCode["width"] = `${range_size_x_hover.value}px;`;
        currentWidget.widgetCode.hoverCode["height"] = `${range_size_y_hover.value}px;`;
    }
    refreshWidget();
})

range_size_x.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["width"] = `${range_size_x.value}px;`;
    refreshWidget();
})

range_size_y.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["height"] = `${range_size_y.value}px;`;
    refreshWidget();
})

range_size_x_hover.addEventListener("input", ()=>{
    currentWidget.widgetCode.hoverCode["width"] = `${range_size_x_hover.value}px;`;
    refreshWidget();
})

range_size_y_hover.addEventListener("input", ()=>{
    currentWidget.widgetCode.hoverCode["height"] = `${range_size_y_hover.value}px;`;
    refreshWidget();
})

/// CURSOR POINTER & HOVERING ////
link_cursor.addEventListener("click", ()=>{
    params_cursor.style.display == "none" ? params_cursor.style.display = "flex" : params_cursor.style.display = "none";
})

checkbox_activate_hover.addEventListener("click", ()=>{
    if (checkbox_activate_hover.checked){
        show_hover_params.style.display = "contents";
        if (text_widget_hover.value != ''){
            changeTextOnHover = true;
        }
    } else {
        changeTextOnHover = false;
        show_hover_params.style.display = "none";
    }
    widgets.updateHtml(changeTextOnHover);
    refreshWidget();
})

const cursors = document.querySelectorAll(".cursor");

cursors.forEach(cursor=>{
    cursor.addEventListener("click", ()=>{
        currentWidget.widgetCode.baseCode["cursor"] = `${cursor.getAttribute("value")};`;
        refreshWidget();
    })
})

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

link_text_hover.addEventListener("click", ()=>{
    params_text_hover.style.display == "flex" ? params_text_hover.style.display = "none" : params_text_hover.style.display = "flex";
})

range_letters_spacing.addEventListener("input", ()=>{
    if (range_letters_spacing.value>0){
        currentWidget.widgetCode.baseCode["letter-spacing"] = `${range_letters_spacing.value}px;`;
    } else {
        currentWidget.widgetCode.baseCode["letter-spacing"] = '';
    }
    refreshWidget();
})

range_letters_spacing_hover.addEventListener("input", ()=>{
    if (range_letters_spacing_hover.value>0){
        currentWidget.widgetCode.hoverCode["letter-spacing"] = `${range_letters_spacing_hover.value}px;`;
    } else {
        currentWidget.widgetCode.hoverCode["letter-spacing"] = '';
    }
    refreshWidget();
})

text_widget.addEventListener("input", ()=>{
    widgetsList[currentWidget.name].textContent = text_widget.value;
    currentWidget.widgetCode.textContent = text_widget.value;
    widgets.updateTextContent(currentWidget.name, text_widget.value);
    widgets.updateHtml();
    refreshWidget();
})

text_widget_hover.addEventListener("input", ()=>{
    if (text_widget_hover.value!= ''){
        changeTextOnHover = true;
    } else {
        changeTextOnHover = false;
    }
    widgets.updateHtml(changeTextOnHover);
    refreshWidget();
})

widgetsList[currentWidget.name].addEventListener("mouseenter", ()=>{
    if (changeTextOnHover){
        console.log(text_widget_hover.value)
        widgetsList[currentWidget.name].textContent = text_widget_hover.textContent;
    }
})

widgetsList[currentWidget.name].addEventListener("mouseleave", ()=>{
    if (changeTextOnHover){
        widgetsList[currentWidget.name].textContent = text_widget.value;
    }
})

range_outline_text.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["-webkit-text-stroke"] = `${range_outline_text.value}px ${color_outline_text.value};`
    if (range_outline_text.value == 0){
        currentWidget.widgetCode.baseCode["-webkit-text-stroke"] = '';
    }
    refreshWidget();
})

range_outline_text_hover.addEventListener("input", ()=>{
    currentWidget.widgetCode.hoverCode["-webkit-text-stroke"] = `${range_outline_text_hover.value}px ${color_outline_text_hover.value};`
    if (range_outline_text_hover.value == 0){
        currentWidget.widgetCode.hoverCode["-webkit-text-stroke"] = '';
    }
    refreshWidget();
})

checkbox_bold.addEventListener("click", ()=>{
    if (checkbox_bold.checked){
        currentWidget.widgetCode.baseCode["font-weight"] = 'bold;';
    } else {
        currentWidget.widgetCode.baseCode["font-weight"] = '';
    }
    refreshWidget();
})

checkbox_bold_hover.addEventListener("click", ()=>{
    if (checkbox_bold_hover.checked){
        currentWidget.widgetCode.hoverCode["font-weight"] = 'bold;';
    } else {
        currentWidget.widgetCode.hoverCode["font-weight"] = '';
    }
    refreshWidget();
})

checkbox_italic.addEventListener("click", ()=>{
    if (checkbox_italic.checked){
        currentWidget.widgetCode.baseCode["font-style"] = 'italic;';
    } else {
        currentWidget.widgetCode.baseCode["font-style"] = '';
    }
    refreshWidget();
})

checkbox_italic_hover.addEventListener("click", ()=>{
    if (checkbox_italic_hover.checked){
        currentWidget.widgetCode.hoverCode["font-style"] = 'italic;';
    } else {
        currentWidget.widgetCode.hoverCode["font-style"] = '';
    }
    refreshWidget();
})

checkbox_underlined.addEventListener("click", ()=>{
    if (checkbox_underlined.checked){
        currentWidget.widgetCode.baseCode["text-decoration"] = 'underline;';
    } else {
        currentWidget.widgetCode.baseCode["text-decoration"] = '';
    }
    refreshWidget();
})

checkbox_underlined_hover.addEventListener("click", ()=>{
    if (checkbox_underlined_hover.checked){
        currentWidget.widgetCode.hoverCode["text-decoration"] = 'underline;';
    } else {
        currentWidget.widgetCode.hoverCode["text-decoration"] = '';
    }
    refreshWidget();
})

checkbox_linear_background.addEventListener("click", ()=>{
    rotateLinearGradient();
})

checkbox_linear_background_hover.addEventListener("click", ()=>{
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

span_arrow_linear_gradient_hover.addEventListener("click", ()=>{
    currentArrowLinearGradient++;
    if (currentArrowLinearGradient>3){
        currentArrowLinearGradient = 0;
    }
    span_arrow_linear_gradient_hover.style.transform = `rotateZ(${arrowsLinearGradient[currentArrowLinearGradient]}deg)`;

    rotateLinearGradient();
})

//// BORDER RADIUS ////
link_radius.addEventListener("click", ()=>{
    params_radius.style.display == "flex" ? params_radius.style.display = "none" : params_radius.style.display = "flex";
})

link_radius_hover.addEventListener("click", ()=>{
    params_radius_hover.style.display == "flex" ? params_radius_hover.style.display = "none" : params_radius_hover.style.display = "flex";
})

range_radius.addEventListener("input", ()=>{
    if (range_radius.value>0){
        currentWidget.widgetCode.baseCode["border-radius"] = `${range_radius.value}px;`;
    } else {
        currentWidget.widgetCode.baseCode["border-radius"] = '';
    }
    refreshWidget();
})

range_radius_hover.addEventListener("input", ()=>{
    if (range_radius_hover.value>0){
        currentWidget.widgetCode.hoverCode["border-radius"] = `${range_radius_hover.value}px;`;
    } else {
        currentWidget.widgetCode.hoverCode["border-radius"] = '';
    }
    refreshWidget();
})

range_radius_bottomleft.addEventListener("input", ()=>{
    if (range_radius_bottomleft.value>0){
        currentWidget.widgetCode.baseCode["border-bottom-left-radius"] = `${range_radius_bottomleft.value}px;`;
    } else {
        currentWidget.widgetCode.baseCode["border-bottom-left-radius"] = '';
    }
    refreshWidget();
})

range_radius_bottomleft_hover.addEventListener("input", ()=>{
    if (range_radius_bottomleft_hover.value>0){
        currentWidget.widgetCode.hoverCode["border-bottom-left-radius"] = `${range_radius_bottomleft_hover.value}px;`;
    } else {
        currentWidget.widgetCode.hoverCode["border-bottom-left-radius"] = '';
    }
    refreshWidget();
})

range_radius_bottomright.addEventListener("input", ()=>{
    if (range_radius_bottomright.value>0){
        currentWidget.widgetCode.baseCode["border-bottom-right-radius"] = `${range_radius_bottomright.value}px;`;
    } else {
        currentWidget.widgetCode.baseCode["border-bottom-right-radius"] = '';
    }
    refreshWidget();
})

range_radius_bottomright_hover.addEventListener("input", ()=>{
    if (range_radius_bottomright_hover.value>0){
        currentWidget.widgetCode.hoverCode["border-bottom-right-radius"] = `${range_radius_bottomright_hover.value}px;`;
    } else {
        currentWidget.widgetCode.hoverCode["border-bottom-right-radius"] = '';
    }
    refreshWidget();
})

range_radius_topleft.addEventListener("input", ()=>{
    if (range_radius_topleft.value>0){
        currentWidget.widgetCode.baseCode["border-top-left-radius"] = `${range_radius_topleft.value}px;`;
    } else {
        currentWidget.widgetCode.baseCode["border-top-left-radius"] = '';
    }
    refreshWidget();
})

range_radius_topleft_hover.addEventListener("input", ()=>{
    if (range_radius_topleft_hover.value>0){
        currentWidget.widgetCode.hoverCode["border-top-left-radius"] = `${range_radius_topleft_hover.value}px;`;
    } else {
        currentWidget.widgetCode.hoverCode["border-top-left-radius"] = '';
    }
    refreshWidget();
})

range_radius_topright.addEventListener("input", ()=>{
    if (range_radius_topright.value>0){
        currentWidget.widgetCode.baseCode["border-top-right-radius"] = `${range_radius_topright.value}px;`;
    } else {
        currentWidget.widgetCode.baseCode["border-top-right-radius"] = '';
    }
    refreshWidget();
})

range_radius_topright_hover.addEventListener("input", ()=>{
    if (range_radius_topright_hover.value>0){
        currentWidget.widgetCode.hoverCode["border-top-right-radius"] = `${range_radius_topright_hover.value}px;`;
    } else {
        currentWidget.widgetCode.hoverCode["border-top-right-radius"] = '';
    }
    refreshWidget();
})

//// COLORS ////
link_colors.addEventListener("click",()=>{
    params_colors.style.display == "flex" ? params_colors.style.display = "none" : params_colors.style.display = "flex";
})

link_colors_hover.addEventListener("click",()=>{
    params_colors_hover.style.display == "flex" ? params_colors_hover.style.display = "none" : params_colors_hover.style.display = "flex";
})

color_text.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["color"] = `${color_text.value};`
    refreshWidget();
})

color_text_hover.addEventListener("input", ()=>{
    currentWidget.widgetCode.hoverCode["color"] = `${color_text_hover.value};`
    refreshWidget();
})

color_background.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["background-color"] = `${color_background.value};`
    refreshWidget();
})

color_background_hover.addEventListener("input", ()=>{
    currentWidget.widgetCode.hoverCode["background-color"] = `${color_background_hover.value};`
    refreshWidget();
})

//// COLOR BORDERS ////
color_borders.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border"] = `${range_borders.value}px solid ${color_borders.value};`;
    refreshWidget();
})

color_border_left.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border-left"] = `${range_border_left.value}px solid ${color_border_left.value};`
    refreshWidget();
})

color_border_top.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border-top"] = `${range_border_top.value}px solid ${color_border_top.value};`
    refreshWidget();
})

color_border_right.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border-right"] = `${range_border_right.value}px solid ${color_border_right.value};`
    refreshWidget();
})

color_border_bottom.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["border-bottom"] = `${range_border_bottom.value}px solid ${color_border_bottom.value};`
    refreshWidget();
})

color_borders_hover.addEventListener("input", ()=>{
    currentWidget.widgetCode.hoverCode["border"] = `${range_borders_hover.value}px solid ${color_borders_hover.value};`;
    refreshWidget();
})

color_border_left_hover.addEventListener("input", ()=>{
    currentWidget.widgetCode.hoverCode["border-left"] = `${range_border_left_hover.value}px solid ${color_border_left_hover.value};`
    refreshWidget();
})

color_border_top_hover.addEventListener("input", ()=>{
    currentWidget.widgetCode.hoverCode["border-top"] = `${range_border_top_hover.value}px solid ${color_border_top_hover.value};`
    refreshWidget();
})

color_border_right_hover.addEventListener("input", ()=>{
    currentWidget.widgetCode.hoverCode["border-right"] = `${range_border_right_hover.value}px solid ${color_border_right_hover.value};`
    refreshWidget();
})

color_border_bottom_hover.addEventListener("input", ()=>{
    currentWidget.widgetCode.hoverCode["border-bottom"] = `${range_border_bottom_hover.value}px solid ${color_border_bottom_hover.value};`
    refreshWidget();
})


//// LINEAR COLORS ////
color_gradient_first.addEventListener("input", ()=>{
    rotateLinearGradient();
})

color_gradient_second.addEventListener("input", ()=>{
    rotateLinearGradient();
})

color_gradient_first_hover.addEventListener("input", ()=>{
    rotateLinearGradient();
})

color_gradient_second_hover.addEventListener("input", ()=>{
    rotateLinearGradient();
})

//// SHADOWS ////
link_shadow.addEventListener("click", ()=>{
    params_shadow.style.display == "flex" ? params_shadow.style.display = "none" : params_shadow.style.display = "flex";
})

link_shadow_hover.addEventListener("click", ()=>{
    params_shadow_hover.style.display == "flex" ? params_shadow_hover.style.display = "none" : params_shadow_hover.style.display = "flex";
})

link_remove_shadow.addEventListener("click", ()=>{
    currentWidget.widgetCode.baseCode["box-shadow"] = '';
    refreshWidget();
    range_shadow_x.value = 0;
    range_shadow_y.value = 0;
    range_shadow_blur.value = 5;
    checkbox_inset.checked = false;
})

link_remove_shadow_hover.addEventListener("click", ()=>{
    currentWidget.widgetCode.hoverCode["box-shadow"] = '';
    refreshWidget();
    range_shadow_x_hover.value = 0;
    range_shadow_y_hover.value = 0;
    range_shadow_blur_hover.value = 5;
    checkbox_inset_hover.checked = false;
})

color_shadow.addEventListener("input", ()=>{ updateShadow(); })
checkbox_inset.addEventListener("click", ()=>{ updateShadow(); })
range_shadow_x.addEventListener("input", ()=>{ updateShadow(); })
range_shadow_y.addEventListener("input", ()=>{ updateShadow(); })
range_shadow_blur.addEventListener("input", ()=>{ updateShadow(); })

color_shadow_hover.addEventListener("input", ()=>{ updateShadowHover(); })
checkbox_inset_hover.addEventListener("click", ()=>{ updateShadowHover(); })
range_shadow_x_hover.addEventListener("input", ()=>{ updateShadowHover(); })
range_shadow_y_hover.addEventListener("input", ()=>{ updateShadowHover(); })
range_shadow_blur_hover.addEventListener("input", ()=>{ updateShadowHover(); })

//// BORDER OUTLINE ////
link_borders.addEventListener("click", ()=>{
    params_borders.style.display == "flex" ? params_borders.style.display = "none" : params_borders.style.display = "flex";
})

link_borders_hover.addEventListener("click", ()=>{
    params_borders_hover.style.display == "flex" ? params_borders_hover.style.display = "none" : params_borders_hover.style.display = "flex";
})

range_borders.addEventListener("input", ()=>{
    if (range_borders.value>0){
        currentWidget.widgetCode.baseCode["border"] = `${range_borders.value}px solid ${color_borders.value};`;
    } else {
        currentWidget.widgetCode.baseCode["border"] = '';
    }
    refreshWidget();
})

range_borders_hover.addEventListener("input", ()=>{
    if (range_borders_hover.value>0){
        currentWidget.widgetCode.hoverCode["border"] = `${range_borders_hover.value}px solid ${color_borders_hover.value};`;
    } else {
        currentWidget.widgetCode.hoverCode["border"] = '';
    }
    refreshWidget();
})

range_border_left.addEventListener("input", ()=>{
    if (range_border_left.value>0){
        currentWidget.widgetCode.baseCode["border-left"] = `${range_border_left.value}px solid ${color_border_left.value};`
    } else {
        currentWidget.widgetCode.baseCode["border-left"] = '';
    }
    refreshWidget();
})

range_border_left_hover.addEventListener("input", ()=>{
    if (range_border_left_hover.value>0){
        currentWidget.widgetCode.hoverCode["border-left"] = `${range_border_left_hover.value}px solid ${color_border_left_hover.value};`
    } else {
        currentWidget.widgetCode.hoverCode["border-left"] = '';
    }
    refreshWidget();
})

range_border_top.addEventListener("input", ()=>{
    if (range_border_top.value>0){
        currentWidget.widgetCode.baseCode["border-top"] = `${range_border_top.value}px solid ${color_border_top.value};`
    } else {
        currentWidget.widgetCode.baseCode["border-top"] = '';
    }
    refreshWidget();
})

range_border_top_hover.addEventListener("input", ()=>{
    if (range_border_top_hover.value>0){
        currentWidget.widgetCode.hoverCode["border-top"] = `${range_border_top_hover.value}px solid ${color_border_top_hover.value};`
    } else {
        currentWidget.widgetCode.hoverCode["border-top"] = '';
    }
    refreshWidget();
})

range_border_right.addEventListener("input", ()=>{
    if (range_border_right.value>0){
        currentWidget.widgetCode.baseCode["border-right"] = `${range_border_right.value}px solid ${color_border_right.value};`
    } else {
        currentWidget.widgetCode.baseCode["border-right"] = '';
    }
    refreshWidget();
})

range_border_right_hover.addEventListener("input", ()=>{
    if (range_border_right_hover.value>0){
        currentWidget.widgetCode.hoverCode["border-right"] = `${range_border_right_hover.value}px solid ${color_border_right_hover.value};`
    } else {
        currentWidget.widgetCode.hoverCode["border-right"] = '';
    }
    refreshWidget();
})

range_border_bottom.addEventListener("input", ()=>{
    if (range_border_bottom.value>0){
        currentWidget.widgetCode.baseCode["border-bottom"] = `${range_border_bottom.value}px solid ${color_border_bottom.value};`
    } else {
        currentWidget.widgetCode.baseCode["border-bottom"] = '';
    }
    refreshWidget();
})

range_border_bottom_hover.addEventListener("input", ()=>{
    if (range_border_bottom_hover.value>0){
        currentWidget.widgetCode.hoverCode["border-bottom"] = `${range_border_bottom_hover.value}px solid ${color_border_bottom_hover.value};`
    } else {
        currentWidget.widgetCode.hoverCode["border-bottom"] = '';
    }
    refreshWidget();
})

// classname_widget.addEventListener("input", ()=>{
//     currentWidget.widgetCode.classname = `${classname_widget.value}`;
//     widgets.updateHtml();
//     refreshWidget();
// })

/// FONTSIZE PADDING & MARGIN ///
range_fontsize.addEventListener("input", ()=>{
    if (range_fontsize.value != '' && range_fontsize.value >0){
        currentWidget.widgetCode.baseCode["font-size"] = `${range_fontsize.value}px;`;
    } else {
        currentWidget.widgetCode.baseCode["font-size"] = '';
    }
    refreshWidget();
})

range_fontsize_hover.addEventListener("input", ()=>{
    if ((range_fontsize_hover.value!=range_fontsize.value) && (range_fontsize.value != '' && range_fontsize.value >0)){
        currentWidget.widgetCode.hoverCode["font-size"] = `${range_fontsize_hover.value}px;`;
    } else {
        currentWidget.widgetCode.hoverCode["font-size"] = '';
    }
    refreshWidget();
})

range_padding.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["padding"] = `${range_padding.value}px;`;
    refreshWidget();
})

range_margin.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["margin"] = `${range_margin.value}px;`;
    refreshWidget();
})

refreshWidget();