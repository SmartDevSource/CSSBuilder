import { Widgets } from "./widgets.js";

const widgets = new Widgets();

////////////////// PARAMETERS //////////////////

// RANGE OPACITY //
const range_opacity = document.getElementById("range_opacity");
const range_opacity_hover = document.getElementById("range_opacity_hover");

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
const show_checkbox_checked = document.getElementById("show_checkbox_checked");

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
const link_input_text_parameters = document.getElementById("link_input_text_parameters");
const link_rangebar_parameters = document.getElementById("link_rangebar_parameters");
const link_textarea_parameters = document.getElementById("link_textarea_parameters");
const link_select_scrollbar_parameters = document.getElementById("link_select_scrollbar_parameters");

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
const params_input_text = document.getElementById("params_input_text");
const params_rangebar = document.getElementById("params_rangebar");
const params_textarea = document.getElementById("params_textarea");
const params_scrollbar_select = document.getElementById("params_scrollbar_select");

/// PANELS ///
const panel_parameters = document.getElementById("panel_parameters");
const panel_animations = document.getElementById("panel_animations");

/// INPUT ///
const input_type_text = document.getElementById("input_type_text");
const input_type_password = document.getElementById("input_type_password");

/// SCROLLBAR TEXTAREA ///
const scrollbar_width_textarea = document.getElementById("scrollbar_width_textarea");
const scrollbar_background_color_textarea = document.getElementById("scrollbar_background_color_textarea");
const scrollbar_cursor_color_textarea = document.getElementById("scrollbar_cursor_color_textarea");
const scrollbar_cursorhover_color_textarea = document.getElementById("scrollbar_cursorhover_color_textarea");

/// SCROLLBAR SELECT ///
const scrollbar_width_select = document.getElementById("scrollbar_width_select");
const scrollbar_background_color_select = document.getElementById("scrollbar_background_color_select");
const scrollbar_cursor_color_select = document.getElementById("scrollbar_cursor_color_select");
const scrollbar_cursorhover_color_select = document.getElementById("scrollbar_cursorhover_color_select");

/// SELECT ///
const optgroup_select = document.getElementById("optgroup_select");

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
const checkbox_checked = document.getElementById("checkbox_checked");
const checkbox_background_color = document.getElementById("checkbox_background_color");
const checkbox_background_color_hover = document.getElementById("checkbox_background_color_hover");
const checkbox_focus_color = document.getElementById("checkbox_focus_color");
const checkbox_textarea_allow_resize = document.getElementById("checkbox_textarea_allow_resize");
const checkbox_textarea_allow_spellcheck = document.getElementById("checkbox_textarea_allow_spellcheck");
const checkbox_textarea_allow_writing = document.getElementById("checkbox_textarea_allow_writing");

/// TEXT ///
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

/// COLOR CURSOR RANGE ///
const color_range_cursor = document.getElementById("color_range_cursor");
const color_range_cursor_hover = document.getElementById("color_range_cursor_hover");

/// COLORS SHADOW ///
const color_shadow = document.getElementById("color_shadow");
const color_shadow_hover = document.getElementById("color_shadow_hover");

/// COLOR TEXT ///
const color_outline_text = document.getElementById("color_outline_text");
const color_outline_text_hover = document.getElementById("color_outline_text_hover");
const color_placeholder = document.getElementById("color_placeholder");
const color_gradient_first = document.getElementById("color_gradient_first");
const color_gradient_first_hover = document.getElementById("color_gradient_first_hover");
const color_gradient_second = document.getElementById("color_gradient_second");
const color_gradient_second_hover = document.getElementById("color_gradient_second_hover");
const span_arrow_linear_gradient = document.getElementById("span_arrow_linear_gradient");
const span_arrow_linear_gradient_hover = document.getElementById("span_arrow_linear_gradient_hover");
const color_focus = document.getElementById("color_focus");

/// COLOR SELECT ///
const color_select_hover = document.getElementById("color_select_hover");
const color_select_checked = document.getElementById("color_select_checked");

/// SELECT NUMBER SIZE ///
const input_select_size = document.getElementById("input_select_size");

/// BORDERS DIVS ///
const borders_corners = document.getElementById("borders_corners");
const borders_corners_hover = document.getElementById("borders_corners_hover");

/// RANGEBAR VALUES ///
const rangebar_defaultvalue = document.getElementById("rangebar_defaultvalue");
const rangebar_step = document.getElementById("rangebar_step");
const rangebar_minvalue = document.getElementById("rangebar_minvalue");
const rangebar_maxvalue = document.getElementById("rangebar_maxvalue");

/// ANIMATION ///
const checkbox_anim_loop = document.getElementById("checkbox_anim_loop");
const range_anim_speed = document.getElementById("range_anim_speed");
const link_remove_anim = document.getElementById("link_remove_anim");
const link_vertical_anim = document.getElementById("link_vertical_anim");
const link_horizontal_anim = document.getElementById("link_horizontal_anim");
const link_rotatex_anim = document.getElementById("link_rotatex_anim");
const link_rotatey_anim = document.getElementById("link_rotatey_anim");
const link_rotatez_anim = document.getElementById("link_rotatez_anim");
const link_scaley_anim = document.getElementById("link_scaley_anim");
const link_scalex_anim = document.getElementById("link_scalex_anim");
const link_scale_anim = document.getElementById("link_scale_anim");
const link_opacity_anim = document.getElementById("link_opacity_anim");

////////////////////////////////// CODE //////////////////////////////////
const code_css = document.getElementById("code_css");
const code_html = document.getElementById("code_html");
const copy_css = document.getElementById("copy_css");
const copy_html = document.getElementById("copy_html");

////////////////////////////////// COMPONENTS //////////////////////////////////
const button_cstm = document.getElementById("button_cstm");
const input_cstm = document.getElementById("input_cstm");
const textarea_cstm = document.getElementById("textarea_cstm");
const range_cstm = document.getElementById("range_cstm");
const checkbox_cstm = document.getElementById("checkbox_cstm");
const radio_cstm = document.getElementById("radio_cstm");
const link_cstm = document.getElementById("link_cstm");
const label_cstm = document.getElementById("label_cstm");
const select_cstm = document.getElementById("select_cstm");

const widgetsList = {"button": button_cstm,
                     "input": input_cstm,
                     "textarea":textarea_cstm,
                     "range": range_cstm,
                     "checkbox": checkbox_cstm,
                     "radio": radio_cstm,
                     "link": link_cstm,
                     "label": label_cstm,
                     "select": select_cstm};

const currentWidget = {name: "button", widgetCode: widgets.widget};

////////// UPDATE COMPONENT SELECTION //////////
const components = document.querySelectorAll('.component');
components.forEach(component=>{
    component.addEventListener("click", (e)=>{
        e.preventDefault();
        component.blur();
        widgetsList[currentWidget.name].style.display = "none";
        currentWidget.name = component.getAttribute("name");
        currentWidget.widgetCode.classname = currentWidget.name;
        prepareParameters(currentWidget.name);
        checkbox_activate_hover.checked = false;
        text_widget_hover.value = '';
        changeTextOnHover = false;
        show_hover_params.style.display = "none";
        widgetsList[currentWidget.name].style.display = "block";
        widgets.updateHtml(currentWidget.name);
        refreshWidget();
    })
})

const prepareParameters = (type)=>{
    currentWidget.widgetCode.baseCode = {...widgets.defaultBaseCode};
    currentWidget.widgetCode.hoverCode = {...widgets.defaultHoverCode};

    switch(type){
        case "button":
            document.getElementById("label_text_component").textContent = "Texte du bouton";
            document.getElementById("label_text_hover").style.display = "block";
            document.getElementById("label_color_placeholder").style.display = "none";
            document.getElementById("label_range_padding").style.display = "block";
            document.getElementById("label_range_cursorcolor").style.display = "none";
            document.getElementById("label_range_cursorcolor_hover").style.display = "none";
            document.getElementById("label_color_focus").style.display = "block";
            document.getElementById("label_color_select_hover").style.display = "none";
            document.getElementById("label_color_select_checked").style.display = "none";
            document.getElementById("label_select_size").style.display = "none";
            input_select_size.style.display = "none";
            color_select_hover.style.display = "none";
            color_select_checked.style.display = "none";
            link_select_scrollbar_parameters.style.display = "none";
            params_scrollbar_select.style.display = "none";
            link_textarea_parameters.style.display = "none";
            params_textarea.style.display = "none";
            link_dimensions.style.display = "block";
            color_focus.style.display = "block";
            params_text.style.display = "none";
            params_text_hover.style.display = "none";
            color_range_cursor.style.display = "none";
            color_range_cursor_hover.style.display = "none";
            range_padding.style.display = "block";
            link_rangebar_parameters.style.display = "none";
            show_checkbox_checked.style.display = "none";
            params_input_text.style.display = "none";
            link_text.style.display = "block";
            link_text_hover.style.display = "block";
            link_input_text_parameters.style.display = "none";
            color_placeholder.value = "#595959";
            color_placeholder.style.display = "none";
            text_widget_hover.style.display = "block";
            currentWidget.widgetCode.textContent = "Bouton";
            widgetsList[currentWidget.name].textContent = "Bouton";
            text_widget.value = "Bouton";
            text_widget_hover.value = "";
            text_widget.style.display = "block";
            //ENABLE GRADIENT//
            checkbox_linear_background.style.display = "inline-block";
            document.getElementById("label_text_gradient").style.display = "block";
            document.getElementById("label_direction_gradient").style.display = "block";
            span_arrow_linear_gradient.style.display = "block";
            color_gradient_first.style.display = "inline-block";
            color_gradient_second.style.display = "inline-block";
            
            checkbox_linear_background_hover.style.display = "inline-block";
            document.getElementById("label_text_gradient_hover").style.display = "block";
            document.getElementById("label_direction_gradient_hover").style.display = "block";
            span_arrow_linear_gradient_hover.style.display = "block";
            color_gradient_first_hover.style.display = "inline-block";
            color_gradient_second_hover.style.display = "inline-block";
            ///////////
            borders_corners.style.display = "flex";
            borders_corners_hover.style.display = "flex";
        break;
        case "input":
            document.getElementById("label_text_component").textContent = "PlaceHolder de l'input";
            document.getElementById("label_text_hover").style.display = "none";
            document.getElementById("label_color_placeholder").style.display = "block";
            document.getElementById("label_range_padding").style.display = "block";
            document.getElementById("label_range_cursorcolor").style.display = "none";
            document.getElementById("label_range_cursorcolor_hover").style.display = "none";
            document.getElementById("label_color_focus").style.display = "none";
            document.getElementById("label_color_select_hover").style.display = "none";
            document.getElementById("label_color_select_checked").style.display = "none";
            document.getElementById("label_select_size").style.display = "none";
            input_select_size.style.display = "none";
            color_select_hover.style.display = "none";
            color_select_checked.style.display = "none";
            link_select_scrollbar_parameters.style.display = "none";
            params_scrollbar_select.style.display = "none";
            link_textarea_parameters.style.display = "none";
            params_textarea.style.display = "none";
            link_dimensions.style.display = "block";
            color_focus.style.display = "none";
            params_text.style.display = "none";
            params_text_hover.style.display = "none";
            color_range_cursor.style.display = "none";
            color_range_cursor_hover.style.display = "none";
            range_padding.style.display = "block";
            link_rangebar_parameters.style.display = "none";
            text_widget.style.display = "block";
            show_checkbox_checked.style.display = "none";
            link_input_text_parameters.style.display = "block";
            color_placeholder.style.display = "block";
            text_widget_hover.style.display = "none";
            currentWidget.widgetCode.textContent = "";
            widgetsList[currentWidget.name].textContent = "";
            currentWidget.widgetCode.placeHolder = "Saisissez votre texte ici...";
            text_widget.value = "Saisissez votre texte ici...";
            //ENABLE GRADIENT//
            checkbox_linear_background.style.display = "inline-block";
            document.getElementById("label_text_gradient").style.display = "block";
            document.getElementById("label_direction_gradient").style.display = "block";
            span_arrow_linear_gradient.style.display = "block";
            color_gradient_first.style.display = "inline-block";
            color_gradient_second.style.display = "inline-block";
            
            checkbox_linear_background_hover.style.display = "inline-block";
            document.getElementById("label_text_gradient_hover").style.display = "block";
            document.getElementById("label_direction_gradient_hover").style.display = "block";
            span_arrow_linear_gradient_hover.style.display = "block";
            color_gradient_first_hover.style.display = "inline-block";
            color_gradient_second_hover.style.display = "inline-block";
            /////////// 
            widgetsList[currentWidget.name].setAttribute("placeholder", text_widget.value);
            borders_corners.style.display = "flex";
            borders_corners_hover.style.display = "flex";
        break;
        case "textarea":
            currentWidget.widgetCode.baseCode["width"] = '300px;';
            currentWidget.widgetCode.baseCode["height"] = '120px;';
            textarea_cstm.removeAttribute("spellcheck");
            textarea_cstm.removeAttribute("disabled");
            textarea_cstm.textContent = "";
            textarea_cstm.value = "";
            textarea_cstm.style.width = "300px";
            textarea_cstm.style.height = "120px";
            checkbox_textarea_allow_resize.checked = true;
            checkbox_textarea_allow_spellcheck.checked = true;
            checkbox_textarea_allow_writing.checked = true;
            document.getElementById("label_text_component").textContent = "PlaceHolder du textarea";
            document.getElementById("label_text_hover").style.display = "none";
            document.getElementById("label_color_placeholder").style.display = "block";
            document.getElementById("label_range_padding").style.display = "block";
            document.getElementById("label_range_cursorcolor").style.display = "none";
            document.getElementById("label_range_cursorcolor_hover").style.display = "none";
            document.getElementById("label_color_focus").style.display = "none";
            document.getElementById("label_color_select_hover").style.display = "none";
            document.getElementById("label_color_select_checked").style.display = "none";
            document.getElementById("label_select_size").style.display = "none";
            input_select_size.style.display = "none";
            color_select_hover.style.display = "none";
            color_select_checked.style.display = "none";
            link_select_scrollbar_parameters.style.display = "none";
            params_scrollbar_select.style.display = "none";
            link_textarea_parameters.style.display = "block";
            params_dimensions.style.display = "none";
            link_dimensions.style.display = "none";
            color_focus.style.display = "none";
            params_text.style.display = "none";
            params_text_hover.style.display = "none";
            color_range_cursor.style.display = "none";
            color_range_cursor_hover.style.display = "none";
            range_padding.style.display = "block";
            link_rangebar_parameters.style.display = "none";
            text_widget.style.display = "block";
            show_checkbox_checked.style.display = "none";
            link_input_text_parameters.style.display = "none";
            color_placeholder.style.display = "block";
            text_widget_hover.style.display = "none";
            currentWidget.widgetCode.textContent = "";
            widgetsList[currentWidget.name].textContent = "";
            currentWidget.widgetCode.placeHolder = "Saisissez votre texte ici...";
            text_widget.value = "Saisissez votre texte ici...";
            //ENABLE GRADIENT//
            checkbox_linear_background.style.display = "inline-block";
            document.getElementById("label_text_gradient").style.display = "block";
            document.getElementById("label_direction_gradient").style.display = "block";
            span_arrow_linear_gradient.style.display = "block";
            color_gradient_first.style.display = "inline-block";
            color_gradient_second.style.display = "inline-block";
            
            checkbox_linear_background_hover.style.display = "inline-block";
            document.getElementById("label_text_gradient_hover").style.display = "block";
            document.getElementById("label_direction_gradient_hover").style.display = "block";
            span_arrow_linear_gradient_hover.style.display = "block";
            color_gradient_first_hover.style.display = "inline-block";
            color_gradient_second_hover.style.display = "inline-block";
            ///////////
            widgetsList[currentWidget.name].setAttribute("placeholder", text_widget.value);
            borders_corners.style.display = "flex";
            borders_corners_hover.style.display = "flex";
        break;
        case "range":
            currentWidget.widgetCode.baseCode["padding"] = '';
            document.getElementById("label_text_component").textContent = "";
            document.getElementById("label_text_hover").style.display = "none";
            document.getElementById("label_color_placeholder").style.display = "none";
            document.getElementById("label_range_padding").style.display = "none";
            document.getElementById("label_range_cursorcolor").style.display = "block";
            document.getElementById("label_range_cursorcolor_hover").style.display = "block";
            document.getElementById("label_color_focus").style.display = "none";
            document.getElementById("label_color_select_hover").style.display = "none";
            document.getElementById("label_color_select_checked").style.display = "none";
            document.getElementById("label_select_size").style.display = "none";
            input_select_size.style.display = "none";
            color_select_hover.style.display = "none";
            color_select_checked.style.display = "none";
            link_select_scrollbar_parameters.style.display = "none";
            params_scrollbar_select.style.display = "none";
            link_textarea_parameters.style.display = "none";
            params_textarea.style.display = "none";
            link_dimensions.style.display = "block";
            color_focus.style.display = "none";
            params_text.style.display = "none";
            params_text_hover.style.display = "none";
            color_range_cursor.style.display = "block";
            color_range_cursor_hover.style.display = "block";
            range_padding.style.display = "none";
            link_rangebar_parameters.style.display = "block";
            show_checkbox_checked.style.display = "none";
            params_input_text.style.display = "none";
            link_input_text_parameters.style.display = "none";
            color_placeholder.style.display = "none";
            color_placeholder.value = "#595959";
            text_widget_hover.style.display = "none";
            currentWidget.widgetCode.textContent = "";
            widgetsList[currentWidget.name].textContent = "";
            text_widget.style.display = "none";
            link_text.style.display = "none";
            link_text_hover.style.display = "none";
            //ENABLE GRADIENT//
            checkbox_linear_background.style.display = "inline-block";
            document.getElementById("label_text_gradient").style.display = "block";
            document.getElementById("label_direction_gradient").style.display = "block";
            span_arrow_linear_gradient.style.display = "block";
            color_gradient_first.style.display = "inline-block";
            color_gradient_second.style.display = "inline-block";
            
            checkbox_linear_background_hover.style.display = "inline-block";
            document.getElementById("label_text_gradient_hover").style.display = "block";
            document.getElementById("label_direction_gradient_hover").style.display = "block";
            span_arrow_linear_gradient_hover.style.display = "block";
            color_gradient_first_hover.style.display = "inline-block";
            color_gradient_second_hover.style.display = "inline-block";
            ///////////
            borders_corners.style.display = "flex";
            borders_corners_hover.style.display = "flex";
        break;
        case "checkbox":
            document.getElementById("label_text_component").textContent = "";
            document.getElementById("label_text_hover").style.display = "none";
            document.getElementById("label_color_placeholder").style.display = "none";
            document.getElementById("label_range_padding").style.display = "block";
            document.getElementById("label_range_cursorcolor").style.display = "none";
            document.getElementById("label_range_cursorcolor_hover").style.display = "none";
            document.getElementById("label_color_focus").style.display = "none";
            document.getElementById("label_color_select_hover").style.display = "none";
            document.getElementById("label_color_select_checked").style.display = "none";
            document.getElementById("label_select_size").style.display = "none";
            input_select_size.style.display = "none";
            color_select_hover.style.display = "none";
            color_select_checked.style.display = "none";
            link_select_scrollbar_parameters.style.display = "none";
            params_scrollbar_select.style.display = "none";
            link_textarea_parameters.style.display = "none";
            params_textarea.style.display = "none";
            link_dimensions.style.display = "block";
            color_focus.style.display = "none";
            params_text.style.display = "none";
            params_text_hover.style.display = "none";
            color_range_cursor.style.display = "none";
            color_range_cursor_hover.style.display = "none";
            range_padding.style.display = "block";
            link_rangebar_parameters.style.display = "none";
            show_checkbox_checked.style.display = "contents";
            params_input_text.style.display = "none";
            link_input_text_parameters.style.display = "none";
            color_placeholder.style.display = "none";
            color_placeholder.value = "#595959";
            text_widget.style.display = "none";
            text_widget_hover.style.display = "none";
            currentWidget.widgetCode.textContent = "";
            widgetsList[currentWidget.name].textContent = "";
            link_text.style.display = "none";
            link_text_hover.style.display = "none";
            //DISABLE GRADIENT//
            checkbox_linear_background.style.display = "none";
            document.getElementById("label_text_gradient").style.display = "none";
            document.getElementById("label_direction_gradient").style.display = "none";
            span_arrow_linear_gradient.style.display = "none";
            color_gradient_first.style.display = "none";
            color_gradient_second.style.display = "none";

            checkbox_linear_background_hover.style.display = "none";
            document.getElementById("label_text_gradient_hover").style.display = "none";
            document.getElementById("label_direction_gradient_hover").style.display = "none";
            span_arrow_linear_gradient_hover.style.display = "none";
            color_gradient_first_hover.style.display = "none";
            color_gradient_second_hover.style.display = "none";
            ///////////
            borders_corners.style.display = "none";
            borders_corners_hover.style.display = "none";
        break;
        case "radio":
            document.getElementById("label_text_component").textContent = "";
            document.getElementById("label_text_hover").style.display = "none";
            document.getElementById("label_color_placeholder").style.display = "none";
            document.getElementById("label_range_padding").style.display = "block";
            document.getElementById("label_range_cursorcolor").style.display = "none";
            document.getElementById("label_range_cursorcolor_hover").style.display = "none";
            document.getElementById("label_color_focus").style.display = "none";
            document.getElementById("label_color_select_hover").style.display = "none";
            document.getElementById("label_color_select_checked").style.display = "none";
            document.getElementById("label_select_size").style.display = "none";
            input_select_size.style.display = "none";
            color_select_hover.style.display = "none";
            color_select_checked.style.display = "none";
            link_select_scrollbar_parameters.style.display = "none";
            params_scrollbar_select.style.display = "none";
            link_textarea_parameters.style.display = "none";
            params_textarea.style.display = "none";
            link_dimensions.style.display = "block";
            color_focus.style.display = "none";
            params_text.style.display = "none";
            params_text_hover.style.display = "none";
            color_range_cursor.style.display = "none";
            color_range_cursor_hover.style.display = "none";
            range_padding.style.display = "block";
            link_rangebar_parameters.style.display = "none";
            show_checkbox_checked.style.display = "contents";
            params_input_text.style.display = "none";
            link_input_text_parameters.style.display = "none";
            color_placeholder.style.display = "none";
            color_placeholder.value = "#595959";
            text_widget.style.display = "none";
            text_widget_hover.style.display = "none";
            currentWidget.widgetCode.textContent = "";
            widgetsList[currentWidget.name].textContent = "";
            link_text.style.display = "none";
            link_text_hover.style.display = "none";
            //DISABLE GRADIENT//
            checkbox_linear_background.style.display = "none";
            document.getElementById("label_text_gradient").style.display = "none";
            document.getElementById("label_direction_gradient").style.display = "none";
            span_arrow_linear_gradient.style.display = "none";
            color_gradient_first.style.display = "none";
            color_gradient_second.style.display = "none";

            checkbox_linear_background_hover.style.display = "none";
            document.getElementById("label_text_gradient_hover").style.display = "none";
            document.getElementById("label_direction_gradient_hover").style.display = "none";
            span_arrow_linear_gradient_hover.style.display = "none";
            color_gradient_first_hover.style.display = "none";
            color_gradient_second_hover.style.display = "none";
            ///////////
            borders_corners.style.display = "none";
            borders_corners_hover.style.display = "none";
        break;
        case "link":
            currentWidget.widgetCode.baseCode["padding"] = '';
            document.getElementById("label_text_component").textContent = "Texte du lien";
            document.getElementById("label_text_hover").style.display = "block";
            document.getElementById("label_color_placeholder").style.display = "none";
            document.getElementById("label_range_padding").style.display = "block";
            document.getElementById("label_range_cursorcolor").style.display = "none";
            document.getElementById("label_range_cursorcolor_hover").style.display = "none";
            document.getElementById("label_color_focus").style.display = "block";
            document.getElementById("label_color_select_hover").style.display = "none";
            document.getElementById("label_color_select_checked").style.display = "none";
            document.getElementById("label_select_size").style.display = "none";
            input_select_size.style.display = "none";
            color_select_hover.style.display = "none";
            color_select_checked.style.display = "none";
            link_select_scrollbar_parameters.style.display = "none";
            params_scrollbar_select.style.display = "none";
            link_textarea_parameters.style.display = "none";
            params_textarea.style.display = "none";
            link_dimensions.style.display = "block";
            color_focus.style.display = "block";
            params_text.style.display = "none";
            params_text_hover.style.display = "none";
            color_range_cursor.style.display = "none";
            color_range_cursor_hover.style.display = "none";
            range_padding.style.display = "block";
            link_rangebar_parameters.style.display = "none";
            show_checkbox_checked.style.display = "none";
            params_input_text.style.display = "none";
            link_text.style.display = "block";
            link_text_hover.style.display = "block";
            link_input_text_parameters.style.display = "none";
            currentWidget.widgetCode.baseCode["color"] = "white;";
            currentWidget.widgetCode.baseCode["border"] = "";
            currentWidget.widgetCode.baseCode["background-color"] = "";
            color_placeholder.style.display = "none";
            color_placeholder.value = "#595959";
            text_widget_hover.style.display = "block";
            currentWidget.widgetCode.textContent = "Ceci est un lien";
            widgetsList[currentWidget.name].textContent = "Ceci est un lien";
            text_widget.value = "Ceci est un lien";
            text_widget_hover.value = "";
            text_widget.style.display = "block";
            //ENABLE GRADIENT//
            checkbox_linear_background.style.display = "inline-block";
            document.getElementById("label_text_gradient").style.display = "block";
            document.getElementById("label_direction_gradient").style.display = "block";
            span_arrow_linear_gradient.style.display = "block";
            color_gradient_first.style.display = "inline-block";
            color_gradient_second.style.display = "inline-block";

            checkbox_linear_background_hover.style.display = "inline-block";
            document.getElementById("label_text_gradient_hover").style.display = "block";
            document.getElementById("label_direction_gradient_hover").style.display = "block";
            span_arrow_linear_gradient_hover.style.display = "block";
            color_gradient_first_hover.style.display = "inline-block";
            color_gradient_second_hover.style.display = "inline-block";
            ///////////
            borders_corners.style.display = "flex";
            borders_corners_hover.style.display = "flex";
        break;
        case "label":
            currentWidget.widgetCode.baseCode["padding"] = '';
            document.getElementById("label_text_component").textContent = "Texte du label";
            document.getElementById("label_text_hover").style.display = "block";
            document.getElementById("label_color_placeholder").style.display = "none";
            document.getElementById("label_range_padding").style.display = "block";
            document.getElementById("label_range_cursorcolor").style.display = "none";
            document.getElementById("label_range_cursorcolor_hover").style.display = "none";
            document.getElementById("label_color_focus").style.display = "none";
            document.getElementById("label_color_select_hover").style.display = "none";
            document.getElementById("label_color_select_checked").style.display = "none";
            document.getElementById("label_select_size").style.display = "none";
            input_select_size.style.display = "none";
            color_select_hover.style.display = "none";
            color_select_checked.style.display = "none";
            link_select_scrollbar_parameters.style.display = "none";
            params_scrollbar_select.style.display = "none";
            link_textarea_parameters.style.display = "none";
            params_textarea.style.display = "none";
            link_dimensions.style.display = "block";
            color_focus.style.display = "none";
            params_text.style.display = "none";
            params_text_hover.style.display = "none";
            color_range_cursor.style.display = "none";
            color_range_cursor_hover.style.display = "none";
            range_padding.style.display = "block";
            link_rangebar_parameters.style.display = "none";
            show_checkbox_checked.style.display = "none";
            params_input_text.style.display = "none";
            link_text.style.display = "block";
            link_text_hover.style.display = "block";
            link_input_text_parameters.style.display = "none";
            currentWidget.widgetCode.baseCode["color"] = "white;";
            currentWidget.widgetCode.baseCode["border"] = "";
            currentWidget.widgetCode.baseCode["background-color"] = "";
            color_placeholder.style.display = "none";
            color_placeholder.value = "#595959";
            text_widget_hover.style.display = "block";
            currentWidget.widgetCode.textContent = "Ceci est un label";
            widgetsList[currentWidget.name].textContent = "Ceci est un label";
            text_widget.value = "Ceci est un label";
            text_widget_hover.value = "";
            text_widget.style.display = "block";
            //ENABLE GRADIENT//
            checkbox_linear_background.style.display = "inline-block";
            document.getElementById("label_text_gradient").style.display = "block";
            document.getElementById("label_direction_gradient").style.display = "block";
            span_arrow_linear_gradient.style.display = "block";
            color_gradient_first.style.display = "inline-block";
            color_gradient_second.style.display = "inline-block";

            checkbox_linear_background_hover.style.display = "inline-block";
            document.getElementById("label_text_gradient_hover").style.display = "block";
            document.getElementById("label_direction_gradient_hover").style.display = "block";
            span_arrow_linear_gradient_hover.style.display = "block";
            color_gradient_first_hover.style.display = "inline-block";
            color_gradient_second_hover.style.display = "inline-block";
            ///////////
            borders_corners.style.display = "flex";
            borders_corners_hover.style.display = "flex";
        break;
        case "select":
            currentWidget.widgetCode.baseCode["padding"] = '';
            currentWidget.widgetCode.baseCode["margin"] = '';
            currentWidget.widgetCode.baseCode["background-color"] = "#1D2A35;";
            currentWidget.widgetCode.baseCode["color"] = "white;";
            document.getElementById("label_text_component").textContent = "Titre de la liste";
            document.getElementById("label_range_cursorcolor").style.display = "none";
            document.getElementById("label_color_select_hover").style.display = "block";
            document.getElementById("label_color_select_checked").style.display = "block";
            document.getElementById("label_select_size").style.display = "block";
            input_select_size.style.display = "block";
            input_select_size.value = 2;
            color_select_hover.style.display = "block";
            color_select_checked.style.display = "block";
            color_range_cursor.style.display = "none";
            color_range_cursor_hover.style.display = "none";
            text_widget.value = "Faites votre choix";
            currentWidget.widgetCode.textContent = "Faites votre choix";
            optgroup_select.label = text_widget.value;
            params_textarea.style.display = "none";
            link_textarea_parameters.style.display = "none";
            link_select_scrollbar_parameters.style.display = "block";
            checkbox_background_color.checked = false;
            checkbox_background_color_hover.checked = false;
            text_widget_hover.style.display = "none";
        break;
    }
}

widgets.updateHtml(currentWidget.name);

////////////////////////////////// STRUCTS AND VARS ///////////////////////////
let changeTextOnHover = false;
let changeColorWhenClicked = false;
let isAnimated = false;
let currentArrowLinearGradient = 0;
const arrowsLinearGradient = {0: 180, 1: 270, 2: 0, 3: 90};
const tmpStyle = document.createElement("style");
document.head.appendChild(tmpStyle);

////////////////////////////////// FUNCTIONS //////////////////////////////////
const refreshWidget = () =>{
    let cssTextArea = '';

    cssTextArea = '.'+ currentWidget.widgetCode.classname + '{\n';

    if (currentWidget.name == "range"){
        cssTextArea += '  -webkit-appearance: none;\n';
        cssTextArea += '  background-color: transparent;\n';
    }

    for(const property in currentWidget.widgetCode.baseCode){
        if (currentWidget.widgetCode.baseCode[property] == ''){
            continue;
        }
        cssTextArea+= `  ${property} : ${currentWidget.widgetCode.baseCode[property]}\n`;
    }

    cssTextArea += '}\n\n';

    if (changeColorWhenClicked){
        cssTextArea += '.'+ currentWidget.widgetCode.classname + ':focus{\n';
        cssTextArea += `  color:${color_focus.value};\n`;
        cssTextArea += '}\n';
    }

    if (currentWidget.name == "input" || currentWidget.name == "textarea" ){
        cssTextArea += '.input::placeholder{\n'
        cssTextArea += `  color: ${color_placeholder.value};\n`
        cssTextArea += '}\n\n'
    }

    if (currentWidget.name == "textarea"){
        cssTextArea += `.${currentWidget.widgetCode.classname}::-webkit-scrollbar { width: ${scrollbar_width_textarea.value}px; }\n`
        cssTextArea += `.${currentWidget.widgetCode.classname}::-webkit-scrollbar-track { background: ${scrollbar_background_color_textarea.value}; }\n`
        cssTextArea += `.${currentWidget.widgetCode.classname}::-webkit-scrollbar-thumb { background: ${scrollbar_cursor_color_textarea.value}; }\n`
        cssTextArea += `.${currentWidget.widgetCode.classname}::-webkit-scrollbar-thumb:hover { background: ${scrollbar_cursorhover_color_textarea.value}; }\n\n`
    }

    if (currentWidget.name == "select"){
        cssTextArea += `.${currentWidget.widgetCode.classname}::-webkit-scrollbar { width: ${scrollbar_width_select.value}px; }\n`
        cssTextArea += `.${currentWidget.widgetCode.classname}::-webkit-scrollbar-track { background: ${scrollbar_background_color_select.value}; }\n`
        cssTextArea += `.${currentWidget.widgetCode.classname}::-webkit-scrollbar-thumb { background: ${scrollbar_cursor_color_select.value}; }\n`
        cssTextArea += `.${currentWidget.widgetCode.classname}::-webkit-scrollbar-thumb:hover { background: ${scrollbar_cursorhover_color_select.value}; }\n\n`

        cssTextArea += `.${currentWidget.widgetCode.classname}[multiple]:hover option:hover{\n`;
        cssTextArea += `  background-color: ${color_select_hover.value};\n`
        cssTextArea += `}\n\n`

        cssTextArea += `.${currentWidget.widgetCode.classname}[multiple]:focus option:checked{\n`
        cssTextArea += `  background: linear-gradient(${color_select_checked.value} 0%, ${color_select_checked.value} 100%);\n`
        cssTextArea += `}\n\n`
    }

    if (checkbox_activate_hover.checked){

        cssTextArea += '.'+currentWidget.widgetCode.classname+':hover{\n';

        for(const property in currentWidget.widgetCode.hoverCode){
            if (currentWidget.widgetCode.hoverCode[property] == ''){
                continue;
            }

            cssTextArea+= `  ${property} : ${currentWidget.widgetCode.hoverCode[property]}\n`;
        }
        cssTextArea += '}\n';

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
    currentWidget.widgetCode.baseCode["box-shadow"] = `${range_shadow_x.value}px ${range_shadow_y.value}px ${range_shadow_blur.value}px ${color_shadow.value}${checkbox_inset.checked ? " inset" : ""};`
    refreshWidget();
}

const updateShadowHover = () =>{
    currentWidget.widgetCode.hoverCode["box-shadow"] = `${range_shadow_x_hover.value}px ${range_shadow_y_hover.value}px ${range_shadow_blur_hover.value}px${color_shadow_hover.value} ${checkbox_inset_hover.checked ? " inset" : ""};`
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

/// ANIMATION ///

//NE PAS OUBLIER DE MODIFIER isAnimated à true à chaque fois qu'une animation est cliqué et de remettre à false quand link_remove_anim est cliqué 

// const checkbox_anim_loop = document.getElementById("checkbox_anim_loop");
// const range_anim_speed = document.getElementById("range_anim_speed");
// const link_remove_anim = document.getElementById("link_remove_anim");
// const link_vertical_anim = document.getElementById("link_vertical_anim");
// const link_horizontal_anim = document.getElementById("link_horizontal_anim");
// const link_rotatex_anim = document.getElementById("link_rotatex_anim");
// const link_rotatey_anim = document.getElementById("link_rotatey_anim");
// const link_rotatez_anim = document.getElementById("link_rotatez_anim");
// const link_scaley_anim = document.getElementById("link_scaley_anim");
// const link_scalex_anim = document.getElementById("link_scalex_anim");
// const link_scale_anim = document.getElementById("link_scale_anim");
// const link_opacity_anim = document.getElementById("link_opacity_anim");

/// SELECT LISTBOX ///
link_select_scrollbar_parameters.addEventListener("click", ()=>{
    params_scrollbar_select.style.display = params_scrollbar_select.style.display == "none" ? "block" : "none";
})

color_select_hover.addEventListener("input", ()=>{
    refreshWidget();
})

color_select_checked.addEventListener("input", ()=>{
    refreshWidget();
})

input_select_size.addEventListener("input", ()=>{
    if (input_select_size.value > 6){
        input_select_size.value = 6;
    } else if (input_select_size.value < 0){
        input_select_size.value = 0;
    }
    currentWidget.widgetCode.selectSize = (parseInt(input_select_size.value) + 1);
    select_cstm.setAttribute("size", (parseInt(input_select_size.value) + 1));
    widgets.updateHtml("select");
    refreshWidget();
})

/// SCROLLBAR TEXTAREA ///
scrollbar_width_textarea.addEventListener("input", ()=>{ refreshWidget(); })
scrollbar_background_color_textarea.addEventListener("input", ()=>{ refreshWidget(); })
scrollbar_cursor_color_textarea.addEventListener("input", ()=>{ refreshWidget(); })
scrollbar_cursorhover_color_textarea.addEventListener("input", ()=>{ refreshWidget(); })

/// SCROLLBAR SELECT ///
scrollbar_width_select.addEventListener("input", ()=>{ 
    currentWidget.widgetCode.baseCode["padding-right"] = `${scrollbar_width_select.value/4}px;`; 
    if (scrollbar_width_select.value/4 === 0 ){
        currentWidget.widgetCode.baseCode["padding-right"] = '';
    }
    refreshWidget(); 
})
scrollbar_background_color_select.addEventListener("input", ()=>{ refreshWidget(); })
scrollbar_cursor_color_select.addEventListener("input", ()=>{ refreshWidget(); })
scrollbar_cursorhover_color_select.addEventListener("input", ()=>{ refreshWidget(); })

/// TEXTAREA ///
link_textarea_parameters.addEventListener("click", ()=>{
    params_textarea.style.display = params_textarea.style.display == "none" ? "block" : "none";
})

textarea_cstm.addEventListener("click", ()=>{
    currentWidget.widgetCode.baseCode["width"] = `${textarea_cstm.offsetWidth-22}px;`;
    currentWidget.widgetCode.baseCode["height"] = `${textarea_cstm.offsetHeight-22}px;`;
    refreshWidget();
})

checkbox_textarea_allow_resize.addEventListener("click", ()=>{
    if (checkbox_textarea_allow_resize.checked){
        currentWidget.widgetCode.baseCode["resize"] = "";
    } else {
        currentWidget.widgetCode.baseCode["resize"] = "none;";
    }
    refreshWidget();
})

checkbox_textarea_allow_spellcheck.addEventListener("click", ()=>{
    if (checkbox_textarea_allow_spellcheck.checked){
        currentWidget.widgetCode.spellcheck = true;
        textarea_cstm.removeAttribute("spellcheck");
    } else {
        currentWidget.widgetCode.spellcheck = false;
        textarea_cstm.setAttribute("spellcheck", "false");
    }
    widgets.updateHtml("textarea");
    refreshWidget();
})

checkbox_textarea_allow_writing.addEventListener("click", ()=>{
    if (checkbox_textarea_allow_writing.checked){
        currentWidget.widgetCode.disabled = false;
        textarea_cstm.removeAttribute("disabled");
    } else {
        currentWidget.widgetCode.disabled = true;
        textarea_cstm.setAttribute("disabled", "disabled");
    }
    widgets.updateHtml("textarea");
    refreshWidget();
})

/// FOCUS COLOR ///
color_focus.addEventListener("input", ()=>{
    if (changeColorWhenClicked){
        refreshWidget();
    }
})

checkbox_focus_color.addEventListener("click", ()=>{
    changeColorWhenClicked = checkbox_focus_color.checked;
    refreshWidget();
});

/// BACKGROUND COLOR DRAWING ///
checkbox_background_color.addEventListener("click" ,()=>{
    if (checkbox_background_color.checked){
        currentWidget.widgetCode.baseCode["background-color"] = `${color_background.value};`;
        currentWidget.widgetCode.baseCode["background"] = '';
    } else {
        currentWidget.widgetCode.baseCode["background-color"] = '';
        currentWidget.widgetCode.baseCode["background"] = 'none;';
    }
    refreshWidget();
})

checkbox_background_color_hover.addEventListener("click" ,()=>{
    if (checkbox_background_color_hover.checked){
        currentWidget.widgetCode.hoverCode["background-color"] = `${color_background_hover.value};`;
        currentWidget.widgetCode.hoverCode["background"] = '';
    } else {
        currentWidget.widgetCode.hoverCode["background-color"] = '';
        currentWidget.widgetCode.hoverCode["background"] = 'none;';
    }
    refreshWidget();
})


/// RANGEBAR PARAMETERS ///
link_rangebar_parameters.addEventListener("click", ()=>{
    params_rangebar.style.display = params_rangebar.style.display == "none" ? "block" : "none";
})

color_range_cursor.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["color"] = '';
    currentWidget.widgetCode.baseCode["accent-color"] = `${color_range_cursor.value};`;
    refreshWidget();
})

color_range_cursor_hover.addEventListener("input", ()=>{
    currentWidget.widgetCode.hoverCode["color"] = '';
    currentWidget.widgetCode.hoverCode["accent-color"] = `${color_range_cursor_hover.value};`;
    refreshWidget();
})

rangebar_defaultvalue.addEventListener("input", ()=>{
    widgets.widget.value = rangebar_defaultvalue.value;
    range_cstm.setAttribute("value", rangebar_defaultvalue.value);
    widgets.updateHtml(currentWidget.name);
    refreshWidget();
})

rangebar_step.addEventListener("input", ()=>{
    widgets.widget.step = rangebar_step.value;
    range_cstm.setAttribute("step", rangebar_step.value);
    widgets.updateHtml(currentWidget.name);
    refreshWidget();
})

rangebar_minvalue.addEventListener("input", ()=>{
    widgets.widget.min = rangebar_minvalue.value;
    range_cstm.setAttribute("min", rangebar_minvalue.value);
    widgets.updateHtml(currentWidget.name);
    refreshWidget();
})

rangebar_maxvalue.addEventListener("input", ()=>{
    widgets.widget.max = rangebar_maxvalue.value;
    range_cstm.setAttribute("max", rangebar_maxvalue.value);
    widgets.updateHtml(currentWidget.name);
    refreshWidget();
})

/// CHECKBOX PARAMETERS ///
checkbox_checked.addEventListener("click", ()=>{
    widgets.updateHtml(currentWidget.name, false, checkbox_checked.checked);
    refreshWidget();
})

/// INPUT PARAMETERS ///
link_input_text_parameters.addEventListener("click", ()=>{
    params_input_text.style.display = params_input_text.style.display == "none" ? "block" : "none";
})

input_type_text.addEventListener("click", ()=>{
    currentWidget.widgetCode.inputType = "text";
    widgetsList[currentWidget.name].setAttribute("type", "text");
    widgets.updateHtml(currentWidget.name);
    refreshWidget();
})

input_type_password.addEventListener("click", ()=>{
    currentWidget.widgetCode.inputType = "password";
    widgetsList[currentWidget.name].setAttribute("type", "password");
    widgets.updateHtml(currentWidget.name);
    refreshWidget();
})

// RANGE OPACITY //
range_opacity.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["opacity"] = `${range_opacity.value};`;
    if (range_opacity.value==1){
        currentWidget.widgetCode.baseCode["opacity"] = '';
    }
    refreshWidget();
})

range_opacity_hover.addEventListener("input", ()=>{
    currentWidget.widgetCode.hoverCode["opacity"] = `${range_opacity_hover.value};`;
    refreshWidget();
})

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
        currentWidget.widgetCode.baseCode["transition"] = '';
        currentWidget.widgetCode.hoverCode["transition"] = '';
        range_transition_hover_begin.value = 0;
        range_transition_hover_end.value = 0;
        show_hover_params.style.display = "none";
    }
    widgets.updateHtml(currentWidget.name, changeTextOnHover);
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
    if (currentWidget.name == "input" || currentWidget.name == "textarea"){
        widgetsList[currentWidget.name].setAttribute("placeholder", text_widget.value);
    } else if (currentWidget.name == "select"){
        optgroup_select.label = text_widget.value;
    } else {
        widgetsList[currentWidget.name].textContent = text_widget.value;
    }
    currentWidget.widgetCode.textContent = text_widget.value;
    widgets.updateTextContent(currentWidget.name, text_widget.value);
    widgets.updateHtml(currentWidget.name);
    refreshWidget();
})

text_widget_hover.addEventListener("input", ()=>{
    if (text_widget_hover.value!= ''){
        changeTextOnHover = true;
    } else {
        changeTextOnHover = false;
    }
    widgets.updateHtml(currentWidget.name, changeTextOnHover);
    refreshWidget();
})

//////////////// MOUSE ENTER AND LEAVE HOVERING ////////////////
widgetsList[currentWidget.name].addEventListener("mouseenter", ()=>{
    if (changeTextOnHover){
        widgetsList[currentWidget.name].textContent = text_widget_hover.textContent;
    }
})

widgetsList[currentWidget.name].addEventListener("mouseleave", ()=>{
    if (changeTextOnHover){
        widgetsList[currentWidget.name].textContent = text_widget.value;
    }
})

link_cstm.addEventListener("mouseenter", ()=>{
    if (changeTextOnHover){
        link_cstm.textContent = text_widget_hover.textContent;
    }
})

link_cstm.addEventListener("mouseleave", ()=>{
    if (changeTextOnHover){
        widgetsList[currentWidget.name].textContent = text_widget.value;
    }
})

label_cstm.addEventListener("mouseenter", ()=>{
    if (changeTextOnHover){
        label_cstm.textContent = text_widget_hover.textContent;
    }
})

label_cstm.addEventListener("mouseleave", ()=>{
    if (changeTextOnHover){
        widgetsList[currentWidget.name].textContent = text_widget.value;
    }
})

//////////////////////////////////////////////////////////////// 

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

color_outline_text.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["-webkit-text-stroke"] = `${range_outline_text.value}px ${color_outline_text.value};`
    if (range_outline_text.value == 0){
        currentWidget.widgetCode.baseCode["-webkit-text-stroke"] = '';
    }
    refreshWidget();
})

color_outline_text_hover.addEventListener("input", ()=>{
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

color_placeholder.addEventListener("input", ()=>{
    refreshWidget();
})

color_background.addEventListener("input", ()=>{
    if (checkbox_background_color.checked){
        if (currentWidget.name != "checkbox" && currentWidget.name != "radio"){
            currentWidget.widgetCode.baseCode["background-color"] = `${color_background.value};`
        } else {
            currentWidget.widgetCode.baseCode["accent-color"] = `${color_background.value};`
        }
        refreshWidget();
    }
})

color_background_hover.addEventListener("input", ()=>{
    if (checkbox_background_color_hover.checked){
        if (currentWidget.name != "checkbox" && currentWidget.name != "radio"){
            currentWidget.widgetCode.hoverCode["background-color"] = `${color_background_hover.value};`
        } else {
            currentWidget.widgetCode.hoverCode["accent-color"] = `${color_background_hover.value};`
        }
        refreshWidget();
    }
})

//// COLOR BORDERS ////
color_borders.addEventListener("input", ()=>{
    if (currentWidget.name != "checkbox" && currentWidget.name != "radio"){
        currentWidget.widgetCode.baseCode["border"] = `${range_borders.value}px solid ${color_borders.value};`;
    } else {
        currentWidget.widgetCode.baseCode["outline"] = `${range_borders.value}px solid ${color_borders.value};`;
    }
    refreshWidget();
})

color_borders_hover.addEventListener("input", ()=>{
    if (currentWidget.name != "checkbox"){
        currentWidget.widgetCode.hoverCode["border"] = `${range_borders_hover.value}px solid ${color_borders_hover.value};`;
    } else {
        currentWidget.widgetCode.hoverCode["outline"] = `${range_borders_hover.value}px solid ${color_borders_hover.value};`;
    }
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
    if (currentWidget.name != "checkbox" && currentWidget.name != "radio"){
        if (range_borders.value>0){
            currentWidget.widgetCode.baseCode["border"] = `${range_borders.value}px solid ${color_borders.value};`;
        } else {
            currentWidget.widgetCode.baseCode["border"] = '';
        }
    } else {
        if (range_borders.value>0){
            currentWidget.widgetCode.baseCode["outline"] = `${range_borders.value}px solid ${color_borders.value};`;
        } else {
            currentWidget.widgetCode.baseCode["outline"] = '';
        }
    }
    refreshWidget();
})

range_borders_hover.addEventListener("input", ()=>{
    if (currentWidget.name != "checkbox"){
        if (range_borders_hover.value>0){
            currentWidget.widgetCode.hoverCode["border"] = `${range_borders_hover.value}px solid ${color_borders_hover.value};`;
        } else {
            currentWidget.widgetCode.hoverCode["border"] = '';
        }
    } else {
        if (range_borders_hover.value>0){
            currentWidget.widgetCode.hoverCode["outline"] = `${range_borders_hover.value}px solid ${color_borders_hover.value};`;
        } else {
            currentWidget.widgetCode.hoverCode["outline"] = '';
        }
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
    } else if (range_fontsize.value == ''){
        currentWidget.widgetCode.baseCode["font-size"] = '16px;';
    }
    refreshWidget();
})

range_fontsize_hover.addEventListener("input", ()=>{
    if ((range_fontsize_hover.value!=range_fontsize.value) && (range_fontsize_hover.value != '' && range_fontsize_hover.value >0)){
        currentWidget.widgetCode.hoverCode["font-size"] = `${range_fontsize_hover.value}px;`;
    } else {
        currentWidget.widgetCode.hoverCode["font-size"] = '';
    }
    refreshWidget();
})

range_padding.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["padding"] = `${range_padding.value}px;`;
    if (range_padding.value == 0){
        currentWidget.widgetCode.baseCode["padding"] = '';
    }
    refreshWidget();
})

range_margin.addEventListener("input", ()=>{
    currentWidget.widgetCode.baseCode["margin"] = `${range_margin.value}px;`;
    if (range_margin.value == 0){
        currentWidget.widgetCode.baseCode["margin"] = '';
    }
    refreshWidget();
})

refreshWidget();